'use client'
import { usePathname } from 'next/navigation'

const PROGRESS_MAP: Record<string, string> = {
  '/': '25%',
  '/details': '50%',
  '/apply/specs': '75%',
  '/apply/portfolio': '100%'
}

export default function ProgressBar() {
  const pathname = usePathname()
  const width = PROGRESS_MAP[pathname] || '0%'

  return (
    <div className="w-full h-1 bg-black/5">
      <div 
        className="h-full accent-gradient transition-all duration-700" 
        style={{ width }} 
      />
    </div>
  )
}