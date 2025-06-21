import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientOnly from '../components/utils/ClientOnly';
import LoadingScreen from '../components/ui/LoadingScreen';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "FLUXO - AI Automation Solutions",
  description: "Transform Industries with AI-Driven Automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-white">
        <ClientOnly>
          <LoadingScreen />
        </ClientOnly>
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 