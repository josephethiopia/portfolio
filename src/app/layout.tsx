import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


export const metadata: Metadata = {
  title: "Yoseph Ashenafi | Portfolio",
  description: "",
  icons: {
    icon: [
      {
        url: "/favicon.ico?v=2",
        href: "/favicon.ico?v=2",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth dark">
      <body
        className={twMerge(
          "bg-gray-950 text-white antialiased font-inter",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
