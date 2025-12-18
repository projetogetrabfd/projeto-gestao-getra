# Frontend – Autenticação (Protótipo)
Visão geral

Nesta etapa do projeto, fiquei focada apenas no desenvolvimento do frontend, então não houve alterações no backend por enquanto. Como o prazo para entrega está curto (entrega amanhã), a ideia foi garantir que tivéssemos um protótipo funcional, organizado e fácil de entender para apresentação.

## Estrutura das páginas

Organizei o frontend separando cada funcionalidade em sua própria pasta, mantendo HTML, CSS e JavaScript separados, para facilitar a leitura, manutenção e futuras integrações.

### As páginas criadas foram:

Página de Login

Página de Cadastro (Cadastrar-se)

Página de Redefinição de Senha

Essa separação ajuda a deixar claro o papel de cada tela dentro do sistema.

Página de Login

A tela de login já está funcionando com uma lógica simulada no JavaScript.

### Existem alguns usuários pré-definidos, como:

Administrador

Financeiro

Diretor

Esses usuários servem apenas para simular a lógica de perfis, mostrando que futuramente cada tipo de usuário terá:

Telas específicas

Acessos diferentes dentro do sistema

Não há autenticação real nem integração com banco de dados nesta etapa.

## Página de Cadastro

A funcionalidade de cadastro foi criada apenas como um fluxo simulado:

O usuário preenche os dados

O sistema valida as informações básicas

Exibe uma mensagem de sucesso

Redireciona para a tela de login

⚠️ Os dados não são salvos em banco, pois essa parte depende do backend.

Redefinição de Senha

Também foi criada a funcionalidade de “Esqueci minha senha”, igualmente de forma simulada:

O usuário informa o e-mail

O sistema exibe uma mensagem explicando que as instruções seriam enviadas

Serve apenas para demonstrar o fluxo e a navegação

## Tecnologias utilizadas

HTML

CSS

JavaScript puro

Optei por não usar React nesta etapa porque não consegui dominar a tecnologia a tempo, e integrar com uma API sem segurança poderia complicar o projeto, principalmente com o prazo curto. A ideia foi priorizar algo bem feito, organizado e funcional no frontend, mesmo que como protótipo.

## Conclusão

Resumindo, o foco foi:

Entregar um frontend funcional

Manter tudo organizado e bem estruturado

Criar um protótipo claro, fácil de apresentar

Deixar a base pronta para integração com o backend futuramente

Caso alguém queira integrar essa parte depois ou fazer ajustes, a estrutura já está toda preparada para isso.