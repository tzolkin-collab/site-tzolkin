import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/client/shared/ui/Button';
import Link from 'next/link';

export interface PricingCardProps {
  title: string;
  slug: string;
  dropPrice?: string;
  price: string;
  paymentText?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ title, slug, dropPrice, price, paymentText, description, features, popular }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative flex flex-col p-8 md:p-10 rounded-3xl border transition-all duration-300 w-[85vw] max-w-[340px] md:max-w-none md:w-[420px] shrink-0 snap-center ${popular
        ? 'bg-brand/5 border-brand/50'
        : 'bg-white/5 dark:bg-neutral-900 border-border/50 hover:border-brand/30'
        }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand text-black text-xs font-bold uppercase tracking-widest rounded-full">
          Mais Procurado
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground min-h-[40px]">{description}</p>
      </div>

      <div className="mb-8">
        <span className="block text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">A partir de</span>
        <div className="flex items-end gap-3 mb-3">
          {dropPrice && (
            <span className="text-2xl font-bold text-muted-foreground/40 line-through decoration-brand/50 mb-1">{dropPrice}</span>
          )}
          <span className="text-3xl font-black tracking-tight text-foreground">{price}</span>
        </div>
        {paymentText && (
          <p className="inline-block px-1.5 py-0.5 bg-brand text-xs font-bold text-black uppercase tracking-wider">{paymentText}</p>
        )}
      </div>

      <div className="space-y-4 mb-8 flex-1">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
            <span className="text-sm text-foreground/80 leading-relaxed font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <Link href={`/servicos/${slug}`}>
          <Button
            variant="primary"
            className={`w-full rounded-full h-14 text-sm tracking-wide uppercase font-bold transition-all ${popular
              ? 'bg-brand text-black hover:bg-white hover:text-black'
              : 'bg-foreground text-background hover:bg-brand hover:text-black'
              }`}
          >
            Tenho Interesse
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
