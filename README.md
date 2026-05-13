# 💸 Finance App API

Uma API RESTful para gerenciamento financeiro pessoal construída com Node.js, Express e MongoDB.

O projeto começou como uma planilha financeira evoluída e agora está sendo transformado em uma plataforma web moderna com dashboard analítico, autenticação segura e gerenciamento inteligente de finanças pessoais.

---

# 🌌 Objetivo do Projeto

Criar uma aplicação financeira moderna, intuitiva e escalável que permita:

- controle total de receitas e despesas
- visualização financeira em tempo real
- analytics financeiros
- categorização inteligente
- evolução futura para uma plataforma estilo fintech

---

# 🚀 Stack Utilizada

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- dotenv
- cors
- nodemon

---

# 🧱 Arquitetura do Projeto

```bash
server/
└── src/
    ├── controllers/
    ├── middlewares/
    ├── models/
    ├── routes/
    ├── config/
    └── index.js
````

---

# 📦 Funcionalidades Implementadas

# 🔐 Sistema de Autenticação

## ✅ Registro de usuário

Permite criar contas utilizando:

* nome
* email
* senha criptografada

---

## ✅ Login

Autenticação usando JWT.

---

## ✅ Middleware de autenticação

Protege rotas privadas usando token JWT.

---

# 💸 Sistema de Transações

## ✅ Criar transação

```http
POST /transactions
```

Permite registrar:

* receitas
* despesas

Campos:

```json
{
  "type": "income",
  "category": "Salário",
  "description": "Pagamento mensal",
  "amount": 5000
}
```

---

## ✅ Listar transações

```http
GET /transactions
```

---

## ✅ Editar transação

```http
PUT /transactions/:id
```

---

## ✅ Deletar transação

```http
DELETE /transactions/:id
```

---

# 🔎 Filtros Avançados

## ✅ Filtrar por tipo

```http
GET /transactions?type=expense
```

---

## ✅ Filtrar por categoria

```http
GET /transactions?category=food
```

---

## ✅ Filtrar por intervalo de datas

```http
GET /transactions?startDate=2026-01-01&endDate=2026-01-31
```

---

# 📄 Paginação

## ✅ Paginação implementada

```http
GET /transactions?page=1&limit=10
```

Resposta:

```json
{
  "data": [],
  "page": 1,
  "totalPages": 5,
  "totalItems": 50
}
```

---

# 🏷️ Sistema de Categorias

## ✅ Criar categoria

```http
POST /categories
```

Exemplo:

```json
{
  "name": "Alimentação",
  "color": "#FFAA00",
  "icon": "utensils"
}
```

---

## ✅ Listar categorias

```http
GET /categories
```

---

# 📊 Dashboard Analytics

# ✅ Summary Financeiro

```http
GET /summary
```

Resposta:

```json
{
  "totalIncome": 5000,
  "totalExpense": 3000,
  "balance": 2000
}
```

---

# ✅ Analytics Mensal

```http
GET /analytics/monthly
```

Resposta:

```json
[
  {
    "month": "2026-01",
    "income": 5000,
    "expense": 3000,
    "balance": 2000
  }
]
```

---

# 🧠 Models do Sistema

# 👤 User

```js
{
  name: String,
  email: String,
  password: String
}
```

---

# 💸 Transaction

```js
{
  userId: ObjectId,
  type: "income" | "expense",
  category: String,
  description: String,
  amount: Number,
  date: Date
}
```

---

# 🏷️ Category

```js
{
  userId: ObjectId,
  name: String,
  color: String,
  icon: String
}
```

---

# 🔐 Autenticação JWT

As rotas privadas exigem:

```http
Authorization: Bearer TOKEN
```

---

# ⚙️ Instalação

# 1. Clonar repositório

```bash
git clone <repo-url>
```

---

# 2. Entrar na pasta

```bash
cd server
```

---

# 3. Instalar dependências

```bash
npm install
```

---

# 4. Configurar variáveis ambiente

Criar arquivo `.env`

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

---

# 5. Rodar projeto

```bash
npm run dev
```

Servidor:

```bash
http://localhost:3000
```

---

# 📚 Dependências Utilizadas

## Produção

```json
{
  "express": "^5.x",
  "mongoose": "^8.x",
  "jsonwebtoken": "^9.x",
  "bcrypt": "^5.x",
  "cors": "^2.x",
  "dotenv": "^16.x"
}
```

---

## Desenvolvimento

```json
{
  "nodemon": "^3.x"
}
```

---

# 🧪 Fluxo Atual do Sistema

```text
Usuário
   ↓
Frontend React
   ↓
API Express
   ↓
Controllers
   ↓
MongoDB
```

---

# 🟢 Status Atual do Projeto

## Backend MVP

* ✅ funcional
* ✅ autenticado
* ✅ analytics básico
* ✅ filtros
* ✅ paginação
* ✅ categorias

---

# 📌 Roadmap

# 🟡 Melhorias Backend

## Segurança

* validação de dados
* helmet
* rate limit
* sanitização

---

## Arquitetura

* services layer
* repository pattern
* tratamento global de erros

---

## Performance

* aggregation avançada
* índices MongoDB
* cache Redis

---

## Qualidade

* testes automatizados
* swagger
* logs
* monitoramento

---

# 🔴 Features Futuras

## Financeiro

* múltiplas contas
* cartão de crédito
* recorrência
* metas financeiras

---

## Inteligência

* IA financeira
* previsões
* insights automáticos

---

## Plataforma

* Open Finance
* notificações
* aplicativo mobile

---

# 🎨 Frontend Planejado

## Stack

* React
* Vite
* Tailwind
* React Query
* Axios
* Recharts

---

## Telas

* Login
* Register
* Dashboard
* Transactions
* Categories
* Analytics
* Profile

---

# 🚀 Visão de Longo Prazo

Transformar o projeto em uma plataforma financeira moderna focada em:

* clareza financeira
* UX minimalista
* analytics inteligentes
* experiência estilo fintech

---

# 📄 Licença

MIT License

---

# 👨‍💻 Autor

Projeto desenvolvido com foco em aprendizado avançado de arquitetura MERN, APIs REST e construção de produtos SaaS modernos.

```
```
