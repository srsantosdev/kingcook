<p align="center">
  <img src="https://user-images.githubusercontent.com/40436472/87493090-6a21a900-c622-11ea-9bac-b53e41913e0d.png" alt="Kingcook" />
</p>

<h3 align="center">Seu livro de receitas online </h3>

<h3 align="center">
  <img src="https://img.shields.io/github/languages/count/srsantosdev/kingcook?style=plastic">
  <img src="https://img.shields.io/github/repo-size/srsantosdev/kingcook?style=plastic">
  <img src="https://img.shields.io/badge/made%20by-srsantosdev-green?style=plastic">
  <img src="https://img.shields.io/github/last-commit/srsantosdev/kingcook?style=plastic">
  <img src="https://img.shields.io/github/license/srsantosdev/kingcook?style=plastic">
</h3>

<p align="center">
  <img src="https://user-images.githubusercontent.com/40436472/87497164-69d9db80-c62b-11ea-963b-20c21d3d5420.gif" alt="">
</p>

## 💻 Sobre o projeto

O **Kingcook** foi criado com o objetivo de armazenar varias receitas de diferentes dificuldades.

## 🛠 Tecnologias

#### Back-end (Server)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)

#### Front-end (Web)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Polished](https://polished.js.org/)
- [date-fns](https://date-fns.org/)
- [React Spring](https://www.react-spring.io/)
- [React Dropzone](https://react-dropzone.js.org/)
- [Unform](https://unform.dev/)
- [Yup](https://github.com/jquense/yup)

## 🖥️ Como executar o projeto

#### Pré-requisitos: 
- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/)

```bash
# Clone este repositório
$ git clone https://github.com/srsantosdev/kingcook

# Acesse a pasta do projeto no terminal
$ cd kingcook
```

**Back-end**

**OBSERVAÇÃO:** Antes de executar o servidor, é necessário instalar o **[POSTGRES](https://www.postgresql.org/)** usando a porta 5433 e criar um novo banco de dados com o nome **kingcook**.

```bash
# Vá para a pasta server
$ cd server

# Instale as dependências
$ yarn install

# Execute as migrations
$ yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# Acesse http://localhost:3333
```

**Front-end**

```bash
# Vá para a pasta frontend
$ cd web

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# Acesse http://localhost:3000
```

## 🤔 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feat: New Feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Em caso de alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## 📝 Licença

Este projeto esta sobe a licença MIT. Veja a [LICENÇA](https://opensource.org/licenses/MIT) para saber mais.

Feito com ❤️ por Samuel Ramos 👋🏽 [Entre em contato](https://www.linkedin.com/in/srsantosdev/)!
