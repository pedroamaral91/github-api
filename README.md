### Github API

---

#### 1. Projeto

---

O projeto é um monorepo utilizando somente o `yarn workspace` para gerenciamento de pacotes.

#### 2. Instalando as dependências e comandos de testes

---

##### 2.1 Clonando repositório

---

```bash
git clone https://github.com/pedroamaral91/github-api.git
```

##### 2.2 Instalando as dependências

---

```bash
cd github-api
yarn
```

##### 2.3 Iniciando a aplicação

---

```bash
yarn start
```

##### 2.4 Comandos básicos para testes unitarios/e2e

---

`yarn api:test` - Roda testes de integração e unitários no backend
`yarn api:test:unit` - Roda testes unitários no backend
`yarn api:test:e2e` - Roda testes de integração no backend
`yarn web:test` - Roda testes no frontend
`yarn web:test:cov` - Gera coverage de testes do front
`yarn api:test:cov` - Gera coverage de testes da api

#### TODO :}

---

- **Virtualização das opções do Select na home para evitar problemas de perfomance**
- Componente para tratamento de erros na aplicação (front)
- Componente maneiro de loader :b
