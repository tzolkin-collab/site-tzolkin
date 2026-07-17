export interface Project {
  name: string;
  logo: string;
  year: string;
  decoration: string;
  rotation: string;
  bright: boolean;
  invert: boolean;
  category?: 'partnership' | 'case';
  description?: string;
  instagram?: string;
  instagramPostUrl?: string;
  website?: string;
  location?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    name: "KidStok",
    logo: "/logo-kidstok.png",
    year: "2024",
    decoration: "/bg-ecommerce.png",
    rotation: "rotate-[37deg]",
    bright: false,
    invert: false,
    category: 'case',
    description: "Grande rede de franquias de moda infantil. Roupas para bebês e crianças com preços acessíveis.",
    instagram: "https://www.instagram.com/kidstok/",
    instagramPostUrl: "https://www.instagram.com/p/DRM2Nr0keFb/",
    website: "https://kidstok.com.br/",
    location: "Brasil (Franquia)",
    gallery: ["/projects/kidstok-website.png", "/projects/kidstok-instagram.png"]
  },
  {
    name: "Instituto Vale",
    logo: "/logo-vale.png",
    year: "2024",
    decoration: "/bg-institutional.png",
    rotation: "rotate-[21deg]",
    bright: false,
    invert: false,
    category: 'partnership',
    description: "Uma das maiores mineradoras do mundo. Foco em minério de ferro, pelotas e níquel.",
    instagram: "https://www.instagram.com/valenobrasil/",
    website: "http://www.vale.com/",
    location: "Global",
    gallery: ["/projects/vale-website.png", "/projects/vale-website.png"]
  },
  {
    name: "Butikim da Kelly",
    logo: "/logo-butikim-da-kelly.png",
    year: "2024",
    decoration: "/bg-optimization.png",
    rotation: "rotate-[30deg]",
    bright: false,
    invert: false,
    category: 'case',
    description: "Bar e restaurante especializado em servir bebidas com entretenimento, conhecido como 'Buteco de Verdade'.",
    instagram: "https://www.instagram.com/butikimdakelly/",
    instagramPostUrl: "https://www.instagram.com/p/DJsL2yhRdMs/",
    location: "Belo Horizonte - MG",
    gallery: ["/projects/butikim-instagram.png", "/projects/butikim-instagram.png"]
  },
  {
    name: "Embale+",
    logo: "/logo-embale.png",
    year: "2024",
    decoration: "/bg-ecommerce.png",
    rotation: "rotate-[45deg]",
    bright: false,
    invert: false,
    category: 'partnership',
    description: "Distribuidora de embalagens focada em soluções para delivery e embalagens em geral.",
    gallery: ["/logo-embale.png", "/logo-embale.png", "/logo-embale.png"]
  },
  {
    name: "Haylander",
    logo: "/logo-haylander.png",
    year: "2024",
    decoration: "/bg-institutional.png",
    rotation: "rotate-[15deg]",
    bright: true,
    invert: false,
    category: 'case',
    description: "Escritório de contabilidade focado em saúde financeira empresarial e gestão fiscal.",
    instagram: "https://www.instagram.com/ohaylander/",
    instagramPostUrl: "https://www.instagram.com/p/DStEhRBjquS/",
    gallery: ["/projects/haylander-contabilidade-instagram.png", "/projects/haylander-contabilidade-instagram.png"]
  },
  //{
   // name: "Hotel Metrópole",
   // logo: "/logo-hotel-metropole.png",
   // year: "2024",
   // decoration: "/bg-optimization.png",
   // rotation: "rotate-[25deg]",
   // bright: true,
   // invert: true,
   // category: 'case',
   // description: "Hotel tradicional oferecendo hospitalidade e conforto no centro da cidade.",
   // instagram: "https://www.instagram.com/hotelmetropolebh/",
   // instagramPostUrl: "https://www.instagram.com/p/DQbq_RKk6IH/",
   // location: "Belo Horizonte - MG",
   // gallery: ["/projects/hotel-metropole-instagram.png", "/projects/hotel-metropole-instagram.png"]
  //},
  {
    name: "MegaConcursos",
    logo: "/logo-mega.png",
    year: "2024",
    decoration: "/bg-ecommerce.png",
    rotation: "rotate-[10deg]",
    bright: false,
    invert: false,
    category: 'partnership',
    description: "Plataforma especializada em preparação para concursos públicos.",
    gallery: ["/logo-mega.png", "/logo-mega.png", "/logo-mega.png"]
  },
  {
    name: "Motel Queen",
    logo: "/logo-motel-queen.png",
    year: "2024",
    decoration: "/bg-institutional.png",
    rotation: "rotate-[40deg]",
    bright: false,
    invert: false,
    category: 'case',
    description: "Motel que oferece suítes temáticas e conforto com foco em privacidade.",
    instagram: "https://www.instagram.com/queen_motel/",
    instagramPostUrl: "https://www.instagram.com/p/DSp41uOkTZu/",
    location: "Belo Horizonte - MG",
    gallery: ["/projects/motel-queen-instagram.png", "/projects/motel-queen-instagram.png"]
  },
  {
    name: "Mr. Fit",
    logo: "/logo-mr-fit.png",
    year: "2024",
    decoration: "/bg-optimization.png",
    rotation: "rotate-[5deg]",
    bright: false,
    invert: false,
    category: 'partnership',
    description: "Franquia de alimentação saudável, oferecendo refeições equilibradas e fit.",
    instagram: "https://www.instagram.com/mrfitfranquiasoficial/",
    website: "https://www.mrfit.com.br/",
    location: "Pampulha - MG",
    gallery: ["/projects/mr-fit-website.png", "/projects/mr-fit-website.png"]
  },
  {
    name: "Rei Da Fruta",
    logo: "/logo-rei-da-fruta.png",
    year: "2024",
    decoration: "/bg-ecommerce.png",
    rotation: "rotate-[50deg]",
    bright: false,
    invert: false,
    category: 'case',
    description: "Hortifruti que fornece frutas frescas e selecionadas com qualidade garantida.",
    instagram: "https://www.instagram.com/rei_dafruta/",
    instagramPostUrl: "https://www.instagram.com/p/C23Jzw9Pcmk/", // Placeholder: Founder's post ID used as temporary
    gallery: ["/logo-rei-da-fruta.png", "/logo-rei-da-fruta.png", "/logo-rei-da-fruta.png"]
  },
  {
    name: "Zander",
    logo: "/logo-zander.png",
    year: "2024",
    decoration: "/bg-institutional.png",
    rotation: "rotate-[12deg]",
    bright: true,
    invert: true,
    category: 'partnership',
    description: "Soluções em identificação e fabricação de etiquetas adesivas personalizadas.",
    instagram: "https://www.instagram.com/zanderetiquetas/",
    website: "https://zanderetiquetas.com.br/",
    gallery: ["/projects/zander-etiquetas-website.png", "/projects/zander-etiquetas-instagram.png"]
  }
];
