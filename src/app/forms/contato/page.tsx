import { Suspense } from 'react';
import { ContactStep } from '@/client/shared/ui/forms/steps/ContactStep';

export default function ContatoPage() {
  return (
    <Suspense fallback={null}>
      <ContactStep />
    </Suspense>
  );
}
