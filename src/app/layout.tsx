import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "JMT - Jeen Mata Traders | Premium Corporate Gifting & Promotional Products",
  description: "JMT (Jeen Mata Traders) - Import & export of premium corporate gifting products including bags, calendars, wall hangings, fridge magnets & more. Est. 2022.",
  keywords: ["JMT", "Jeen Mata Traders", "corporate gifting", "promotional products", "bags", "calendars", "fridge magnets"],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
