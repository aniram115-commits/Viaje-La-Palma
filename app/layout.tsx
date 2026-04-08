import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viaje a La Palma",
  description: "Itinerario compartible del viaje a La Palma",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
