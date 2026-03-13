import { Suspense } from 'react';
import { ServiceStep } from '@/client/shared/ui/forms/steps/ServiceStep';

export default function ServicoPage() {
  return (
    <Suspense fallback={null}>
      <ServiceStep />
    </Suspense>
  );
}
