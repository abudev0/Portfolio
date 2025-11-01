import type React from "react"
import "@/app/globals.css"

import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "O'zbek, Ozbek, Uzbek FullStack Developer | Abdulazizbek Abdusodiqov (abu-dev, abudev, abu dev)",
  description:
    "O'zbek, Ozbek, Uzbek fullstack (full stack, full-stack) dasturchi. Abdulazizbek Abdusodiqov (abu-dev, abudev, abu dev) — zamonaviy veb va backend dasturchi. Next.js, React, Node.js, NestJS va boshqa texnologiyalar.",
  keywords: [
    "O'zbek",
    "Ozbek",
    "Uzbek",
    "FullStack Developer",
    "Full Stack Developer",
    "Full-Stack Developer",
    "fullstack",
    "full stack",
    "full-stack",
    "Abdulazizbek Abdusodiqov",
    "Abdusodiqov",
    "Abdulaziz-dev",
    "abu-dev",
    "abu dev",
    "abudev",
    "abdulazizdev",
    "abdulaziz dev",
    "abdulaziz",
    "dev",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
  ],
  authors: [{ name: "Abdulazizbek Abdusodiqov", url: "https://github.com/abudev0" }],
  creator: "Abdulazizbek Abdusodiqov",
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: "https://abdulazizdev.uz",
    title: "O'zbek, Ozbek, Uzbek FullStack Developer | Abdulazizbek Abdusodiqov (abu-dev, abudev, abu dev)",
    description:
      "O'zbek, Ozbek, Uzbek fullstack (full stack, full-stack) dasturchi. Abdulazizbek Abdusodiqov (abu-dev, abudev, abu dev) — zamonaviy veb va backend dasturchi. Next.js, React, Node.js, NestJS va boshqa texnologiyalar.",
    siteName: "Abdulaziz-dev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "O'zbek, Ozbek, Uzbek FullStack Developer | Abdulazizbek Abdusodiqov (abu-dev, abudev, abu dev)",
    description:
      "O'zbek, Ozbek, Uzbek fullstack (full stack, full-stack) dasturchi. Abdulazizbek Abdusodiqov (abu-dev, abudev, abu dev) — zamonaviy veb va backend dasturchi. Next.js, React, Node.js, NestJS va boshqa texnologiyalar.",
    creator: "@dev_abu",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://abdulazizdev.uz" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
