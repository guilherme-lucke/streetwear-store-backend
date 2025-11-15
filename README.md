# Streetwear Store API

![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-4.x-47A248?style=for-the-badge&logo=mongodb)

API RESTful para um e-commerce de moda streetwear, desenvolvida como parte da disciplina de Programação Web Back-End. A aplicação permite o gerenciamento de usuários, produtos e pedidos, com um sistema de autenticação baseado em sessões.

## 📋 Tabela de Conteúdos

- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Guia de Instalação e Execução](#-guia-de-instalação-e-execução)
  - [1. Clone o Repositório](#1-clone-o-repositório)
  - [2. Instale as Dependências](#2-instale-as-dependências)
  - [3. Configure as Variáveis de Ambiente](#3-configure-as-variáveis-de-ambiente)
  - [4. Execute a Aplicação](#4-execute-a-aplicação)
- [Endpoints da API](#-endpoints-da-api)
  - [Autenticação](#autenticação)
  - [Produtos (Público)](#produtos-público)
  - [Pedidos (Protegido)](#pedidos-protegido)

## ✨ Funcionalidades

- ✅ Cadastro e autenticação de usuários com senhas criptografadas.
- ✅ Gerenciamento de sessão de usuário via cookies.
- ✅ Listagem e visualização de detalhes dos produtos.
- ✅ Criação e consulta de pedidos por usuários autenticados.
- ✅ Estrutura de projeto organizada com separação de responsabilidades (Models, Views, Controllers).

## 🚀 Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

- **Backend:** Node.js, Express.js
- **Banco de Dados:** MongoDB (com MongoDB Atlas)
- **Autenticação:** express-session, bcrypt
- **Ferramentas de Desenvolvimento:** nodemon, dotenv

## 🔧 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (v16 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para hospedar o banco de dados.

## ⚙️ Guia de Instalação e Execução

Siga os passos abaixo para configurar e rodar o projeto localmente.

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure as Variáveis de Ambiente

Crie um arquivo chamado `.env` na raiz do projeto. Copie o conteúdo do arquivo `.env.example` (se houver) ou use a estrutura abaixo, preenchendo com suas próprias credenciais do MongoDB Atlas e um segredo de sessão.

```ini
# .env

# String de conexão do seu cluster no MongoDB Atlas
MONGO_URI="mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"

# Nome do banco de dados a ser utilizado
DB_NAME="streetwear_store"

# Chave secreta para criptografar a sessão do usuário
SESSION_SECRET="crie_uma_string_longa_e_aleatoria_aqui"
```

### 4. Execute a Aplicação

Para rodar o servidor em modo de desenvolvimento (com reinicialização automática a cada alteração), use:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

Para rodar em modo de produção:

```bash
npm start
```

## 🔌 Endpoints da API

A URL base para todos os endpoints é `http://localhost:3000/api`.

### Autenticação

| Método | Endpoint          | Descrição                               |
| :----- | :---------------- | :-------------------------------------- |
| `POST` | `/users/register` | Registra um novo usuário.               |
| `POST` | `/users/login`    | Autentica um usuário e cria uma sessão. |
| `POST` | `/users/logout`   | Encerra a sessão do usuário.            |

### Produtos (Público)

| Método | Endpoint        | Descrição                                |
| :----- | :-------------- | :--------------------------------------- |
| `GET`  | `/products`     | Retorna uma lista de todos os produtos.  |
| `GET`  | `/products/:id` | Retorna os detalhes de um único produto. |

### Pedidos (Protegido)

_Estes endpoints requerem que o usuário esteja autenticado._

| Método | Endpoint  | Descrição                                     |
| :----- | :-------- | :-------------------------------------------- |
| `POST` | `/orders` | Cria um novo pedido para o usuário logado.    |
| `GET`  | `/orders` | Retorna a lista de pedidos do usuário logado. |

<br>

---

Projeto desenvolvido para a disciplina EC48B-C71 - Programação Web Back-End da UTFPR-CP.
