import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type SectionProps = PropsWithChildren<{
  id: string
  title: string
  eyebrow?: string
  description?: string
}>

export function Section({ id, title, eyebrow, description, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="section__header">
        {eyebrow ? <span className="section__eyebrow">{eyebrow}</span> : null}
        <h2 className="section__title">{title}</h2>
        {description ? <p className="section__description">{description}</p> : null}
      </div>
      {children}
    </motion.section>
  )
}
