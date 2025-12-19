
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ClienteScalarFieldEnum = {
  id: 'id',
  nome_razao_social: 'nome_razao_social',
  cpf_cnpj: 'cpf_cnpj',
  email: 'email',
  telefone: 'telefone',
  endereco_completo: 'endereco_completo'
};

exports.Prisma.ServicoScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  descricao: 'descricao',
  valor_padrao: 'valor_padrao'
};

exports.Prisma.PerfilScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  permissoes: 'permissoes'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  id_perfil: 'id_perfil',
  nome: 'nome',
  email: 'email',
  senha_hash: 'senha_hash',
  ativo: 'ativo'
};

exports.Prisma.ParceiroScalarFieldEnum = {
  id: 'id',
  nome_razao_social: 'nome_razao_social',
  cpf_cnpj: 'cpf_cnpj',
  email_contato: 'email_contato',
  dados_bancarios_pix: 'dados_bancarios_pix'
};

exports.Prisma.RecorrenciaScalarFieldEnum = {
  id: 'id',
  id_cliente: 'id_cliente',
  id_servico: 'id_servico',
  valor_cobrado: 'valor_cobrado',
  periodicidade: 'periodicidade',
  dia_vencimento: 'dia_vencimento',
  status: 'status'
};

exports.Prisma.FaturaScalarFieldEnum = {
  id: 'id',
  id_cliente: 'id_cliente',
  id_recorrencia: 'id_recorrencia',
  id_usuario_criador: 'id_usuario_criador',
  valor_total: 'valor_total',
  data_vencimento: 'data_vencimento',
  data_pagamento: 'data_pagamento',
  status: 'status',
  tipo_pagamento_preferencial: 'tipo_pagamento_preferencial',
  id_externo_gateway: 'id_externo_gateway',
  linha_digitavel_boleto: 'linha_digitavel_boleto',
  link_qr_code_pix: 'link_qr_code_pix'
};

exports.Prisma.ContaPagarScalarFieldEnum = {
  id: 'id',
  id_parceiro: 'id_parceiro',
  id_usuario_lancamento: 'id_usuario_lancamento',
  descricao: 'descricao',
  valor: 'valor',
  data_vencimento: 'data_vencimento',
  data_pagamento: 'data_pagamento',
  forma_pagamento: 'forma_pagamento',
  status: 'status'
};

exports.Prisma.NotaFiscalScalarFieldEnum = {
  id: 'id',
  id_fatura: 'id_fatura',
  numero: 'numero',
  data_emissao: 'data_emissao',
  valor_total: 'valor_total',
  status_api: 'status_api',
  id_externo_api: 'id_externo_api',
  link_xml: 'link_xml',
  link_pdf: 'link_pdf'
};

exports.Prisma.TransacaoScalarFieldEnum = {
  id: 'id',
  id_fatura: 'id_fatura',
  data_hora: 'data_hora',
  evento: 'evento',
  tipo_notificacao_api: 'tipo_notificacao_api',
  dados_resposta: 'dados_resposta'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Periodicidade = exports.$Enums.Periodicidade = {
  MENSAL: 'MENSAL',
  ANUAL: 'ANUAL'
};

exports.StatusRecorrencia = exports.$Enums.StatusRecorrencia = {
  ATIVA: 'ATIVA',
  PAUSADA: 'PAUSADA',
  CANCELADA: 'CANCELADA'
};

exports.StatusFatura = exports.$Enums.StatusFatura = {
  PENDENTE: 'PENDENTE',
  PAGA: 'PAGA',
  VENCIDA: 'VENCIDA'
};

exports.TipoPagamentoPreferencial = exports.$Enums.TipoPagamentoPreferencial = {
  BOLETO: 'BOLETO',
  PIX: 'PIX'
};

exports.FormaPagamento = exports.$Enums.FormaPagamento = {
  PIX: 'PIX',
  TRANSFERENCIA: 'TRANSFERENCIA',
  BOLETO: 'BOLETO'
};

exports.StatusContaPagar = exports.$Enums.StatusContaPagar = {
  PENDENTE: 'PENDENTE',
  PAGA: 'PAGA',
  VENCIDA: 'VENCIDA'
};

exports.StatusNotaFiscal = exports.$Enums.StatusNotaFiscal = {
  PENDENTE: 'PENDENTE',
  EMITIDA: 'EMITIDA',
  CANCELADA: 'CANCELADA',
  ERRO: 'ERRO'
};

exports.Prisma.ModelName = {
  Cliente: 'Cliente',
  Servico: 'Servico',
  Perfil: 'Perfil',
  Usuario: 'Usuario',
  Parceiro: 'Parceiro',
  Recorrencia: 'Recorrencia',
  Fatura: 'Fatura',
  ContaPagar: 'ContaPagar',
  NotaFiscal: 'NotaFiscal',
  Transacao: 'Transacao'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
