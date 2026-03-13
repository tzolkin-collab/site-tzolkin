import type { Metadata } from "next";
import { Archivo, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/client/shared/providers/ThemeProvider";
import { SmoothScrolling } from "@/client/shared/ui/SmoothScrolling";
import { PromoBanner } from "@/client/shared/ui/PromoBanner";
import { ScrollToTop } from "@/client/shared/ui/ScrollToTop";
import "./globals.css";

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
  title: "VOLTICS",
  description: "Sofisticação em cada linha.",
  icons: {
    icon: '/logoVoltics.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${montserrat.variable} antialiased bg-background text-foreground overflow-x-hidden relative w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <ScrollToTop />
          <PromoBanner />
          <SmoothScrolling />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
