import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientOnly from '../components/utils/ClientOnly';
import LoadingScreen from '../components/ui/LoadingScreen';

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
    <html lang="en" style={{ fontFamily: 'SF Pro, SF Pro Display, SF Pro Text, system-ui, sans-serif', fontWeight: 700 }}>
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
