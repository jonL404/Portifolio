import { useEffect, useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { profile, githubUrl } from '../data/profile';
import { ExternalLink } from './UI';
const links = [['home', 'Home'], ['sobre', 'Sobre'], ['skills', 'Skills'], ['projetos', 'Projetos'], ['experiencia', 'Experiência'], ['contato', 'Contato']];
export default function Navbar() { const [open, setOpen] = useState(false); const [active, setActive] = useState('home'); useEffect(() => { const observer = new IntersectionObserver(entries => { for (const e of entries)
    if (e.isIntersecting)
        setActive(e.target.id); }, { rootMargin: '-15% 0px -60% 0px' }); links.forEach(([id]) => { const el = document.getElementById(id); if (el)
    observer.observe(el); }); return () => observer.disconnect(); }, []); useEffect(() => { const close = (e: KeyboardEvent) => { if (e.key === 'Escape')
    setOpen(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, []); return <header className="navbar"><div className="nav-inner"><a href="#home" className="logo" aria-label="Jonas Lima, início">JL<span>.</span></a><nav id="main-menu" aria-label="Navegação principal" className={open ? 'nav-links open' : 'nav-links'}>{links.map(([id, name]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{name}</a>)}</nav><div className="nav-social"><ExternalLink href={githubUrl} label="GitHub"><Github size={19}/></ExternalLink><ExternalLink href={profile.linkedinUrl} label="LinkedIn"><Linkedin size={19}/></ExternalLink><button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></div></header>; }
