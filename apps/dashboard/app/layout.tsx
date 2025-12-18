import type { Metadata } from "next";

import "./globals.css";
import { ThemeScript, Toaster } from "@repo/ui/src/components";

export const metadata: Metadata = {
  title: {
    default: "Modular Dashboard",
    template: "Modular Dashboard",
  },
  description: "A modular Next.js dashboard built with Turborepo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <title>Modular Dashboard</title>
        <meta
          name="description"
          content="A modular Next.js dashboard built with Turborepo"
        />

        <ThemeScript />
      </head>
      <body>
        <div className="root">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}

