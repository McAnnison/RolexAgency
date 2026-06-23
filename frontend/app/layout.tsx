import type { Metadata } from 'next'
import { Inter, Cinzel, Space_Grotesk } from 'next/font/google'
import '@/globals.css'
import Navbar from './Navbar'
import ProgressBar from './ProgressBar'

const inter = Inter({ subsets: ['latin'] })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Rollex Multimedia Agency - Fashion Gateway',
  description: 'Digital onboarding platform for aspiring talent.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cinzel.variable} ${spaceGrotesk.variable} bg-sand text-ink`}>
        <div className="page-bg" aria-hidden="true">
          <div className="bg-grid"></div>
          <div className="orb orb-a"></div>
          <div className="orb orb-b"></div>
          <div className="orb orb-c"></div>
        </div>
        <Navbar />
        <ProgressBar />
        {children}
      </body>
    </html>
  )
}
