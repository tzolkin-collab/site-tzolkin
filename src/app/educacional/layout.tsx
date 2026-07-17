import React from 'react';
import { Header } from '@/client/shared/ui/Header';
import { Footer } from '@/client/shared/ui/Footer';

export const metadata = {
  title: "Educacional",
  description:
    "O educacional TZOLKIN está a caminho. Uma carta da nossa equipe.",
};

export default function EducacionalLayout({ children }: { children: React.ReactNode }) {
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
