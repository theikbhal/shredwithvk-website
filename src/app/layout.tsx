import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShredwithVK | Fat Loss & Body Recomposition Journey",
  description: "Transform from 36% body fat to 14%. Real fat loss journey - workouts, diet tips, mindset. 44.7K+ subscribers. Join the transformation.",
  keywords: ["fat loss", "body recomposition", "fitness", "workout", "diet", "transformation", "weight loss"],
  authors: [{ name: "ShredwithVK" }],
  openGraph: {
    title: "ShredwithVK | Fat Loss & Body Recomposition Journey",
    description: "36% Body Fat → 14% | 85 kg → 62 kg. Real transformation, no shortcuts.",
    url: "https://shredwithvk.com",
    siteName: "ShredwithVK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShredwithVK | Fat Loss & Body Recomposition Journey",
    description: "36% Body Fat → 14% | 85 kg → 62 kg. Real transformation, no shortcuts.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
