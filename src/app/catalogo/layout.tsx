import React from 'react';
import { Header } from '@/client/shared/ui/Header';
import { Footer } from '@/client/shared/ui/Footer';

export const metadata = {
  title: "Personalizado | VOLTICS",
  description: "Conheça nossas capacidades, metodologia e todas as integrações que dominamos.",
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
