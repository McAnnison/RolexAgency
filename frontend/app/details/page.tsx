'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Details() {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/apply/specs')
  }

  return (
    <section id="step2" className="min-h-[100svh] flex items-center justify-center section-sand">
      <form onSubmit={handleSubmit} className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h2 className="serif text-3xl md:text-4xl mb-2 text-ink">Tell Us About<br />Yourself</h2>
          <p className="text-[11px] tracking-[0.24em] uppercase opacity-60 mb-8">Casting details</p>
          <div className="space-y-6">
            <input 
              id="fullName" 
              type="text" 
              placeholder="Full Name" 
              className="focus-ring w-full bg-transparent border-b border-black/15 py-3 text-ink focus:border-copper focus:outline-none transition-colors"
            />
            <input 
              id="email" 
              type="email" 
              placeholder="Email Address" 
              className="focus-ring w-full bg-transparent border-b border-black/15 py-3 text-ink focus:border-copper focus:outline-none transition-colors"
            />
            <input 
              id="phoneNumber" 
              type="tel" 
              placeholder="Phone Number" 
              className="focus-ring w-full bg-transparent border-b border-black/15 py-3 text-ink focus:border-copper focus:outline-none transition-colors text-base"
            />
            <button 
              type="submit"
              className="mt-6 accent-gradient text-white w-full py-4 rounded-lg uppercase tracking-widest text-xs font-bold soft-shadow transition-opacity hover:opacity-90"
            >
              Continue
            </button>
          </div>
        </div>
        <div className="glass rounded-2xl overflow-hidden soft-shadow order-1 md:order-2 aspect-[3/4] md:aspect-auto">
          <img src="/assets/model.jpeg" className="w-full h-full object-cover" alt="Model" />
        </div>
      </form>
    </section>
  )
}
