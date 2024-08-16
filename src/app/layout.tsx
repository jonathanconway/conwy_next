import { Inter } from "next/font/google";

import { FavIcons } from "@/components";
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
        <FavIcons />

        <Fonts />

        <PrismJSThemeLink />

        <script src="//embed.typeform.com/next/embed.js" defer></script>
      </head>
      <body className={cn(styles.body)}>{children}</body>
    </html>
  );
}
