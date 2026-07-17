'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/client/shared/ui/Button';
import { Marquee } from '@/client/shared/ui/Marquee';
import { LogoMarquee } from '@/client/shared/ui/LogoMarquee';
import { Header } from '@/client/shared/ui/Header';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/client/shared/data/projects';
import { brands } from '@/client/shared/data/brands';

// Dynamic Imports for performance optimization
const PortfolioCarousel = dynamic(() => import('@/client/shared/ui/PortfolioCarousel').then(mod => mod.PortfolioCarousel), {
  loading: () => <div className="h-[400px] w-full bg-background/5 animate-pulse" />
});

const MajorPartnerships = dynamic(() => import('@/client/shared/ui/MajorPartnerships').then(mod => mod.MajorPartnerships), {
  loading: () => <div className="h-[600px] w-full bg-background/5 animate-pulse" />
});

const MethodTOISection = dynamic(() => import('@/client/shared/ui/MethodTOISection').then(mod => mod.MethodTOISection), {
  loading: () => <div className="h-[400px] w-full bg-background/5 animate-pulse" />
});

const TrafficProblemSection = dynamic(() => import('@/client/shared/ui/TrafficProblemSection').then(mod => mod.TrafficProblemSection), {
  loading: () => <div className="h-[400px] w-full bg-background/5 animate-pulse" />
});

const ServicesSection = dynamic(() => import('@/client/shared/ui/ServicesSection').then(mod => mod.ServicesSection), {
  loading: () => <div className="h-[800px] w-full bg-background/5 animate-pulse" />
});

const BrandsSection = dynamic(() => import('@/client/shared/ui/BrandsSection').then(mod => mod.BrandsSection), {
  loading: () => <div className="h-[600px] w-full bg-background/5 animate-pulse" />
});

const FounderSection = dynamic(() => import('@/client/shared/ui/FounderSection').then(mod => mod.FounderSection), {
  loading: () => <div className="h-[600px] w-full bg-background/5 animate-pulse" />
});

const PricingSection = dynamic(() => import('@/client/shared/ui/PricingSection').then(mod => mod.PricingSection), {
  loading: () => <div className="h-[800px] w-full bg-background/5 animate-pulse" />
});

const WhoIsItForSection = dynamic(() => import('@/client/shared/ui/WhoIsItForSection').then(mod => mod.WhoIsItForSection), {
  loading: () => <div className="h-[600px] w-full bg-background/5 animate-pulse" />
});

const QuatroFrentesSection = dynamic(() => import('@/client/shared/ui/QuatroFrentesSection').then(mod => mod.QuatroFrentesSection), {
  loading: () => <div className="h-[600px] w-full bg-background/5 animate-pulse" />
});

const FerramentasSection = dynamic(() => import('@/client/shared/ui/FerramentasSection').then(mod => mod.FerramentasSection), {
  loading: () => <div className="h-[600px] w-full bg-background/5 animate-pulse" />
});

const Footer = dynamic(() => import('@/client/shared/ui/Footer').then(mod => mod.Footer));

const MARQUEE_ITEMS = ["Software", "IA", "Cybersecurity", "Web design", "Educacional", "Software", "IA", "Cybersecurity", "Web design", "Educacional"];

