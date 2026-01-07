const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log(' Iniciando o Seed (Populando banco)...');

  // 1. CRIAR PERFIS (Se não existirem)
  // Usamos upsert: "Se existir, não faz nada. Se não existir, cria."
  const perfilAdmin = await prisma.perfil.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      nome: 'ADMIN',
      descricao: 'Acesso total ao sistema'
    },
  });

  const perfilCliente = await prisma.perfil.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      nome: 'CLIENTE',
      descricao: 'Acesso limitado a faturas'
    },
  });

  console.log(' Perfis criados/verificados.');

  // 2. CRIAR USUÁRIO ADMIN
  // Importante: Não passamos ID aqui, deixamos o banco gerar.
  const adminEmail = 'admin@getra.com.br';
  
  const usuarioAdmin = await prisma.usuario.upsert({
    where: { email: adminEmail },
    update: {}, // Se já existe, não muda nada
    create: {
      nome: 'Administrador',
      email: adminEmail,
      senha: '123', // Se usar hash no sistema, coloque o hash aqui
      ativo: true,
      // Conecta ao perfil ID 1 que garantimos ali em cima
      perfil: {
        connect: { id: 1 } 
      }
    },
  });

  console.log(' Usuário Admin criado.');
  
  // 3. (OPCIONAL) CRIAR O CLIENTE DA NOTA FISCAL PARA TESTE
  // Isso resolve o problema da Nota parar de salvar
  await prisma.cliente.upsert({
      where: { cpf_cnpj: '12.345.678/0001-99' }, // CNPJ do seu PDF de teste
      update: {},
      create: {
          nome: 'Empresa Teste Ltda',
          cpf_cnpj: '12.345.678/0001-99',
          email: 'teste@empresa.com',
          telefone: '11999999999',
          // Preencha outros campos obrigatórios do seu schema Cliente
      }
  });
  console.log(' Cliente de Teste criado.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });