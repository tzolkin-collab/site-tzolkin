import { FormProvider } from '@/client/shared/ui/forms/FormContext';
import { Header } from '@/client/shared/ui/Header';
import { Footer } from '@/client/shared/ui/Footer';
import React from 'react';

export const metadata = {
  title: "Iniciar projeto",
  description: "Responda 4 perguntas rápidas sobre o seu projeto — a equipe TZOLKIN retorna em até 1 dia útil.",
};

export default function FormsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Header />

      {/* ProgressBar/Indicator could go here if needed, or inside the children flow */}
      <main className="flex-1 pt-52 pb-24 flex items-center justify-center">
        <FormProvider>
          {children}
        </FormProvider>
      </main>

      <Footer />
    </div>
  );
}
