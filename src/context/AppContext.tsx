"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  UserProfile,
  Therapist,
  Listener,
  Appointment,
  CommunityPost,
  CommunityComment,
  ChatMessage,
  MoodEntry,
  JournalEntry,
  CommunityReport,
  CommunityCategory,
  MoodType,
  UserRole,
} from "@/types";
import {
  INITIAL_USER,
  INITIAL_THERAPISTS,
  INITIAL_LISTENERS,
  INITIAL_POSTS,
  INITIAL_COMMENTS,
  INITIAL_APPOINTMENTS,
  INITIAL_MOODS,
  INITIAL_JOURNAL,
  INITIAL_REPORTS,
} from "@/lib/store";

interface AppContextType {
  // Auth
  currentUser: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, role?: UserRole) => boolean;
  signup: (displayName: string, email: string, isAnonymous: boolean) => boolean;
  logout: () => void;
  quickLogin: (role: UserRole) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  deleteAccount: () => void;
  exportUserData: () => void;

  // Therapists & Bookings
  therapists: Therapist[];
  appointments: Appointment[];
  bookAppointment: (
    therapistId: string,
    date: string,
    timeSlot: string,
    notes?: string
  ) => { success: boolean; message: string; appointment?: Appointment };
  cancelAppointment: (appointmentId: string) => void;
  addTherapist: (data: Partial<Therapist>) => void;

  // Listeners & Human Chat
  listeners: Listener[];
  chatMessages: Record<string, ChatMessage[]>;
  isListenerTyping: boolean;
  sendListenerMessage: (listenerId: string, content: string) => void;
  clearListenerChat: (listenerId: string) => void;

  // AI Companion
  aiMessages: ChatMessage[];
  isAiTyping: boolean;
  sendAiMessage: (content: string) => void;
  clearAiChat: () => void;

  // Community
  posts: CommunityPost[];
  comments: Record<string, CommunityComment[]>;
  createPost: (data: {
    title: string;
    content: string;
    category: Exclude<CommunityCategory, "all">;
    isAnonymous: boolean;
  }) => CommunityPost;
  toggleLikePost: (postId: string) => void;
  addComment: (postId: string, content: string, isAnonymous: boolean) => void;
  deletePost: (postId: string) => void;
  reportPost: (postId: string, reason: string, details?: string) => void;

  // Mood & Journal
  moods: MoodEntry[];
  logMood: (mood: MoodType, intensity: number, tags: string[], notes?: string) => void;
  journals: JournalEntry[];
  createJournal: (
    title: string,
    content: string,
    moodTag?: MoodType,
    tags?: string[]
  ) => JournalEntry;
  updateJournal: (id: string, updates: Partial<JournalEntry>) => void;
  deleteJournal: (id: string) => void;

  // Admin & Reports
  reports: CommunityReport[];
  resolveReport: (reportId: string, action: "dismiss" | "remove_post") => void;

  // Crisis & Quick Exit
  isCrisisModalOpen: boolean;
  openCrisisModal: () => void;
  closeCrisisModal: () => void;
  quickExit: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// SAFETY CRISIS KEYWORDS (Self-harm, suicide, emergency)
const CRISIS_KEYWORDS = [
  "kill myself",
  "suicide",
  "want to die",
  "end my life",
  "hurt myself",
  "cutting myself",
  "overdose",
  "mar jana",
  "jaan de dunga",
  "suicidal",
  "no reason to live",
  "better off dead",
];

const INITIAL_CHAT_MESSAGES: Record<string, ChatMessage[]> = {
  "list-1": [
    {
      id: "m-init-1",
      conversation_id: "list-1",
      sender_id: "list-1",
      sender_name: "Priya M.",
      sender_role: "listener",
      content: "Hi Aarav. I'm here, and I'm listening. How is your heart feeling today? Take all the time you need.",
      created_at: "2026-02-18T16:00:00Z",
      is_read: true,
    },
  ],
};

