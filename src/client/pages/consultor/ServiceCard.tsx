"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/client/shared/ui/Button";
import Link from "next/link";

// Pricing data inline to avoid import issues — maps slugs to card info
const SERVICE_MAP: Record<
  string,
  {
    title: string;
    price?: string;
    dropPrice?: string;
    paymentText?: string;
    description: string;
    features: string[];
    popular?: boolean;
  }
> = {
  "landing-pages-de-conversao": {
    title: "Landing Pages de Conversão",
    dropPrice: "R$ 1.925",
    price: "R$ 1.350",
    paymentText: "Em até 3x no cartão ou PIX R$ 1050 à vista",
    description:
      "Páginas exclusivas desenhadas para altíssima conversão de leads vindos de tráfego pago.",
    features: [
      "Copywriting Direto e Persuasivo",
      "Design Responsivo Exclusivo",
      "Carregamento Super Otimizado (<2s)",
      "Tagueamento Básico (GA4 e Pixels de Base)",
    ],
  },
  "sites-institucionais": {
    title: "Sites Institucionais",
    dropPrice: "R$ 6.000",
    price: "R$ 4.000",
    paymentText: "Em até 6x no cartão de crédito",
    description:
      "O hub central da sua marca, feito para transmitir autoridade e confiança instantânea ao mercado.",
    features: [
      "Arquitetura Visual Premium e Original",
      "Multi-páginas (Sobre, Serviços, Portfólio)",
      "Painel para Gestão de Conteúdo (CMS)",
      "Otimização SEO On-page para o Google",
    ],
  },
  "e-commerces-globais": {
    title: "E-commerces Globais",
    dropPrice: "R$ 10.000",
    price: "R$ 8.000",
    paymentText: "Entrada de 50% + 50% na entrega",
    description: "Estruturação avançada de lojas escaláveis de alcance global.",
    features: [
      "Tema Shopify ou Customizado via Next.js",
      "Checkout Transparente (Stripe/Yampi)",
      "Módulos de Upsell e Cross-sell",
      "Alto Volume de Requisições",
    ],
    popular: true,
  },
  "tagueamento-de-fluxo": {
    title: "Tagueamento de Fluxo",
    dropPrice: "R$ 800",
    price: "R$ 600",
    paymentText: "Em até 3x no cartão de crédito",
    description:
      "Mapeamento meticuloso de eventos para rastrear cada centavo da sua operação.",
    features: [
      "Google Tag Manager (GTM)",
      "Auditoria de Eventos de Conversão",
      "CAPI e Server-side",
      "Sincronização UTMify / Meta",
    ],
  },
  "cardapios-virtuais": {
    title: "Cardápios Virtuais",
    dropPrice: "R$ 1.800",
    price: "R$ 1.400",
    paymentText: "Em até 3x no cartão ou PIX R$ 1100 à vista",
    description: "Cardápio digital interativo com QR Code.",
    features: [
      "Design Responsivo com Fotos",
      "Categorias e Filtros Inteligentes",
      "QR Code Personalizado",
      "Painel para Atualizar Preços",
    ],
  },
  "pagamentos-globais": {
    title: "Pagamentos Globais",
    price: "R$ 2.500",
    paymentText: "Entrada de 50% + 50% na entrega",
    description:
      "Integração completa com Stripe Connect para pagamentos multi-moeda.",
    features: [
      "Checkout Transparente Multi-moeda",
      "Split de Pagamentos e Marketplace",
      "Dashboard de Recebíveis",
      "Compliance PCI-DSS e Antifraude",
    ],
  },
  "api-pix": {
    title: "API Pix",
    price: "R$ 1.200",
    paymentText: "Em até 3x no cartão de crédito",
    description: "Cobranças Pix instantâneas com QR Codes dinâmicos.",
    features: [
      "Taxa ZERO",
      "QR Code Pix Dinâmico",
      "Webhook de Confirmação Instantânea",
      "Conciliação Automática",
    ],
  },
  "sistemas-de-mensalidade": {
    title: "Sistemas de Mensalidade",
    price: "R$ 3.000",
    paymentText: "Entrada de 50% + 50% na entrega",
    description:
      "Cobranças recorrentes automáticas para negócios com assinaturas.",
    features: [
      "Cobrança Automática (Cartão/Pix/Boleto)",
      "Gestão de Planos e Upgrades",
      "Portal do Assinante",
      "Régua de Cobrança Automática",
    ],
  },
  "solucao-personalizada": {
    title: "Solução Personalizada",
    price: "", // No price
    description:
      "Desenvolvimento sob medida para necessidades específicas e complexas da sua empresa.",
    features: [
      "Arquitetura de Software Escalável",
      "Integrações via API de Terceiros",
      "Painel Administrativo Customizado",
      "Suporte Técnico Dedicado",
    ],
  },
};

interface ServiceCardProps {
  slug: string;
  reason: string;
}

export function ServiceCard({ slug, reason }: ServiceCardProps) {
  const service = SERVICE_MAP[slug];
  const [showDetails, setShowDetails] = React.useState(false);

  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative flex flex-col p-5 rounded-2xl border transition-all duration-300 w-full max-w-[380px] ${
        service.popular
          ? "bg-brand/5 border-brand/50"
          : "bg-white/5 dark:bg-neutral-900 border-border/50 hover:border-brand/30"
      }`}
    >
      {service.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-brand text-black text-[10px] font-bold uppercase tracking-widest rounded-full whitespace-nowrap">
          Mais Procurado
        </div>
      )}

      <h4 className="text-lg font-bold text-foreground mb-1">
        {service.title}
      </h4>
      <p className="text-xs text-muted-foreground mb-3">
        {service.description}
      </p>

      {/* Reason from bot */}
      <div className="bg-brand/10 border border-brand/20 rounded-lg p-2.5 mb-3">
        <p className="text-xs font-medium text-foreground/80 italic">
          💡 {reason}
        </p>
      </div>

      {(service.price || service.dropPrice) && (
        <div className="flex items-end gap-2 mb-3">
          {service.dropPrice && (
            <span className="text-sm font-bold text-muted-foreground/40 line-through">
              {service.dropPrice}
            </span>
          )}
          {service.price && (
            <span className="text-xl font-black tracking-tight text-foreground">
              {service.price}
            </span>
          )}
        </div>
      )}

      <button 
        onClick={() => setShowDetails(!showDetails)}
        className="text-xs font-semibold text-brand hover:underline self-start mb-3"
      >
        {showDetails ? "Ocultar detalhes" : "Ver detalhes"}
      </button>

      {showDetails && (
        <div className="mb-4">
          {service.paymentText && (
            <p className="inline-block px-1.5 py-0.5 bg-brand text-[10px] font-bold text-black uppercase tracking-wider mb-3 w-fit">
              {service.paymentText}
            </p>
          )}

          <div className="space-y-2">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                <span className="text-xs text-foreground/80 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <Link href={`/forms?service=${slug}`} className="mt-auto">
        <Button
          variant="primary"
          className="w-full rounded-full h-10 text-xs tracking-wide uppercase font-bold transition-all flex items-center justify-center gap-2 bg-brand text-black hover:bg-white hover:text-black border-none"
        >
          Tenho Interesse
          <ArrowRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
    </motion.div>
  );
}
