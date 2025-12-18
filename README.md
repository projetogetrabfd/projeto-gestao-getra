Eu criei a estrutura de rotas e controladores para todas as tabelas que estavam no arquivo schema.prisma.

Organização das pastas:

Pasta prisma: Contem o arquivo com o desenho do banco de dados.

Pasta src/controllers: Contem 10 arquivos diferentes, um para cada tabela

Pasta src/routes: Contem o arquivo que organiza os endereços da API.

Pasta generated: Esta pasta fica dentro da pasta backend e guarda o motor do banco de dados.

avisos:

para Gerar o motor do banco Digite npx prisma generate. Isso e necessario porque a pasta generated nao vai para o Github.

Crie um arquivo chamado .env e coloque o link do banco de dados na variavel DATABASE_URL.

criei uma copia do arquivo schema.prisma na pasta backend/prisma para manter o desenho do banco de dados junto com o backend para facilitar o trabalho