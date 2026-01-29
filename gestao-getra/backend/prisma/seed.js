const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

async function main() {
  console.log('🌱 INICIANDO O SEED (Populando Banco de Dados)...');

  // 1. Garantir os Perfis Obrigatórios
  // Usamos upsert para garantir que o ID 1 seja sempre ADMIN, etc.
  const perfis = [
    { id: 1, nome: 'ADMIN_MASTER', permissoes: '{}' },
    { id: 2, nome: 'FINANCEIRO', permissoes: '{}' },
    { id: 3, nome: 'CLIENTE', permissoes: '{}' },
  ];

  console.log('🔧 Verificando Perfis...');
  for (const perfil of perfis) {
    await prisma.perfil.upsert({
      where: { id: perfil.id },
      update: {}, // Se já existe, não faz nada
      create: perfil,
    });
  }
  console.log('Perfis (Admin, Financeiro, Cliente) garantidos!');

  // 2. Gerar Hash da Senha Padrão (123456)
  const senhaHash = await bcrypt.hash('123456', 10);

  // 3. Criar/Atualizar Usuário ADMIN
  const admin = await prisma.usuario.upsert({
    where: { email: 'admin@getra.com' },
    update: { 
        senha_hash: senhaHash, // Garante que a senha seja 123456
        role: 'ADMIN_MASTER',
        ativo: true
    }, 
    create: {
      email: 'admin@getra.com',
      nome: 'Administrador Geral',
      senha_hash: senhaHash,
      role: 'ADMIN_MASTER',
      ativo: true,
      perfil: { connect: { id: 1 } }, // Conecta ao Perfil 1
    },
  });
  console.log(`Usuário Admin pronto: ${admin.email} (Senha: 123456)`);

  // 4. Criar/Atualizar Usuário FINANCEIRO
  const financeiro = await prisma.usuario.upsert({
    where: { email: 'financeiro@getra.com' },
    update: { 
        senha_hash: senhaHash,
        role: 'FINANCEIRO',
        ativo: true
    },
    create: {
      email: 'financeiro@getra.com',
      nome: 'Gerente Financeiro',
      senha_hash: senhaHash,
      role: 'FINANCEIRO',
      ativo: true,
      perfil: { connect: { id: 2 } }, // Conecta ao Perfil 2
    },
  })
  console.log(` Usuário Financeiro pronto: ${financeiro.email} (Senha: 123456)`);

  console.log('SEED CONCLUÍDO COM SUCESSO!');
}

main()
  .catch((e) => {
    console.error('❌ERRO NO SEED:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });