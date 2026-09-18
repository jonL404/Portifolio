export type Project = {
    id: string;
    name: string;
    category: string;
    description: string;
    tech: string[];
    features: string[];
    status: string;
    github: string;
    url: string;
};
export const projects: Project[] = [
    { id: 'nexit', name: 'NexIT', category: 'INFRAESTRUTURA & PRODUTIVIDADE', description: 'Um lugar para as ferramentas que fazem a T.I. acontecer.', tech: ['TypeScript', 'Node.js', 'MySQL', 'FFmpeg'], features: ['Centralização de procedimentos do setor de T.I.', 'Busca de arquivos por nome e extensão', 'Conversão de mídia com FFmpeg', 'Ferramentas internas e automação de tarefas'], status: 'Projeto interno', github: '', url: '' },
    { id: 'ocular', name: 'Ocular', category: 'BUSINESS INTELLIGENCE', description: 'Dados que se transformam em clareza. Dashboards, datasets e relatórios em uma plataforma interna.', tech: ['TypeScript', 'React', 'MySQL', 'Data Visualization'], features: ['Criação de dashboards e relatórios', 'Organização de datasets', 'Visualização de dados e filtros'], status: 'Projeto interno', github: '', url: '' },
    { id: 'sheetz', name: 'Sheetz', category: 'MONITORAMENTO & OPERAÇÕES', description: 'Registro e acompanhamento de ocorrências, com a informação certa para cada nível de acesso.', tech: ['TypeScript', 'Node.js', 'MySQL', 'React'], features: ['Registro e acompanhamento de ocorrências', 'Controle de usuários', 'Perfis de administrador, gestor e monitor'], status: 'Projeto interno', github: '', url: '' },
    { id: 'ponto', name: 'Sistema de Ponto', category: 'GESTÃO DE JORNADA', description: 'Da primeira entrada ao histórico mensal. Uma jornada mais organizada para equipes e gestores.', tech: ['TypeScript', 'Node.js', 'MySQL', 'React'], features: ['Registro de entradas e saídas', 'Solicitação de ajuste de ponto', 'Aprovação por gestores', 'Controle de usuários e histórico mensal'], status: 'Projeto interno', github: '', url: '' },
];
