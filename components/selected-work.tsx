import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/contact'

const projects = [
  { name: 'Apex Motors', category: 'Car dealership', image: '/images/auto.jpg' },
  { name: 'Haven Estates', category: 'Real estate', image: '/images/estate.jpg' },
  { name: 'Ember & Oak', category: 'Restaurant', image: '/images/restaurant.jpg' },
  { name: 'Amara Studio', category: 'Personal brand', image: '/images/personal.jpg' },
]

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-28 pt-24">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">Portfolio / Demo projects</p>
      </div>
      <ul className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.name} className="overflow-hidden rounded-xl border border-border bg-surface">
            <div className="relative aspect-[2/1]">
              <Image
                src={p.image}
                alt={`${p.name} — ${p.category} demo inspiration`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" aria-hidden="true" />
              <h3 className="absolute bottom-4 left-5 text-2xl font-bold text-white md:text-3xl">{p.name}</h3>
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <p className="text-sm text-muted">{`${p.category} · Demo`}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-1.5 transition-colors hover:bg-background hover:text-primary"
              >
                <ArrowUpRight className="size-4" aria-hidden="true" />
                <span className="sr-only">{`Discuss a project similar to ${p.name}`}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted">
        These are portfolio/demo concepts, not real client sites. Images illustrate each business category.
      </p>
    </section>
  )
}
