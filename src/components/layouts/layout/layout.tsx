import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { Head } from "@/components";
import { cn } from "@/framework";

import * as styles from "./layout.styles";

const inter = Inter({ subsets: ["latin"] });

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(styles.html, inter.className)}>
      <Head />

      <body className={cn(styles.body)}>{children}</body>
    </html>
  );
}
