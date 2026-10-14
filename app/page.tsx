import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { SelectedWork } from '@/components/selected-work'
import { Process, Services } from '@/components/services-process'
import { About, CallToAction } from '@/components/about-cta'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-4">
        <Hero />
        <SelectedWork />
        <Services />
        <Process />
        <About />
        <CallToAction />
      </main>
      <footer className="mx-auto mt-16 flex w-full max-w-5xl flex-col gap-2 border-t border-border px-4 py-8 text-xs text-muted sm:flex-row sm:justify-between">
        <p>{'© 2026 Marvelous Web'}</p>
        <p>Designed with purpose. Built with care.</p>
      </footer>
    </>
  )
}
