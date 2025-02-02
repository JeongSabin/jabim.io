import type { Metadata } from "next";
import "./globals.css";
import "../styles/reset.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Providers from "@/components/Provider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://jabim.io"),
  title: {
    default: "요모조모",
    template: "%s | 요모조모",
  },
  description: "사소한 거 기록하기",
  openGraph: {
    title: "요모조모",
    description: "사소한 거 기록하기",
    type: "website",
    siteName: "요모조모",
    url: "https://jabim.io",
    locale: "ko_KR",
    images: [
      {
        url: "/img/logo.jpg",
        width: 800,
        height: 600,
        alt: "site logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "요모조모",
    description: "사소한 거 기록하기",
    images: [
      {
        url: "/img/logo.jpg",
        alt: "site logo",
      },
    ],
  },
};

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "요모조모",
              url: "https://sihun.dev",
            }),
          }}
        />
      </head>
      <body className={pretendard.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
