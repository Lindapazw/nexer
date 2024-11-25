import { Toaster } from "@/components/ui/toaster";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "locomotive-scroll/dist/locomotive-scroll.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import hita_tardio from "../../public/images/project_hita_tardio.jpg";
import neosol from "../../public/images/project_neosol.jpg";
import "./globals.css";

dayjs.locale("es");

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nexer - Soluciones de Energía Sustentable",
  description:
    "Nexer es líder en proporcionar soluciones de energía sustentable, ofreciendo tecnologías innovadoras para empresas y hogares que buscan reducir su huella de carbono. Con un enfoque en la eficiencia energética y la sostenibilidad, Nexer ayuda a transformar el consumo de energía a través de paneles solares, sistemas de almacenamiento de energía, y consultoría especializada para maximizar el uso de recursos renovables.",
  openGraph: {
    title: "Nexer - Soluciones de Energía Sustentable",
    description:
      "Descubre las soluciones de energía sustentable de Nexer, diseñadas para ayudar a empresas y hogares a reducir su impacto ambiental.",
    type: "website",
    url: "https://nexer.es",
    images: [
      {
        url: neosol.src,
        width: 800,
        height: 600,
        alt: "Soluciones de Energía Sustentable por Nexer",
      },
      {
        url: hita_tardio.src,
        width: 800,
        height: 600,
        alt: "Soluciones de Energía Sustentable por Nexer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexer - Soluciones de Energía Sustentable",
    description:
      "Únete a Nexer para hacer el mundo más verde con soluciones energéticas innovadoras.",
    images: [neosol.src, hita_tardio.src],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "energía sustentable",
    "soluciones de energía",
    "paneles solares",
    "eficiencia energética",
    "energía renovable",
    "Nexer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" id="home">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Toaster />
      </body>
    </html>
  );
}
