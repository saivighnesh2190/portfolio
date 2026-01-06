import { useState, useRef } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { contact } from '../content'
import { Section } from './Section'
import { TiltCard } from './TiltCard'
import { Mail, MapPin, Phone, Github, Linkedin, Loader2 } from 'lucide-react'

type FormState = {
  name: string
  email: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
}

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.current) return

    setStatus('sending')

    emailjs
      .sendForm(
        'service_6yq4aaw', // Service ID
        'template_5xlhkxh', // Template ID
        form.current,
        {
          publicKey: 'CeH4SN7hG9N1U4GPd', // Public Key
        }
      )
      .then(
        () => {
          setStatus('success')
          setFormState(initialState)
          setTimeout(() => setStatus('idle'), 5000)
        },
        (error) => {
          console.error('FAILED...', error)
          setStatus('error')
          setTimeout(() => setStatus('idle'), 5000)
        }
      )
  }

  return (
    <Section
      id="contact"
      title="Let’s collaborate"
      eyebrow="Contact"
      description="Ready to co-create something ambitious? Reach out for internships, freelance work, or collaborative projects."
    >
      <div className="contact-grid">
        <TiltCard className="contact-card">
          <h3>Where to find me</h3>
          <ul>
            <li>
              <MapPin size={18} />
              <span>{contact.address}</span>
            </li>
            <li>
              <Mail size={18} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Phone size={18} />
              <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
            </li>
            {contact.linkedin ? (
              <li>
                <Linkedin size={18} />
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            ) : null}
            {contact.github ? (
              <li>
                <Github size={18} />
                <a href={contact.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            ) : null}
          </ul>
        </TiltCard>

        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name" // Changed back to match User's Template
              value={formState.name}
              onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="contact-form__row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email" // Changed back to match User's Template
              type="email"
              value={formState.email}
              onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="contact-form__row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formState.message}
              onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
              required
              disabled={status === 'sending'}
            />
          </div>
          <button
            className="button button--primary"
            type="submit"
            disabled={status === 'sending'}
            style={{ opacity: status === 'sending' ? 0.7 : 1 }}
          >
            {status === 'sending' ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Sending...
              </>
            ) : (
              'Send message'
            )}
          </button>
          {status === 'success' ? (
            <p className="contact-form__success">Thanks! I&apos;ll reply soon.</p>
          ) : null}
          {status === 'error' ? (
            <p className="contact-form__error" style={{ color: '#ff6b6b', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Something went wrong. Please try again or email me directly.
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  )
}
