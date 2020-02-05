# NodeJs - Servidor HTTP com sequelize

Para iniciar o projeto, com o arquivo de configuração do banco de dados configurado para seu pc use os seguintes codigos.
<pre>
  1. npx sequelize db:create                              - cria o banco de dados
  2. npx sequelize migration:create --name=create-tables  - cria o arquivo de migration
  3. npx sequelize db:migrate                             - executa a migration
  4. npx sequelize seed:generate --name insertValues      - cria o arquivo de seeders
  5. npx sequelize-cli db:seed:all                        - executa a seeder
</pre>
