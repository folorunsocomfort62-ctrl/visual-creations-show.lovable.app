import { ArrowUpRight } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/contact'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'What I Build' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-50 mx-auto mt-4 w-full max-w-5xl px-4 md:mt-6">
      <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface/90 px-4 py-3 shadow-sm backdrop-blur md:px-6">
        <a href="#" className="text-base font-bold tracking-tight">
          Marvelous Web
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start a Project
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
