'use client'
import { Inter } from "next/font/google"
import { useLineLiffLogin } from '@/hooks/useLineLiffLogin'
import { FullScreenLoading } from '@/components/FullScreenLoading'
import './globals.css'
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ThemeProvider"


export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isLoggedIn } = useLineLiffLogin()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>pubup cloud</title>
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <main className="mx-auto max-w-md w-full relative bg-neutral-800 flex min-h-[100dvh] shadow-lg">
          {!isLoggedIn ? (
            <FullScreenLoading />
          ) : (
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          )}
        </main>
      </body>
    </html>
  )
}
