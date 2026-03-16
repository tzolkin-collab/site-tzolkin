"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@/client/shared/providers/ChatProvider";
import { Send, Bot, Sparkles, Loader2, X } from "lucide-react";
import { ChatMessage, MessageData } from "./ChatMessage";
import { sendMessage } from "./chatApi";

const WELCOME_MESSAGE_CONTENT =
  "Olá! 👋 Sou o consultor virtual da Voltics. Estou aqui para ajudar você a encontrar a solução digital perfeita para o seu negócio.\n\nMe conta: qual é o seu segmento e o que você está buscando?";

export function ChatWindow() {
  const { isChatOpen, closeChat } = useChat();
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [mounted, setMounted] = useState(false);

  // Initialize welcome message only on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: WELCOME_MESSAGE_CONTENT,
        timestamp: new Date(),
      },
    ]);
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Lock body scroll when chat is open (especially useful for full-screen mobile view)
  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isChatOpen]);

  // Auto-resize textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
  };

  const handleSend = async (customMessage?: string) => {
    const textToSend =
      typeof customMessage === "string" ? customMessage : input;
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    // Add user message
    const userMsg: MessageData = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // Reset textarea height
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }

    try {
      const response = await sendMessage(sessionId, trimmed);

      // Store session ID
      if (!sessionId) {
        setSessionId(response.sessionId);
      }

      // Add assistant message
      const assistantMsg: MessageData = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: response.reply,
        serviceCards: response.serviceCards || [],
        timestamp: new Date(),
      };

      // Check for custom solution keywords to manually inject the card if not present
      const lowerText = trimmed.toLowerCase();
      const hasCustomKeyword =
        lowerText.includes("personalizado") ||
        lowerText.includes("sob medida") ||
        lowerText.includes("sistema");
      const alreadyHasCustom = assistantMsg.serviceCards?.some(
        (card) => card.slug === "solucao-personalizada",
      );

      if (hasCustomKeyword && !alreadyHasCustom) {
        assistantMsg.serviceCards = [
          ...(assistantMsg.serviceCards || []),
          {
            slug: "solucao-personalizada",
            reason:
              "Esta é a melhor opção para projetos que exigem funcionalidades exclusivas e total flexibilidade.",
          },
        ];
      }

      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const errorMsg: MessageData = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content:
          "Desculpe, houve um erro ao processar sua mensagem. Por favor, tente novamente.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestions = [
    "Qual site devo escolher?",
    "Preciso de um sistema Personalizado",
    "Preciso de um site para minha empresa",
    "Quero montar uma loja online",
    "Preciso de um cardápio digital",
    "Quero integrar pagamentos Pix",
  ];

  return (
    <AnimatePresence>
      {isChatOpen && (
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.8, originX: 1, originY: 1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed z-[9999] w-full h-[100dvh] inset-0 rounded-none sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[calc(100%-3rem)] sm:max-w-[440px] sm:h-[700px] sm:max-h-[calc(100vh-140px)] sm:rounded-2xl shadow-2xl border border-border bg-background sm:bg-background/95 sm:backdrop-blur-xl flex flex-col overflow-hidden origin-bottom-right"
        >
          <div className="flex flex-col flex-1 h-full p-4 min-h-0">
            {/* Header do chat */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 pb-6 border-b border-border mb-4"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-brand/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-brand" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                  Consultor Voltics
                  <Sparkles className="w-4 h-4 text-brand" />
                </h2>
                <p className="text-xs text-muted-foreground">
                  Powered by AI • Sempre disponível
                </p>
              </div>
              <button
                onClick={closeChat}
                className="p-3 bg-muted/80 backdrop-blur-md rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer absolute right-4 top-4 sm:relative sm:top-0 sm:right-0 sm:p-2 sm:bg-transparent"
              >
                <X className="w-5 h-5 sm:w-5 sm:h-5" />
              </button>
            </motion.div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-2 scrollbar-thin">
              <AnimatePresence mode="popLayout">
                {messages.map((msg) => (
                  <ChatMessage key={msg.id} message={msg} />
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-3 items-start"
                >
                  <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-brand" />
                  </div>
                  <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
                    <Loader2 className="w-4 h-4 text-brand animate-spin" />
                    <span className="text-xs text-muted-foreground">
                      Pensando...
                    </span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length <= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-2 pb-4 overflow-x-auto scrollbar-none"
              >
                {suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInput(s);
                      handleSend(s);
                      inputRef.current?.focus();
                    }}
                    className="px-4 py-2 rounded-full border border-border bg-transparent text-xs font-medium text-foreground/70 hover:border-brand hover:text-brand transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {s}
                  </button>
                ))}
              </motion.div>
            )}

            <div className="border-t border-border pt-4">
              <div className="flex items-end gap-3 bg-muted rounded-2xl p-2 transition-all focus-within:ring-2 focus-within:ring-brand/30">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Digite sua mensagem..."
                  rows={1}
                  className="flex-1 bg-transparent border-none outline-none resize-none text-sm text-foreground placeholder:text-muted-foreground px-3 py-2 max-h-[120px]"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-brand text-black flex items-center justify-center shrink-0 hover:bg-brand/80 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-muted-foreground/60 text-center mt-2">
                Powered by{" "}
                <span className="font-bold text-foreground">Google Gemini</span>{" "}
                • Suas informações são tratadas com segurança
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