const INITIAL_AI_MESSAGES: ChatMessage[] = [
  {
    id: "ai-welcome",
    conversation_id: "ai",
    sender_id: "ai",
    sender_name: "Haven Companion",
    sender_role: "ai",
    content:
      "Hey, I'm here to listen. You can talk about anything that's on your mind. How are you feeling right now? (You can also speak to me in Hindi / Hinglish)",
    created_at: "2026-02-18T10:00:00Z",
    is_read: true,
  },
];

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  // States
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(INITIAL_USER);
  const [therapists, setTherapists] = useState<Therapist[]>(INITIAL_THERAPISTS);
  const [listeners, setListeners] = useState<Listener[]>(INITIAL_LISTENERS);
  const [appointments, setAppointments] = useState<Appointment[]>(INITIAL_APPOINTMENTS);
  const [posts, setPosts] = useState<CommunityPost[]>(INITIAL_POSTS);
  const [comments, setComments] = useState<Record<string, CommunityComment[]>>(INITIAL_COMMENTS);
  const [moods, setMoods] = useState<MoodEntry[]>(INITIAL_MOODS);
  const [journals, setJournals] = useState<JournalEntry[]>(INITIAL_JOURNAL);
  const [reports, setReports] = useState<CommunityReport[]>(INITIAL_REPORTS);

  // Chat States
  const [chatMessages, setChatMessages] = useState<Record<string, ChatMessage[]>>(INITIAL_CHAT_MESSAGES);
  const [isListenerTyping, setIsListenerTyping] = useState(false);

  // AI Chat Messages
  const [aiMessages, setAiMessages] = useState<ChatMessage[]>(INITIAL_AI_MESSAGES);
  const [isAiTyping, setIsAiTyping] = useState(false);

  // Crisis Modal
  const [isCrisisModalOpen, setIsCrisisModalOpen] = useState(false);

  // Load from LocalStorage if present on client
  useEffect(() => {
    setIsClient(true);
    try {
      const storedUser = localStorage.getItem("haven_user");
      if (storedUser) setCurrentUser(JSON.parse(storedUser));

      const storedPosts = localStorage.getItem("haven_posts");
      if (storedPosts) setPosts(JSON.parse(storedPosts));

      const storedMoods = localStorage.getItem("haven_moods");
      if (storedMoods) setMoods(JSON.parse(storedMoods));

      const storedJournals = localStorage.getItem("haven_journals");
      if (storedJournals) setJournals(JSON.parse(storedJournals));

      const storedAppts = localStorage.getItem("haven_appointments");
      if (storedAppts) setAppointments(JSON.parse(storedAppts));
    } catch {
      // ignore JSON parse error in local storage
    }
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    if (!isClient) return;
    try {
      if (currentUser) localStorage.setItem("haven_user", JSON.stringify(currentUser));
      else localStorage.removeItem("haven_user");
      localStorage.setItem("haven_posts", JSON.stringify(posts));
      localStorage.setItem("haven_moods", JSON.stringify(moods));
      localStorage.setItem("haven_journals", JSON.stringify(journals));
      localStorage.setItem("haven_appointments", JSON.stringify(appointments));
    } catch {
      // storage quota or private mode fallback
    }
  }, [currentUser, posts, moods, journals, appointments, isClient]);

  // Auth Handlers
  const login = (email: string, role: UserRole = "user") => {
    const user: UserProfile = {
      id: `usr-${Date.now()}`,
      email,
      full_name: email.split("@")[0] || "User",
      display_name: email.split("@")[0] || "Friend",
      role,
      is_anonymous: false,
      anonymous_name: "GentleSeeker",
      bio: "Member of Haven community.",
      preferred_language: "English",
      created_at: new Date().toISOString(),
    };
    setCurrentUser(user);
    return true;
  };

  const signup = (displayName: string, email: string, isAnonymous: boolean) => {
    const user: UserProfile = {
      id: `usr-${Date.now()}`,
      email,
      full_name: displayName,
      display_name: displayName,
      role: "user",
      is_anonymous: isAnonymous,
      anonymous_name: isAnonymous ? `Gentle${displayName}` : undefined,
      preferred_language: "English",
      created_at: new Date().toISOString(),
    };
    setCurrentUser(user);
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("haven_user");
    }
  };

  const quickLogin = (role: UserRole) => {
    if (role === "admin") {
      setCurrentUser({
        id: "usr-admin-1",
        email: "admin@haven.care",
        full_name: "Haven Safety Team",
        display_name: "Admin Officer",
        role: "admin",
        is_anonymous: false,
        preferred_language: "English",
        created_at: "2026-01-01T00:00:00Z",
      });
    } else if (role === "therapist") {
      setCurrentUser({
        id: "usr-th-1",
        email: "dr.ananya@haven.care",
        full_name: "Dr. Ananya Sharma",
        display_name: "Dr. Ananya",
        role: "therapist",
        is_anonymous: false,
        bio: "Senior Clinical Psychologist (NIMHANS, RCI Reg.)",
        preferred_language: "English",
        created_at: "2026-01-01T00:00:00Z",
      });
    } else if (role === "listener") {
      setCurrentUser({
        id: "usr-list-1",
        email: "priya@haven.care",
        full_name: "Priya Malhotra",
        display_name: "Priya M.",
        role: "listener",
        is_anonymous: false,
        bio: "Trained Peer Listener",
        preferred_language: "Hindi & English",
        created_at: "2026-01-01T00:00:00Z",
      });
    } else {
      setCurrentUser(INITIAL_USER);
    }
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (!currentUser) return;
    const updated = { ...currentUser, ...updates };
    setCurrentUser(updated);
  };

  const deleteAccount = () => {
    setCurrentUser(null);
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  };

  const exportUserData = () => {
    if (!currentUser) return;
    const data = {
      profile: currentUser,
      appointments: appointments.filter((a) => a.user_id === currentUser.id),
      moods: moods.filter((m) => m.user_id === currentUser.id),
      journals: journals.filter((j) => j.user_id === currentUser.id),
      exportedAt: new Date().toISOString(),
      compliance: "Digital Personal Data Protection Act (DPDP India) Ready",
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `haven-data-${currentUser.display_name.toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Appointment Handlers
  const bookAppointment = (
    therapistId: string,
    date: string,
    timeSlot: string,
    notes?: string
  ) => {
    const therapist = therapists.find((t) => t.id === therapistId);
    if (!therapist) return { success: false, message: "Therapist not found." };

    // Prevent double booking on same therapist at same date & time slot
    const conflict = appointments.find(
      (a) =>
        a.therapist_id === therapistId &&
        a.date === date &&
        a.time_slot === timeSlot &&
        a.status === "confirmed"
    );

    if (conflict) {
      return {
        success: false,
        message: "This appointment slot was just booked by another user. Please select another slot.",
      };
    }

    const newAppointment: Appointment = {
      id: `apt-${Date.now()}`,
      user_id: currentUser ? currentUser.id : "guest-user",
      user_name: currentUser ? currentUser.full_name : "Guest Client",
      therapist_id: therapist.id,
      therapist_name: therapist.full_name,
      therapist_photo: therapist.photo_url,
      therapist_credentials: therapist.credentials,
      date,
      time_slot: timeSlot,
      status: "confirmed",
      session_fee: therapist.session_fee,
      notes,
      meet_link: `https://haven.care/meet/safe-room-${Math.floor(1000 + Math.random() * 9000)}`,
      created_at: new Date().toISOString(),
    };

    setAppointments((prev) => [newAppointment, ...prev]);
    return {
      success: true,
      message: "Appointment confirmed successfully!",
      appointment: newAppointment,
    };
  };

  const cancelAppointment = (appointmentId: string) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === appointmentId ? { ...a, status: "cancelled" } : a))
    );
  };

  const addTherapist = (data: Partial<Therapist>) => {
    const newT: Therapist = {
      id: `th-${Date.now()}`,
      full_name: data.full_name || "Dr. Professional",
      title: data.title || "Mental Wellness Specialist",
      photo_url:
        data.photo_url ||
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=350",
      credentials: data.credentials || "Verified Counselor",
      rci_registration: data.rci_registration || "Verification Verified",
      specializations: data.specializations || ["Counselling Psychology"],
      languages: data.languages || ["English", "Hindi"],
      experience_years: data.experience_years || 5,
      session_fee: data.session_fee || 1500,
      next_available: data.next_available || "Tomorrow, 3:00 PM",
      bio: data.bio || "Dedicated mental health professional.",
      modalities: data.modalities || ["CBT", "Mindfulness"],
      rating: 5.0,
      reviews_count: 1,
      available_days: ["Monday", "Wednesday", "Friday"],
      available_slots: ["11:00 AM", "03:00 PM", "06:00 PM"],
    };
    setTherapists((prev) => [newT, ...prev]);
  };

  // Listener Chat Handler with Realistic Typing & Empathetic Feedback
  const sendListenerMessage = (listenerId: string, content: string) => {
    const userMsg: ChatMessage = {
      id: `m-${Date.now()}`,
      conversation_id: listenerId,
      sender_id: currentUser ? currentUser.id : "guest",
      sender_name: currentUser?.is_anonymous
        ? currentUser.anonymous_name || "GentleFriend"
        : currentUser?.display_name || "Friend",
      sender_role: "user",
      content,
      created_at: new Date().toISOString(),
      is_read: true,
    };

    setChatMessages((prev) => ({
      ...prev,
      [listenerId]: [...(prev[listenerId] || []), userMsg],
    }));

    // Check crisis in content
    const isCrisis = CRISIS_KEYWORDS.some((kw) => content.toLowerCase().includes(kw));
    if (isCrisis) {
      setIsCrisisModalOpen(true);
    }

    // Simulate Listener Response
    setIsListenerTyping(true);
    setTimeout(() => {
      const listener = listeners.find((l) => l.id === listenerId);
      const listenerResponses = [
        "I hear you so clearly. It takes real courage to put those feelings into words.",
        "Thank you for sharing that with me. What you're experiencing is valid, and you don't have to carry it all by yourself.",
        "Take a slow breath. I am right here with you. Would you like to tell me what triggered that today, or would you prefer quiet support?",
        "That sounds so heavy and exhausting. Have you been able to eat something or drink water today?",
        "You are so safe here. I am listening without any judgment at all.",
      ];
      const randomResponse =
        listenerResponses[Math.floor(Math.random() * listenerResponses.length)];

      const listenerMsg: ChatMessage = {
        id: `m-reply-${Date.now()}`,
        conversation_id: listenerId,
        sender_id: listenerId,
        sender_name: listener?.display_name || "Listener",
        sender_role: "listener",
        content: isCrisis
          ? "I hear how much pain you are feeling right now. Please know your life matters so deeply. I am connecting you with immediate support, and please call Tele-MANAS at 14416 or Emergency 112 right now."
          : randomResponse,
        created_at: new Date().toISOString(),
        is_read: true,
        is_crisis_detected: isCrisis,
      };

      setChatMessages((prev) => ({
        ...prev,
        [listenerId]: [...(prev[listenerId] || []), listenerMsg],
      }));
      setIsListenerTyping(false);
    }, 2200);
  };

  const clearListenerChat = (listenerId: string) => {
    setChatMessages((prev) => {
      const copy = { ...prev };
      delete copy[listenerId];
      return copy;
    });
  };

  // AI Emotional Companion Handler (Multi-lingual: Hindi & English + Safety Detection)
  const sendAiMessage = (content: string) => {
    const userMsg: ChatMessage = {
      id: `ai-user-${Date.now()}`,
      conversation_id: "ai",
      sender_id: currentUser ? currentUser.id : "guest",
      sender_name: currentUser?.display_name || "You",
      sender_role: "user",
      content,
      created_at: new Date().toISOString(),
      is_read: true,
    };

    setAiMessages((prev) => [...prev, userMsg]);

    const isCrisis = CRISIS_KEYWORDS.some((kw) => content.toLowerCase().includes(kw));
    if (isCrisis) {
      setIsCrisisModalOpen(true);
    }

    setIsAiTyping(true);

    setTimeout(() => {
      let aiResponse = "";
      const lower = content.toLowerCase();

      if (isCrisis) {
        aiResponse =
          "I hear how much pain and exhaustion you are carrying right now, and I want you to be completely safe. Please know you are not alone in this moment. Because I am an AI and cannot provide emergency medical care, please reach out to trusted support immediately: \n\n• **Tele-MANAS (Govt of India 24/7 Helpline): 14416**\n• **National Emergency: 112**\n• **KIRAN: 1800-599-0019**\n\nPlease reach out to a trusted loved one or contact emergency services right now. Your life is precious.";
      } else if (
        lower.includes("lonely") ||
        lower.includes("alone") ||
        lower.includes("akelapan") ||
        lower.includes("akela")
      ) {
        aiResponse =
          "Feeling lonely can be one of the heaviest physical sensations to hold. Sometimes the quietness of a room feels so loud. Remember: feeling lonely does not mean you are unlovable or broken; it just means you long for meaningful human warmth. Would you like to try a gentle 3-minute breathing exercise, or would you like to connect with a trained Human Listener here on Haven?";
      } else if (
        lower.includes("stress") ||
        lower.includes("overwhelmed") ||
        lower.includes("anxious") ||
        lower.includes("panic") ||
        lower.includes("darr") ||
        lower.includes("tension")
      ) {
        aiResponse =
          "When our nervous system feels flooded, even small things feel like climbing a mountain. Let's do something very small right now: Place one hand on your chest, and take one slow, deep breath in... and let it out with a sigh. What is one thing causing you the most stress right now?";
      } else if (
        lower.includes("hindi") ||
        lower.includes("namaste") ||
        lower.includes("kaise ho") ||
        lower.includes("madad")
      ) {
        aiResponse =
          "नमस्ते। मैं यहाँ आपकी बात सुनने के लिए हूँ। आप जो भी महसूस कर रहे हैं — चाहे वह तनाव हो, अकेलापन हो या कोई उलझन — आप बिना किसी झिझक के मुझसे साझा कर सकते हैं। आज आपका दिन कैसा बीता?";
      } else if (
        lower.includes("sad") ||
        lower.includes("crying") ||
        lower.includes("rona") ||
        lower.includes("depressed") ||
        lower.includes("low")
      ) {
        aiResponse =
          "It's completely okay if you're not okay today. You don't have to put on a brave face here. Crying or feeling low is a very natural response to carrying too much for too long. I'm sitting right here with you. Take all the time you need.";
      } else {
        const fallbacks = [
          "Thank you for sharing that with me. That sounds like a lot to hold inside. What do you feel your mind and body need most in this moment?",
          "I'm listening closely. When you think about this, where in your body do you feel the tension? Sometimes gently unclamping our jaw and dropping our shoulders can bring a tiny bit of relief.",
          "I appreciate you opening up. You don't have to figure out all the answers today. Just taking things one moment at a time is enough.",
        ];
        aiResponse = fallbacks[Math.floor(Math.random() * fallbacks.length)];
      }

      const aiMsg: ChatMessage = {
        id: `ai-reply-${Date.now()}`,
        conversation_id: "ai",
        sender_id: "ai",
        sender_name: "Haven Companion",
        sender_role: "ai",
        content: aiResponse,
        created_at: new Date().toISOString(),
        is_read: true,
        is_crisis_detected: isCrisis,
      };

      setAiMessages((prev) => [...prev, aiMsg]);
      setIsAiTyping(false);
    }, 1400);
  };

  const clearAiChat = () => {
    setAiMessages([
      {
        id: "ai-welcome-fresh",
        conversation_id: "ai",
        sender_id: "ai",
        sender_name: "Haven Companion",
        sender_role: "ai",
        content:
          "Welcome back. The chat is refreshed. How are you feeling right now? Remember, this is your peaceful space.",
        created_at: "2026-02-18T10:00:00Z",
        is_read: true,
      },
    ]);
  };

  // Community Handlers
  const createPost = (data: {
    title: string;
    content: string;
    category: Exclude<CommunityCategory, "all">;
    isAnonymous: boolean;
  }) => {
    const emojis = ["🌿", "🕊️", "🌱", "🌊", "✨", "🌸", "🍂", "☕"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      author_id: currentUser ? currentUser.id : "guest-user",
      author_display_name: data.isAnonymous
        ? currentUser?.anonymous_name || "GentleFriend"
        : currentUser?.display_name || "CommunityMember",
      author_avatar: randomEmoji,
      is_anonymous: data.isAnonymous,
      category: data.category,
      title: data.title,
      content: data.content,
      likes_count: 0,
      comments_count: 0,
      created_at: new Date().toISOString(),
      liked_by_user: false,
    };

    setPosts((prev) => [newPost, ...prev]);
    return newPost;
  };

  const toggleLikePost = (postId: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          const wasLiked = p.liked_by_user;
          return {
            ...p,
            liked_by_user: !wasLiked,
            likes_count: wasLiked ? p.likes_count - 1 : p.likes_count + 1,
          };
        }
        return p;
      })
    );
  };

  const addComment = (postId: string, content: string, isAnonymous: boolean) => {
    const emojis = ["🌱", "✨", "🤍", "🕊️", "🍵", "🌻"];
    const newComm: CommunityComment = {
      id: `comm-${Date.now()}`,
      post_id: postId,
      author_id: currentUser ? currentUser.id : "guest",
      author_display_name: isAnonymous
        ? "GentleFriend"
        : currentUser?.display_name || "Friend",
      author_avatar: emojis[Math.floor(Math.random() * emojis.length)],
      is_anonymous: isAnonymous,
      content,
      created_at: new Date().toISOString(),
      likes_count: 0,
    };

    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComm],
    }));

    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, comments_count: p.comments_count + 1 } : p))
    );
  };

  const deletePost = (postId: string) => {
    setPosts((prev) => prev.filter((p) => p.id !== postId));
  };

  const reportPost = (postId: string, reason: string, details?: string) => {
    const post = posts.find((p) => p.id === postId);
    const rep: CommunityReport = {
      id: `rep-${Date.now()}`,
      post_id: postId,
      post_title: post?.title || "Community Post",
      reporter_id: currentUser?.id || "guest",
      reason,
      details,
      status: "pending",
      created_at: new Date().toISOString(),
    };
    setReports((prev) => [rep, ...prev]);
  };

  // Mood & Journal Handlers
  const logMood = (mood: MoodType, intensity: number, tags: string[], notes?: string) => {
    const entry: MoodEntry = {
      id: `m-${Date.now()}`,
      user_id: currentUser?.id || "usr-aarav",
      mood,
      intensity,
      tags,
      notes,
      date: new Date().toISOString().split("T")[0],
      created_at: new Date().toISOString(),
    };
    setMoods((prev) => [entry, ...prev]);
  };

  const createJournal = (
    title: string,
    content: string,
    moodTag?: MoodType,
    tags?: string[]
  ) => {
    const entry: JournalEntry = {
      id: `j-${Date.now()}`,
      user_id: currentUser?.id || "usr-aarav",
      title,
      content,
      mood_tag: moodTag,
      tags: tags || [],
      is_favorite: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setJournals((prev) => [entry, ...prev]);
    return entry;
  };

  const updateJournal = (id: string, updates: Partial<JournalEntry>) => {
    setJournals((prev) =>
      prev.map((j) => (j.id === id ? { ...j, ...updates, updated_at: new Date().toISOString() } : j))
    );
  };

  const deleteJournal = (id: string) => {
    setJournals((prev) => prev.filter((j) => j.id !== id));
  };

  // Admin Handlers
  const resolveReport = (reportId: string, action: "dismiss" | "remove_post") => {
    const rep = reports.find((r) => r.id === reportId);
    if (!rep) return;

    if (action === "remove_post") {
      deletePost(rep.post_id);
    }

    setReports((prev) =>
      prev.map((r) =>
        r.id === reportId
          ? { ...r, status: action === "remove_post" ? "resolved" : "dismissed" }
          : r
      )
    );
  };

  // Safety Quick Exit (Privacy Shield)
  const quickExit = () => {
    if (typeof window !== "undefined") {
      window.location.replace("https://www.google.com");
    }
  };

  const openCrisisModal = () => setIsCrisisModalOpen(true);
  const closeCrisisModal = () => setIsCrisisModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        isAuthenticated: Boolean(currentUser),
        login,
        signup,
        logout,
        quickLogin,
        updateProfile,
        deleteAccount,
        exportUserData,

        therapists,
        appointments,
        bookAppointment,
        cancelAppointment,
        addTherapist,

        listeners,
        chatMessages,
        isListenerTyping,
        sendListenerMessage,
        clearListenerChat,

        aiMessages,
        isAiTyping,
        sendAiMessage,
        clearAiChat,

        posts,
        comments,
        createPost,
        toggleLikePost,
        addComment,
        deletePost,
        reportPost,

        moods,
        logMood,
        journals,
        createJournal,
        updateJournal,
        deleteJournal,

        reports,
        resolveReport,

        isCrisisModalOpen,
        openCrisisModal,
        closeCrisisModal,
        quickExit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
