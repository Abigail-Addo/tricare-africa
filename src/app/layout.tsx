import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Tricare Africa',
    default: 'Tricare Africa',
    absolute: 'Tricare Africa | A Revolutionary technology'
  },
  description: "A Revolutionary technology",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"

    >
      <body className={inter.className}>
        <div className="w-full h-full overflow-x-hidden overflow-y-scroll">
          {children}
        </div>
      </body>
    </html>
  );
}
