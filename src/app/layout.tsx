import type { Metadata } from "next";
import { Archivo, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/client/shared/providers/ThemeProvider";
import { SmoothScrolling } from "@/client/shared/ui/SmoothScrolling";
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
  title: "HUBDi",
  description: "Design minimalista e sofisticado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <SmoothScrolling />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
