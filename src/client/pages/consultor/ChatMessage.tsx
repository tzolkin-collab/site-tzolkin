'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

import useEmblaCarousel from 'embla-carousel-react';

export interface MessageData {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  serviceCards?: Array<{ slug: string; reason: string }>;
  timestamp: Date;
}

interface ChatMessageProps {
  message: MessageData;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {/* Avatar — bot only */}
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center shrink-0 mt-1">
          <Bot className="w-4 h-4 text-brand" />
        </div>
      )}

      <div className={`flex flex-col gap-2 ${isUser ? 'items-end' : 'items-start'} max-w-[85%] md:max-w-[85%]`}>
        {/* Message bubble */}
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
            isUser
              ? 'bg-foreground text-background rounded-br-md'
              : 'bg-muted text-foreground rounded-bl-md'
          }`}
        >
          {message.content.replace(/<service_card>[\s\S]*?(<\/service_card>|$)/gi, '').trim()}
        </div>

        {/* Service cards from bot */}
        {!isUser && message.serviceCards && message.serviceCards.length > 0 && (
          <div className="w-[calc(100vw-4rem)] md:w-full mt-2 overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3 pb-4 pt-4 cursor-grab active:cursor-grabbing touch-pan-y">
              {message.serviceCards.map((card, idx) => (
                <div key={idx} className="shrink-0 w-[260px] md:w-[280px]">
                  <ServiceCard slug={card.slug} reason={card.reason} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timestamp */}
        <span className="text-[10px] text-muted-foreground px-1">
          {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      {/* Avatar — user only */}
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center shrink-0 mt-1">
          <User className="w-4 h-4 text-foreground/60" />
        </div>
      )}
    </motion.div>
  );
}
