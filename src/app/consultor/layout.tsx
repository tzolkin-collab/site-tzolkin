import { Header } from '@/client/shared/ui/Header';
import { Footer } from '@/client/shared/ui/Footer';
import React from 'react';

export const metadata = {
  title: 'Consultor Virtual | tzolkin',
  description: 'Converse com nosso consultor virtual e descubra a solução digital perfeita para o seu negócio.',
};

export default function ConsultorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-36 pb-0 px-4 md:px-12 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
