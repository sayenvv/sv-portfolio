"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, CalendarPlus, Download, Mail, MessageCircle, Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { recruiterPrompts } from "@/data/portfolio-data";
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
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400 text-slate-950 shadow-[0_0_35px_-10px_rgba(34,211,238,0.9)] transition hover:scale-105"
        aria-label="Toggle recruiter AI assistant"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-md"
          >
            <Card className="overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/70 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-cyan-400/20 p-2 text-cyan-200">
                    <Bot size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">Recruiter AI Assistant</p>
                    <p className="text-xs text-slate-400">Ask about skills, projects, experience, and hiring details</p>
                  </div>
                </div>
                {canReset ? (
                  <button type="button" onClick={resetChat} className="text-xs text-cyan-200 hover:text-cyan-100">
                    Reset
                  </button>
                ) : null}
              </div>

              <div className="h-[350px] space-y-3 overflow-y-auto bg-slate-950/90 p-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={message.role === "assistant" ? "mr-10 rounded-xl bg-white/8 p-3" : "ml-10 rounded-xl bg-cyan-500/20 p-3"}
                  >
                    <div className="prose prose-invert prose-p:my-1 prose-li:my-0 text-sm text-slate-100">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  </div>
                ))}
                {isTyping ? (
                  <div className="mr-10 rounded-xl bg-white/8 p-3 text-sm text-slate-300">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300 [animation-delay:0ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300 [animation-delay:120ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-300 [animation-delay:240ms]" />
                    </span>
                  </div>
                ) : null}
              </div>

              <div className="border-t border-white/10 bg-slate-900/85 p-3">
                <div className="mb-3 flex flex-wrap gap-2">
                  {recruiterPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => submit(prompt)}
                      className="rounded-full border border-cyan-300/20 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-100 hover:bg-cyan-500/20"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    placeholder="Ask recruiter-focused questions"
                    className="h-10 w-full rounded-md border border-white/20 bg-slate-950/80 px-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                    onKeyDown={(event) => {
                      if (event.key === "Enter") submit(draft);
                    }}
                  />
                  <Button size="icon" onClick={() => submit(draft)} aria-label="Send message">
                    <Send size={15} />
                  </Button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href="/cv-placeholder.txt" download>
                    <Button variant="secondary" size="sm">
                      <Download size={14} /> Download CV
                    </Button>
                  </a>
                  <a href="mailto:alex.ai.engineer@example.com">
                    <Button variant="outline" size="sm">
                      <Mail size={14} /> Send Email
                    </Button>
                  </a>
                  <a href="#contact">
                    <Button variant="outline" size="sm">
                      <CalendarPlus size={14} /> Schedule Meeting
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
