'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface PrismBackgroundProps {
  className?: string;
  colors?: string[];
  opacity?: number;
  speed?: number;
}

export function PrismBackground({
  className = '',
  colors = ['#FFD100', '#40bb21', '#000000', '#ffffff'],
  opacity = 1,
  speed = 15,
}: PrismBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      {/* Animated glowing orbs */}
      <motion.div
        animate={{
          x: ['0%', '20%', '-20%', '0%'],
          y: ['0%', '-20%', '20%', '0%'],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full mix-blend-screen mix-blend-over"
        style={{
          background: `radial-gradient(circle, ${colors[0]}80 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />

      <motion.div
        animate={{
          x: ['0%', '-30%', '10%', '0%'],
          y: ['0%', '20%', '-30%', '0%'],
          scale: [1, 0.9, 1.3, 1],
        }}
        transition={{
          duration: speed * 1.2,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full mix-blend-screen"
        style={{
          background: `radial-gradient(circle, ${colors[1]}60 0%, transparent 70%)`,
          filter: 'blur(80px)',
        }}
      />

      <motion.div
        animate={{
          x: ['0%', '40%', '-10%', '0%'],
          y: ['0%', '10%', '40%', '0%'],
          scale: [1, 1.4, 0.9, 1],
        }}
        transition={{
          duration: speed * 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/2 left-1/2 w-[35vw] h-[35vw] rounded-full mix-blend-screen"
        style={{
          background: `radial-gradient(circle, ${colors[2]}40 0%, transparent 70%)`,
          filter: 'blur(50px)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
