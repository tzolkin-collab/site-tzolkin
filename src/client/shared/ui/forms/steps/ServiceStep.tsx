'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormContext, FormData } from '../FormContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/client/shared/ui/Button';
import { ArrowLeft, Loader2, Sparkles, Send } from 'lucide-react';
import { pricingData } from '@/client/shared/data/pricingData';

export function ServiceStep() {
  const searchParams = useSearchParams();
  const serviceFromQuery = searchParams.get('service');
  
  const { formData, updateData, resetForm } = useFormContext();
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>({ 
    defaultValues: {
      ...formData,
      service: serviceFromQuery || formData.service 
    } 
  });
  const router = useRouter();
  const selectedService = watch('service');

  const onSubmit = async (data: FormData) => {
    updateData({
      service: data.service,
      message: data.message
    });

    const finalData = { ...formData, ...data };

    // Simulate API submission
    console.log("Submitting forms data:", finalData);
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert('Mensagem enviada com sucesso! Nossa equipe entrará em contato.');
    resetForm();
    router.push('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-2xl mx-auto rounded-[2rem] p-8 md:p-12 relative"
    >
      <div className="mb-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-brand">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand mb-1">Passo 4 de 4</h2>
          <h3 className="text-3xl font-bold text-foreground">Objetivo do Projeto</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="group/field">
          <label className="block text-sm font-bold uppercase tracking-widest text-foreground/70 mb-2 group-focus-within/field:text-brand transition-colors">Qual serviço você busca?</label>
          <select
            {...register('service', { required: 'Selecione um serviço' })}
            className="w-full bg-foreground/5 px-4 rounded-xl border border-border focus:border-brand outline-none py-4 text-xl transition-all text-foreground focus:bg-background"
          >
            <option value="" disabled>Selecione uma opção</option>
            {pricingData.map((plan) => (
              <option key={plan.title} value={plan.title}>{plan.title} (A Partir de {plan.price})</option>
            ))}
            <option value="Sob Demanda">Projeto Customizado / Sob Demanda</option>
            <option value="Outro">Ainda não tenho certeza</option>
          </select>
          {errors.service && <span className="text-red-500 text-xs mt-1 block">{errors.service.message}</span>}
        </div>

        <div className="group/field">
          <label className="block text-sm font-bold uppercase tracking-widest text-foreground/70 mb-2 group-focus-within/field:text-brand transition-colors">
            Detalhes do Projeto {selectedService === 'Sob Demanda' ? <span className="text-red-500">(Obrigatório)</span> : '(Opcional)'}
          </label>
          <textarea
            {...register('message', {
              validate: (value) => {
                if (selectedService === 'Sob Demanda' && (!value || value.trim().length === 0)) {
                  return 'Para projetos customizados, descreva os detalhes do que você precisa.';
                }
                return true;
              }
            })}
            className="w-full bg-foreground/5 px-4 rounded-xl border border-border focus:border-brand outline-none p-6 text-xl transition-all placeholder:text-foreground/30 focus:bg-background min-h-[160px] resize-none"
            placeholder={selectedService === 'Sob Demanda' ? 'Descreva o que você precisa: funcionalidades, integrações, prazo estimado...' : 'Conte um pouco mais sobre os desafios e o que você espera alcançar...'}
          />
          {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message.message}</span>}
        </div>

        <div className="pt-6 flex justify-between items-center">
          <button
            type="button"
            onClick={() => router.push('/forms/redes')}
            className="text-muted-foreground hover:text-foreground font-bold tracking-widest uppercase text-sm flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>

          <Button
            variant="primary"
            size="lg"
            type="submit"
            disabled={isSubmitting}
            className="rounded-full px-12 h-16 text-lg bg-brand text-black hover:bg-white hover:text-black transition-all duration-300 font-bold tracking-wide flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                Finalizar
                <Send className="w-6 h-6" />
              </>
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
