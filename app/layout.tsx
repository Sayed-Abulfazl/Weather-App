import type { Metadata } from "next";
import "./globals.css";

import  { ThemeFuntion } from './context/ThemeContext'


export const metadata: Metadata = {
  title: "Weather App",
  description: "Created with Next.JS, TailwindCSS & TypeScript --- V_1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <main className="">
          <ThemeFuntion>
            {children}
          </ThemeFuntion>
        </main>

      </body>
    </html>
  );
}
