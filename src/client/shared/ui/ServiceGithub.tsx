'use client';

import React from 'react';
import { GitCommit, Github, Clock } from 'lucide-react';
import GlareHover from '@/client/shared/ui/GlareHover';

interface Integration {
  repo: string;
  description: string;
  language: string;
  lastCommit: string;
  hash: string;
}

interface ServiceGithubProps {
  integrations: Integration[];
}

export function ServiceGithub({ integrations }: ServiceGithubProps) {
  return (
    <div className="space-y-4">
      {integrations.map((item, idx) => (
        <GlareHover 
           key={idx} 
           className="group flex flex-col p-6 rounded-2xl rtl hover:bg-white/10 dark:hover:bg-neutral-800 transition-all duration-300" 
           background="transparent" 
           borderColor="rgba(255,255,255,0.1)" 
           glareColor="var(--brand)"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-background opacity-90" />
              <span className="font-mono text-sm font-semibold tracking-tight text-background">{item.repo}</span>
            </div>
            <span className="px-2.5 py-1 rounded-full border border-border text-[10px] font-bold uppercase tracking-widest text-foreground bg-background">
              {item.language}
            </span>
          </div>

          <p className="text-sm text-background mb-6 flex-1 leading-relaxed">
            {item.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border/30 relative z-20">
            <div className="flex items-center gap-2 text-xs text-background/70">
              <Clock className="w-3.5 h-3.5" />
              <span>{item.lastCommit}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-foreground/50 group-hover:text-foreground transition-colors">
              <GitCommit className="w-3.5 h-3.5" />
              <span>{item.hash}</span>
            </div>
          </div>
        </GlareHover>
      ))}
    </div>
  );
}
