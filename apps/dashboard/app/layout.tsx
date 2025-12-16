import type { Metadata } from "next";
import { Toast } from "@repo/ui/src/base-ui";
import ToastList from "@repo/ui/src/components/toastList/toastList";

import "./globals.css";

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
    <html lang="fa" dir="rtl">
      <head>
        {/* Static title to avoid dev-time flicker to "localhost" */}
        <title>Modular Dashboard</title>
        <meta
          name="description"
          content="A modular Next.js dashboard built with Turborepo"
        />
      </head>
      <body>
        <Toast.Provider>
          <div className="root">
            {children}
          </div>

          <Toast.Portal>
            <Toast.Viewport className={"fixed w-96 bottom-3 left-1/2 -translate-x-1/2 top-auto"}>
              <ToastList />
            </Toast.Viewport>
          </Toast.Portal>
        </Toast.Provider>
      </body>
    </html>
  );
}

