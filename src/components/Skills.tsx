import { Code2, Server, Database, Terminal, Wrench } from 'lucide-react';
import { skills } from '../data/skills';
import { Heading, Reveal } from './UI';
const icons = [Code2, Server, Database, Terminal, Wrench];
export default function Skills() { return <section id="skills" className="section container"><Reveal><Heading number="02" eyebrow="MINHA CAIXA DE FERRAMENTAS" title="Tech Stack" description="As tecnologias que conectam ideias a soluções."/><div className="skills-grid">{skills.map((group, i) => { const Icon = icons[i]; return <article className="skill-card" key={group.name}><Icon size={23}/><h3>{group.name}</h3><div className="tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>; })}</div></Reveal></section>; }
