import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RepresentU - Empowering Communities Through Strategic Planning',
  description: 'RepresentU provides comprehensive services including strategic planning, event services, content creation, social media management, grant services, and website design to help organizations thrive.',
  keywords: 'strategic planning, event services, content creation, social media, grants, website design, community empowerment',
  authors: [{ name: 'RepresentU' }],
  openGraph: {
    title: 'RepresentU - Empowering Communities Through Strategic Planning',
    description: 'RepresentU provides comprehensive services including strategic planning, event services, content creation, social media management, grant services, and website design to help organizations thrive.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {/* Skip to main content link for screen readers */}
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Skip to main content
            </a>
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}
