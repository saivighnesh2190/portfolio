import { useState } from 'react'
import type { FormEvent } from 'react'
import { contact } from '../content'
import { Section } from './Section'
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react'

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
  const [formState, setFormState] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setFormState(initialState)
    window.setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <Section
      id="contact"
      title="Let’s collaborate"
      eyebrow="Contact"
      description="Ready to co-create something ambitious? Reach out for internships, freelance work, or collaborative projects."
    >
      <div className="contact-grid">
        <div className="contact-card">
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
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={formState.name}
              onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
              required
            />
          </div>
          <div className="contact-form__row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
              required
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
            />
          </div>
          <button className="button button--primary" type="submit">
            Send message
          </button>
          {submitted ? <p className="contact-form__success">Thanks! I&apos;ll reply soon.</p> : null}
        </form>
      </div>
    </Section>
  )
}
