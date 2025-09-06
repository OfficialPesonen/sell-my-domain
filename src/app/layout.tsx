import { Geist } from "next/font/google";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { getDomain } from "@/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const generateMetadata = async (): Promise<Metadata> => {
  const domain = await getDomain();

  return {
    title: `${domain} is for sale`,
    description: `${domain} is for sale. Buy it now!`,
  };
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{props.children}</body>
    </html>
  );
}
