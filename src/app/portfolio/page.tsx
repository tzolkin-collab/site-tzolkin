import { PortfolioPage } from '@/client/pages/portfolio/PortfolioPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | VOLTICS',
  description: 'Conheça nossos cases de sucesso.',
};

export default function Page() {
  return <PortfolioPage />;
}
