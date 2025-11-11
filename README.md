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

## Estrutura do repositório

- `frontend/` — código da aplicação React (Vite). Principais scripts: `dev`, `build`, `preview`.
- `server/` — código do servidor Node/Express. Usa `dotenv` e `pg`.

## Pré-requisitos

- Node.js (recomendo v18+)
- npm ou yarn
- Postgres (se você usar o banco localmente)

## Instalação e execução (desenvolvimento)

1. Clone este repositório (se ainda não o fez):

```bash
git clone <URL-DO-REPO>
cd sistema-eleicao
```

2. Frontend

```bash
cd frontend
npm install
npm run dev
# A aplicação será servida por Vite (normalmente em http://localhost:5173)
```

3. Server

```bash
cd ../server
npm install
# Inicie o servidor (se existe um arquivo server.js / index.js):
node server.js
# ou se for outro entrypoint, ajuste conforme necessário (ex: node index.js)
```

Observação: o `server/` atualmente tem dependências `express`, `dotenv`, `pg` e `cors`. Ajuste variáveis de ambiente conforme a seção abaixo.

## Build / Produção

Frontend (build estático):

```bash
cd frontend
npm run build
# Os arquivos de saída ficarão em `dist/` ou `build/` (conforme a configuração do Vite)
```

Server: preparar e executar conforme a infra desejada (Heroku, VPS, Docker, etc.).

## Variáveis de ambiente

O `server` usa `dotenv`. Crie um arquivo `.env` em `server/` com as variáveis necessárias, por exemplo:

```env
# Exemplo
PORT=3000
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
# Outras chaves/segredos
```

Nunca comite `.env` ou segredos no repositório.

## Notas sobre Git, `.gitignore` e o que vai para o GitHub

- Apenas os arquivos que foram `git add` e `git commit` serão enviados ao GitHub quando você der `git push`.
- Arquivos listados em `.gitignore` (ex.: `node_modules/`, `dist/`, `.env`) normalmente não são adicionados/committed. No repositório atual, `.gitignore` já contém `node_modules/`, `dist/`, `build/` e `.env`.
- Se um arquivo confidencial já foi commitado anteriormente, o `.gitignore` sozinho não o remove do histórico — será necessário reescrever o histórico (`git filter-repo` ou `git filter-branch`) e **rotacionar** as credenciais comprometidas.

## Dicas rápidas

- Verificar status antes de push:

```bash
git status
```

- Ver o que será enviado ao remoto (commits locais não enviados):

```bash
git log --oneline origin/$(git rev-parse --abbrev-ref HEAD)..HEAD
```

## Contribuição

Abra issues ou PRs. Siga boas práticas: commits claros, PRs pequenos e com descrição do que mudou.
