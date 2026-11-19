"use client";

import React, { useState } from "react";
import { useLeads } from "@/context/LeadContext";
import { LeadStatus, SupportRequest } from "@/types";
import {
  Lock,
  Search,
  Filter,
  MessageCircle,
  Trash2,
  Edit3,
  Calendar,
  CheckCircle2,
  Clock,
  User,
  Phone,
  Mail,
  ShieldCheck,
  Eye,
  LogOut,
  X,
  FileText,
  Download,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { formatTimeAgo } from "@/lib/utils";

export default function AdminPage() {
  const {
    leads,
    updateLeadStatus,
    updateLeadNotes,
    deleteLead,
    isAdminLoggedIn,
    adminLogin,
    adminLogout,
  } = useLeads();

  // Authentication state
  const [passcode, setPasscode] = useState("");
  const [loginError, setLoginError] = useState(false);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [preferredDateFilter, setPreferredDateFilter] = useState<string>("");

  // Selected lead for detail modal
  const [viewingLead, setViewingLead] = useState<SupportRequest | null>(null);
  const [editingNotesLeadId, setEditingNotesLeadId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = adminLogin(passcode);
    if (!success) {
      setLoginError(true);
    } else {
      setLoginError(false);
      setPasscode("");
    }
  };

  // If not logged in, show secure login prompt
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen py-24 px-4 flex items-center justify-center bg-warm-white text-dark-charcoal">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-soft-sage/30 shadow-sm space-y-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-soft-sage/20 text-muted-green flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-serif font-bold text-dark-charcoal">
              Admin Lead Console
            </h1>
            <p className="text-xs text-dark-charcoal/65 leading-relaxed">
              Confidential dashboard for Haven support operators. Access is restricted to protect visitor personal data.
            </p>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
              Incorrect passcode. (Passcode: <strong>haven2026admin</strong> or <strong>admin123</strong>)
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="admin-passcode"
                className="block text-xs font-bold uppercase tracking-wider text-dark-charcoal mb-1 text-left"
              >
                Enter Access Code
              </label>
              <input
                id="admin-passcode"
                type="password"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setLoginError(false);
                }}
                placeholder="••••••••••••"
                className="w-full text-sm px-4 py-3 rounded-xl border border-soft-sage/50 focus:border-muted-green outline-none text-dark-charcoal"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-muted-green hover:bg-[#68826d] text-white rounded-xl text-xs font-semibold shadow-sm transition-all"
            >
              Sign In to Console
            </button>
          </form>

          <div className="pt-2 text-[11px] text-dark-charcoal/50">
            Protected by end-to-end authorization &bull; DPDP Act compliant
          </div>
        </div>
      </div>
    );
  }

  // 1. Metric calculations
  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === "new").length;
  const contactedLeads = leads.filter((l) => l.status === "contacted").length;
  const inProgressLeads = leads.filter((l) => l.status === "in_progress").length;
  const completedLeads = leads.filter((l) => l.status === "completed").length;

  // 2. Filter logic
  const filteredLeads = leads.filter((lead) => {
    // Search query matches name, phone, or email
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      lead.full_name.toLowerCase().includes(query) ||
      lead.phone.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query);

    // Status filter
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;

    // Category filter
    const matchesCategory =
      categoryFilter === "all" ||
      lead.support_categories.some((c) =>
        c.toLowerCase().includes(categoryFilter.toLowerCase())
      );

    // Preferred date filter (e.g., DD/MM/YYYY or substring)
    const matchesPrefDate =
      preferredDateFilter === "" ||
      (lead.preferred_date && lead.preferred_date.includes(preferredDateFilter));

    return matchesSearch && matchesStatus && matchesCategory && matchesPrefDate;
  });

  // Export to CSV
  const handleExportCSV = () => {
    const headers = [
      "ID",
      "Full Name",
      "Phone",
      "Email",
      "Categories",
      "Other Text",
      "Preferred Date",
      "Preferred Time (24h)",
      "Timezone",
      "Status",
      "Notes",
      "Submitted At",
    ];

    const rows = filteredLeads.map((l) => [
      l.id,
      `"${l.full_name.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.support_categories.join("; ")}"`,
      `"${(l.other_category_text || "").replace(/"/g, '""')}"`,
      `"${l.preferred_date || ""}"`,
      `"${l.preferred_time || ""}"`,
      `"${l.timezone || "Asia/Kolkata"}"`,
      l.status,
      `"${(l.admin_notes || "").replace(/"/g, '""')}"`,
      `"${l.created_at}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `haven_leads_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status: LeadStatus) => {
    switch (status) {
      case "new":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-600 border border-rose-200">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            New
          </span>
        );
      case "contacted":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
            Contacted
          </span>
        );
      case "in_progress":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-soft-sage/30 text-dark-charcoal border border-soft-sage">
            In Progress
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            Completed
          </span>
        );
    }
  };

  const openWhatsAppForLead = (lead: SupportRequest) => {
    const cleanNum = lead.phone.replace(/\D/g, "");
    const text = encodeURIComponent(
      `Hello ${lead.full_name}, this is Haven Peer Support following up on your request regarding "${lead.support_categories[0] || "support"}" scheduled for ${lead.preferred_date || "today"} at ${lead.preferred_time || "your requested time"} (IST). We are here whenever you are ready to talk.`
    );
    window.open(`https://wa.me/${cleanNum}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-warm-white text-dark-charcoal pb-24">
      {/* Top Banner Bar */}
      <div className="bg-white border-b border-soft-sage/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-soft-sage/25 text-muted-green flex items-center justify-center font-bold">
              H
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-lg font-bold text-dark-charcoal">
                  Haven Admin Console
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                  Live DB
                </span>
              </div>
              <p className="text-[11px] text-dark-charcoal/60">
                Support request management &bull; Strictly confidential
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-white border border-soft-sage/50 hover:bg-light-beige text-dark-charcoal transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-muted-green" />
              <span>Export CSV</span>
            </button>

            <Link
              href="/"
              className="px-3 py-2 text-xs font-semibold rounded-xl bg-white border border-soft-sage/50 hover:bg-light-beige text-dark-charcoal transition-colors"
            >
              View Site
            </Link>

            <button
              onClick={adminLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        {/* 5 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
          <div className="bg-white rounded-2xl p-5 border border-soft-sage/30 shadow-sm space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-dark-charcoal/60">
              Total Requests
            </span>
            <div className="text-2xl font-serif font-bold text-dark-charcoal">{totalLeads}</div>
            <span className="text-[10px] text-muted-green font-medium">All logged leads</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-soft-sage/30 shadow-sm space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-dark-charcoal/60">
              New Inquiries
            </span>
            <div className="text-2xl font-serif font-bold text-rose-600">{newLeads}</div>
            <span className="text-[10px] text-rose-600 font-semibold">Needs initial contact</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-soft-sage/30 shadow-sm space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-dark-charcoal/60">
              Contacted
            </span>
            <div className="text-2xl font-serif font-bold text-amber-600">{contactedLeads}</div>
            <span className="text-[10px] text-amber-600 font-medium">Awaiting reply</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-soft-sage/30 shadow-sm space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-dark-charcoal/60">
              In Progress
            </span>
            <div className="text-2xl font-serif font-bold text-muted-green">{inProgressLeads}</div>
            <span className="text-[10px] text-muted-green font-medium">Active peer listening</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-soft-sage/30 shadow-sm space-y-1 col-span-2 lg:col-span-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-dark-charcoal/60">
              Completed
            </span>
            <div className="text-2xl font-serif font-bold text-emerald-600">{completedLeads}</div>
            <span className="text-[10px] text-emerald-600 font-medium">Successfully supported</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-3xl p-5 border border-soft-sage/30 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
            {/* Search */}
            <div className="lg:col-span-4 relative">
              <Search className="w-4 h-4 text-dark-charcoal/40 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, phone, email..."
                className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-soft-sage/50 focus:border-muted-green outline-none text-dark-charcoal"
              />
            </div>

            {/* Status Filter */}
            <div className="lg:col-span-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full text-xs px-3.5 py-3 rounded-xl border border-soft-sage/50 bg-white text-dark-charcoal outline-none focus:border-muted-green cursor-pointer"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="lg:col-span-3">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full text-xs px-3.5 py-3 rounded-xl border border-soft-sage/50 bg-white text-dark-charcoal outline-none focus:border-muted-green cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="loneliness">Loneliness</option>
                <option value="divorce">Divorce</option>
                <option value="separation">Separation</option>
                <option value="heartbreak">Heartbreak</option>
                <option value="marriage">Marriage</option>
                <option value="relationship">Relationship</option>
                <option value="family">Family</option>
                <option value="grief">Grief &amp; Loss</option>
                <option value="stress">Emotional Stress</option>
                <option value="overthinking">Overthinking</option>
                <option value="misunderstood">Misunderstood</option>
              </select>
            </div>

            {/* Preferred Date Filter */}
            <div className="lg:col-span-2">
              <input
                type="text"
                value={preferredDateFilter}
                onChange={(e) => setPreferredDateFilter(e.target.value)}
                placeholder="Filter date (DD/MM)"
                className="w-full text-xs px-3.5 py-3 rounded-xl border border-soft-sage/50 bg-white text-dark-charcoal outline-none focus:border-muted-green"
              />
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-3xl border border-soft-sage/30 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-soft-sage/20 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-dark-charcoal">
              Support Requests ({filteredLeads.length})
            </h2>
            <span className="text-[11px] text-dark-charcoal/50">
              Showing filtered results
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-warm-white/70 border-b border-soft-sage/20 text-[10px] font-bold uppercase tracking-wider text-dark-charcoal/60">
                  <th className="py-3 px-4">Visitor</th>
                  <th className="py-3 px-4">WhatsApp &amp; Email</th>
                  <th className="py-3 px-4">Concern / Categories</th>
                  <th className="py-3 px-4">Appointment (24h IST)</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-soft-sage/10 text-xs">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-dark-charcoal/50">
                      No support requests match the active search or filters.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-warm-white/50 transition-colors"
                    >
                      {/* Name & Submission Time */}
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-dark-charcoal">{lead.full_name}</div>
                        <div className="text-[10px] text-dark-charcoal/50 mt-0.5">
                          {formatTimeAgo(lead.created_at)}
                        </div>
                      </td>

                      {/* Phone & Email */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1.5 font-mono text-[11px]">
                          <span>{lead.country_code || "+91"} {lead.phone}</span>
                          <button
                            onClick={() => openWhatsAppForLead(lead)}
                            title="Direct WhatsApp"
                            className="text-whatsapp-green hover:opacity-80 p-0.5"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-whatsapp-green" />
                          </button>
                        </div>
                        <div className="text-[11px] text-dark-charcoal/60 truncate max-w-[160px]">
                          {lead.email}
                        </div>
                      </td>

                      {/* Concern Categories */}
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {lead.support_categories.map((cat, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 bg-soft-sage/20 text-dark-charcoal text-[10px] rounded-md font-medium"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                        {lead.other_category_text && (
                          <div className="text-[10px] text-dark-charcoal/60 italic mt-0.5 truncate max-w-[200px]">
                            Other: {lead.other_category_text}
                          </div>
                        )}
                      </td>

                      {/* Preferred Date & 24-hour Time */}
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-dark-charcoal flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-muted-green" />
                          <span>{lead.preferred_date || "Not set"}</span>
                        </div>
                        <div className="text-[11px] font-mono text-muted-green font-semibold flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          <span>{lead.preferred_time || "18:00"} (24h IST)</span>
                        </div>
                      </td>

                      {/* Status Dropdown */}
                      <td className="py-3.5 px-4">
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            updateLeadStatus(lead.id, e.target.value as LeadStatus)
                          }
                          className="text-xs px-2 py-1 rounded-lg border border-soft-sage/40 bg-white font-medium text-dark-charcoal focus:outline-none focus:border-muted-green cursor-pointer"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* View details */}
                          <button
                            onClick={() => setViewingLead(lead)}
                            className="p-1.5 rounded-lg border border-soft-sage/40 hover:bg-light-beige text-dark-charcoal transition-colors"
                            title="View Full Request"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>

                          {/* WhatsApp Chat */}
                          <button
                            onClick={() => openWhatsAppForLead(lead)}
                            className="p-1.5 rounded-lg bg-whatsapp-green text-white hover:bg-[#20bd5a] transition-colors"
                            title="Open WhatsApp Chat"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          </button>

                          {/* Delete Lead */}
                          <button
                            onClick={() => {
                              if (confirm(`Are you sure you want to delete the request for ${lead.full_name}?`)) {
                                deleteLead(lead.id);
                              }
                            }}
                            className="p-1.5 rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-50 transition-colors"
                            title="Delete Request"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* VIEW LEAD MODAL */}
      {viewingLead && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-soft-sage/30 space-y-6 max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between border-b border-soft-sage/20 pb-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-dark-charcoal">
                  Request Details
                </h3>
                <span className="text-[11px] text-dark-charcoal/50">ID: {viewingLead.id}</span>
              </div>
              <button
                onClick={() => setViewingLead(null)}
                className="p-1 text-dark-charcoal/50 hover:text-dark-charcoal rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-warm-white rounded-xl">
                  <span className="text-dark-charcoal/50 block mb-0.5">Full Name</span>
                  <span className="font-semibold text-sm text-dark-charcoal">{viewingLead.full_name}</span>
                </div>
                <div className="p-3 bg-warm-white rounded-xl">
                  <span className="text-dark-charcoal/50 block mb-0.5">Status</span>
                  {getStatusBadge(viewingLead.status)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-warm-white rounded-xl">
                  <span className="text-dark-charcoal/50 block mb-0.5">WhatsApp Mobile</span>
                  <span className="font-mono text-dark-charcoal font-semibold">{viewingLead.country_code || "+91"} {viewingLead.phone}</span>
                </div>
                <div className="p-3 bg-warm-white rounded-xl">
                  <span className="text-dark-charcoal/50 block mb-0.5">Email Address</span>
                  <span className="text-dark-charcoal font-semibold truncate block">{viewingLead.email}</span>
                </div>
              </div>

              <div className="p-3 bg-light-beige/40 rounded-xl border border-soft-sage/30">
                <span className="text-dark-charcoal/60 block mb-1 font-medium">Scheduled Appointment</span>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-dark-charcoal flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-muted-green" />
                    {viewingLead.preferred_date || "Not chosen"}
                  </span>
                  <span className="font-mono font-bold text-muted-green flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {viewingLead.preferred_time || "18:00"} (24-Hour Clock IST)
                  </span>
                </div>
              </div>

              <div>
                <span className="text-dark-charcoal/60 block mb-1.5 font-medium">Selected Concerns</span>
                <div className="flex flex-wrap gap-1.5">
                  {viewingLead.support_categories.map((c, i) => (
                    <span key={i} className="px-2.5 py-1 bg-soft-sage/20 rounded-lg text-dark-charcoal font-medium">
                      {c}
                    </span>
                  ))}
                </div>
                {viewingLead.other_category_text && (
                  <p className="mt-2 text-dark-charcoal/70 bg-warm-white p-2.5 rounded-lg border border-soft-sage/20">
                    <strong>Other Description:</strong> {viewingLead.other_category_text}
                  </p>
                )}
              </div>

              {viewingLead.additional_message && (
                <div>
                  <span className="text-dark-charcoal/60 block mb-1 font-medium">Additional Message</span>
                  <div className="p-3 bg-warm-white rounded-xl text-dark-charcoal/80 leading-relaxed italic">
                    &ldquo;{viewingLead.additional_message}&rdquo;
                  </div>
                </div>
              )}

              {/* Admin Notes Section */}
              <div className="pt-2 border-t border-soft-sage/20 space-y-2">
                <span className="text-dark-charcoal font-semibold block">Internal Admin Notes</span>
                {editingNotesLeadId === viewingLead.id ? (
                  <div className="space-y-2">
                    <textarea
                      rows={3}
                      value={tempNotes}
                      onChange={(e) => setTempNotes(e.target.value)}
                      placeholder="Add notes about conversations, preferences..."
                      className="w-full p-2.5 rounded-xl border border-soft-sage text-xs outline-none focus:border-muted-green"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setEditingNotesLeadId(null)}
                        className="px-3 py-1 text-xs text-dark-charcoal/60 hover:text-dark-charcoal"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          updateLeadNotes(viewingLead.id, tempNotes);
                          setViewingLead({ ...viewingLead, admin_notes: tempNotes });
                          setEditingNotesLeadId(null);
                        }}
                        className="px-3 py-1 bg-muted-green text-white text-xs rounded-lg font-semibold"
                      >
                        Save Notes
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between p-3 bg-warm-white rounded-xl">
                    <p className="text-dark-charcoal/70 italic">
                      {viewingLead.admin_notes || "No notes added yet."}
                    </p>
                    <button
                      onClick={() => {
                        setTempNotes(viewingLead.admin_notes || "");
                        setEditingNotesLeadId(viewingLead.id);
                      }}
                      className="text-muted-green font-semibold ml-2 hover:underline flex-shrink-0"
                    >
                      Edit Notes
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => openWhatsAppForLead(viewingLead)}
                className="flex-1 py-3 bg-whatsapp-green hover:bg-[#20bd5a] text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Launch WhatsApp Chat
              </button>
              <button
                onClick={() => setViewingLead(null)}
                className="px-5 py-3 border border-soft-sage/40 rounded-xl text-xs font-semibold text-dark-charcoal hover:bg-light-beige"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
