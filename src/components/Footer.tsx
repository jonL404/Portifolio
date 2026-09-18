import { Github, Linkedin } from 'lucide-react';
import { profile, githubUrl } from '../data/profile';
import { ExternalLink } from './UI';
export default function Footer() { return <footer className="container footer"><div className="footer-top"><a className="logo" href="#home">JL<span>.</span></a><p>Designed & built by Jonas Lima.</p><div className="nav-social"><ExternalLink href={githubUrl} label="GitHub"><Github size={18}/></ExternalLink><ExternalLink href={profile.linkedinUrl} label="LinkedIn"><Linkedin size={18}/></ExternalLink></div></div><div className="footer-bottom"><span>Powered by TypeScript + React</span><span>turning coffee into bugs... and sometimes solutions ☕</span></div></footer>; }
