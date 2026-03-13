import { Suspense } from 'react';
import { CompanyStep } from '@/client/shared/ui/forms/steps/CompanyStep';

export default function EmpresaPage() {
  return (
    <Suspense fallback={null}>
      <CompanyStep />
    </Suspense>
  );
}
