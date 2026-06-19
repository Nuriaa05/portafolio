import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Nuria Maitena Gonzalez | Portfolio",
  description: "Portfolio de Nuria Maitena Gonzalez, desarrolladora frontend.",
  icons: {
    icon: "/placeholder-logo.svg",
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
