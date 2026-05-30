"use client";

import Image from "next/image";
import { useChat } from "@/client/shared/providers/ChatProvider";

export function FloatingChatButton() {
  const { toggleChat, isChatOpen } = useChat();

  if (isChatOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[40] transition-transform duration-300 hover:scale-110 active:scale-95 group">
      {/* Background Blur Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--brand)]/50 to-[var(--brand)]/50 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />

      {/* Border Container */}
      <div className="relative mb-10 rounded-full p-[2px] overflow-hidden flex items-center justify-center shadow-2xl">
        {/* Spinning Border Animation */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] aspect-square animate-[spin_8s_linear_infinite]"
          style={{
            backgroundImage: `conic-gradient(from 0deg, transparent 0 140deg, var(--brand) 160deg, transparent 180deg 320deg, var(--brand) 340deg, transparent 360deg)`,
            willChange: 'transform'
          }}
        />

        {/* Button Content */}
        <button
          onClick={toggleChat}
          className="relative z-10 inline-block rounded-full cursor-pointer bg-black overflow-hidden backface-hidden"
        >
          <Image
            src="/logotzolkin.svg"
            alt="tzolkin Logo"
            width={64}
            height={64}
            className="rounded-full object-contain dark:invert"
          />
        </button>
      </div>
    </div>
  );
}
