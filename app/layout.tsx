import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Footer } from "@/components/footer";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";

// ✅ Using next/font/local or the Geist npm package instead of Google Fonts
// to fix the "Failed to download Geist from Google Fonts" network error.
// If you have `geist` installed via npm, uncomment the lines below:
// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "Ken J Schmidt - Loan Officer | Chicago, IL",
  description:
    "Premier mortgage lending professional with 25+ years of experience. Specializing in construction loans, jumbo financing, and self-employed borrowers.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/img/logo.png", media: "(prefers-color-scheme: light)" },
      { url: "/img/logo.png", media: "(prefers-color-scheme: dark)" },
      { url: "/img/logo.png", type: "image/svg+xml" },
    ],
    apple: "/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-sans antialiased  min-h-screen flex flex-col">
                <NavigationMenuDemo />
        <main className="flex-1 ">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}