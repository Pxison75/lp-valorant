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
  title: "Pxison | João Pedro • Streamer & Radiant Player de Valorant",
  description:
    "Site oficial do streamer de Valorant Pxison (João Pedro). Mira oficial, sensibilidade, estatísticas de Radiant, pool de agentes, setup e lives na Twitch.",
  keywords: [
    "Pxison",
    "João Pedro",
    "Valorant",
    "Twitch",
    "Radiant",
    "Jett",
    "Reyna",
    "Mira Valorant",
    "Sensibilidade Valorant",
    "Streamer",
  ],
  authors: [{ name: "João Pedro (Pxison)" }],
  openGraph: {
    title: "Pxison | João Pedro • Streamer & Radiant Player de Valorant",
    description: "Lives todos os dias na Twitch, mira oficial, stats Radiant e clutches insanos.",
    url: "https://twitch.tv/pxison",
    siteName: "Pxison Valorant",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-screen bg-[#090c10] text-zinc-100 font-sans">{children}</body>
    </html>
  );
}
