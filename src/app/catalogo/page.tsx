'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Globe, Zap, CreditCard, QrCode, RefreshCw, BarChart3, Code2, Layers, Webhook, Database, Smartphone, Shield } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  {
    icon: Globe,
    title: 'Sites & Landing Pages',
    description: 'Páginas institucionais e de conversão com Next.js, SSG e performance sub-segundo.',
    color: '#635BFF'
  },
  {
    icon: CreditCard,
    title: 'Pagamentos Globais',
    description: 'Stripe Connect, Pix API, split de pagamentos e checkout transparente multi-moeda.',
    color: '#FFD100'
  },
  {
    icon: QrCode,
    title: 'Cardápios Virtuais',
    description: 'QR Code na mesa, categorias inteligentes e painel admin em tempo real.',
    color: '#22C55E'
  },
  {
    icon: RefreshCw,
    title: 'Cobranças Recorrentes',
    description: 'Régua de cobrança inteligente com retry automático, multi-método e portal do assinante.',
    color: '#A855F7'
  },
  {
    icon: BarChart3,
    title: 'Tagueamento & Analytics',
    description: 'GTM Server-Side, Meta CAPI, UTMify e rastreamento 100% preciso de cada conversão.',
    color: '#EF4444'
  },
  {
    icon: Code2,
    title: 'APIs & Integrações',
    description: 'Webhooks, REST APIs, automações com n8n, CRM e qualquer sistema terceiro.',
    color: '#06B6D4'
  },
];

const integrations = [
  { name: 'Stripe', category: 'Pagamentos' },
  { name: 'Meta Ads', category: 'Tráfego' },
  { name: 'Google Ads', category: 'Tráfego' },
  { name: 'UTMify', category: 'Tracking' },
  { name: 'EFÍ (Gerencianet)', category: 'Pix' },
  { name: 'Mercado Pago', category: 'Pagamentos' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Cloudflare', category: 'Infra' },
  { name: 'Vercel', category: 'Deploy' },
  { name: 'Google Tag Manager', category: 'Tracking' },
  { name: 'WhatsApp API', category: 'Comunicação' },
  { name: 'Evolution API', category: 'Comunicação' },
  { name: 'n8n', category: 'Automação' },
  { name: 'Redis', category: 'Infra' },
  { name: 'PostgreSQL', category: 'Banco de Dados' },
];

const methodology = [
  { step: '01', title: 'Discovery', description: 'Entendemos sua operação, público-alvo, concorrência e gargalos. Definimos KPIs mensuráveis.' },
  { step: '02', title: 'Arquitetura', description: 'Desenhamos a topologia do sistema, fluxos de dados, integrações e stack tecnológico.' },
  { step: '03', title: 'MVP Incremental', description: 'Entregamos rápido. Cada sprint valida hipóteses com dados reais antes de escalar.' },
  { step: '04', title: 'Otimização', description: 'Observabilidade contínua. A/B tests, CRO, performance e refinamento orientado a ROI.' },
];

export default function CatalogoPage() {
  return (
    <div className="container mx-auto md:px-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-foreground mb-6 text-sm font-medium tracking-wider uppercase text-background">
          <Sparkles size={14} />
          <span>Personalizado</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6 leading-tight">
          Cada Projeto é Único.<br />
          <span className="text-brand">A Solução Também.</span>
        </h1>
        <p className="text-xl text-foreground/60 leading-relaxed max-w-2xl mx-8">
          Não vendemos pacotes genéricos. Construímos infraestrutura digital sob medida para a realidade da sua operação, com tecnologia de ponta e foco em ROI.
        </p>
      </motion.div>

      {/* O que a Voltics faz */}
      <section className="mb-28">
        <div className="text-center mb-16">
          <div className="w-12 h-[3px] bg-brand mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">O que construímos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-0">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group p-8 rounded-2xl border border-border/40 bg-white/[0.02] dark:bg-neutral-900/30 hover:border-brand/30 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${cap.color}15` }}
              >
                <cap.icon className="w-6 h-6" style={{ color: cap.color }} />
              </div>
              <h3 className="text-xl font-black text-foreground mb-3 tracking-tight">{cap.title}</h3>
              <p className="text-foreground/61 leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Metodologia */}
      <section className="mb-28 px-6 md:px-0">
        <div className="text-center mb-16">
          <div className="w-12 h-[3px] bg-brand mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">Como trabalhamos</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Metodologia incremental focada em validação rápida e ROI mensurável.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-2xl border border-border/30 bg-neutral-50 dark:bg-neutral-950/50"
            >
              <span className="text-6xl font-black text-brand/10 absolute top-4 right-6">{item.step}</span>
              <h3 className="text-lg font-black text-foreground mb-3 uppercase tracking-wider">{item.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integrações */}
      <section className="mb-28 px-6 md:px-0">
        <div className="text-center mb-16">
          <div className="w-12 h-[3px] bg-brand mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">Stack & Integrações</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Ferramentas e plataformas que dominamos e integramos nativamente nos seus projetos.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03 }}
              className="group px-5 py-3 rounded-full border border-border/40 bg-white/[0.02] dark:bg-neutral-900/30 hover:border-brand/40 hover:bg-brand/5 transition-all duration-300"
            >
              <span className="text-sm font-bold text-foreground">{item.name}</span>
              <span className="text-xs text-foreground/40 ml-2">{item.category}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA — Projetos Específicos */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-foreground mx-5 text-background border-brand border rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl mb-10"
      >
        <div className="max-w-2xl text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Sparkles className="w-8 h-8 opacity-70" />
            <h3 className="text-3xl md:text-4xl font-foreground uppercase tracking-tight">Projetos Específicos</h3>
          </div>
          <p className="text-background text-lg font-medium">
            Sua operação precisa de integrações complexas de banco de dados, painéis administrativos, webhooks ou automações que não estão listadas acima?
          </p>
        </div>
        <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
          <Link href="/forms?service=Sob%20Demanda">
            <button className="w-full md:w-auto h-16 px-10 rounded-full bg-background text-foreground hover:bg-white/20 hover:text-black hover:border hover:border-black text-lg tracking-wide uppercase font-bold flex items-center justify-center gap-3 transition-all">
              Consultoria Gratuita
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
