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
  // icons: {
  //   icon: [
  //     {
  //       url: '/favicon-32x32.png',
  //       sizes: '32x32'
  //     },
  //     {
  //       url: '/favicon-16x16.png',
  //       sizes: '16x16',
  //     },
  //   ],
  //   apple: '/apple-icon.png',
  //   other: {
  //     rel: 'apple-touch-icon',
  //     url: '/apple-touch-icon.png',
  //   },
  // },
  // manifest: '/site.webmanifest',
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
        <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll">
          {children}
        </div>
      </body>
    </html>
  );
}
