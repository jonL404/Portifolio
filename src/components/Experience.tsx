import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { experience } from '../data/experience';
import { Heading, Reveal } from './UI';
export default function Experience() { return <section id="experiencia" className="section container"><Reveal><div className="experience-grid"><Heading number="04" eyebrow="APRENDER. CONSTRUIR. EVOLUIR." title="Minha trajetória" description="A prática da T.I. e a curiosidade pelo desenvolvimento, caminhando juntas."/><div className="timeline">{experience.map((e, i) => { const Icon = i ? GraduationCap : BriefcaseBusiness; return <article key={e.title}><span className="timeline-icon"><Icon size={20}/></span><small className="eyebrow">{e.type}</small><h3>{e.title}</h3><p>{e.description}</p></article>; })}</div></div></Reveal></section>; }
