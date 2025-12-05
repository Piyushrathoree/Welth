import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Welth",
    description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
    return (
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning>
          <head>
            <link rel="icon" href="/logo-sm.png" sizes="any" />
          </head>
          <body className={`${inter.className}`}>
            <ThemeProvider>
              <Navbar  />

              <main className="min-h-screen">{children}</main>
              <Toaster richColors />

            
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    );
}
