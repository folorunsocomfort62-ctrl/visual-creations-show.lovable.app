import { Mail, MessageCircle } from 'lucide-react'
import { EMAIL, FACEBOOK_URL, WHATSAPP_URL } from '@/lib/contact'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const secondary =
  'inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary'

export function ContactButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        Chat on WhatsApp
      </a>
      <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={secondary}>
        <FacebookIcon className="size-4" />
        Message Me on Facebook
      </a>
      <a href={`mailto:${EMAIL}`} className={secondary}>
        <Mail className="size-4" aria-hidden="true" />
        Email Me
      </a>
    </div>
  )
}
