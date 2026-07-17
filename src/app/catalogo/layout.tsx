import React from 'react';
import { Header } from '@/client/shared/ui/Header';
import { Footer } from '@/client/shared/ui/Footer';

export const metadata = {
  title: "Capacidades",
  description: "Capacidades, metodologia e integrações da TZOLKIN: software sob medida, pagamentos, tagueamento e automações de alto padrão.",
};

export default function CatalogoLayout({ children }: { children: React.ReactNode }) {
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
