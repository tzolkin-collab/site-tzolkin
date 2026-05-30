'use client';

import { motion } from 'framer-motion';

export function FounderSection() {
  return (
    <section id="about" className="py-8 bg-background text-foreground relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">


          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
                Quem puxa o <span className="text-brand">movimento</span> da <span className="text-brand">tzolkin</span>.
              </h2>
              <p className="text-xl text-foreground font-medium mb-8">Gustavo Sales | Sócio Majoritário & Co-Founder</p>

              <div className="space-y-6 text-lg text-foreground leading-relaxed font-helvica">
                <p>
                  Não acreditamos em fórmulas mágicas ou gurus de palco. Acreditamos em trabalho duro, estratégia fundamentada e execução impecável.
                </p>
                <p>
                  Minha missão é garantir que cada projeto que sai da tzolkin não seja apenas &quot;bonito&quot;, mas uma ferramenta poderosa de crescimento para o seu negócio.
                </p>
                <p>
                  Unimos a criatividade do design com a precisão dos dados para criar marcas que não apenas sobrevivem, mas lideram seus mercados.
                </p>
              </div>

              {/* Signature or Quote */}
              <div className="pt-8 border-t border-foreground/30 mt-8">
                <p className="text-xl italic font-serif text-foreground/80">
                  &quot;Design sem estratégia é arte. Design com estratégia é negócio.&quot;
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
