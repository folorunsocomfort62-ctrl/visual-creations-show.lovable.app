import { ArrowRight, BriefcaseBusiness, CalendarDays, Globe, LayoutTemplate, ShoppingBag } from 'lucide-react'

const services = [
  { label: 'Business Websites', icon: Globe },
  { label: 'Portfolio Websites', icon: BriefcaseBusiness },
  { label: 'Landing Pages', icon: LayoutTemplate },
  { label: 'Booking Websites', icon: CalendarDays },
  { label: 'E-commerce Websites', icon: ShoppingBag },
]

const steps = ['Discover', 'Plan', 'Design', 'Build', 'Launch']

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 pt-24">
      <h2 className="text-3xl font-bold tracking-tight">What I Build</h2>
      <ul className="mt-8 grid grid-cols-2 border-y border-border sm:grid-cols-3 lg:grid-cols-5">
        {services.map(({ label, icon: Icon }) => (
          <li key={label} className="flex flex-col gap-4 border-border p-5 [&:not(:last-child)]:border-r">
            <Icon className="size-5 text-primary" aria-hidden="true" />
            <h3 className="text-sm font-semibold">{label}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Process() {
  return (
    <section id="process" className="scroll-mt-28 pt-24">
      <h2 className="text-3xl font-bold tracking-tight">My Process</h2>
      <ol className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-3 text-sm">
            <span className="text-xs font-medium text-primary">{String(i + 1).padStart(2, '0')}</span>
            <span className="font-semibold">{step}</span>
            {i < steps.length - 1 && <ArrowRight className="size-3.5 text-muted" aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <p className="mt-6 border-b border-border pb-4 text-sm text-muted">
        A clear, collaborative path from first conversation to a live website — no guesswork, no surprises.
      </p>
    </section>
  )
}
