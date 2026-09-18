# Jonas Lima — Portfolio

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)


## Tecnologias

React, TypeScript, Vite, Tailwind CSS, Lucide React e Framer Motion. Aplicação estática, sem servidor de aplicação, credenciais ou banco de dados.


Referências: [Deploy estático do Vite](https://vite.dev/guide/static-deploy.html#github-pages) e [configuração oficial do GitHub Pages](https://github.com/actions/configure-pages).

## Estrutura

- `src/components/`: navegação, hero, terminal, seções, cards e detalhes.
- `src/data/`: informações públicas configuráveis.
- `src/App.tsx`: composição da página.
- `src/index.css`: tema, layout responsivo, estados de foco e estilos.
- `public/favicon.svg`: identidade JL.
- `index.html`: idioma, SEO e Open Graph.
- `.github/workflows/deploy.yml`: build e deploy.

## Acessibilidade e desempenho

HTML semântico, link de salto ao conteúdo, foco visível, identificação da seção atual, diálogo nativo com Escape e retorno de foco, menu mobile com estado expandido e suporte a `prefers-reduced-motion`. Ícones são importados individualmente; não há fontes remotas ou imagens pesadas. Metadados Open Graph de texto estão incluídos; nenhuma imagem de compartilhamento fictícia foi adicionada.


## Screenshots

![Portfólio Jonas Lima em desktop](docs/desktop.jpg)

Captura real da aplicação. Build de produção e verificação TypeScript concluídos. Navegação e diálogos de projeto conferidos no navegador desktop. Layout mobile implementado com media queries; não houve emulação mobile nem medição de Lighthouse nesta entrega.

## Licença

Código disponível sob licença MIT, em `LICENSE`. Textos, identidade e projetos representam Jonas Lima; personalize-os ao reutilizar o código.
