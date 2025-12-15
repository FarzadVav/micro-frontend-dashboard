import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Modular Dashboard",
    template: "%s | Modular Dashboard",
  },
  description: "A modular Next.js dashboard built with Turborepo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Static title to avoid dev-time flicker to "localhost" */}
        <title>Modular Dashboard</title>
        <meta
          name="description"
          content="A modular Next.js dashboard built with Turborepo"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

