import type { Metadata } from "next";
import "../globals.css";
import "../globalicons.css";

import Navbar from "@components/common/Navbar";
import Footer from "@components/common/Footer";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
          <Navbar />
            {children}
          <Footer />
    </>
  );
}
