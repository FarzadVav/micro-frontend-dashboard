import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavigationShell } from "@repo/config";
import { Providers } from "./providers";
import { Toast } from "@repo/ui/src/base-ui";
import ToastList from "@repo/ui/src/components/toastList/toastList";

import "./globals.css";

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
          <Toast.Provider>
            <div className="min-h-screen bg-background">
              <NavigationShell />
              <main className="container mx-auto px-4 py-8">{children}</main>
            </div>

            <Toast.Portal>
              <Toast.Viewport className={"fixed w-96 bottom-3 left-1/2 -translate-x-1/2 top-auto"}>
                <ToastList />
              </Toast.Viewport>
            </Toast.Portal>
          </Toast.Provider>
        </Providers>
      </body>
    </html>
  );
}

