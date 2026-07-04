"use client";

import { useMemo, useState } from "react";

import { recruiterFaq } from "@/data/portfolio-data";
import { ChatMessage } from "@/types";

const initialMessage: ChatMessage = {
  id: "intro",
  role: "assistant",
  content:
    "Hi there! I'm Sayen's AI assistant. Ask me about his skills, projects, experience, education, salary expectations, availability, or contact details.",
  createdAt: Date.now(),
};

function resolvePrompt(prompt: string) {
  const lowercase = prompt.toLowerCase();

  if (lowercase.includes("skill") || lowercase.includes("tech")) return recruiterFaq.skills;
  if (lowercase.includes("project")) return recruiterFaq.projects;
  if (lowercase.includes("experience") || lowercase.includes("role")) return recruiterFaq.experience;
  if (lowercase.includes("education") || lowercase.includes("qualification")) return recruiterFaq.education;
  if (lowercase.includes("salary") || lowercase.includes("ctc")) return recruiterFaq.salary;
  if (lowercase.includes("available") || lowercase.includes("join") || lowercase.includes("location")) {
    return recruiterFaq.availability;
  }
  if (lowercase.includes("contact") || lowercase.includes("email") || lowercase.includes("phone")) {
    return recruiterFaq.contact;
  }

  return "I can help with skills, projects, experience, education, salary, availability, and contact details. Please ask one of these.";
}

export function useChatAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [isTyping, setIsTyping] = useState(false);

  const canReset = useMemo(() => messages.length > 1, [messages.length]);

  const submitPrompt = (prompt: string) => {
    const userMessage: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: prompt,
      createdAt: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    window.setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: `a-${Date.now()}`,
        role: "assistant",
        content: resolvePrompt(prompt),
        createdAt: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 850);
  };

  const resetChat = () => {
    setMessages([initialMessage]);
    setIsTyping(false);
  };

  return {
    messages,
    isTyping,
    submitPrompt,
    resetChat,
    canReset,
  };
}
