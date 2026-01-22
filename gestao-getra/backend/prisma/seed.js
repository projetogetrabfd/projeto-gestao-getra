const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs'); // Importante: npm install bcryptjs

const prisma = new PrismaClient();

async function main() {
  console.log(' Iniciando o Seed (Populando banco)...');

  // 1. GERAR SENHA CRIPTOGRAFADA PADRÃO
  // Vamos usar a senha "123456" para todos os usuários iniciais
  const senhaHash = await bcrypt.hash('123456', 10);

  // 2. CRIAR PERFIS (Baseado no seu Schema: nome e permissoes)
  // ID 1: ADMIN_MASTER
  const perfilAdmin = await prisma.perfil.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      nome: 'Administrador',
      permissoes: '{"acesso": "total"}' // O campo no schema é 'permissoes'
    },
  });

  // ID 2: FINANCEIRO
  const perfilFinanceiro = await prisma.perfil.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      nome: 'Financeiro',
      permissoes: '{"acesso": "financeiro"}'
    },
  });

  // ID 3: CLIENTE
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

  // 3. CRIAR USUÁRIO ADMIN MASTER
  const adminEmail = 'admin@getra.com';
  await prisma.usuario.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      nome: 'Admin Master',
      email: adminEmail,
      senha_hash: senhaHash, // Usando o campo certo e criptografado
      role: 'ADMIN_MASTER',  // Enum do Schema
      ativo: true,
      perfil: {
        connect: { id: 1 } 
      }
    },
  });
  console.log(` Usuário Admin criado: ${adminEmail} (Senha: 123456)`);

  // 4. CRIAR USUÁRIO FINANCEIRO
  const financeiroEmail = 'financeiro@getra.com';
  await prisma.usuario.upsert({
    where: { email: financeiroEmail },
    update: {},
    create: {
      nome: 'Gerente Financeiro',
      email: financeiroEmail,
      senha_hash: senhaHash,
      role: 'FINANCEIRO',   // Enum do Schema
      ativo: true,
      perfil: {
        connect: { id: 2 }
      }
    },
  });
  console.log(` Usuário Financeiro criado: ${financeiroEmail} (Senha: 123456)`);

  // 5. (OPCIONAL) CRIAR UMA EMPRESA DE TESTE (Para testar upload de NF)
  // Criamos o usuário e a tabela cliente vinculada (já que estão soltas no seu schema)
  const clienteEmail = 'teste@empresa.com';
  
  // Cria o usuário primeiro (para login)
  const usuarioCliente = await prisma.usuario.upsert({
      where: { email: clienteEmail },
      update: {},
      create: {
          nome: 'Empresa Teste Ltda',
          email: clienteEmail,
          senha_hash: senhaHash,
          role: 'CLIENTE',
          ativo: true,
          perfil: { connect: { id: 3 } }
      }
  });

  // Cria o registro na tabela Cliente
  await prisma.cliente.upsert({
      where: { cpf_cnpj: '12.345.678/0001-99' },
      update: {},
      create: {
          nome_razao_social: 'Empresa Teste Ltda',
          cpf_cnpj: '12.345.678/0001-99',
          email: clienteEmail,
          telefone: '11999999999',
          endereco_completo: 'Rua Teste, 123'
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