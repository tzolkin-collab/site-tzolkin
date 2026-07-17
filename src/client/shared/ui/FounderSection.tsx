'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './Button';

export function FounderSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background text-foreground relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Quem puxa o <span className="text-brand">movimento</span> da TZOLKIN.
          </h2>

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Não acreditamos em fórmulas mágicas ou gurus de palco. Acreditamos em trabalho duro, estratégia fundamentada e execução impecável.
            </p>
            <p>
              Nossa missão é garantir que cada projeto que sai da TZOLKIN — um serviço, um produto, uma ferramenta ou uma trilha educacional — não seja apenas &quot;bonito&quot;, mas um motor de crescimento para o seu negócio.
            </p>
            <p>
              Unimos design e engenharia de dados para construir software que não apenas vai ao ar — mede, evolui e sustenta o crescimento do seu negócio.
            </p>
          </div>

          {/* Pull quote como elemento visual (substitui a foto removida) */}
          <figure className="mt-16 border-l-4 border-brand pl-6 md:pl-10">
            <blockquote className="text-2xl md:text-4xl font-bold leading-tight text-foreground">
              &quot;Design sem estratégia é arte. Design com estratégia é negócio.&quot;
            </blockquote>
            <figcaption className="mt-6 text-lg font-medium text-foreground">
              Gustavo Sales <span className="text-muted-foreground">| Sócio majoritário e cofundador</span>
            </figcaption>
          </figure>

          {/* CTA discreto */}
          <div className="mt-12">
            <Link href="/forms?interesse=consultoria">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Conversar com a TZOLKIN
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
