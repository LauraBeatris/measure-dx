import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: 'Measure DX',
  description: 'Measure the developer experience offered by different tools.',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-gray-50 text-black antialiased dark:bg-gray-800  dark:text-white">
        {children}
      </body>
    </html>
  );
}
