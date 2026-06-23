'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const STEP_MAP: Record<string, { id: string, title: string }> = {
  '/': { id: '01', title: 'The Entry' },
  '/apply/details': { id: '02', title: 'Casting Details' },
  '/details': { id: '02', title: 'Casting Details' },
  '/apply/specs': { id: '03', title: 'The Specs' },
  '/apply/portfolio': { id: '04', title: 'The Showcase' }
}

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const currentStep = STEP_MAP[pathname] || STEP_MAP['/']

  return (
    <nav className="w-full px-4 md:px-10 py-4 md:py-6 relative z-50">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 md:gap-3 serif text-base md:text-xl tracking-widest font-bold focus-ring rounded-sm">
          <img src="/assets/logo.jpeg" alt="Logo" className="w-10 md:w-12 h-10 md:h-12 object-contain" />
          <span>ROLEX <br/><span className="text-[8px] md:text-[10px] font-light tracking-[0.35em] uppercase opacity-70">AGENCY</span></span>
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-[11px] tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">About</Link>
            <div className="text-[11px] tracking-widest uppercase opacity-60">
              {currentStep.id} / 04 — {currentStep.title}
            </div>
          </div>

          <div className="md:hidden relative">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-full border border-black/10 bg-white/70 glass flex items-center justify-center focus-ring"
            >
              <svg className="w-5 h-5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </button>
            
            {menuOpen && (
              <div className="absolute right-0 mt-3 w-56 z-50 glass soft-shadow rounded-2xl border border-black/10 p-4">
                <Link href="/about" className="block px-3 py-2 text-[11px] tracking-widest uppercase opacity-80">About</Link>
                <div className="mt-3 px-3 text-[11px] tracking-widest uppercase opacity-60">
                  {currentStep.id} / 04 — {currentStep.title}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}