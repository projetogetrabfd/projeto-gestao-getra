const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs'); // Importante: npm install bcryptjs

const prisma = new PrismaClient();

async function main() {
  console.log(' Iniciando o Seed (Populando banco)...');
  const senhaHash = await bcrypt.hash('123456', 10);
  const perfilAdmin = await prisma.perfil.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      nome: 'Administrador',
      permissoes: '{"acesso": "total"}' 
    },
  });

  const perfilFinanceiro = await prisma.perfil.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      nome: 'Financeiro',
      permissoes: '{"acesso": "financeiro"}'
    },
  });

  const perfilCliente = await prisma.perfil.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      nome: 'Cliente',
      permissoes: '{"acesso": "basico"}'
    },
  });

  console.log(' Perfis garantidos.');

  const adminEmail = 'admin@getra.com';
  await prisma.usuario.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      nome: 'Admin Master',
      email: adminEmail,
      senha_hash: senhaHash, 
      role: 'ADMIN_MASTER',  
      ativo: true,
      perfil: {
        connect: { id: 1 } 
      }
    },
  });
  console.log(` Usuário Admin criado: ${adminEmail} (Senha: 123456)`);

  const financeiroEmail = 'financeiro@getra.com';
  await prisma.usuario.upsert({
    where: { email: financeiroEmail },
    update: {},
    create: {
      nome: 'Gerente Financeiro',
      email: financeiroEmail,
      senha_hash: senhaHash,
      role: 'FINANCEIRO',  
      ativo: true,
      perfil: {
        connect: { id: 2 }
      }
    },
  });
  console.log(` Usuário Financeiro criado: ${financeiroEmail} (Senha: 123456)`);


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }
  
  );
}