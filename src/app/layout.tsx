import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { Layout } from "@/components";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "conwy",
  description: "Homepage of Jonathan Conway",
};

export default function RootLayout(props: { children: ReactNode }) {
  return <Layout {...props} />;
}
