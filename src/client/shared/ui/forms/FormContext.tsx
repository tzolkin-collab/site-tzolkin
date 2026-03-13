'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type FormData = {
  fullName: string;
  email: string;
  whatsapp: string;
  companyName: string;
  companySize: string; // Faturamento ou Tamanho
  employees: string; // Quantidade de funcionários
  instagram: string;
  website: string;
  service: string; // Serviço escolhido
  message: string; // Desafios (opcional)
};

const defaultData: FormData = {
  fullName: '',
  email: '',
  whatsapp: '',
  companyName: '',
  companySize: '',
  employees: '',
  instagram: '',
  website: '',
  service: '',
  message: '',
};

interface FormContextProps {
  formData: FormData;
  updateData: (data: Partial<FormData>) => void;
  resetForm: () => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>(defaultData);

  const updateData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const resetForm = () => {
    setFormData(defaultData);
  };

  return (
    <FormContext.Provider value={{ formData, updateData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}
