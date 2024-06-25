import "./globals.css";
import "./globalicons.css";
import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";
import ServiceProvider from "@components/Providers/ServiceProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-urbanist">
        <ServiceProvider>
          {children}
          <Toaster />
        </ServiceProvider>
      </body>
    </html>
  );
}
