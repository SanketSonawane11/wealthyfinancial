import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./Components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Wealthy Financial",
  description: "Serving with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SpeedInsights />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
