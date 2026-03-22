import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { TimerProvider } from "@/contexts/TimerContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ProProvider } from "@/contexts/ProContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tomatick.app"),
  title: "Tomatick - Online Pomodoro Timer for Focus & Productivity",
  description: "A beautiful, free online Pomodoro timer to boost your focus and productivity. No sign-up required. Customize your work and break sessions.",
  keywords: ["pomodoro timer", "focus timer", "productivity timer", "study timer", "online timer"],
  openGraph: {
    title: "Tomatick - Online Pomodoro Timer",
    description: "Boost your focus with a beautiful Pomodoro timer. Free, no sign-up required.",
    url: "https://tomatick.app",
    siteName: "Tomatick",
    type: "website",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Tomatick',
  url: 'https://tomatick.app',
  description: 'A beautiful, free online Pomodoro timer to boost your focus and productivity.',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3334694024808500"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geist.className} flex flex-col min-h-screen`}>
        <ThemeProvider>
          <ProProvider>
            <TimerProvider>
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </TimerProvider>
          </ProProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
