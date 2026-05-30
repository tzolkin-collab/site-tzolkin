import React from 'react';
import { notFound } from 'next/navigation';
import { servicesData } from '@/client/shared/data/servicesData';
import { ServiceGithub } from '@/client/shared/ui/ServiceGithub';
import { MermaidDiagram } from '@/client/shared/ui/MermaidDiagram';
import { Antigravity } from '@/client/shared/ui/Antigravity';
import { PrismBackground } from '@/client/shared/ui/PrismBackground';
import CardSwap, { Card } from '@/client/shared/ui/CardSwap';
import { Marquee } from '@/client/shared/ui/Marquee';
import { SpotlightCard } from '@/client/shared/ui/SpotlightCard';
import { ServiceChart } from '@/client/shared/ui/ServiceChart';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, BarChart3, GitBranch, Share2 } from 'lucide-react';

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage(props: Params) {
  const params = await props.params;
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-15 pb-20 overflow-hidden border-b border-border/50 min-h-[500px]">
        {/* Animated Backgrounds */}
        <PrismBackground className="opacity-100" colors={['var(--brand)', 'var(--brand)', 'var(--brand)']} />



        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground transition-colors mb-6">
            <ChevronLeft className="w-4 h-4" />
            Voltar para Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex  items-center gap-2 px-3 py-1 rounded-full border border-border bg-foreground mb-6 text-xs font-bold tracking-widest uppercase text-background">
                {service.subtitle}
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="relative w-full h-[400px] hidden lg:block">
              <CardSwap>
                <Card className="bg-brand/20 backdrop-blur-md border-brand/40" />
                <Card className="bg-brand/40 backdrop-blur-md border-brand/50" />
                <Card className="bg-brand border-brand" />
              </CardSwap>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 group/spotlight">
            {service.heroMetrics.map((metric, idx) => (
              <SpotlightCard key={idx} className="p-6 md:p-8 rounded-3xl border border-border/50 bg-white/5 dark:bg-neutral-900/50 backdrop-blur-sm" spotlightColor="rgba(64, 187, 33, 0.15)">
                <p className="text-sm font-bold tracking-widest uppercase text-foreground mb-2">{metric.label}</p>
                <div className="flex items-end gap-3">
                  <span className="text-3xl md:text-4xl font-black text-foreground">{metric.value}</span>
                  {metric.trend && (
                    <span className={`text-sm font-bold mb-1 ${metric.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                      {metric.trend}
                    </span>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
      {/* Marquee como quebra de seção */}
      <Marquee items={[...(service.marqueeItems || ['PERFORMANCE', 'ROI', 'AUTORIDADE', 'CONVERSÃO', 'BRANDING', 'FATURAMENTO']), ...(service.marqueeItems || ['PERFORMANCE', 'ROI', 'AUTORIDADE', 'CONVERSÃO', 'BRANDING', 'FATURAMENTO'])]} speed={1.5} />
      {/* Analytics & Architecture — só renderiza se NÃO houver contentSections (evita duplicação) */}
      {!service.contentSections?.length && (
        <section className="py-24">
          <div className="container mx-auto px-6 md:px-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center">
              {/* Chart Area */}
              <div className="order-2 lg:order-1 relative rounded-3xl border border-border/50 bg-white/5 dark:bg-neutral-900/30 p-6 md:p-10">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Performance Engine</h3>
                    <p className="text-sm text-foreground">Métricas simuladas de operação</p>
                  </div>
                </div>
                <div className="h-[350px]">
                  <ServiceChart data={service.chartData} config={service.chartConfig} />
                </div>
              </div>

              {/* Description Area */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Decisões guiadas por dados.</h2>
                <p className="text-lg text-foreground leading-relaxed mb-8">
                  Visualização clara do impacto na sua operação. Nenhuma arquitetura é definida baseada em instinto, utilizamos observabilidade e telemetria profunda para comprovar resultados.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center">
              {/* Description Area */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Arquitetura Desenhada</h2>
                <p className="text-lg text-foreground leading-relaxed mb-8">
                  A estruturação do seu projeto segue padrões rigorosos de engenharia de software e devops. O fluxo abaixo ilustra o comportamento do ecosistema proposto.
                </p>
              </div>

              {/* Diagram Area */}
              <div className="relative rounded-3xl border border-border/50 bg-white/5 dark:bg-neutral-900/30 p-6 md:p-10 flex flex-col justify-center min-h-[400px]">
                <div className="flex items-center gap-3 mb-8 absolute top-8 left-8">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <Share2 className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Topologia</h3>
                  </div>
                </div>
                <div className="mt-16 w-full h-full flex items-center justify-center">
                  <MermaidDiagram chart={service.mermaidString} />
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Content Sections — design premium */}
      {service.contentSections && service.contentSections.map((section, idx) => {
        const isEven = idx % 2 === 0;
        const isLastSection = idx === (service.contentSections?.length || 0) - 1;
        const hasChart = !!section.chart;

        // Sessão final (dados de mercado) → grid de cards em bg invertido
        if (isLastSection && !hasChart) {
          return (
            <section key={idx} className="py-28  text-foreground relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-100 pointer-events-none hidden md:block">
                <Antigravity color="var(--background)" count={1700} />
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-brand/50 to-transparent z-10" />
              <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand/10 rounded-full blur-[140px] pointer-events-none z-10" />
              <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                  <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-background/60 blur-[40px] rounded-full" />
                    <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-background/40 backdrop-blur-md">
                      <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                      <span className="text-xs font-bold tracking-widest uppercase text-foreground/80">Dados Reais de Mercado</span>
                    </div>
                  </div>
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-background/60 blur-[100px] rounded-full" />
                    <h2 className="relative z-10 text-3xl md:text-5xl backdrop-blur-md bg-background/40 border border-white/5 rounded-full p-2 font-black tracking-tight leading-tight">
                      {section.headline}
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto group/spotlight">
                  {section.content.map((item, iIdx) => (
                    <SpotlightCard key={iIdx} className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 backdrop-blur-sm" spotlightColor="rgba(64, 187, 33, 0.15)">
                      <div className="w-8 h-[3px] bg-brand mb-6 group-hover:w-12 transition-all duration-300" />
                      <p className="text-lg text-foreground font-medium leading-relaxed">{item}</p>
                    </SpotlightCard>
                  ))}
                </div>
                <div className="mt-16 text-center">
                  <Link href={`/forms?service=${encodeURIComponent(service.title)}`}>
                    <button className="h-14 px-10 rounded-full bg-black text-white hover:bg-[#171717] text-sm font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-3">
                      Quero Esses Resultados
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          );
        }

        // Sessão sem gráfico → texto centralizado com brilho decorativo
        if (!hasChart) {
          return (
            <section key={idx} className={`py-15 relative overflow-hidden ${isEven ? 'bg-background' : 'bg-neutral-50 dark:bg-neutral-950/80 border-y border-border/20'}`}>
              <div className={`absolute ${isEven ? 'top-[-10%] right-[-10%]' : 'bottom-[-10%] left-[-10%]'} w-[500px] h-[500px] bg-brand/5 rounded-full blur-[140px] pointer-events-none`} />
              <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="w-12 h-[3px] bg-brand mx-auto mb-10" />
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-10 leading-tight">{section.headline}</h2>
                  {section.content.map((p, pIdx) => (
                    <p key={pIdx} className="text-lg md:text-xl text-foreground/60 leading-relaxed last:mb-0">{p}</p>
                  ))}
                  {section.copyAction && (
                    <div className="mt-14 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-brand/5 to-brand/10 rounded-2xl blur-xl" />
                      <div className="relative bg-background border border-brand/20 rounded-2xl px-10 py-8">
                        <p className="text-xl font-bold text-foreground leading-relaxed">&ldquo;{section.copyAction}&rdquo;</p>
                      </div>
                    </div>
                  )}
                  <div className="mt-10">
                    <Link href={`/forms?service=${encodeURIComponent(service.title)}`}>
                      <button className="h-14 px-10 rounded-full bg-foreground text-background hover:bg-brand hover:text-black text-sm font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-3">
                        Falar Com Especialista
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }

        // Sessão COM gráfico → side-by-side alternando direção + carrossel como quebra
        return (
          <React.Fragment key={idx}>
            <section className={`py-12 relative overflow-hidden ${isEven ? 'bg-background' : 'bg-neutral-50 dark:bg-neutral-950/80 border-y border-border/20'}`}>
              <div className={`absolute ${isEven ? 'top-[-5%] right-[-5%]' : 'bottom-[-5%] left-[-5%]'} w-[500px] h-[500px] bg-brand/5 rounded-full blur-[140px] pointer-events-none`} />

              <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                  {/* Texto */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="w-12 h-[3px] bg-brand mb-8" />
                    <h2 className="text-3xl md:text-[2.75rem] font-black tracking-tight text-foreground mb-8 leading-[1.15]">
                      {section.headline}
                    </h2>
                    <div className="space-y-5">
                      {section.content.map((p, pIdx) => (
                        <p key={pIdx} className="text-lg text-foreground leading-relaxed">{p}</p>
                      ))}
                    </div>
                    {section.copyAction && (
                      <div className="mt-10 pl-6 border-l-[3px] border-brand">
                        <p className="text-lg font-semibold text-foreground leading-relaxed">
                          &ldquo;{section.copyAction}&rdquo;
                        </p>
                      </div>
                    )}
                    <div className="mt-10">
                      <Link href={`/forms?service=${encodeURIComponent(service.title)}`}>
                        <button className="h-12 px-8 rounded-full bg-background bg-yellow-500 text-black hover:bg-foreground hover:text-foreground text-sm font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-3">
                          Iniciar Projeto
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Gráfico */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="rounded-3xl border border-border/40 bg-white/[0.02] dark:bg-neutral-900/40 p-8 px-2 md:p-10 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-8 pb-5 border-b border-border/30">
                        <div className="w-9 h-9 rounded-full bg-brand/10 flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-brand" />
                        </div>
                        <p className="text-sm font-bold tracking-wide text-foreground/70">
                          {section.chart!.config.label1}
                        </p>
                      </div>
                      <div className="h-[320px] pt-10">
                        <ServiceChart data={section.chart!.data} config={section.chart!.config} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </React.Fragment>
        );
      })}

      {/* CTA Standalone */}
      {service.contentSections && service.contentSections.length > 0 && (
        <section className="py-20 bg-brand relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.05),transparent_70%)]" />
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">Pronto para escalar?</h2>
            <p className="text-lg text-white/90 font-medium max-w-2xl mx-auto mb-10">Sua empresa merece uma infraestrutura digital que multiplica lucros e blinda o reconhecimento da sua marca.</p>
            <Link href={`/forms?service=${encodeURIComponent(service.title)}`}>
              <button className="h-16 px-12 rounded-full bg-black text-white hover:bg-neutral-900 text-lg font-bold uppercase tracking-wider transition-all inline-flex items-center gap-3">
                Quero Escalar Meu Faturamento
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </section>
      )}

      {/* Github Integrations CTA */}
      <section className="py-24 bg-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center mb-8 border border-white/10">
                <GitBranch className="w-6 h-6 text-background" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-background tracking-tight mb-6 leading-tight">
                Engenharia de ponta, repositórios nativos.
              </h2>
              <p className="text-lg text-background/70 mb-12 leading-relaxed">
                Entregamos controle absoluto. Nossos projetos são modulares e versionados com os mais altos padrões de CI/CD para seu time de dev herdar a operação com maestria.
              </p>

              <Link href={`/forms?service=${encodeURIComponent(service.title)}`}>
                <div className="relative inline-flex group cursor-pointer">
                  {/* Background Blur Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand/50 to-brand/50 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />

                  {/* Border Container */}
                  <div className="relative rounded-full p-[2px] overflow-hidden flex items-center justify-center shadow-2xl">
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] aspect-square animate-[spin_4s_linear_infinite]"
                      style={{
                        backgroundImage: `conic-gradient(from 0deg, transparent 0 140deg, var(--brand) 160deg, transparent 180deg 320deg, var(--brand) 340deg, transparent 360deg)`,
                      }}
                    />
                    <button className="relative z-10 h-14 px-10 rounded-full bg-black text-white hover:bg-black text-sm font-bold uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-3">
                      Quero Implementar
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-span-1 lg:col-span-7 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent z-10 pointer-events-none w-12" />
              <ServiceGithub integrations={service.githubIntegrations} />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
