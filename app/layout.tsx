import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viaje a La Palma",
  description: "Itinerario compartible del viaje a La Palma",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}