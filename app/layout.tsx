import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const IG_URL = "https://www.instagram.com/lavanderiapassadoriajosysantos";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Josy Santos — Lavanderia e Passadoria em São Paulo (Zona Norte)",
  description:
    "Lavanderia e passadoria na Zona Norte de São Paulo. Roupas, edredons, malas e ternos com cuidado. Pacote mensal para hotéis. Nota 5,0 no Google com 128 avaliações.",
  robots: { index: false, follow: false }, // preview — liberar no domínio real
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Lavanderia e Passadoria Josy Santos",
    title: "Josy Santos — Lavanderia e Passadoria",
    description:
      "Sua roupa limpa, passada e embalada na Zona Norte. Nota 5,0 no Google com 128 avaliações.",
    locale: "pt_BR",
    images: [
      {
        url: "/images/ig/post-10.jpg",
        width: 501,
        height: 640,
        alt: "Josy Santos com pacotes de toalhas e lençóis da lavanderia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josy Santos — Lavanderia e Passadoria",
    description:
      "Sua roupa limpa, passada e embalada na Zona Norte. Nota 5,0 no Google com 128 avaliações.",
    images: ["/images/ig/post-10.jpg"],
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  name: "Lavanderia e Passadoria Josy Santos",
  description:
    "Lavanderia e passadoria: roupas, edredons, malas e ternos. Pacote mensal para hotéis e pousadas.",
  telephone: "+5511933532444",
  priceRange: "R$ 120,00/mês",
  currenciesAccepted: "BRL",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua do Engenho, 244",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: "São Paulo" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "08:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday"],
      opens: "08:30",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "128" },
  sameAs: [IG_URL],
  ...(process.env.NEXT_PUBLIC_SITE_URL
    ? { url: SITE_URL, image: `${SITE_URL}/images/ig/post-10.jpg` }
    : {}),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        {children}
      </body>
    </html>
  );
}
