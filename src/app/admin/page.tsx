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
} from "lucide-react";
import Link from "next/link";

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
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-light-beige shadow-sm space-y-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-sage-50 text-muted-green flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-serif font-bold text-dark-charcoal">
              Admin Lead Console
            </h1>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Confidential dashboard for Haven support operators. Access is restricted to protect visitor personal data.
            </p>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-coral-light border border-coral-soft/30 text-coral-soft text-xs">
              Incorrect passcode. (Demo passcode: <strong>haven2026admin</strong> or <strong>admin123</strong>)
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
                className="w-full text-xs p-3.5 rounded-2xl border border-gray-200 focus:border-muted-green focus:ring-1 focus:ring-muted-green outline-none text-dark-charcoal"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full text-xs font-semibold bg-muted-green hover:bg-sage-600 text-white shadow-sm transition-all"
            >
              Sign In to Lead Dashboard
            </button>
          </form>

          <div className="pt-2 border-t border-gray-100">
            <Link
              href="/"
              className="text-xs text-charcoal-muted hover:text-dark-charcoal font-medium"
            >
              ← Back to Haven Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Calculate Metrics
  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === "new").length;
  const contactedLeads = leads.filter((l) => l.status === "contacted").length;
  const inProgressLeads = leads.filter((l) => l.status === "in_progress").length;
  const completedLeads = leads.filter((l) => l.status === "completed").length;

  // Filtered Leads Table
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || lead.status === statusFilter;

    const matchesCategory =
      categoryFilter === "all" ||
      lead.support_categories.some((c) =>
        c.toLowerCase().includes(categoryFilter.toLowerCase())
      );

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleOpenLeadWhatsApp = (lead: SupportRequest) => {
    // Clean digits for WhatsApp URL
    const digitsOnly = lead.phone.replace(/\D/g, "");
    const formattedPhone = digitsOnly.startsWith("91") ? digitsOnly : `91${digitsOnly}`;
    const initialText = encodeURIComponent(
      `Hello ${lead.full_name}, this is Haven Emotional Support following up on your request. We're here to listen whenever you're ready.`
    );
    window.open(`https://wa.me/${formattedPhone}?text=${initialText}`, "_blank");
  };

  const handleSaveNotes = (leadId: string) => {
    updateLeadNotes(leadId, tempNotes);
    setEditingNotesLeadId(null);
  };

  return (
    <div className="min-h-screen bg-warm-white p-4 sm:p-6 lg:p-8 text-dark-charcoal">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        {/* Admin Header */}
        <div className="bg-dark-charcoal text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3" />
              Authenticated Support Operator
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Haven Support Request & Lead Management
            </h1>
            <p className="text-xs text-gray-300">
              Manage incoming WhatsApp support requests, update progress, and coordinate peer listeners.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              View Website
            </Link>
            <button
              onClick={adminLogout}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-coral-soft/80 hover:bg-coral-soft text-white transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* 5 Key Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
          <div className="bg-white rounded-2xl p-5 border border-light-beige shadow-sm space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-subtle">
              Total Requests
            </span>
            <div className="text-2xl font-serif font-bold text-dark-charcoal">{totalLeads}</div>
            <span className="text-[10px] text-muted-green font-medium">All logged leads</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-light-beige shadow-sm space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-subtle">
              New Inquiries
            </span>
            <div className="text-2xl font-serif font-bold text-coral-soft">{newLeads}</div>
            <span className="text-[10px] text-coral-soft font-semibold">Needs initial contact</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-light-beige shadow-sm space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-subtle">
              Contacted
            </span>
            <div className="text-2xl font-serif font-bold text-amber-600">{contactedLeads}</div>
            <span className="text-[10px] text-amber-600 font-medium">Awaiting response</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-light-beige shadow-sm space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-subtle">
              In Progress
            </span>
            <div className="text-2xl font-serif font-bold text-muted-green">{inProgressLeads}</div>
            <span className="text-[10px] text-muted-green font-medium">Active peer listening</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-light-beige shadow-sm space-y-1 col-span-2 lg:col-span-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-subtle">
              Completed
            </span>
            <div className="text-2xl font-serif font-bold text-emerald-600">{completedLeads}</div>
            <span className="text-[10px] text-emerald-600 font-medium">Successfully supported</span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-3xl p-5 border border-light-beige shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-charcoal-subtle absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by full name, phone number, or email..."
                className="w-full text-xs pl-10 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-muted-green outline-none text-dark-charcoal"
              />
            </div>

            {/* Status Filter */}
            <div className="md:col-span-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full text-xs px-3.5 py-3 rounded-2xl border border-gray-200 bg-white text-dark-charcoal outline-none focus:border-muted-green"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="md:col-span-3">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full text-xs px-3.5 py-3 rounded-2xl border border-gray-200 bg-white text-dark-charcoal outline-none focus:border-muted-green"
              >
                <option value="all">All Categories</option>
                <option value="lonely">Loneliness</option>
                <option value="divorce">Divorce</option>
                <option value="separation">Separation</option>
                <option value="breakup">Breakup</option>
                <option value="marriage">Marriage</option>
                <option value="family">Family</option>
                <option value="grief">Grief</option>
                <option value="overwhelmed">Overwhelmed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-3xl border border-light-beige shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-serif font-bold text-base text-dark-charcoal">
              Support Inquiries ({filteredLeads.length})
            </h2>
            <span className="text-[11px] text-charcoal-subtle">
              Lead data saved securely in Supabase / Local Data Store
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-warm-white text-charcoal-subtle uppercase text-[10px] tracking-wider border-b border-gray-100">
                <tr>
                  <th className="py-3.5 px-4">Visitor / Contact</th>
                  <th className="py-3.5 px-4">What They&apos;re Facing</th>
                  <th className="py-3.5 px-4">Language / Time</th>
                  <th className="py-3.5 px-4">Submitted Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-warm-white/60 transition-colors">
                      {/* Name & Contact */}
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-dark-charcoal">{lead.full_name}</div>
                        <div className="text-[11px] text-muted-green font-medium flex items-center gap-1 mt-0.5">
                          <Phone className="w-3 h-3" />
                          <span>{lead.phone}</span>
                        </div>
                        <div className="text-[11px] text-charcoal-subtle truncate max-w-[160px]">
                          {lead.email}
                        </div>
                      </td>

                      {/* Categories */}
                      <td className="py-3.5 px-4 max-w-xs">
                        <div className="flex flex-wrap gap-1">
                          {lead.support_categories.map((c, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-sage-50 text-muted-green border border-soft-sage/40"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                        {lead.additional_message && (
                          <p className="text-[11px] text-charcoal-muted mt-1 italic truncate max-w-[200px]">
                            &ldquo;{lead.additional_message}&rdquo;
                          </p>
                        )}
                      </td>

                      {/* Language & Preferred Time */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="font-semibold text-dark-charcoal block">
                          {lead.preferred_language || "Hindi"}
                        </span>
                        <span className="text-[10px] text-charcoal-subtle block">
                          {lead.preferred_time || "Anytime"}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-charcoal-muted">
                        {lead.created_at.split("T")[0]}
                      </td>

                      {/* Status Dropdown */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            updateLeadStatus(lead.id, e.target.value as LeadStatus)
                          }
                          className={`text-[11px] font-bold px-2.5 py-1 rounded-full border outline-none cursor-pointer ${
                            lead.status === "new"
                              ? "bg-coral-light text-coral-soft border-coral-soft/40"
                              : lead.status === "contacted"
                              ? "bg-amber-50 text-amber-700 border-amber-300"
                              : lead.status === "in_progress"
                              ? "bg-sage-100 text-muted-green border-soft-sage"
                              : "bg-emerald-50 text-emerald-800 border-emerald-300"
                          }`}
                        >
                          <option value="new">● New</option>
                          <option value="contacted">● Contacted</option>
                          <option value="in_progress">● In Progress</option>
                          <option value="completed">● Completed</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* One Click WhatsApp with Lead */}
                          <button
                            type="button"
                            onClick={() => handleOpenLeadWhatsApp(lead)}
                            className="p-2 rounded-xl bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-sm"
                            title="Chat with visitor on WhatsApp"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          </button>

                          {/* View details */}
                          <button
                            type="button"
                            onClick={() => setViewingLead(lead)}
                            className="p-2 rounded-xl bg-warm-white text-dark-charcoal hover:bg-light-beige border border-gray-200 transition-colors"
                            title="View full lead record"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>

                          {/* Delete lead */}
                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Delete lead record for ${lead.full_name}?`)) {
                                deleteLead(lead.id);
                              }
                            }}
                            className="p-2 rounded-xl text-charcoal-subtle hover:text-coral-soft hover:bg-coral-light/60 transition-colors"
                            title="Delete lead record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-10 text-charcoal-muted">
                      No support requests found matching your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal: View & Edit Full Lead Record */}
        {viewingLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-charcoal/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-light-beige relative my-8 text-dark-charcoal space-y-6">
              <button
                onClick={() => setViewingLead(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-charcoal-subtle hover:text-dark-charcoal hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-green">
                  Lead Details Record
                </span>
                <h3 className="text-2xl font-serif font-bold text-dark-charcoal mt-0.5">
                  {viewingLead.full_name}
                </h3>
                <span className="text-xs text-charcoal-subtle">
                  Submitted on {viewingLead.created_at.split("T")[0]}
                </span>
              </div>

              <div className="space-y-3 text-xs bg-warm-white p-4 rounded-2xl border border-light-beige">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-charcoal-muted">WhatsApp Phone:</span>
                  <strong className="text-dark-charcoal">{viewingLead.phone}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-charcoal-muted">Email:</span>
                  <strong className="text-dark-charcoal">{viewingLead.email}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-charcoal-muted">Language:</span>
                  <strong className="text-dark-charcoal">{viewingLead.preferred_language}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-charcoal-muted">Preferred Time:</span>
                  <strong className="text-dark-charcoal">{viewingLead.preferred_time}</strong>
                </div>
                <div className="py-1">
                  <span className="text-charcoal-muted block mb-1">Selected Categories:</span>
                  <div className="flex flex-wrap gap-1">
                    {viewingLead.support_categories.map((c, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-sage-100 text-muted-green text-[10px] font-semibold">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                {viewingLead.additional_message && (
                  <div className="py-1 pt-2 border-t border-gray-100">
                    <span className="text-charcoal-muted block mb-0.5">Visitor Message:</span>
                    <p className="text-dark-charcoal leading-relaxed whitespace-pre-wrap">
                      {viewingLead.additional_message}
                    </p>
                  </div>
                )}
              </div>

              {/* Internal Notes Section */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-dark-charcoal">
                  Internal Support Notes
                </label>
                {editingNotesLeadId === viewingLead.id ? (
                  <div className="space-y-2">
                    <textarea
                      rows={3}
                      value={tempNotes}
                      onChange={(e) => setTempNotes(e.target.value)}
                      placeholder="Add notes on listener assigned, caller disposition, follow-ups..."
                      className="w-full text-xs p-3 rounded-2xl border border-gray-200 outline-none focus:border-muted-green text-dark-charcoal"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setEditingNotesLeadId(null)}
                        className="px-3 py-1.5 text-xs text-charcoal-muted hover:text-dark-charcoal"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          handleSaveNotes(viewingLead.id);
                          setViewingLead({ ...viewingLead, admin_notes: tempNotes });
                        }}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold bg-muted-green text-white"
                      >
                        Save Notes
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200 text-xs text-charcoal-muted flex items-start justify-between">
                    <p className="italic">
                      {viewingLead.admin_notes || "No notes added yet."}
                    </p>
                    <button
                      onClick={() => {
                        setEditingNotesLeadId(viewingLead.id);
                        setTempNotes(viewingLead.admin_notes || "");
                      }}
                      className="text-muted-green hover:underline text-[11px] font-semibold shrink-0 ml-2"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => handleOpenLeadWhatsApp(viewingLead)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#25D366] text-white hover:bg-[#1EBE5D]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Open WhatsApp with Lead</span>
                </button>

                <button
                  onClick={() => setViewingLead(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-dark-charcoal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
