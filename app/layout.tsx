import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  metadataBase: new URL("https://nuriaa05.github.io/portafolio"),
  title: "Nuria Maitena Gonzalez | Portfolio",
  description: "Portfolio de Nuria Maitena Gonzalez, desarrolladora frontend.",
  icons: {
    icon: [
      { url: "/icon/svg-white.svg", type: "image/svg+xml" },
      { url: "/icon/32x32-white.png", sizes: "32x32", type: "image/png" },
      { url: "/icon/48x48-white.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/icon/180x180-color.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Nuria Maitena Gonzalez | Portfolio",
    description: "Portfolio de Nuria Maitena Gonzalez, desarrolladora frontend.",
    images: [
      {
        url: "/icon/OG-Nuria.png",
        width: 1200,
        height: 630,
        alt: "Nuria Maitena Gonzalez",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-zinc-900">
      <body>
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
