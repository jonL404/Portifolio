import { useEffect, useState } from 'react';
import { Github, ArrowUpRight, GitBranch, FolderGit2, Code2 } from 'lucide-react';
import { githubUrl, profile } from '../data/profile';
import { ExternalLink, Reveal } from './UI';
type Repo = {
    id: number;
    name: string;
    html_url: string;
    language: string | null;
    fork: boolean;
};
export default function GithubSection() { const [data, setData] = useState<{
    count: number;
    repos: Repo[];
    languages: string[];
} | null>(null); const [state, setState] = useState(''); useEffect(() => { if (!profile.githubApiEnabled || !profile.githubUsername)
    return; const controller = new AbortController(); setState('Carregando projetos…'); Promise.all([fetch(`https://api.github.com/users/${encodeURIComponent(profile.githubUsername)}`, { signal: controller.signal }), fetch(`https://api.github.com/users/${encodeURIComponent(profile.githubUsername)}/repos?sort=updated&per_page=100`, { signal: controller.signal })]).then(async (responses) => { if (responses.some(r => !r.ok))
    throw Error(); const [user, repos] = await Promise.all(responses.map(r => r.json())); const owned = (repos as Repo[]).filter(r => !r.fork); const frequencies = new Map<string, number>(); owned.forEach(r => { if (r.language)
    frequencies.set(r.language, (frequencies.get(r.language) || 0) + 1); }); setData({ count: user.public_repos, repos: owned.slice(0, 3), languages: [...frequencies].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([language]) => language) }); setState(''); }).catch(error => { if (error.name !== 'AbortError')
    setState('Não foi possível carregar os dados do GitHub agora.'); }); return () => controller.abort(); }, []); return <section className="section container github-section"><Reveal><Github size={30} className="blue"/><h2>Building things,<br /><span>one commit at a time.</span></h2><div className="github-grid">{[[Github, 'GitHub Profile', 'Código, aprendizado e evolução.'], [FolderGit2, 'Repositories', data ? `${data.count} repositórios públicos` : 'Ideias organizadas em projetos.'], [GitBranch, 'Open Source / Personal Projects', 'Espaço para explorar e construir.']].map(([Icon, title, text]) => { const I = Icon as typeof Github; return <div key={String(title)}><I size={20}/><h3>{String(title)}</h3><p>{String(text)}</p></div>; })}</div>{state && <p role="status">{state}</p>}{data && <div className="github-live"><p><Code2 size={18}/> Linguagens nos repositórios recentes: {data.languages.join(' · ') || 'Não informadas'}</p>{data.repos.map(r => <ExternalLink key={r.id} href={r.html_url}>{r.name} <ArrowUpRight size={16}/></ExternalLink>)}</div>}<ExternalLink href={githubUrl} className="button secondary" label="Visitar meu GitHub">Visitar meu GitHub <ArrowUpRight size={18}/></ExternalLink></Reveal></section>; }
