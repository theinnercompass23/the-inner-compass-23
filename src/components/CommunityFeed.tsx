"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { CommunityCategory, CommunityPost } from "@/types";
import { formatTimeAgo } from "@/lib/utils";
import confetti from "canvas-confetti";
import {
  Heart,
  MessageCircle,
  ThumbsUp,
  Share2,
  Trash2,
  AlertTriangle,
  Plus,
  Send,
  X,
  ShieldCheck,
  EyeOff,
  Filter,
  Sparkles,
} from "lucide-react";

export default function CommunityFeed({
  initialCategory = "all",
}: {
  initialCategory?: CommunityCategory;
}) {
  const {
    posts,
    comments,
    currentUser,
    createPost,
    toggleLikePost,
    addComment,
    deletePost,
    reportPost,
  } = useApp();

  const [activeCategory, setActiveCategory] = useState<CommunityCategory>(initialCategory);
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [commentInput, setCommentInput] = useState<Record<string, string>>({});
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  // New Post Form States
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newCategory, setNewCategory] = useState<Exclude<CommunityCategory, "all">>("loneliness");
  const [isAnonymousPost, setIsAnonymousPost] = useState(true);
  const [reportModalData, setReportModalData] = useState<{ id: string; title: string } | null>(null);
  const [reportReason, setReportReason] = useState("");

  const categories: { label: string; value: CommunityCategory }[] = [
    { label: "All Posts", value: "all" },
    { label: "Loneliness", value: "loneliness" },
    { label: "Relationships", value: "relationships" },
    { label: "Stress & Anxiety", value: "stress-anxiety" },
    { label: "Personal Growth", value: "personal-growth" },
    { label: "Life Problems", value: "life-problems" },
    { label: "Daily Thoughts", value: "daily-thoughts" },
    { label: "Motivation", value: "motivation" },
    { label: "General Support", value: "general-support" },
  ];

  const filteredPosts = posts.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    // Safety check for phone number or email exposure
    const hasPhone = /\b\d{10}\b/.test(newContent);
    if (hasPhone) {
      alert("For your safety and privacy, sharing personal phone numbers in community posts is prohibited.");
      return;
    }

    createPost({
      title: newTitle,
      content: newContent,
      category: newCategory,
      isAnonymous: isAnonymousPost,
    });

    setNewTitle("");
    setNewContent("");
    setIsPostModalOpen(false);

    try {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#A8BDA5", "#78947D", "#EEECE4"],
      });
    } catch {
      // ignore
    }
  };

  const handleCommentSubmit = (postId: string) => {
    const text = commentInput[postId];
    if (!text || !text.trim()) return;

    addComment(postId, text, true);
    setCommentInput((prev) => ({ ...prev, [postId]: "" }));
  };

  const handleReportSubmit = () => {
    if (!reportModalData || !reportReason) return;
    reportPost(reportModalData.id, reportReason);
    alert("Post reported to Haven moderators. Thank you for keeping our sanctuary safe.");
    setReportModalData(null);
    setReportReason("");
  };

  return (
    <div className="space-y-6 text-charcoal">
      {/* Header and Guidelines */}
      <div className="bg-sage-50 border border-sage-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sage-800">
            Safe Peer Sanctuary
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mt-1 mb-2">
            Anonymous Community Circle
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-xl leading-relaxed">
            You are free to speak candidly here. No usernames linked to real identities, no judgment, and no unsolicited advice — only gentle empathy and understanding.
          </p>
        </div>

        <button
          onClick={() => setIsPostModalOpen(true)}
          className="px-6 py-3.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm flex items-center gap-2 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Share Anonymously</span>
        </button>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                isActive
                  ? "bg-sage-600 text-white border-sage-600 shadow-sm"
                  : "bg-white text-charcoal-muted border-gray-200 hover:border-sage-400 hover:text-charcoal"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Feed List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => {
          const postComments = comments[post.id] || [];
          const isOwnPost = currentUser && post.author_id === currentUser.id;
          const isCommentsOpen = activePostId === post.id;

          return (
            <div
              key={post.id}
              className="bg-white rounded-3xl p-6 border border-warm-sand shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              {/* Post Author Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sage-100 flex items-center justify-center text-xl">
                    {post.author_avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-sm text-charcoal">
                        {post.author_display_name}
                      </span>
                      {post.is_anonymous && (
                        <span className="text-[10px] text-sage-800 bg-sage-50 px-2 py-0.2 rounded-full font-medium">
                          Anonymous
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-charcoal-subtle">
                      {formatTimeAgo(post.created_at)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-warm-beige text-charcoal-muted">
                    {post.category}
                  </span>

                  {isOwnPost ? (
                    <button
                      onClick={() => deletePost(post.id)}
                      className="p-1.5 rounded-xl text-charcoal-subtle hover:text-coral-soft hover:bg-coral-light/60 transition-colors"
                      title="Delete your post"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setReportModalData({ id: post.id, title: post.title })}
                      className="p-1.5 rounded-xl text-charcoal-subtle hover:text-coral-soft hover:bg-coral-light/60 transition-colors"
                      title="Report inappropriate content"
                    >
                      <AlertTriangle className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Title & Content */}
              <div>
                <h3 className="text-base font-serif font-bold text-charcoal mb-2">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </p>
              </div>

              {/* Bottom Actions: Support (Like) and Comments Toggle */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => toggleLikePost(post.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${
                    post.liked_by_user
                      ? "bg-sage-100 text-sage-900 font-bold"
                      : "text-charcoal-muted hover:bg-gray-100 hover:text-charcoal"
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5 text-sage-600" />
                  <span>{post.likes_count} Supportive</span>
                </button>

                <button
                  onClick={() => setActivePostId(isCommentsOpen ? null : post.id)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-charcoal-muted hover:bg-gray-100 hover:text-charcoal transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-sage-600" />
                  <span>
                    {postComments.length} {postComments.length === 1 ? "Reply" : "Replies"}
                  </span>
                </button>
              </div>

              {/* Expanded Comments Section */}
              {isCommentsOpen && (
                <div className="pt-4 border-t border-gray-100 space-y-3 animate-fade-in">
                  {/* Comments List */}
                  {postComments.length > 0 ? (
                    <div className="space-y-2.5">
                      {postComments.map((comm) => (
                        <div
                          key={comm.id}
                          className="p-3.5 rounded-2xl bg-warm-white border border-warm-sand/60 text-xs space-y-1"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 font-bold text-charcoal">
                              <span>{comm.author_avatar}</span>
                              <span>{comm.author_display_name}</span>
                            </div>
                            <span className="text-[10px] text-charcoal-subtle">
                              {formatTimeAgo(comm.created_at)}
                            </span>
                          </div>
                          <p className="text-charcoal-muted leading-relaxed pl-5">
                            {comm.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-charcoal-subtle italic text-center py-2">
                      No replies yet. Be the first gentle voice to offer support.
                    </p>
                  )}

                  {/* Add Comment Input */}
                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="text"
                      value={commentInput[post.id] || ""}
                      onChange={(e) =>
                        setCommentInput((prev) => ({ ...prev, [post.id]: e.target.value }))
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleCommentSubmit(post.id);
                      }}
                      placeholder="Write an empathetic reply..."
                      className="flex-1 text-xs px-4 py-2.5 rounded-full border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
                    />
                    <button
                      onClick={() => handleCommentSubmit(post.id)}
                      className="p-2.5 rounded-full bg-sage-600 text-white hover:bg-sage-700 transition-colors shadow-sm"
                      aria-label="Send reply"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal: Create Anonymous Post */}
      {isPostModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-warm-sand relative my-8 text-charcoal">
            <button
              onClick={() => setIsPostModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-serif font-bold text-charcoal mb-1">
              Share in the Community Circle
            </h3>
            <p className="text-xs text-charcoal-muted mb-6 leading-relaxed">
              Your real identity is hidden. Please refrain from posting phone numbers, financial requests, or medical diagnosis claims.
            </p>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                  Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) =>
                    setNewCategory(e.target.value as Exclude<CommunityCategory, "all">)
                  }
                  className="w-full text-xs p-3 rounded-2xl border border-gray-200 bg-white text-charcoal outline-none focus:border-sage-500"
                >
                  <option value="loneliness">Loneliness</option>
                  <option value="relationships">Relationships</option>
                  <option value="stress-anxiety">Stress & Anxiety</option>
                  <option value="personal-growth">Personal Growth</option>
                  <option value="life-problems">Life Problems</option>
                  <option value="daily-thoughts">Daily Thoughts</option>
                  <option value="motivation">Motivation</option>
                  <option value="general-support">General Support</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="A short reflection or thought..."
                  className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                  Your Reflection
                </label>
                <textarea
                  rows={5}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Share what is truly on your mind. You are safe here."
                  className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
                  required
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-charcoal">
                  <input
                    type="checkbox"
                    checked={isAnonymousPost}
                    onChange={(e) => setIsAnonymousPost(e.target.checked)}
                    className="accent-sage-600 rounded"
                  />
                  <span>Post Anonymously</span>
                </label>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPostModalOpen(false)}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-charcoal hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
                  >
                    Publish Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Report Post */}
      {reportModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-warm-sand text-charcoal">
            <h3 className="text-lg font-serif font-bold text-charcoal mb-2">
              Report Post: &ldquo;{reportModalData.title}&rdquo;
            </h3>
            <p className="text-xs text-charcoal-muted mb-4">
              Help us keep Haven safe. Select the reason for reporting:
            </p>
            <div className="space-y-2 mb-4 text-xs">
              {[
                "Harassment, bullying, or hate speech",
                "Sharing personal phone numbers or contact details",
                "Harmful medical or psychiatric prescriptions",
                "Spam, commercial promotion, or scams",
              ].map((reason) => (
                <label key={reason} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="report_reason"
                    value={reason}
                    checked={reportReason === reason}
                    onChange={(e) => setReportReason(e.target.value)}
                    className="accent-sage-600"
                  />
                  <span>{reason}</span>
                </label>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setReportModalData(null)}
                className="px-4 py-2 text-xs font-semibold text-charcoal hover:bg-gray-100 rounded-full"
              >
                Cancel
              </button>
              <button
                onClick={handleReportSubmit}
                disabled={!reportReason}
                className="px-4 py-2 text-xs font-semibold bg-coral-soft text-white hover:bg-coral-soft/90 rounded-full disabled:opacity-40"
              >
                Submit Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
