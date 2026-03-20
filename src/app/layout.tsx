import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { TimerProvider } from "@/contexts/TimerContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <ThemeProvider>
          <TimerProvider>
            {children}
          </TimerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
