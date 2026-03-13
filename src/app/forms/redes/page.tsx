import { Suspense } from 'react';
import { SocialsStep } from '@/client/shared/ui/forms/steps/SocialsStep';

export default function RedesPage() {
  return (
    <Suspense fallback={null}>
      <SocialsStep />
    </Suspense>
  );
}
