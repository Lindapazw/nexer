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
  title: "Nexer - Soluciones de Energía Sostenible",
  description:
    "Somos una firma independiente especializada en la identificación y desarrollo de proyectos innovadores que hacen realidad la Transición Energética",
  openGraph: {
    title: "Nexer - Soluciones de Energía Sostenible",
    description:
      "Somos una firma independiente especializada en la identificación y desarrollo de proyectos innovadores que hacen realidad la Transición Energética",
    type: "website",
    url: "https://nexer.es",
    images: [
      {
        url: neosol.src,
        width: 800,
        height: 600,
        alt: "Soluciones de Energía Sostenible por Nexer",
      },
      {
        url: hita_tardio.src,
        width: 800,
        height: 600,
        alt: "Soluciones de Energía Sostenible por Nexer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexer - Soluciones de Energía Sostenible",
    description:
      "Somos una firma independiente especializada en la identificación y desarrollo de proyectos innovadores que hacen realidad la Transición Energética",
    images: [neosol.src, hita_tardio.src],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "energía sostenible",
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
