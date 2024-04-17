import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Measure DX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen min-w-screen">{children}</body>
    </html>
  );
}
