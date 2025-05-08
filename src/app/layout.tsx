import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/ui/theme-button";
import { GraphProvider } from "@/contexts/graph-context";
import { HoverCard1 } from "@/components/hover-card-1";

const baseTitle = "Weather Dashboard";

export const metadata: Metadata = {
  title:
    process.env.NODE_ENV === "development" ? `[DEV] ${baseTitle}` : baseTitle,
  description: "A demo weather dashboard",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GraphProvider>
            <div className="flex justify-between items-center p-4 min-w-full">
              <HoverCard1 />
              <ModeToggle />
            </div>
            {children}
          </GraphProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
