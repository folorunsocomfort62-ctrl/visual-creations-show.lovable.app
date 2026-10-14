import { Check } from 'lucide-react'
import { ContactButtons } from '@/components/contact-buttons'

const reasons = [
  'Clean modern design',
  'Mobile responsive websites',
  'Clear communication',
  'Custom layouts',
  'User-friendly experience',
]

export function About() {
  return (
    <section id="about" className="grid scroll-mt-28 gap-12 pt-12 md:grid-cols-[3fr_2fr]">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold tracking-tight">About Marvelous Web</h2>
        <p className="leading-relaxed text-muted">
          Marvelous Web is a design service focused on creating modern, responsive and user-friendly websites. We help
          businesses and professionals turn their ideas into polished sites that make a strong first impression —
          working closely with every project from first sketch to launch.
        </p>
        <ContactButtons />
      </div>
      <div>
        <h3 className="text-lg font-medium">Why Work With Me</h3>
        <ul className="mt-5 flex flex-col gap-4">
          {reasons.map((r) => (
            <li key={r} className="flex items-center gap-3 text-sm text-muted">
              <Check className="size-4 text-accent" aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function CallToAction() {
  return (
    <section className="mt-24 flex flex-col gap-6 border-t border-border pt-16 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-balance">{"Need a Website? Let's Build It."}</h2>
        <p className="mt-2 text-sm text-muted">{"Ready to make your mark online? Let's start the conversation."}</p>
      </div>
      <ContactButtons />
    </section>
  )
}
