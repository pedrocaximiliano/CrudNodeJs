# Crud NodeJs

# Descrição
Aplicação para cadastro de cursos desenvolvido em NodeJs onde é possível adicionar, 
editar, listar e excluir determinados curso de acordo com a categoria.

# Bibliotecas Utilizadas

express: micro framework para lidar com rota;

knex: Query builder para NodeJs para conecção com o SQLite3;

typeScript: Para adição de tipagem e intellisense.

# armazenamento de dados 
SQLite

# Iniciar

Para a criação da tabela de categorias onde estará o codigo e a descrição do curso 
digite no diretório do projeto o comando:

$ npm run knex:seed comando de atalho no package.json ou $ npx knex  --knexfile knexfile.ts seed:run

$ npm run knex:migrate comando de atalho no package.json ou $ npx knex --knexfile knexfile.ts seed:run

Para inicar a aplicação digitar o comando:
 yarn run dev no atalho do package.json ou $ npx ts-node-dev src/server.ts.
