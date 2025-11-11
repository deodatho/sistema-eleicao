# Sistema de Eleição (sistema-eleicao)

Este repositório contém um sistema de eleição com duas partes principais:

- `frontend/` — aplicação React + Vite (UI/UX)
- `server/` — API minimal em Node/Express que usa Postgres (via `pg`)

## Sumário

- Visão geral
- Estrutura do projeto
- Pré-requisitos
- Instalação e execução (desenvolvimento)
- Build / Produção
- Variáveis de ambiente
- Notas sobre Git e `.gitignore`

## Visão geral

Aplicação para gerenciar um sistema de votação. O front-end é uma app React criada com Vite. O back-end é um servidor Express que se comunica com um banco Postgres.

# Sistema de Eleição (sistema_eleicao)

Uma aplicação minimal de sistema de votação composta por um front-end em React (Vite) e um back-end em Node/Express com suporte a Postgres.

Este README foca em como usar o projeto e o fluxo principal da aplicação — instalação, execução local e instruções básicas de uso. Para detalhes de desenvolvimento internos, consulte os arquivos nas pastas `frontend/` e `server/`.

## Principais funcionalidades (visão geral)

- Interface web para usuários e administradores.
- Fluxo de usuário: registro, autenticação e votação.
- Fluxo de administrador: painel com visão das votações/tabelas e operações administrativas.
- Persistência em Postgres pelo servidor Express.

Páginas/rotas front-end existentes (diretório `src/pages`):

- `Home` — página inicial
- `Login` — autenticação
- `Register_usr` — registro de usuário
- `Register_admin` — registro de administrador
- `Vote` — interface de votação
- `Dashboard` e `Admin` — interfaces administrativas
- `Tables` — visualização de resultados/tabelas

## Requisitos

- Node.js (recomendo v18+)
- npm (ou yarn)
- Postgres (se executar localmente o banco de dados)

## Instalação rápida (desenvolvimento)

1. Instale dependências e rode o front-end

```bash
cd frontend
npm install
npm run dev
# Vite normalmente expõe a app em http://localhost:5173
```

2. Instale dependências e rode o servidor

```bash
cd ../server
npm install
# Iniciar o servidor (substitua se o entrypoint for diferente):
node server.js
# Se o entrypoint for `index.js` ou outro, execute esse arquivo em vez de server.js
```

Observação: o front-end usa scripts `dev`, `build` e `preview` (Vite). O servidor depende de `express`, `dotenv`, `pg` e `cors`.

## Como usar a aplicação (fluxos básicos)

- Usuário comum:

  1. Acesse `Home` → `Register_usr` para criar conta.
  2. Faça `Login` com suas credenciais.
  3. Navegue até `Vote` para participar da votação.
- Administrador:

  1. Crie a conta de administrador em `Register_admin` (ou provisionada manualmente dependendo da implementação do servidor).
  2. Faça `Login` como admin e acesse `Admin` / `Dashboard` para ver resultados e tabelas em `Tables`.

Observação: a UI mostra as páginas listadas acima; comportamentos exatos (por exemplo: criação de eleição, permissões, validações) dependem das rotas e endpoints implementados no diretório `server/`.

## Variáveis de ambiente (servidor)

Crie um arquivo `.env` dentro de `server/` com as variáveis necessárias. Um exemplo mínimo:

```env
PORT=3000
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
JWT_SECRET=uma_chave_secreta
```

Não comite arquivos `.env` no repositório.

## Estrutura rápida do projeto

- `frontend/` — app React (Vite). Código fonte em `src/`.
- `server/` — servidor Node/Express.

## Build para produção

No `frontend/`:

```bash
cd frontend
npm run build
# Os artefatos de build ficam em `dist/` (ou conforme configuração do Vite)
```

O servidor pode servir esses arquivos estáticos (ou você pode usar um servidor estático separado). Ajuste a configuração do servidor conforme necessário.

## Arquivos importantes para desenvolvedores

- `frontend/src/` — componentes React, rotas e páginas.
- `frontend/package.json` — scripts e dependências do front-end.
- `server/server.js` (ou `server/index.js`) — entrypoint do servidor.
- `server/package.json` — dependências do servidor.

## Licença

Este repositório inclui um arquivo `LICENCE` com licença MIT.

## Contribuições

Se quiser contribuir, abra uma issue descrevendo a proposta ou um PR com pequenas mudanças e instruções de teste. Se precisar, eu posso adicionar um `CONTRIBUTING.md` com orientações formais.
