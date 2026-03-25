import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "../lib/utils";
import AdminLayout from "@/components/layouts/AdminLayout";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppProvider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard TEST UI",
  description: "created by pencilgonn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={cn(geistSans.variable, geistMono.variable, "antialiased")}
    >
      <body
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <div className="h-screen overflow-hidden p-15 flex max-w-380 mx-auto">
          <TooltipProvider>
            <AppProvider>
              <AdminLayout>{children}</AdminLayout>
            </AppProvider>
          </TooltipProvider>
        </div>
      </body>
    </html>
  );
}
