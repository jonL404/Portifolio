import { ArrowUpRight, Github, Layers, BarChart3, ClipboardList, Clock3 } from 'lucide-react';
import type { Project } from '../data/projects';
import { ExternalLink } from './UI';
const icons = [Layers, BarChart3, ClipboardList, Clock3];
export default function ProjectCard({ project, index, onSelect }: {
    project: Project;
    index: number;
    onSelect: (p: Project) => void;
}) { const Icon = icons[index]; return <article className={`project-card project-${project.id}`}><div className="project-top"><span className="project-icon"><Icon size={26}/></span><span className="project-status">{project.status}</span></div><small className="eyebrow">{project.category}</small><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div><div className="project-actions"><button onClick={() => onSelect(project)}>Ver projeto <ArrowUpRight size={17}/></button><ExternalLink href={project.github} label={`GitHub do ${project.name}`}><Github size={19}/></ExternalLink></div></article>; }
