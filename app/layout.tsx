import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from './contexts/ThemeContext'
import { Body } from './Body'


export const metadata: Metadata = {
  title: 'Clerk Custom Pages',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider>
          <Body>
            {children}
          </Body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  )
}
