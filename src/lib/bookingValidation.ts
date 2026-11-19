/**
 * Strict Booking Validation Helper for Asia/Kolkata (IST)
 * Enforces:
 * - Past dates never selectable
 * - Strict 1-hour advance notice rule
 * - 24-hour time clock (00:00 to 23:59)
 * - Adult age range: 18 to 80
 */

export interface ISTDateTime {
  nowIST: Date;
  todayISO: string; // YYYY-MM-DD
  currentTime24h: string; // HH:MM
  earliestAllowedTodayTime24h: string | null; // HH:MM or null if past 23:00 cutoff
  isTodayCutoffReached: boolean;
}

export function getISTDateTime(): ISTDateTime {
  // During SSG static build prerendering, return deterministic values
  if (typeof window === "undefined") {
    return {
      nowIST: new Date("2026-02-20T12:00:00.000Z"),
      todayISO: "2026-02-20",
      currentTime24h: "12:00",
      earliestAllowedTodayTime24h: "13:00",
      isTodayCutoffReached: false,
    };
  }

  // Asia/Kolkata is UTC+05:30 (India Standard Time has no Daylight Saving Time)
  const now = new Date();
  const utcMillis = now.getTime() + now.getTimezoneOffset() * 60000;
  const nowIST = new Date(utcMillis + 5.5 * 3600000);

  const year = nowIST.getFullYear();
  const month = String(nowIST.getMonth() + 1).padStart(2, "0");
  const day = String(nowIST.getDate()).padStart(2, "0");
  const todayISO = `${year}-${month}-${day}`;

  const currentHour = nowIST.getHours();
  const currentMinute = nowIST.getMinutes();
  const currentTime24h = `${String(currentHour).padStart(2, "0")}:${String(currentMinute).padStart(2, "0")}`;

  // 1-hour advance rule: add 60 minutes
  const oneHourLaterMillis = nowIST.getTime() + 60 * 60 * 1000;
  const oneHourLaterIST = new Date(oneHourLaterMillis);

  // Check if 1 hour later rolls over to the next day
  const nextDay = String(oneHourLaterIST.getDate()).padStart(2, "0");
  const isTodayCutoffReached = nextDay !== day;

  let earliestAllowedTodayTime24h: string | null = null;
  if (!isTodayCutoffReached) {
    const h = String(oneHourLaterIST.getHours()).padStart(2, "0");
    const m = String(oneHourLaterIST.getMinutes()).padStart(2, "0");
    earliestAllowedTodayTime24h = `${h}:${m}`;
  }

  return {
    nowIST,
    todayISO,
    currentTime24h,
    earliestAllowedTodayTime24h,
    isTodayCutoffReached,
  };
}

export function formatISOToIndianDate(isoDate: string): string {
  if (!isoDate) return "";
  const parts = isoDate.split("-");
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return isoDate;
}

export function formatIndianDateToISO(indianDate: string): string {
  if (!indianDate) return "";
  const parts = indianDate.split("/");
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  return indianDate;
}

/**
 * Validates a selected date and 24-hour time string against IST rules
 */
export function validateBookingDateTime(
  selectedISODate: string,
  selected24hTime: string
): { isValid: boolean; error?: string } {
  const { todayISO, nowIST } = getISTDateTime();

  if (!selectedISODate) {
    return { isValid: false, error: "Please select your preferred date." };
  }

  // 1. Past date check
  if (selectedISODate < todayISO) {
    return {
      isValid: false,
      error: "Past dates cannot be selected. Please choose today or a future date.",
    };
  }

  // 2. Strict 24-hour time syntax (HH:MM from 00:00 to 23:59)
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!timeRegex.test(selected24hTime.trim())) {
    return {
      isValid: false,
      error: "Please enter a valid 24-hour time (00:00 to 23:59). Do not use AM/PM.",
    };
  }

  // 3. One-hour advance booking rule for same-day bookings
  if (selectedISODate === todayISO) {
    const [selHour, selMinute] = selected24hTime.split(":").map(Number);
    const selectedDateObj = new Date(nowIST);
    selectedDateObj.setHours(selHour, selMinute, 0, 0);

    const diffMinutes = (selectedDateObj.getTime() - nowIST.getTime()) / (60 * 1000);

    if (diffMinutes < 0) {
      return {
        isValid: false,
        error: `The selected time (${selected24hTime}) has already passed today in IST.`,
      };
    }

    if (diffMinutes < 59) {
      const minLater = new Date(nowIST.getTime() + 60 * 60 * 1000);
      const minHourStr = String(minLater.getHours()).padStart(2, "0");
      const minMinuteStr = String(minLater.getMinutes()).padStart(2, "0");
      return {
        isValid: false,
        error: `Please book at least 1 hour in advance. The earliest available booking for today is ${minHourStr}:${minMinuteStr} (IST).`,
      };
    }
  }

  return { isValid: true };
}

/**
 * Validates adult age (18 to 80)
 */
export function validateAdultAge(age: number | string): { isValid: boolean; error?: string } {
  const num = typeof age === "string" ? parseInt(age, 10) : age;

  if (isNaN(num)) {
    return { isValid: false, error: "Please enter your age." };
  }

  if (num < 18) {
    return {
      isValid: false,
      error: "This form is for adults (18+). For minor/children support, please visit our dedicated Children's page with a parent or guardian.",
    };
  }

  if (num > 80) {
    return {
      isValid: false,
      error: "Please select an age between 18 and 80.",
    };
  }

  return { isValid: true };
}
