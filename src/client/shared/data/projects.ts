export interface Project {
  name: string;
  logo: string;
  year: string;
  decoration: string;
  rotation: string;
  bright: boolean;
  invert: boolean;
  category?: 'partnership' | 'case';
}

export const projects: Project[] = [
  { name: "KidStok", logo: "/Logo KidStok.png", year: "2024", decoration: "/bg-ecommerce.png", rotation: "rotate-[37deg]", bright: true, invert: true, category: 'case' },
  { name: "Instituto Vale", logo: "/Logo Vale.png", year: "2024", decoration: "/bg-institutional.png", rotation: "rotate-[21deg]", bright: true, invert: true, category: 'partnership' },
  { name: "Butikim da Kelly", logo: "/Logo Butikim da Kelly.png", year: "2024", decoration: "/bg-optimization.png", rotation: "rotate-[30deg]", bright: false, invert: false, category: 'case' },
  { name: "Embale+", logo: "/Logo Embale+.png", year: "2024", decoration: "/bg-ecommerce.png", rotation: "rotate-[45deg]", bright: true, invert: true, category: 'partnership' },
  { name: "Haylander", logo: "/Logo Haylander.png", year: "2024", decoration: "/bg-institutional.png", rotation: "rotate-[15deg]", bright: true, invert: true, category: 'case' },
  { name: "Hotel Metrópole", logo: "/Logo Hotel Metrópole.png", year: "2024", decoration: "/bg-optimization.png", rotation: "rotate-[25deg]", bright: true, invert: true, category: 'case' },
  { name: "MegaConcursos", logo: "/Logo Mega.png", year: "2024", decoration: "/bg-ecommerce.png", rotation: "rotate-[10deg]", bright: true, invert: true, category: 'partnership' },
  { name: "Motel Queen", logo: "/Logo Motel Queen.png", year: "2024", decoration: "/bg-institutional.png", rotation: "rotate-[33deg]", bright: true, invert: true, category: 'case' },
  { name: "Mr. Fit", logo: "/Logo Mr. Fit.png", year: "2024", decoration: "/bg-optimization.png", rotation: "rotate-[18deg]", bright: true, invert: true, category: 'case' },
  { name: "Rei Da Fruta", logo: "/Logo Rei Da Fruta.png", year: "2024", decoration: "/bg-ecommerce.png", rotation: "rotate-[28deg]", bright: false, invert: false, category: 'partnership' },
  { name: "Zander", logo: "/Logo Zander.png", year: "2024", decoration: "/bg-institutional.png", rotation: "rotate-[40deg]", bright: true, invert: true, category: 'case' },
];
