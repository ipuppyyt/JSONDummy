import { garetbook, garetregular, garetmedium, garetbold, garetheavy } from '@assets/fonts';
import { metadata as Meta } from "@metadata";
import "@assets/styles/globals.css";
import { Metadata } from "next";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = Meta;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${garetbook.variable} ${garetregular.variable} ${garetmedium.variable} ${garetbold.variable} ${garetheavy.variable}`}>
      <body className='bg-black text-white'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
