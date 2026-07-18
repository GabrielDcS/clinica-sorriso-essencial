import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const body = Manrope({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Clínica Sorriso Essencial | Dentista em Salvador do Sul – RS",
  description: "Atendimento odontológico acolhedor em Salvador do Sul. Prevenção, clareamento, ortodontia, implantes e odontopediatria. Agende sua avaliação.",
  keywords: ["dentista Salvador do Sul", "clínica odontológica", "implantes", "clareamento dental", "ortodontia"],
  openGraph: { title: "Clínica Sorriso Essencial", description: "Odontologia gentil para adultos e crianças em Salvador do Sul – RS.", type: "website", locale: "pt_BR" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={body.variable}>{children}</body></html>;
}
