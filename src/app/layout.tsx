import { Inter } from "next/font/google";

import { PrismJSThemeLink, cn } from "@/framework";

import { Fonts } from "./fonts";
import "./globals.css";
import * as styles from "./layout.styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "conwy",
  description: "Homepage of Jonathan Conway",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(styles.html, inter.className)}>
      <head>
        <Fonts />

        <PrismJSThemeLink />
      </head>
      <body className={cn(styles.body)}>{children}</body>
    </html>
  );
}
