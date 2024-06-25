import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Schulte Table",
  description: "Focus. Search. Find.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
