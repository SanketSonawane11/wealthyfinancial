import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./Components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
