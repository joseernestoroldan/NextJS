import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./Header";
import { ReactNode, FC } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Intercepting Routes Modal example",
  description: "An example showing Next.js 13's Intercepting Routes feature.",
};

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children, modal }) => {
  return (
    <html>
      <body>
        <Header />
        <main className="container p-4">{children}</main>
        {modal}
      </body>
    </html>
  );
};

export default RootLayout;