export function LandingPage() {
  const { regularProjects, partnershipProjects } = useMemo(() => {
    const groups = new Map<string, typeof projects>();
    projects.forEach(p => {
      const category = p.category || 'case';
      if (!groups.has(category)) groups.set(category, []);
      groups.get(category)!.push(p);
    });
    return {
      regularProjects: groups.get('case') || [],
      partnershipProjects: groups.get('partnership') || [],
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-clip flex flex-col font-sans">
      {/* Header Responsivo */}
      <Header />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden bg-background">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="overflow-hidden mb-6">
            <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-muted-foreground animate-[slideUp_0.6s_var(--ease-sophisticated)_forwards]">
              TZOLKIN · Marca de software
            </p>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tight text-foreground/90 uppercase mix-blend-normal animate-[slideUp_0.6s_var(--ease-sophisticated)_forwards]">
              Digital
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tight text-foreground uppercase mix-blend-normal pl-[10vw] animate-[slideUp_0.6s_var(--ease-sophisticated)_0.08s_forwards] opacity-0">
              Impact
            </h1>
          </div>

          <div className="mt-12 md:mt-18 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 animate-[fadeIn_0.6s_var(--ease-sophisticated)_0.3s_forwards] opacity-0">
            <p className="max-w-md text-lg md:text-xl text-foreground leading-relaxed">
              Consultoria, produtos sob medida ou white-label, ferramentas próprias e educacional — de IA a cybersecurity. Método e sofisticação em cada linha.
            </p>

            <div className="flex flex-col items-start md:items-end gap-3">
              <Link href="/forms?interesse=consultoria">
                <Button variant="primary" size="lg" className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 hover:scale-105">
                  Quero iniciar meu projeto
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs md:text-right">
                Responda 4 perguntas rápidas — retorno em até 1 dia útil. Sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee / Divider */}
      <Marquee items={MARQUEE_ITEMS} speed={2} />

      {/* Carousel Section */}
      <section id="cases" className="bg-background relative overflow-hidden md:py-0">
        <div className="w-full md:mb-24 flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 animate-[fadeIn_0.6s_var(--ease-sophisticated)_0.3s_forwards] opacity-0">
          {/* Text Content */}
          <div className="text-[0vw] md:text-[4vw] md:pt-15 md:border-t-[5px] md:border-r-2 md:rounded-tr-[1px] border-brand max-md:pl-0 md:pr-4 md:pl-2 leading-[0.9] font-bold tracking-tight text-foreground uppercase mix-blend-normal">
            <span className="text-foreground">CASES</span><br />
            DE<br />
            <span className="text-foreground">SUCESSO</span><br />
            TZ<span className="text-foreground">OLKIN</span>
          </div>

          {/* Center Card */}
          <div className="flex w-full bg-black dark:bg-white md:border-b-[5px] border-black/80 dark:border-white py-12 flex-col items-center justify-center group overflow-hidden transition-colors duration-500 mx-auto lg:mx-0 animate-[fadeIn_0.6s_var(--ease-sophisticated)_0.1s_forwards] opacity-0">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 text-center space-y-6 px-6 md:px-12">
              <Link href="/portfolio" className="group flex items-center justify-center text-white dark:text-black text-xl leading-relaxed transition-colors">

                <span>Ver portfólio completo</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="w-16 h-16 bg-white dark:bg-black rounded-full flex items-center justify-center mx-auto mb-4 text-black dark:text-white">
                <ArrowRight className="w-8 h-8 -rotate-45" />
              </div>
              <h3 className="text-2xl font-bold text-white dark:text-black uppercase transition-colors duration-100">
                Sem enrolação
              </h3>
              <p className="text-neutral-200 dark:text-neutral-600 text-sm leading-relaxed transition-colors duration-500">
                A TZOLKIN tira projetos do papel e os mantém vivos em produção — para empresas de qualquer nicho. Não somos uma agência. Somos uma software house — e resolvemos o problema inteiro.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-full relative z-10">
          <PortfolioCarousel projects={regularProjects} />



        </div>
      </section>

      {/* Uma marca, quatro frentes — após o carrossel de cases, antes das parcerias */}
      <QuatroFrentesSection />

      {/* Major Partnerships Section */}
      <MajorPartnerships partnerships={partnershipProjects} />

      {/* Services Section */}
      <ServicesSection />

      {/* 5th Section - Method TOI */}
      <MethodTOISection />

      {/* 6th Section - Traffic Problem */}
      <TrafficProblemSection />

      {/* 7th Section - Brands */}
      <BrandsSection />

      {/* 8th Section - Founder */}
      <FounderSection />

      {/* Logo Marquee Separator */}
      <LogoMarquee items={brands || []} speed={0.8} />

      {/* 9th Section - Form Replaced by Pricing */}
      <PricingSection />

      {/* Ferramentas próprias — em breve (logo após o pricing, doc 04) */}
      <FerramentasSection />

      {/* 10th Section - Who is it for */}
      <WhoIsItForSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
