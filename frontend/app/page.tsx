'use client'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center relative overflow-hidden section-animate">
      <div className="absolute inset-0 z-0">
        <img src="/assets/landingPage.jpg" alt="Models" className="w-full h-full object-cover brightness-[0.4]" />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="flex justify-center mb-4">
          <span className="badge">Casting 2026 open</span>
        </div>
        <h1 className="serif text-4xl md:text-8xl mb-4 text-white hero-text-shadow leading-tight">
          UNLEASH YOUR<br />
          <span className="italic text-transparent bg-clip-text accent-gradient hero-accent-shadow">POTENTIAL</span>
        </h1>
        <p className="text-xs md:text-sm font-light tracking-[0.28em] mb-12 text-white/90 uppercase hero-sub-shadow">
          Apply to the future of fashion
        </p>
        <Link
          href="/details"
          className="inline-block px-12 py-5 rounded-full accent-gradient text-white uppercase text-xs font-bold tracking-[0.2em] hover:scale-105 transition-all duration-300"
        >
          Begin Application
        </Link>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-[10px] tracking-[0.28em] uppercase text-white/80">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gold"></span>Editorial</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-copper"></span>Runway</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white"></span>Digital</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/90 opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </main>
  )
}