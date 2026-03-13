'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormContext, FormData } from '../FormContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/client/shared/ui/Button';
import { ArrowLeft, ArrowRight, Building } from 'lucide-react';

export function CompanyStep() {
  const searchParams = useSearchParams();
  const { formData, updateData } = useFormContext();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues: formData });
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    updateData({
      companyName: data.companyName,
      companySize: data.companySize,
      employees: data.employees
    });
    const service = searchParams.get('service');
    const query = service ? `?service=${encodeURIComponent(service)}` : '';
    router.push(`/forms/redes${query}`);
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
          <Building className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand mb-1">Passo 2 de 4</h2>
          <h3 className="text-3xl font-bold text-foreground">Sobre sua Empresa</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="group/field">
          <label className="block text-sm font-bold uppercase tracking-widest text-foreground/70 mb-2 group-focus-within/field:text-brand transition-colors">Nome da Empresa</label>
          <input
            {...register('companyName', { required: 'Nome da empresa é obrigatório' })}
            className="w-full bg-foreground/5 px-4 rounded-xl border border-border focus:border-brand outline-none py-4 text-xl transition-all placeholder:text-foreground/30 focus:bg-background"
            placeholder="Qual o nome do seu negócio?"
          />
          {errors.companyName && <span className="text-red-500 text-xs mt-1 block">{errors.companyName.message}</span>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group/field">
            <label className="block text-sm font-bold uppercase tracking-widest text-foreground/70 mb-2 group-focus-within/field:text-brand transition-colors">Faturamento Opcional</label>
            <select
              {...register('companySize')}
              className="w-full bg-foreground/5 px-4 rounded-xl border border-border focus:border-brand outline-none py-4 text-xl transition-all text-foreground focus:bg-background"
            >
              <option value="" disabled>Selecione uma faixa</option>
              <option value="zero">Ainda não faturo</option>
              <option value="10k-50k">R$ 10k - R$ 50k / mês</option>
              <option value="50k-100k">R$ 50k - R$ 100k / mês</option>
              <option value="100k+">Mais de R$ 100k / mês</option>
            </select>
          </div>

          <div className="group/field">
            <label className="block text-sm font-bold uppercase tracking-widest text-foreground/70 mb-2 group-focus-within/field:text-brand transition-colors">Equipe Comercial</label>
            <select
              {...register('employees')}
              className="w-full bg-foreground/5 px-4 rounded-xl border border-border focus:border-brand outline-none py-4 text-xl transition-all text-foreground focus:bg-background"
            >
              <option value="" disabled>Selecione um tamanho</option>
              <option value="1">Apenas eu</option>
              <option value="2-5">2 a 5 pessoas</option>
              <option value="6-15">6 a 15 pessoas</option>
              <option value="16+">Mais de 16 pessoas</option>
            </select>
          </div>
        </div>

        <div className="pt-6 flex justify-between items-center">
          <button
            type="button"
            onClick={() => {
              const service = searchParams.get('service');
              const query = service ? `?service=${encodeURIComponent(service)}` : '';
              router.push(`/forms/contato${query}`);
            }}
            className="text-muted-foreground hover:text-foreground font-bold tracking-widest uppercase text-sm flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
          <Button
            variant="primary"
            size="lg"
            type="submit"
            className="rounded-full px-12 h-16 text-lg bg-foreground text-background hover:bg-brand hover:text-black transition-all duration-300 font-bold tracking-wide flex items-center justify-center gap-3"
          >
            Avançar
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
