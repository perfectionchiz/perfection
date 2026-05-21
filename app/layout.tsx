import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/navbar/menu";
import { saansTrial } from "@/lib/font/saanTrial";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Perfection // Creative Portfolio",
  description: "Editorial, movement, and campaign photography by Perfection. Based in Lagos // Remote.",
  keywords: ["Photography", "Editorial Campaign", "Movement Direction", "Creative Portfolio", "Lagos Photographer"],
  authors: [{ name: "Perfection" }],
  openGraph: {
    title: "Perfection // Creative Portfolio",
    description: "Editorial, movement, and campaign photography by Perfection.",
    url: "https://yourdomain.com", 
    siteName: "Perfection Portfolio",
    locale: "en_NG",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${saansTrial.variable} h-full no-scrollbar`}>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-300 no-scrollbar">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Menu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}