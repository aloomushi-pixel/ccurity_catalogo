import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://catalogo.ccurity.com.mx'),
  title: {
    default: "CCURITY | Catálogo de Servicios y Mano de Obra Especializada",
    template: "%s | CCURITY B2B"
  },
  description: "Explora nuestro catálogo de mano de obra especializada y servicios integrales para infraestructura de seguridad, redes y cableado estructurado.",
  keywords: ["servicios de seguridad", "mano de obra", "instalación de redes", "cableado estructurado", "b2b", "ccurity"],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://catalogo.ccurity.com.mx",
    title: "CCURITY | Catálogo de Servicios",
    description: "Catálogo exclusivo B2B de mano de obra especializada para integradores de infraestructura.",
    siteName: "CCURITY B2B",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
