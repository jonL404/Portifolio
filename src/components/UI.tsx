import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
export function Reveal({ children, className = '' }: {
    children: ReactNode;
    className?: string;
}) { const reduce = useReducedMotion(); return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.45 }}>{children}</motion.div>; }
export function Heading({ number, eyebrow, title, description }: {
    number: string;
    eyebrow: string;
    title: string;
    description?: string;
}) { return <div className="section-heading"><div className="eyebrow"><span>{number} /</span> {eyebrow}</div><h2>{title}</h2>{description && <p>{description}</p>}</div>; }
export function ExternalLink({ href, children, className = '', label }: {
    href: string;
    children: ReactNode;
    className?: string;
    label?: string;
}) { return href ? <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" className={className} aria-label={label}>{children}</a> : <span className={`${className} unavailable`} aria-label={`${label || 'Link'} ainda não disponível`} title="Link ainda não disponível">{children}</span>; }
