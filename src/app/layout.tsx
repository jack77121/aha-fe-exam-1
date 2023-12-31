import './globals.css'

import React from 'react'

import type { Metadata } from 'next'
import { Inter, Ubuntu } from 'next/font/google'
import localFont from 'next/font/local'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ubuntu',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
})

const customPwdUbuntu = localFont({
  src: [
    { path: './fonts/Ubuntu-Regular.woff', weight: '400' },
    { path: './fonts/Ubuntu-Regular.woff2', weight: '400' },
  ],
  display: 'fallback',
  variable: '--font-custom-pwd-ubuntu',
})

export const metadata: Metadata = {
  title: 'Aha-FE-Exam',
  description: 'Aha-FE-Exam-1 Jack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${inter.variable} ${customPwdUbuntu.variable}`}
      >
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}
