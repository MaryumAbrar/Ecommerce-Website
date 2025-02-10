import type { Metadata } from "next";
import "./globals.css";
import { Lato, Josefin_Sans } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'], // Customize as needed
});

export const metadata: Metadata = {
  title: "Hekto",
  description: "An Ecommerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.className} ${lato.className}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
