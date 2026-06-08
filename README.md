API REST para gerenciamento de usuários, desenvolvida como projeto de aprendizado.

Tecnologias usadas:
- Node JS.
- TypeScript.
- Express.
- Prisma ORM.
- PostgreSQL.
- Zod.
- Docker.
- Postman (para testar os endpoints).

Funcionalidades:
- Cadastro de usuários.
- Listagem de usuários.
- Atualização de dados.
- Exclusão de usuários.
- Validação de dados com Zod.
- Verificação de email duplicado.

O principal foco desse projeto, foi praticar:
- Docker.
- Programação orientada a objetos.
- Arquitetura MVC com separação em controllers, services e repositories.
- Validação de dados com Zod usando schemas reutilizáveis.
- Tratamento centralizado de erros com classes de exceção customizadas.
- Configuração de banco de dados PostgreSQL com Docker.
- ORM com Prisma: migrations, schemas e queries tipadas.
- Boas práticas de API REST com TypeScript.

Como rodar o projeto:
# Clone o repositório
- git clone https://github.com/tiagoocampos/user-form
- cd user-form/backend

# Instale as dependências
- npm install

# Configure as variáveis de ambiente
- Utilizando o arquivo .env.example como referência

# Suba o banco de dados
- docker-compose up -d

# Rode as migrations
- npx prisma migrate dev

# Inicie o servidor
- npm run dev
