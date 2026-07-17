import React from 'react';
import { Header } from '@/client/shared/ui/Header';
import { Footer } from '@/client/shared/ui/Footer';

export const metadata = {
  title: "Ferramentas",
  description:
    "SaaS, PWAs e NaaS desenvolvidos e operados pela TZOLKIN — ferramentas próprias nascidas da nossa operação real, em evolução contínua.",
};

export default function FerramentasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-40 pb-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
