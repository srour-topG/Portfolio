import { ReactNode } from "react";
import { inter } from "@/helpers/fonts";
import { DefaultMetadata } from "@/helpers/metadata";

import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = DefaultMetadata;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} scroll-smooth antialiased scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}
