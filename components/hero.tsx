import Image from 'next/image'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/contact'

export function Hero() {
  return (
    <section className="pt-16 md:pt-20">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
        Website Designer
      </p>
      <h1 className="mt-6 text-5xl font-bold leading-none tracking-tight text-balance md:text-7xl">
        I Build
        <span className="block text-primary">Websites.</span>
      </h1>
      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md leading-relaxed text-muted">
          Modern, responsive websites designed to help businesses and professionals build a strong online presence.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/40"
          >
            View My Work
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {"Let's Talk"}
          </a>
        </div>
      </div>
      <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-xl border border-border md:aspect-[3/1]">
        <Image
          src="/images/workspace.jpg"
          alt="Laptop and smartphone displaying a modern architecture website"
          fill
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 rounded-md bg-surface px-3 py-2 shadow-sm">
          <p className="text-xs font-semibold">Responsive by default</p>
          <p className="text-xs text-muted">{'Desktop · Tablet · Mobile'}</p>
        </div>
      </div>
    </section>
  )
}
