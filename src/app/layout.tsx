import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider, Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salon Sys Shop",
  description:
    "Sistema gerenciador de clientes em área e agendamento exclusivos com Salon Sys Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <AuthProvider>
            
            {children}
            <Footer />
          </AuthProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
