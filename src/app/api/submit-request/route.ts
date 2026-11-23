import { NextResponse } from "next/server";
import { validateBookingDateTime, validateAdultAge } from "@/lib/bookingValidation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      age,
      phone,
      email,
      categories,
      preferredDate,
      preferredTime,
      isChildRequest,
      consent,
    } = body;

    // 1. Full name validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Full name must be at least 2 characters." },
        { status: 400 }
      );
    }

    // 2. Age validation
    if (!isChildRequest) {
      const ageVal = validateAdultAge(age);
      if (!ageVal.isValid) {
        return NextResponse.json({ error: ageVal.error }, { status: 400 });
      }
    }

    // 3. Phone validation
    const cleanPhone = String(phone || "").replace(/\D/g, "");
    if (cleanPhone.length < 7) {
      return NextResponse.json(
        { error: "Please provide a valid WhatsApp phone number." },
        { status: 400 }
      );
    }

    // 4. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(String(email).trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 5. Category validation
    if (!Array.isArray(categories) || categories.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one support topic." },
        { status: 400 }
      );
    }

    // 6. Date & Time Booking Validation (Server-side, if provided)
    if (preferredDate && preferredTime) {
      let isoDate = preferredDate;
      if (preferredDate.includes("/")) {
        const parts = preferredDate.split("/");
        if (parts.length === 3) {
          isoDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
        }
      }

      const dateTimeVal = validateBookingDateTime(isoDate, preferredTime);
      if (!dateTimeVal.isValid) {
        return NextResponse.json({ error: dateTimeVal.error }, { status: 400 });
      }
    }

    // 7. Consent
    if (!consent) {
      return NextResponse.json(
        { error: "Privacy consent is required." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Booking request successfully validated on server.",
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Invalid request payload or server error." },
      { status: 500 }
    );
  }
}
