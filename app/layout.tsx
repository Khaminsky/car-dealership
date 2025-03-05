import type { Metadata } from "next";
import { Geist, Geist_Mono, Krub} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const krub = Krub({ 
  subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-krub" });

export const metadata: Metadata = {
  title: "Car Dealers",
  description: "Your second hand car dealer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <body className={`${krub.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
