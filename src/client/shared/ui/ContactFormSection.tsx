'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/client/shared/ui/Button';
import { ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  fullName: string;
  email: string;
  companyName: string;
  instagram: string;
  whatsapp: string;
  message: string;
};

export function ContactFormSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    alert('Mensagem enviada com sucesso! (Simulação)');
  };

  return (
    <section id="contact-form" className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Copy & Info */}
          <div className="lg:col-span-5 space-y-12 pt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-sm font-medium tracking-wider uppercase text-brand">
                <Sparkles size={14} />
                <span>Vamos construir</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
                Dê o próximo <br/>
                <span className="text-brand">passo.</span>
              </h2>
              
              <p className="text-xl text-white/60 leading-relaxed max-w-md font-helvica">
                Preencha o formulário para agendarmos uma reunião de diagnóstico. Vamos entender o momento do seu negócio e traçar a melhor estratégia.
              </p>
            </motion.div>

            <div className="space-y-8 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">Email</h3>
                <a href="mailto:hello@hubdi.com" className="text-2xl hover:text-brand transition-colors">hello@hubdi.com</a>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">WhatsApp</h3>
                <a href="https://wa.me/5500000000000" className="text-2xl hover:text-brand transition-colors">+55 (00) 00000-0000</a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative group">
              
              {/* Decorative gradient border effect */}
              <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Nome */}
                  <div className="group/field">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2 group-focus-within/field:text-brand transition-colors">Nome e Sobrenome</label>
                    <input 
                      {...register('fullName', { required: 'Nome é obrigatório' })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-brand outline-none py-4 text-xl transition-all placeholder:text-white/10 focus:placeholder:text-white/20"
                      placeholder="João Silva"
                    />
                    {errors.fullName && <span className="text-red-500 text-xs mt-1 block">{errors.fullName.message}</span>}
                  </div>

                  {/* Email */}
                  <div className="group/field">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2 group-focus-within/field:text-brand transition-colors">Email Corporativo</label>
                    <input 
                      {...register('email', { required: 'Email é obrigatório', pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' } })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-brand outline-none py-4 text-xl transition-all placeholder:text-white/10 focus:placeholder:text-white/20"
                      placeholder="joao@empresa.com"
                      type="email"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                  </div>

                  {/* Empresa */}
                  <div className="group/field">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2 group-focus-within/field:text-brand transition-colors">Nome da Empresa</label>
                    <input 
                      {...register('companyName', { required: 'Nome da empresa é obrigatório' })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-brand outline-none py-4 text-xl transition-all placeholder:text-white/10 focus:placeholder:text-white/20"
                      placeholder="Sua Empresa Ltda"
                    />
                    {errors.companyName && <span className="text-red-500 text-xs mt-1 block">{errors.companyName.message}</span>}
                  </div>

                  {/* Instagram */}
                  <div className="group/field">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2 group-focus-within/field:text-brand transition-colors">Instagram da Marca</label>
                    <input 
                      {...register('instagram', { required: 'Instagram é obrigatório' })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-brand outline-none py-4 text-xl transition-all placeholder:text-white/10 focus:placeholder:text-white/20"
                      placeholder="@suamarca"
                    />
                    {errors.instagram && <span className="text-red-500 text-xs mt-1 block">{errors.instagram.message}</span>}
                  </div>

                  {/* WhatsApp */}
                  <div className="group/field md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2 group-focus-within/field:text-brand transition-colors">WhatsApp para Contato</label>
                    <input 
                      {...register('whatsapp', { required: 'WhatsApp é obrigatório' })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-brand outline-none py-4 text-xl transition-all placeholder:text-white/10 focus:placeholder:text-white/20"
                      placeholder="(11) 99999-9999"
                      type="tel"
                    />
                    {errors.whatsapp && <span className="text-red-500 text-xs mt-1 block">{errors.whatsapp.message}</span>}
                  </div>

                  {/* Mensagem */}
                  <div className="group/field md:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2 group-focus-within/field:text-brand transition-colors">Sobre o Negócio</label>
                    <textarea 
                      {...register('message', { required: 'Por favor, conte um pouco sobre o negócio' })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl focus:border-brand outline-none p-6 text-lg transition-all placeholder:text-white/10 focus:placeholder:text-white/20 min-h-[160px] resize-none"
                      placeholder="Conte sobre seu momento atual, desafios e objetivos..."
                    />
                    {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
                  </div>

                </div>

                <div className="pt-6">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto rounded-full px-12 h-16 text-lg bg-brand text-black hover:bg-white hover:text-black transition-all duration-300 font-bold tracking-wide flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        <span>Enviar Solicitação</span>
                        <ArrowRight className="w-6 h-6" />
                      </>
                    )}
                  </Button>
                  <p className="text-center md:text-left text-white/30 text-xs mt-6">
                    Ao enviar, você concorda com nossa política de privacidade. Prometemos não fazer spam.
                  </p>
                </div>

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
