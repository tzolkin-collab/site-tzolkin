import type { Metadata } from "next";
import { Archivo, Montserrat, Geist } from "next/font/google";
import { ThemeProvider } from "@/client/shared/providers/ThemeProvider";
import { SmoothScrolling } from "@/client/shared/ui/SmoothScrolling";
import { ScrollToTop } from "@/client/shared/ui/ScrollToTop";
import { FloatingChatButton } from "@/client/shared/ui/FloatingChatButton";
import { TrackingProvider } from "@/client/shared/ui/analytics/TrackingProvider";
import { ChatProvider } from "@/client/shared/providers/ChatProvider";
import { ChatWindow } from "@/client/pages/consultor/ChatWindow";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"], // Enable variable width axis
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tzolkin | Sofisticação em cada linha",
  description: "Desenvolvimento de softwares, aplicativos e websites com design de alto nível. Transforme a presença digital da sua empresa com a Tzolkin.",
  icons: {
    icon: '/logotzolkin.svg',
    shortcut: '/logotzolkin.svg',
    apple: '/logotzolkin.svg',
  },
  openGraph: {
    title: "Tzolkin | Sofisticação em cada linha",
    description: "Desenvolvimento de softwares, aplicativos e websites com design de alto nível.",
    siteName: "Tzolkin",
    images: [
      {
        url: "/logotzolkin.svg",
        width: 800,
        height: 600,
        alt: "Tzolkin Logo"
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tzolkin | Sofisticação em cada linha",
    description: "Desenvolvimento de softwares, aplicativos e websites com design de alto nível.",
    images: ["/logotzolkin.svg"],
  },
  keywords: ["desenvolvimento web", "aplicativos", "software", "design", "tzolkin", "tecnologia"],
  authors: [{ name: "Tzolkin" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body
        suppressHydrationWarning
        className={`${archivo.variable} ${montserrat.variable} antialiased bg-background text-foreground overflow-x-hidden relative w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <TrackingProvider />
          <ScrollToTop />
          <SmoothScrolling />
          <ChatProvider>
            <FloatingChatButton />
            <ChatWindow />
            {children}
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
