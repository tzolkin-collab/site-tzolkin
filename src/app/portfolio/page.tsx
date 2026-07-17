import { PortfolioPage } from '@/client/pages/portfolio/PortfolioPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Conheça os cases da TZOLKIN: marcas, sites e sistemas criados com design de alto padrão e foco em resultado.',
};

export default function Page() {
  return <PortfolioPage />;
}
