"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Mail, MessageCircle, Send, Sparkles, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

import { profile, recruiterPrompts } from "@/data/portfolio-data";
import { useChatAssistant } from "@/hooks/use-chat-assistant";

export function RecruiterAIAssistant() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const { messages, isTyping, submitPrompt, resetChat, canReset } = useChatAssistant();

  const submit = (prompt: string) => {
    const value = prompt.trim();
    if (!value) return;
    submitPrompt(value);
    setDraft("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-[#1a1206] shadow-[0_8px_40px_-8px_rgba(226,185,111,0.5)] transition hover:scale-105"
        aria-label="Toggle recruiter AI assistant"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-md"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111114] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-accent-soft p-2 text-accent">
                    <Sparkles size={15} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">Recruiter Assistant</p>
                    <p className="text-xs text-muted">Skills, projects, hiring details</p>
                  </div>
                </div>
                {canReset ? (
                  <button
                    type="button"
                    onClick={resetChat}
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted hover:text-accent"
                  >
                    Reset
                  </button>
                ) : null}
              </div>

              <div className="h-[340px] space-y-3 overflow-y-auto p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={
                      message.role === "assistant"
                        ? "mr-8 rounded-2xl rounded-tl-md border border-white/[0.06] bg-white/[0.03] p-3.5"
                        : "ml-8 rounded-2xl rounded-tr-md bg-accent-soft p-3.5"
                    }
                  >
                    <div className="prose prose-invert prose-p:my-1 prose-li:my-0 text-[13px] leading-relaxed text-foreground/90">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  </div>
                ))}
                {isTyping ? (
                  <div className="mr-8 rounded-2xl rounded-tl-md border border-white/[0.06] bg-white/[0.03] p-3.5">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:120ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:240ms]" />
                    </span>
                  </div>
                ) : null}
              </div>

              <div className="border-t border-white/[0.07] p-4">
                <div className="mb-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
                  {recruiterPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => submit(prompt)}
                      className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted hover:border-accent/30 hover:text-foreground"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    placeholder="Ask about skills, salary, availability…"
                    className="h-11 w-full rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm text-foreground placeholder:text-muted/60 focus:border-accent/50 focus:outline-none"
                    onKeyDown={(event) => {
                      if (event.key === "Enter") submit(draft);
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => submit(draft)}
                    aria-label="Send message"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-[#1a1206] hover:brightness-110"
                  >
                    <Send size={15} />
                  </button>
                </div>
                <div className="mt-3 flex gap-4">
                  <a
                    href={profile.cvUrl}
                    download
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent"
                  >
                    <Download size={13} /> Download CV
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent"
                  >
                    <Mail size={13} /> Email Sayen
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
