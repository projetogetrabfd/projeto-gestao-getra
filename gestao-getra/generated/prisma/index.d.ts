
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Servico
 * 
 */
export type Servico = $Result.DefaultSelection<Prisma.$ServicoPayload>
/**
 * Model Perfil
 * 
 */
export type Perfil = $Result.DefaultSelection<Prisma.$PerfilPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Parceiro
 * 
 */
export type Parceiro = $Result.DefaultSelection<Prisma.$ParceiroPayload>
/**
 * Model Recorrencia
 * 
 */
export type Recorrencia = $Result.DefaultSelection<Prisma.$RecorrenciaPayload>
/**
 * Model Fatura
 * 
 */
export type Fatura = $Result.DefaultSelection<Prisma.$FaturaPayload>
/**
 * Model ContaPagar
 * 
 */
export type ContaPagar = $Result.DefaultSelection<Prisma.$ContaPagarPayload>
/**
 * Model NotaFiscal
 * 
 */
export type NotaFiscal = $Result.DefaultSelection<Prisma.$NotaFiscalPayload>
/**
 * Model Transacao
 * 
 */
export type Transacao = $Result.DefaultSelection<Prisma.$TransacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Periodicidade: {
  MENSAL: 'MENSAL',
  ANUAL: 'ANUAL'
};

export type Periodicidade = (typeof Periodicidade)[keyof typeof Periodicidade]


export const StatusRecorrencia: {
  ATIVA: 'ATIVA',
  PAUSADA: 'PAUSADA',
  CANCELADA: 'CANCELADA'
};

export type StatusRecorrencia = (typeof StatusRecorrencia)[keyof typeof StatusRecorrencia]


export const StatusFatura: {
  PENDENTE: 'PENDENTE',
  PAGA: 'PAGA',
  VENCIDA: 'VENCIDA'
};

export type StatusFatura = (typeof StatusFatura)[keyof typeof StatusFatura]


export const TipoPagamentoPreferencial: {
  BOLETO: 'BOLETO',
  PIX: 'PIX'
};

export type TipoPagamentoPreferencial = (typeof TipoPagamentoPreferencial)[keyof typeof TipoPagamentoPreferencial]


export const FormaPagamento: {
  PIX: 'PIX',
  TRANSFERENCIA: 'TRANSFERENCIA',
  BOLETO: 'BOLETO'
};

export type FormaPagamento = (typeof FormaPagamento)[keyof typeof FormaPagamento]


export const StatusContaPagar: {
  PENDENTE: 'PENDENTE',
  PAGA: 'PAGA',
  VENCIDA: 'VENCIDA'
};

export type StatusContaPagar = (typeof StatusContaPagar)[keyof typeof StatusContaPagar]


export const StatusNotaFiscal: {
  PENDENTE: 'PENDENTE',
  EMITIDA: 'EMITIDA',
  CANCELADA: 'CANCELADA',
  ERRO: 'ERRO'
};

export type StatusNotaFiscal = (typeof StatusNotaFiscal)[keyof typeof StatusNotaFiscal]

}

export type Periodicidade = $Enums.Periodicidade

export const Periodicidade: typeof $Enums.Periodicidade

export type StatusRecorrencia = $Enums.StatusRecorrencia

export const StatusRecorrencia: typeof $Enums.StatusRecorrencia

export type StatusFatura = $Enums.StatusFatura

export const StatusFatura: typeof $Enums.StatusFatura

export type TipoPagamentoPreferencial = $Enums.TipoPagamentoPreferencial

export const TipoPagamentoPreferencial: typeof $Enums.TipoPagamentoPreferencial

export type FormaPagamento = $Enums.FormaPagamento

export const FormaPagamento: typeof $Enums.FormaPagamento

export type StatusContaPagar = $Enums.StatusContaPagar

export const StatusContaPagar: typeof $Enums.StatusContaPagar

export type StatusNotaFiscal = $Enums.StatusNotaFiscal

export const StatusNotaFiscal: typeof $Enums.StatusNotaFiscal

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs>;

  /**
   * `prisma.servico`: Exposes CRUD operations for the **Servico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servico.findMany()
    * ```
    */
  get servico(): Prisma.ServicoDelegate<ExtArgs>;

  /**
   * `prisma.perfil`: Exposes CRUD operations for the **Perfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfils
    * const perfils = await prisma.perfil.findMany()
    * ```
    */
  get perfil(): Prisma.PerfilDelegate<ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.parceiro`: Exposes CRUD operations for the **Parceiro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parceiros
    * const parceiros = await prisma.parceiro.findMany()
    * ```
    */
  get parceiro(): Prisma.ParceiroDelegate<ExtArgs>;

  /**
   * `prisma.recorrencia`: Exposes CRUD operations for the **Recorrencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recorrencias
    * const recorrencias = await prisma.recorrencia.findMany()
    * ```
    */
  get recorrencia(): Prisma.RecorrenciaDelegate<ExtArgs>;

  /**
   * `prisma.fatura`: Exposes CRUD operations for the **Fatura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faturas
    * const faturas = await prisma.fatura.findMany()
    * ```
    */
  get fatura(): Prisma.FaturaDelegate<ExtArgs>;

  /**
   * `prisma.contaPagar`: Exposes CRUD operations for the **ContaPagar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContaPagars
    * const contaPagars = await prisma.contaPagar.findMany()
    * ```
    */
  get contaPagar(): Prisma.ContaPagarDelegate<ExtArgs>;

  /**
   * `prisma.notaFiscal`: Exposes CRUD operations for the **NotaFiscal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotaFiscals
    * const notaFiscals = await prisma.notaFiscal.findMany()
    * ```
    */
  get notaFiscal(): Prisma.NotaFiscalDelegate<ExtArgs>;

  /**
   * `prisma.transacao`: Exposes CRUD operations for the **Transacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transacaos
    * const transacaos = await prisma.transacao.findMany()
    * ```
    */
  get transacao(): Prisma.TransacaoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "cliente" | "servico" | "perfil" | "usuario" | "parceiro" | "recorrencia" | "fatura" | "contaPagar" | "notaFiscal" | "transacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Servico: {
        payload: Prisma.$ServicoPayload<ExtArgs>
        fields: Prisma.ServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findFirst: {
            args: Prisma.ServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findMany: {
            args: Prisma.ServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          create: {
            args: Prisma.ServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          createMany: {
            args: Prisma.ServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          delete: {
            args: Prisma.ServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          update: {
            args: Prisma.ServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          deleteMany: {
            args: Prisma.ServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          aggregate: {
            args: Prisma.ServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServico>
          }
          groupBy: {
            args: Prisma.ServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicoCountAggregateOutputType> | number
          }
        }
      }
      Perfil: {
        payload: Prisma.$PerfilPayload<ExtArgs>
        fields: Prisma.PerfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findFirst: {
            args: Prisma.PerfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findMany: {
            args: Prisma.PerfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          create: {
            args: Prisma.PerfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          createMany: {
            args: Prisma.PerfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerfilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          delete: {
            args: Prisma.PerfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          update: {
            args: Prisma.PerfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          deleteMany: {
            args: Prisma.PerfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PerfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          aggregate: {
            args: Prisma.PerfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfil>
          }
          groupBy: {
            args: Prisma.PerfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerfilCountArgs<ExtArgs>
            result: $Utils.Optional<PerfilCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Parceiro: {
        payload: Prisma.$ParceiroPayload<ExtArgs>
        fields: Prisma.ParceiroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParceiroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParceiroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>
          }
          findFirst: {
            args: Prisma.ParceiroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParceiroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>
          }
          findMany: {
            args: Prisma.ParceiroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>[]
          }
          create: {
            args: Prisma.ParceiroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>
          }
          createMany: {
            args: Prisma.ParceiroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParceiroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>[]
          }
          delete: {
            args: Prisma.ParceiroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>
          }
          update: {
            args: Prisma.ParceiroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>
          }
          deleteMany: {
            args: Prisma.ParceiroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParceiroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParceiroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParceiroPayload>
          }
          aggregate: {
            args: Prisma.ParceiroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParceiro>
          }
          groupBy: {
            args: Prisma.ParceiroGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParceiroGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParceiroCountArgs<ExtArgs>
            result: $Utils.Optional<ParceiroCountAggregateOutputType> | number
          }
        }
      }
      Recorrencia: {
        payload: Prisma.$RecorrenciaPayload<ExtArgs>
        fields: Prisma.RecorrenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecorrenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecorrenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecorrenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecorrenciaPayload>
          }
          findFirst: {
            args: Prisma.RecorrenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecorrenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecorrenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecorrenciaPayload>
          }
          findMany: {
            args: Prisma.RecorrenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecorrenciaPayload>[]
          }
          create: {
            args: Prisma.RecorrenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecorrenciaPayload>
          }
          createMany: {
            args: Prisma.RecorrenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecorrenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecorrenciaPayload>[]
          }
          delete: {
            args: Prisma.RecorrenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecorrenciaPayload>
          }
          update: {
            args: Prisma.RecorrenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecorrenciaPayload>
          }
          deleteMany: {
            args: Prisma.RecorrenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecorrenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecorrenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecorrenciaPayload>
          }
          aggregate: {
            args: Prisma.RecorrenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecorrencia>
          }
          groupBy: {
            args: Prisma.RecorrenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecorrenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecorrenciaCountArgs<ExtArgs>
            result: $Utils.Optional<RecorrenciaCountAggregateOutputType> | number
          }
        }
      }
      Fatura: {
        payload: Prisma.$FaturaPayload<ExtArgs>
        fields: Prisma.FaturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>
          }
          findFirst: {
            args: Prisma.FaturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>
          }
          findMany: {
            args: Prisma.FaturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>[]
          }
          create: {
            args: Prisma.FaturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>
          }
          createMany: {
            args: Prisma.FaturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FaturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>[]
          }
          delete: {
            args: Prisma.FaturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>
          }
          update: {
            args: Prisma.FaturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>
          }
          deleteMany: {
            args: Prisma.FaturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FaturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturaPayload>
          }
          aggregate: {
            args: Prisma.FaturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFatura>
          }
          groupBy: {
            args: Prisma.FaturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaturaCountArgs<ExtArgs>
            result: $Utils.Optional<FaturaCountAggregateOutputType> | number
          }
        }
      }
      ContaPagar: {
        payload: Prisma.$ContaPagarPayload<ExtArgs>
        fields: Prisma.ContaPagarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContaPagarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPagarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContaPagarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPagarPayload>
          }
          findFirst: {
            args: Prisma.ContaPagarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPagarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContaPagarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPagarPayload>
          }
          findMany: {
            args: Prisma.ContaPagarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPagarPayload>[]
          }
          create: {
            args: Prisma.ContaPagarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPagarPayload>
          }
          createMany: {
            args: Prisma.ContaPagarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContaPagarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPagarPayload>[]
          }
          delete: {
            args: Prisma.ContaPagarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPagarPayload>
          }
          update: {
            args: Prisma.ContaPagarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPagarPayload>
          }
          deleteMany: {
            args: Prisma.ContaPagarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContaPagarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContaPagarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContaPagarPayload>
          }
          aggregate: {
            args: Prisma.ContaPagarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContaPagar>
          }
          groupBy: {
            args: Prisma.ContaPagarGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContaPagarGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContaPagarCountArgs<ExtArgs>
            result: $Utils.Optional<ContaPagarCountAggregateOutputType> | number
          }
        }
      }
      NotaFiscal: {
        payload: Prisma.$NotaFiscalPayload<ExtArgs>
        fields: Prisma.NotaFiscalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotaFiscalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotaFiscalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalPayload>
          }
          findFirst: {
            args: Prisma.NotaFiscalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotaFiscalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalPayload>
          }
          findMany: {
            args: Prisma.NotaFiscalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalPayload>[]
          }
          create: {
            args: Prisma.NotaFiscalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalPayload>
          }
          createMany: {
            args: Prisma.NotaFiscalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotaFiscalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalPayload>[]
          }
          delete: {
            args: Prisma.NotaFiscalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalPayload>
          }
          update: {
            args: Prisma.NotaFiscalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalPayload>
          }
          deleteMany: {
            args: Prisma.NotaFiscalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotaFiscalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotaFiscalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaFiscalPayload>
          }
          aggregate: {
            args: Prisma.NotaFiscalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotaFiscal>
          }
          groupBy: {
            args: Prisma.NotaFiscalGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotaFiscalGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotaFiscalCountArgs<ExtArgs>
            result: $Utils.Optional<NotaFiscalCountAggregateOutputType> | number
          }
        }
      }
      Transacao: {
        payload: Prisma.$TransacaoPayload<ExtArgs>
        fields: Prisma.TransacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findFirst: {
            args: Prisma.TransacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findMany: {
            args: Prisma.TransacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          create: {
            args: Prisma.TransacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          createMany: {
            args: Prisma.TransacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          delete: {
            args: Prisma.TransacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          update: {
            args: Prisma.TransacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          deleteMany: {
            args: Prisma.TransacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          aggregate: {
            args: Prisma.TransacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransacao>
          }
          groupBy: {
            args: Prisma.TransacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransacaoCountArgs<ExtArgs>
            result: $Utils.Optional<TransacaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    recorrencias: number
    faturas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recorrencias?: boolean | ClienteCountOutputTypeCountRecorrenciasArgs
    faturas?: boolean | ClienteCountOutputTypeCountFaturasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountRecorrenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecorrenciaWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountFaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaturaWhereInput
  }


  /**
   * Count Type ServicoCountOutputType
   */

  export type ServicoCountOutputType = {
    recorrencias: number
  }

  export type ServicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recorrencias?: boolean | ServicoCountOutputTypeCountRecorrenciasArgs
  }

  // Custom InputTypes
  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoCountOutputType
     */
    select?: ServicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountRecorrenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecorrenciaWhereInput
  }


  /**
   * Count Type PerfilCountOutputType
   */

  export type PerfilCountOutputType = {
    usuarios: number
  }

  export type PerfilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | PerfilCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilCountOutputType
     */
    select?: PerfilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    faturas_criadas: number
    contas_pagar_lancadas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faturas_criadas?: boolean | UsuarioCountOutputTypeCountFaturas_criadasArgs
    contas_pagar_lancadas?: boolean | UsuarioCountOutputTypeCountContas_pagar_lancadasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFaturas_criadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaturaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountContas_pagar_lancadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContaPagarWhereInput
  }


  /**
   * Count Type ParceiroCountOutputType
   */

  export type ParceiroCountOutputType = {
    contas_pagar: number
  }

  export type ParceiroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contas_pagar?: boolean | ParceiroCountOutputTypeCountContas_pagarArgs
  }

  // Custom InputTypes
  /**
   * ParceiroCountOutputType without action
   */
  export type ParceiroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParceiroCountOutputType
     */
    select?: ParceiroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParceiroCountOutputType without action
   */
  export type ParceiroCountOutputTypeCountContas_pagarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContaPagarWhereInput
  }


  /**
   * Count Type RecorrenciaCountOutputType
   */

  export type RecorrenciaCountOutputType = {
    faturas: number
  }

  export type RecorrenciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faturas?: boolean | RecorrenciaCountOutputTypeCountFaturasArgs
  }

  // Custom InputTypes
  /**
   * RecorrenciaCountOutputType without action
   */
  export type RecorrenciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecorrenciaCountOutputType
     */
    select?: RecorrenciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecorrenciaCountOutputType without action
   */
  export type RecorrenciaCountOutputTypeCountFaturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaturaWhereInput
  }


  /**
   * Count Type FaturaCountOutputType
   */

  export type FaturaCountOutputType = {
    transacoes: number
  }

  export type FaturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transacoes?: boolean | FaturaCountOutputTypeCountTransacoesArgs
  }

  // Custom InputTypes
  /**
   * FaturaCountOutputType without action
   */
  export type FaturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaturaCountOutputType
     */
    select?: FaturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FaturaCountOutputType without action
   */
  export type FaturaCountOutputTypeCountTransacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome_razao_social: string | null
    cpf_cnpj: string | null
    email: string | null
    telefone: string | null
    endereco_completo: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome_razao_social: string | null
    cpf_cnpj: string | null
    email: string | null
    telefone: string | null
    endereco_completo: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome_razao_social: number
    cpf_cnpj: number
    email: number
    telefone: number
    endereco_completo: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome_razao_social?: true
    cpf_cnpj?: true
    email?: true
    telefone?: true
    endereco_completo?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome_razao_social?: true
    cpf_cnpj?: true
    email?: true
    telefone?: true
    endereco_completo?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome_razao_social?: true
    cpf_cnpj?: true
    email?: true
    telefone?: true
    endereco_completo?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome_razao_social: string
    cpf_cnpj: string
    email: string
    telefone: string
    endereco_completo: string
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_razao_social?: boolean
    cpf_cnpj?: boolean
    email?: boolean
    telefone?: boolean
    endereco_completo?: boolean
    recorrencias?: boolean | Cliente$recorrenciasArgs<ExtArgs>
    faturas?: boolean | Cliente$faturasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_razao_social?: boolean
    cpf_cnpj?: boolean
    email?: boolean
    telefone?: boolean
    endereco_completo?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome_razao_social?: boolean
    cpf_cnpj?: boolean
    email?: boolean
    telefone?: boolean
    endereco_completo?: boolean
  }

  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recorrencias?: boolean | Cliente$recorrenciasArgs<ExtArgs>
    faturas?: boolean | Cliente$faturasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      recorrencias: Prisma.$RecorrenciaPayload<ExtArgs>[]
      faturas: Prisma.$FaturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_razao_social: string
      cpf_cnpj: string
      email: string
      telefone: string
      endereco_completo: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recorrencias<T extends Cliente$recorrenciasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$recorrenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "findMany"> | Null>
    faturas<T extends Cliente$faturasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$faturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */ 
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nome_razao_social: FieldRef<"Cliente", 'String'>
    readonly cpf_cnpj: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly endereco_completo: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
  }

  /**
   * Cliente.recorrencias
   */
  export type Cliente$recorrenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
    where?: RecorrenciaWhereInput
    orderBy?: RecorrenciaOrderByWithRelationInput | RecorrenciaOrderByWithRelationInput[]
    cursor?: RecorrenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecorrenciaScalarFieldEnum | RecorrenciaScalarFieldEnum[]
  }

  /**
   * Cliente.faturas
   */
  export type Cliente$faturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    where?: FaturaWhereInput
    orderBy?: FaturaOrderByWithRelationInput | FaturaOrderByWithRelationInput[]
    cursor?: FaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaturaScalarFieldEnum | FaturaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Servico
   */

  export type AggregateServico = {
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  export type ServicoAvgAggregateOutputType = {
    id: number | null
    valor_padrao: Decimal | null
  }

  export type ServicoSumAggregateOutputType = {
    id: number | null
    valor_padrao: Decimal | null
  }

  export type ServicoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    valor_padrao: Decimal | null
  }

  export type ServicoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    valor_padrao: Decimal | null
  }

  export type ServicoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    valor_padrao: number
    _all: number
  }


  export type ServicoAvgAggregateInputType = {
    id?: true
    valor_padrao?: true
  }

  export type ServicoSumAggregateInputType = {
    id?: true
    valor_padrao?: true
  }

  export type ServicoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valor_padrao?: true
  }

  export type ServicoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valor_padrao?: true
  }

  export type ServicoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    valor_padrao?: true
    _all?: true
  }

  export type ServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servico to aggregate.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicos
    **/
    _count?: true | ServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicoMaxAggregateInputType
  }

  export type GetServicoAggregateType<T extends ServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServico[P]>
      : GetScalarType<T[P], AggregateServico[P]>
  }




  export type ServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithAggregationInput | ServicoOrderByWithAggregationInput[]
    by: ServicoScalarFieldEnum[] | ServicoScalarFieldEnum
    having?: ServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicoCountAggregateInputType | true
    _avg?: ServicoAvgAggregateInputType
    _sum?: ServicoSumAggregateInputType
    _min?: ServicoMinAggregateInputType
    _max?: ServicoMaxAggregateInputType
  }

  export type ServicoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    valor_padrao: Decimal
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  type GetServicoGroupByPayload<T extends ServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicoGroupByOutputType[P]>
        }
      >
    >


  export type ServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valor_padrao?: boolean
    recorrencias?: boolean | Servico$recorrenciasArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valor_padrao?: boolean
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    valor_padrao?: boolean
  }

  export type ServicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recorrencias?: boolean | Servico$recorrenciasArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servico"
    objects: {
      recorrencias: Prisma.$RecorrenciaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      valor_padrao: Prisma.Decimal
    }, ExtArgs["result"]["servico"]>
    composites: {}
  }

  type ServicoGetPayload<S extends boolean | null | undefined | ServicoDefaultArgs> = $Result.GetResult<Prisma.$ServicoPayload, S>

  type ServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServicoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServicoCountAggregateInputType | true
    }

  export interface ServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servico'], meta: { name: 'Servico' } }
    /**
     * Find zero or one Servico that matches the filter.
     * @param {ServicoFindUniqueArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicoFindUniqueArgs>(args: SelectSubset<T, ServicoFindUniqueArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Servico that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServicoFindUniqueOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Servico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicoFindFirstArgs>(args?: SelectSubset<T, ServicoFindFirstArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Servico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servico.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicoWithIdOnly = await prisma.servico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicoFindManyArgs>(args?: SelectSubset<T, ServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Servico.
     * @param {ServicoCreateArgs} args - Arguments to create a Servico.
     * @example
     * // Create one Servico
     * const Servico = await prisma.servico.create({
     *   data: {
     *     // ... data to create a Servico
     *   }
     * })
     * 
     */
    create<T extends ServicoCreateArgs>(args: SelectSubset<T, ServicoCreateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Servicos.
     * @param {ServicoCreateManyArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicoCreateManyArgs>(args?: SelectSubset<T, ServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicos and returns the data saved in the database.
     * @param {ServicoCreateManyAndReturnArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicos and only return the `id`
     * const servicoWithIdOnly = await prisma.servico.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Servico.
     * @param {ServicoDeleteArgs} args - Arguments to delete one Servico.
     * @example
     * // Delete one Servico
     * const Servico = await prisma.servico.delete({
     *   where: {
     *     // ... filter to delete one Servico
     *   }
     * })
     * 
     */
    delete<T extends ServicoDeleteArgs>(args: SelectSubset<T, ServicoDeleteArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Servico.
     * @param {ServicoUpdateArgs} args - Arguments to update one Servico.
     * @example
     * // Update one Servico
     * const servico = await prisma.servico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicoUpdateArgs>(args: SelectSubset<T, ServicoUpdateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Servicos.
     * @param {ServicoDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicoDeleteManyArgs>(args?: SelectSubset<T, ServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicoUpdateManyArgs>(args: SelectSubset<T, ServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servico.
     * @param {ServicoUpsertArgs} args - Arguments to update or create a Servico.
     * @example
     * // Update or create a Servico
     * const servico = await prisma.servico.upsert({
     *   create: {
     *     // ... data to create a Servico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servico we want to update
     *   }
     * })
     */
    upsert<T extends ServicoUpsertArgs>(args: SelectSubset<T, ServicoUpsertArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servico.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends ServicoCountArgs>(
      args?: Subset<T, ServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicoAggregateArgs>(args: Subset<T, ServicoAggregateArgs>): Prisma.PrismaPromise<GetServicoAggregateType<T>>

    /**
     * Group by Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicoGroupByArgs['orderBy'] }
        : { orderBy?: ServicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servico model
   */
  readonly fields: ServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recorrencias<T extends Servico$recorrenciasArgs<ExtArgs> = {}>(args?: Subset<T, Servico$recorrenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Servico model
   */ 
  interface ServicoFieldRefs {
    readonly id: FieldRef<"Servico", 'Int'>
    readonly nome: FieldRef<"Servico", 'String'>
    readonly descricao: FieldRef<"Servico", 'String'>
    readonly valor_padrao: FieldRef<"Servico", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Servico findUnique
   */
  export type ServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findUniqueOrThrow
   */
  export type ServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findFirst
   */
  export type ServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findFirstOrThrow
   */
  export type ServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findMany
   */
  export type ServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico create
   */
  export type ServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Servico.
     */
    data: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
  }

  /**
   * Servico createMany
   */
  export type ServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servico createManyAndReturn
   */
  export type ServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servico update
   */
  export type ServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Servico.
     */
    data: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
    /**
     * Choose, which Servico to update.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico updateMany
   */
  export type ServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
  }

  /**
   * Servico upsert
   */
  export type ServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Servico to update in case it exists.
     */
    where: ServicoWhereUniqueInput
    /**
     * In case the Servico found by the `where` argument doesn't exist, create a new Servico with this data.
     */
    create: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
    /**
     * In case the Servico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
  }

  /**
   * Servico delete
   */
  export type ServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter which Servico to delete.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico deleteMany
   */
  export type ServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicos to delete
     */
    where?: ServicoWhereInput
  }

  /**
   * Servico.recorrencias
   */
  export type Servico$recorrenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
    where?: RecorrenciaWhereInput
    orderBy?: RecorrenciaOrderByWithRelationInput | RecorrenciaOrderByWithRelationInput[]
    cursor?: RecorrenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecorrenciaScalarFieldEnum | RecorrenciaScalarFieldEnum[]
  }

  /**
   * Servico without action
   */
  export type ServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
  }


  /**
   * Model Perfil
   */

  export type AggregatePerfil = {
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  export type PerfilAvgAggregateOutputType = {
    id: number | null
  }

  export type PerfilSumAggregateOutputType = {
    id: number | null
  }

  export type PerfilMinAggregateOutputType = {
    id: number | null
    nome: string | null
    permissoes: string | null
  }

  export type PerfilMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    permissoes: string | null
  }

  export type PerfilCountAggregateOutputType = {
    id: number
    nome: number
    permissoes: number
    _all: number
  }


  export type PerfilAvgAggregateInputType = {
    id?: true
  }

  export type PerfilSumAggregateInputType = {
    id?: true
  }

  export type PerfilMinAggregateInputType = {
    id?: true
    nome?: true
    permissoes?: true
  }

  export type PerfilMaxAggregateInputType = {
    id?: true
    nome?: true
    permissoes?: true
  }

  export type PerfilCountAggregateInputType = {
    id?: true
    nome?: true
    permissoes?: true
    _all?: true
  }

  export type PerfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfil to aggregate.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perfils
    **/
    _count?: true | PerfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilMaxAggregateInputType
  }

  export type GetPerfilAggregateType<T extends PerfilAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfil[P]>
      : GetScalarType<T[P], AggregatePerfil[P]>
  }




  export type PerfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerfilWhereInput
    orderBy?: PerfilOrderByWithAggregationInput | PerfilOrderByWithAggregationInput[]
    by: PerfilScalarFieldEnum[] | PerfilScalarFieldEnum
    having?: PerfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilCountAggregateInputType | true
    _avg?: PerfilAvgAggregateInputType
    _sum?: PerfilSumAggregateInputType
    _min?: PerfilMinAggregateInputType
    _max?: PerfilMaxAggregateInputType
  }

  export type PerfilGroupByOutputType = {
    id: number
    nome: string
    permissoes: string
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  type GetPerfilGroupByPayload<T extends PerfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilGroupByOutputType[P]>
        }
      >
    >


  export type PerfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    permissoes?: boolean
    usuarios?: boolean | Perfil$usuariosArgs<ExtArgs>
    _count?: boolean | PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type PerfilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    permissoes?: boolean
  }, ExtArgs["result"]["perfil"]>

  export type PerfilSelectScalar = {
    id?: boolean
    nome?: boolean
    permissoes?: boolean
  }

  export type PerfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Perfil$usuariosArgs<ExtArgs>
    _count?: boolean | PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PerfilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PerfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perfil"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      permissoes: string
    }, ExtArgs["result"]["perfil"]>
    composites: {}
  }

  type PerfilGetPayload<S extends boolean | null | undefined | PerfilDefaultArgs> = $Result.GetResult<Prisma.$PerfilPayload, S>

  type PerfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PerfilFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PerfilCountAggregateInputType | true
    }

  export interface PerfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perfil'], meta: { name: 'Perfil' } }
    /**
     * Find zero or one Perfil that matches the filter.
     * @param {PerfilFindUniqueArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerfilFindUniqueArgs>(args: SelectSubset<T, PerfilFindUniqueArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Perfil that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PerfilFindUniqueOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerfilFindUniqueOrThrowArgs>(args: SelectSubset<T, PerfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Perfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerfilFindFirstArgs>(args?: SelectSubset<T, PerfilFindFirstArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Perfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerfilFindFirstOrThrowArgs>(args?: SelectSubset<T, PerfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Perfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfils
     * const perfils = await prisma.perfil.findMany()
     * 
     * // Get first 10 Perfils
     * const perfils = await prisma.perfil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfilWithIdOnly = await prisma.perfil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerfilFindManyArgs>(args?: SelectSubset<T, PerfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Perfil.
     * @param {PerfilCreateArgs} args - Arguments to create a Perfil.
     * @example
     * // Create one Perfil
     * const Perfil = await prisma.perfil.create({
     *   data: {
     *     // ... data to create a Perfil
     *   }
     * })
     * 
     */
    create<T extends PerfilCreateArgs>(args: SelectSubset<T, PerfilCreateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Perfils.
     * @param {PerfilCreateManyArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerfilCreateManyArgs>(args?: SelectSubset<T, PerfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perfils and returns the data saved in the database.
     * @param {PerfilCreateManyAndReturnArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perfils and only return the `id`
     * const perfilWithIdOnly = await prisma.perfil.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerfilCreateManyAndReturnArgs>(args?: SelectSubset<T, PerfilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Perfil.
     * @param {PerfilDeleteArgs} args - Arguments to delete one Perfil.
     * @example
     * // Delete one Perfil
     * const Perfil = await prisma.perfil.delete({
     *   where: {
     *     // ... filter to delete one Perfil
     *   }
     * })
     * 
     */
    delete<T extends PerfilDeleteArgs>(args: SelectSubset<T, PerfilDeleteArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Perfil.
     * @param {PerfilUpdateArgs} args - Arguments to update one Perfil.
     * @example
     * // Update one Perfil
     * const perfil = await prisma.perfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerfilUpdateArgs>(args: SelectSubset<T, PerfilUpdateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Perfils.
     * @param {PerfilDeleteManyArgs} args - Arguments to filter Perfils to delete.
     * @example
     * // Delete a few Perfils
     * const { count } = await prisma.perfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerfilDeleteManyArgs>(args?: SelectSubset<T, PerfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerfilUpdateManyArgs>(args: SelectSubset<T, PerfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Perfil.
     * @param {PerfilUpsertArgs} args - Arguments to update or create a Perfil.
     * @example
     * // Update or create a Perfil
     * const perfil = await prisma.perfil.upsert({
     *   create: {
     *     // ... data to create a Perfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfil we want to update
     *   }
     * })
     */
    upsert<T extends PerfilUpsertArgs>(args: SelectSubset<T, PerfilUpsertArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilCountArgs} args - Arguments to filter Perfils to count.
     * @example
     * // Count the number of Perfils
     * const count = await prisma.perfil.count({
     *   where: {
     *     // ... the filter for the Perfils we want to count
     *   }
     * })
    **/
    count<T extends PerfilCountArgs>(
      args?: Subset<T, PerfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerfilAggregateArgs>(args: Subset<T, PerfilAggregateArgs>): Prisma.PrismaPromise<GetPerfilAggregateType<T>>

    /**
     * Group by Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerfilGroupByArgs['orderBy'] }
        : { orderBy?: PerfilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perfil model
   */
  readonly fields: PerfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Perfil$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Perfil model
   */ 
  interface PerfilFieldRefs {
    readonly id: FieldRef<"Perfil", 'Int'>
    readonly nome: FieldRef<"Perfil", 'String'>
    readonly permissoes: FieldRef<"Perfil", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Perfil findUnique
   */
  export type PerfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findUniqueOrThrow
   */
  export type PerfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findFirst
   */
  export type PerfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findFirstOrThrow
   */
  export type PerfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findMany
   */
  export type PerfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfils to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil create
   */
  export type PerfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to create a Perfil.
     */
    data: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
  }

  /**
   * Perfil createMany
   */
  export type PerfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perfil createManyAndReturn
   */
  export type PerfilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perfil update
   */
  export type PerfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to update a Perfil.
     */
    data: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
    /**
     * Choose, which Perfil to update.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil updateMany
   */
  export type PerfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perfils.
     */
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyInput>
    /**
     * Filter which Perfils to update
     */
    where?: PerfilWhereInput
  }

  /**
   * Perfil upsert
   */
  export type PerfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The filter to search for the Perfil to update in case it exists.
     */
    where: PerfilWhereUniqueInput
    /**
     * In case the Perfil found by the `where` argument doesn't exist, create a new Perfil with this data.
     */
    create: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
    /**
     * In case the Perfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
  }

  /**
   * Perfil delete
   */
  export type PerfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter which Perfil to delete.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil deleteMany
   */
  export type PerfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfils to delete
     */
    where?: PerfilWhereInput
  }

  /**
   * Perfil.usuarios
   */
  export type Perfil$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Perfil without action
   */
  export type PerfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    id_perfil: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    id_perfil: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    id_perfil: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    ativo: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    id_perfil: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    ativo: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    id_perfil: number
    nome: number
    email: number
    senha_hash: number
    ativo: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    id_perfil?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    id_perfil?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    id_perfil?: true
    nome?: true
    email?: true
    senha_hash?: true
    ativo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    id_perfil?: true
    nome?: true
    email?: true
    senha_hash?: true
    ativo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    id_perfil?: true
    nome?: true
    email?: true
    senha_hash?: true
    ativo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    id_perfil: number
    nome: string
    email: string
    senha_hash: string
    ativo: boolean
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_perfil?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    ativo?: boolean
    perfil?: boolean | PerfilDefaultArgs<ExtArgs>
    faturas_criadas?: boolean | Usuario$faturas_criadasArgs<ExtArgs>
    contas_pagar_lancadas?: boolean | Usuario$contas_pagar_lancadasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_perfil?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    ativo?: boolean
    perfil?: boolean | PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    id_perfil?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    ativo?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | PerfilDefaultArgs<ExtArgs>
    faturas_criadas?: boolean | Usuario$faturas_criadasArgs<ExtArgs>
    contas_pagar_lancadas?: boolean | Usuario$contas_pagar_lancadasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | PerfilDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      perfil: Prisma.$PerfilPayload<ExtArgs>
      faturas_criadas: Prisma.$FaturaPayload<ExtArgs>[]
      contas_pagar_lancadas: Prisma.$ContaPagarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_perfil: number
      nome: string
      email: string
      senha_hash: string
      ativo: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerfilDefaultArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    faturas_criadas<T extends Usuario$faturas_criadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$faturas_criadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findMany"> | Null>
    contas_pagar_lancadas<T extends Usuario$contas_pagar_lancadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$contas_pagar_lancadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContaPagarPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly id_perfil: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha_hash: FieldRef<"Usuario", 'String'>
    readonly ativo: FieldRef<"Usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.faturas_criadas
   */
  export type Usuario$faturas_criadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    where?: FaturaWhereInput
    orderBy?: FaturaOrderByWithRelationInput | FaturaOrderByWithRelationInput[]
    cursor?: FaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaturaScalarFieldEnum | FaturaScalarFieldEnum[]
  }

  /**
   * Usuario.contas_pagar_lancadas
   */
  export type Usuario$contas_pagar_lancadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarInclude<ExtArgs> | null
    where?: ContaPagarWhereInput
    orderBy?: ContaPagarOrderByWithRelationInput | ContaPagarOrderByWithRelationInput[]
    cursor?: ContaPagarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContaPagarScalarFieldEnum | ContaPagarScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Parceiro
   */

  export type AggregateParceiro = {
    _count: ParceiroCountAggregateOutputType | null
    _avg: ParceiroAvgAggregateOutputType | null
    _sum: ParceiroSumAggregateOutputType | null
    _min: ParceiroMinAggregateOutputType | null
    _max: ParceiroMaxAggregateOutputType | null
  }

  export type ParceiroAvgAggregateOutputType = {
    id: number | null
  }

  export type ParceiroSumAggregateOutputType = {
    id: number | null
  }

  export type ParceiroMinAggregateOutputType = {
    id: number | null
    nome_razao_social: string | null
    cpf_cnpj: string | null
    email_contato: string | null
    dados_bancarios_pix: string | null
  }

  export type ParceiroMaxAggregateOutputType = {
    id: number | null
    nome_razao_social: string | null
    cpf_cnpj: string | null
    email_contato: string | null
    dados_bancarios_pix: string | null
  }

  export type ParceiroCountAggregateOutputType = {
    id: number
    nome_razao_social: number
    cpf_cnpj: number
    email_contato: number
    dados_bancarios_pix: number
    _all: number
  }


  export type ParceiroAvgAggregateInputType = {
    id?: true
  }

  export type ParceiroSumAggregateInputType = {
    id?: true
  }

  export type ParceiroMinAggregateInputType = {
    id?: true
    nome_razao_social?: true
    cpf_cnpj?: true
    email_contato?: true
    dados_bancarios_pix?: true
  }

  export type ParceiroMaxAggregateInputType = {
    id?: true
    nome_razao_social?: true
    cpf_cnpj?: true
    email_contato?: true
    dados_bancarios_pix?: true
  }

  export type ParceiroCountAggregateInputType = {
    id?: true
    nome_razao_social?: true
    cpf_cnpj?: true
    email_contato?: true
    dados_bancarios_pix?: true
    _all?: true
  }

  export type ParceiroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parceiro to aggregate.
     */
    where?: ParceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parceiros to fetch.
     */
    orderBy?: ParceiroOrderByWithRelationInput | ParceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parceiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parceiros
    **/
    _count?: true | ParceiroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParceiroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParceiroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParceiroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParceiroMaxAggregateInputType
  }

  export type GetParceiroAggregateType<T extends ParceiroAggregateArgs> = {
        [P in keyof T & keyof AggregateParceiro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParceiro[P]>
      : GetScalarType<T[P], AggregateParceiro[P]>
  }




  export type ParceiroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParceiroWhereInput
    orderBy?: ParceiroOrderByWithAggregationInput | ParceiroOrderByWithAggregationInput[]
    by: ParceiroScalarFieldEnum[] | ParceiroScalarFieldEnum
    having?: ParceiroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParceiroCountAggregateInputType | true
    _avg?: ParceiroAvgAggregateInputType
    _sum?: ParceiroSumAggregateInputType
    _min?: ParceiroMinAggregateInputType
    _max?: ParceiroMaxAggregateInputType
  }

  export type ParceiroGroupByOutputType = {
    id: number
    nome_razao_social: string
    cpf_cnpj: string
    email_contato: string
    dados_bancarios_pix: string | null
    _count: ParceiroCountAggregateOutputType | null
    _avg: ParceiroAvgAggregateOutputType | null
    _sum: ParceiroSumAggregateOutputType | null
    _min: ParceiroMinAggregateOutputType | null
    _max: ParceiroMaxAggregateOutputType | null
  }

  type GetParceiroGroupByPayload<T extends ParceiroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParceiroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParceiroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParceiroGroupByOutputType[P]>
            : GetScalarType<T[P], ParceiroGroupByOutputType[P]>
        }
      >
    >


  export type ParceiroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_razao_social?: boolean
    cpf_cnpj?: boolean
    email_contato?: boolean
    dados_bancarios_pix?: boolean
    contas_pagar?: boolean | Parceiro$contas_pagarArgs<ExtArgs>
    _count?: boolean | ParceiroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parceiro"]>

  export type ParceiroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome_razao_social?: boolean
    cpf_cnpj?: boolean
    email_contato?: boolean
    dados_bancarios_pix?: boolean
  }, ExtArgs["result"]["parceiro"]>

  export type ParceiroSelectScalar = {
    id?: boolean
    nome_razao_social?: boolean
    cpf_cnpj?: boolean
    email_contato?: boolean
    dados_bancarios_pix?: boolean
  }

  export type ParceiroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contas_pagar?: boolean | Parceiro$contas_pagarArgs<ExtArgs>
    _count?: boolean | ParceiroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParceiroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParceiroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parceiro"
    objects: {
      contas_pagar: Prisma.$ContaPagarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome_razao_social: string
      cpf_cnpj: string
      email_contato: string
      dados_bancarios_pix: string | null
    }, ExtArgs["result"]["parceiro"]>
    composites: {}
  }

  type ParceiroGetPayload<S extends boolean | null | undefined | ParceiroDefaultArgs> = $Result.GetResult<Prisma.$ParceiroPayload, S>

  type ParceiroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParceiroFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ParceiroCountAggregateInputType | true
    }

  export interface ParceiroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parceiro'], meta: { name: 'Parceiro' } }
    /**
     * Find zero or one Parceiro that matches the filter.
     * @param {ParceiroFindUniqueArgs} args - Arguments to find a Parceiro
     * @example
     * // Get one Parceiro
     * const parceiro = await prisma.parceiro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParceiroFindUniqueArgs>(args: SelectSubset<T, ParceiroFindUniqueArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Parceiro that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ParceiroFindUniqueOrThrowArgs} args - Arguments to find a Parceiro
     * @example
     * // Get one Parceiro
     * const parceiro = await prisma.parceiro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParceiroFindUniqueOrThrowArgs>(args: SelectSubset<T, ParceiroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Parceiro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroFindFirstArgs} args - Arguments to find a Parceiro
     * @example
     * // Get one Parceiro
     * const parceiro = await prisma.parceiro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParceiroFindFirstArgs>(args?: SelectSubset<T, ParceiroFindFirstArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Parceiro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroFindFirstOrThrowArgs} args - Arguments to find a Parceiro
     * @example
     * // Get one Parceiro
     * const parceiro = await prisma.parceiro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParceiroFindFirstOrThrowArgs>(args?: SelectSubset<T, ParceiroFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Parceiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parceiros
     * const parceiros = await prisma.parceiro.findMany()
     * 
     * // Get first 10 Parceiros
     * const parceiros = await prisma.parceiro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parceiroWithIdOnly = await prisma.parceiro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParceiroFindManyArgs>(args?: SelectSubset<T, ParceiroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Parceiro.
     * @param {ParceiroCreateArgs} args - Arguments to create a Parceiro.
     * @example
     * // Create one Parceiro
     * const Parceiro = await prisma.parceiro.create({
     *   data: {
     *     // ... data to create a Parceiro
     *   }
     * })
     * 
     */
    create<T extends ParceiroCreateArgs>(args: SelectSubset<T, ParceiroCreateArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Parceiros.
     * @param {ParceiroCreateManyArgs} args - Arguments to create many Parceiros.
     * @example
     * // Create many Parceiros
     * const parceiro = await prisma.parceiro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParceiroCreateManyArgs>(args?: SelectSubset<T, ParceiroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parceiros and returns the data saved in the database.
     * @param {ParceiroCreateManyAndReturnArgs} args - Arguments to create many Parceiros.
     * @example
     * // Create many Parceiros
     * const parceiro = await prisma.parceiro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parceiros and only return the `id`
     * const parceiroWithIdOnly = await prisma.parceiro.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParceiroCreateManyAndReturnArgs>(args?: SelectSubset<T, ParceiroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Parceiro.
     * @param {ParceiroDeleteArgs} args - Arguments to delete one Parceiro.
     * @example
     * // Delete one Parceiro
     * const Parceiro = await prisma.parceiro.delete({
     *   where: {
     *     // ... filter to delete one Parceiro
     *   }
     * })
     * 
     */
    delete<T extends ParceiroDeleteArgs>(args: SelectSubset<T, ParceiroDeleteArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Parceiro.
     * @param {ParceiroUpdateArgs} args - Arguments to update one Parceiro.
     * @example
     * // Update one Parceiro
     * const parceiro = await prisma.parceiro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParceiroUpdateArgs>(args: SelectSubset<T, ParceiroUpdateArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Parceiros.
     * @param {ParceiroDeleteManyArgs} args - Arguments to filter Parceiros to delete.
     * @example
     * // Delete a few Parceiros
     * const { count } = await prisma.parceiro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParceiroDeleteManyArgs>(args?: SelectSubset<T, ParceiroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parceiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parceiros
     * const parceiro = await prisma.parceiro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParceiroUpdateManyArgs>(args: SelectSubset<T, ParceiroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parceiro.
     * @param {ParceiroUpsertArgs} args - Arguments to update or create a Parceiro.
     * @example
     * // Update or create a Parceiro
     * const parceiro = await prisma.parceiro.upsert({
     *   create: {
     *     // ... data to create a Parceiro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parceiro we want to update
     *   }
     * })
     */
    upsert<T extends ParceiroUpsertArgs>(args: SelectSubset<T, ParceiroUpsertArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Parceiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroCountArgs} args - Arguments to filter Parceiros to count.
     * @example
     * // Count the number of Parceiros
     * const count = await prisma.parceiro.count({
     *   where: {
     *     // ... the filter for the Parceiros we want to count
     *   }
     * })
    **/
    count<T extends ParceiroCountArgs>(
      args?: Subset<T, ParceiroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParceiroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parceiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParceiroAggregateArgs>(args: Subset<T, ParceiroAggregateArgs>): Prisma.PrismaPromise<GetParceiroAggregateType<T>>

    /**
     * Group by Parceiro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParceiroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParceiroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParceiroGroupByArgs['orderBy'] }
        : { orderBy?: ParceiroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParceiroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParceiroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parceiro model
   */
  readonly fields: ParceiroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parceiro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParceiroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contas_pagar<T extends Parceiro$contas_pagarArgs<ExtArgs> = {}>(args?: Subset<T, Parceiro$contas_pagarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContaPagarPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parceiro model
   */ 
  interface ParceiroFieldRefs {
    readonly id: FieldRef<"Parceiro", 'Int'>
    readonly nome_razao_social: FieldRef<"Parceiro", 'String'>
    readonly cpf_cnpj: FieldRef<"Parceiro", 'String'>
    readonly email_contato: FieldRef<"Parceiro", 'String'>
    readonly dados_bancarios_pix: FieldRef<"Parceiro", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Parceiro findUnique
   */
  export type ParceiroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceiroInclude<ExtArgs> | null
    /**
     * Filter, which Parceiro to fetch.
     */
    where: ParceiroWhereUniqueInput
  }

  /**
   * Parceiro findUniqueOrThrow
   */
  export type ParceiroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceiroInclude<ExtArgs> | null
    /**
     * Filter, which Parceiro to fetch.
     */
    where: ParceiroWhereUniqueInput
  }

  /**
   * Parceiro findFirst
   */
  export type ParceiroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceiroInclude<ExtArgs> | null
    /**
     * Filter, which Parceiro to fetch.
     */
    where?: ParceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parceiros to fetch.
     */
    orderBy?: ParceiroOrderByWithRelationInput | ParceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parceiros.
     */
    cursor?: ParceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parceiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parceiros.
     */
    distinct?: ParceiroScalarFieldEnum | ParceiroScalarFieldEnum[]
  }

  /**
   * Parceiro findFirstOrThrow
   */
  export type ParceiroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceiroInclude<ExtArgs> | null
    /**
     * Filter, which Parceiro to fetch.
     */
    where?: ParceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parceiros to fetch.
     */
    orderBy?: ParceiroOrderByWithRelationInput | ParceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parceiros.
     */
    cursor?: ParceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parceiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parceiros.
     */
    distinct?: ParceiroScalarFieldEnum | ParceiroScalarFieldEnum[]
  }

  /**
   * Parceiro findMany
   */
  export type ParceiroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceiroInclude<ExtArgs> | null
    /**
     * Filter, which Parceiros to fetch.
     */
    where?: ParceiroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parceiros to fetch.
     */
    orderBy?: ParceiroOrderByWithRelationInput | ParceiroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parceiros.
     */
    cursor?: ParceiroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parceiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parceiros.
     */
    skip?: number
    distinct?: ParceiroScalarFieldEnum | ParceiroScalarFieldEnum[]
  }

  /**
   * Parceiro create
   */
  export type ParceiroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceiroInclude<ExtArgs> | null
    /**
     * The data needed to create a Parceiro.
     */
    data: XOR<ParceiroCreateInput, ParceiroUncheckedCreateInput>
  }

  /**
   * Parceiro createMany
   */
  export type ParceiroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parceiros.
     */
    data: ParceiroCreateManyInput | ParceiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parceiro createManyAndReturn
   */
  export type ParceiroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Parceiros.
     */
    data: ParceiroCreateManyInput | ParceiroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parceiro update
   */
  export type ParceiroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceiroInclude<ExtArgs> | null
    /**
     * The data needed to update a Parceiro.
     */
    data: XOR<ParceiroUpdateInput, ParceiroUncheckedUpdateInput>
    /**
     * Choose, which Parceiro to update.
     */
    where: ParceiroWhereUniqueInput
  }

  /**
   * Parceiro updateMany
   */
  export type ParceiroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parceiros.
     */
    data: XOR<ParceiroUpdateManyMutationInput, ParceiroUncheckedUpdateManyInput>
    /**
     * Filter which Parceiros to update
     */
    where?: ParceiroWhereInput
  }

  /**
   * Parceiro upsert
   */
  export type ParceiroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceiroInclude<ExtArgs> | null
    /**
     * The filter to search for the Parceiro to update in case it exists.
     */
    where: ParceiroWhereUniqueInput
    /**
     * In case the Parceiro found by the `where` argument doesn't exist, create a new Parceiro with this data.
     */
    create: XOR<ParceiroCreateInput, ParceiroUncheckedCreateInput>
    /**
     * In case the Parceiro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParceiroUpdateInput, ParceiroUncheckedUpdateInput>
  }

  /**
   * Parceiro delete
   */
  export type ParceiroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceiroInclude<ExtArgs> | null
    /**
     * Filter which Parceiro to delete.
     */
    where: ParceiroWhereUniqueInput
  }

  /**
   * Parceiro deleteMany
   */
  export type ParceiroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parceiros to delete
     */
    where?: ParceiroWhereInput
  }

  /**
   * Parceiro.contas_pagar
   */
  export type Parceiro$contas_pagarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarInclude<ExtArgs> | null
    where?: ContaPagarWhereInput
    orderBy?: ContaPagarOrderByWithRelationInput | ContaPagarOrderByWithRelationInput[]
    cursor?: ContaPagarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContaPagarScalarFieldEnum | ContaPagarScalarFieldEnum[]
  }

  /**
   * Parceiro without action
   */
  export type ParceiroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parceiro
     */
    select?: ParceiroSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParceiroInclude<ExtArgs> | null
  }


  /**
   * Model Recorrencia
   */

  export type AggregateRecorrencia = {
    _count: RecorrenciaCountAggregateOutputType | null
    _avg: RecorrenciaAvgAggregateOutputType | null
    _sum: RecorrenciaSumAggregateOutputType | null
    _min: RecorrenciaMinAggregateOutputType | null
    _max: RecorrenciaMaxAggregateOutputType | null
  }

  export type RecorrenciaAvgAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_servico: number | null
    valor_cobrado: Decimal | null
    dia_vencimento: number | null
  }

  export type RecorrenciaSumAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_servico: number | null
    valor_cobrado: Decimal | null
    dia_vencimento: number | null
  }

  export type RecorrenciaMinAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_servico: number | null
    valor_cobrado: Decimal | null
    periodicidade: $Enums.Periodicidade | null
    dia_vencimento: number | null
    status: $Enums.StatusRecorrencia | null
  }

  export type RecorrenciaMaxAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_servico: number | null
    valor_cobrado: Decimal | null
    periodicidade: $Enums.Periodicidade | null
    dia_vencimento: number | null
    status: $Enums.StatusRecorrencia | null
  }

  export type RecorrenciaCountAggregateOutputType = {
    id: number
    id_cliente: number
    id_servico: number
    valor_cobrado: number
    periodicidade: number
    dia_vencimento: number
    status: number
    _all: number
  }


  export type RecorrenciaAvgAggregateInputType = {
    id?: true
    id_cliente?: true
    id_servico?: true
    valor_cobrado?: true
    dia_vencimento?: true
  }

  export type RecorrenciaSumAggregateInputType = {
    id?: true
    id_cliente?: true
    id_servico?: true
    valor_cobrado?: true
    dia_vencimento?: true
  }

  export type RecorrenciaMinAggregateInputType = {
    id?: true
    id_cliente?: true
    id_servico?: true
    valor_cobrado?: true
    periodicidade?: true
    dia_vencimento?: true
    status?: true
  }

  export type RecorrenciaMaxAggregateInputType = {
    id?: true
    id_cliente?: true
    id_servico?: true
    valor_cobrado?: true
    periodicidade?: true
    dia_vencimento?: true
    status?: true
  }

  export type RecorrenciaCountAggregateInputType = {
    id?: true
    id_cliente?: true
    id_servico?: true
    valor_cobrado?: true
    periodicidade?: true
    dia_vencimento?: true
    status?: true
    _all?: true
  }

  export type RecorrenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recorrencia to aggregate.
     */
    where?: RecorrenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recorrencias to fetch.
     */
    orderBy?: RecorrenciaOrderByWithRelationInput | RecorrenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecorrenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recorrencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recorrencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recorrencias
    **/
    _count?: true | RecorrenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecorrenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecorrenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecorrenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecorrenciaMaxAggregateInputType
  }

  export type GetRecorrenciaAggregateType<T extends RecorrenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateRecorrencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecorrencia[P]>
      : GetScalarType<T[P], AggregateRecorrencia[P]>
  }




  export type RecorrenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecorrenciaWhereInput
    orderBy?: RecorrenciaOrderByWithAggregationInput | RecorrenciaOrderByWithAggregationInput[]
    by: RecorrenciaScalarFieldEnum[] | RecorrenciaScalarFieldEnum
    having?: RecorrenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecorrenciaCountAggregateInputType | true
    _avg?: RecorrenciaAvgAggregateInputType
    _sum?: RecorrenciaSumAggregateInputType
    _min?: RecorrenciaMinAggregateInputType
    _max?: RecorrenciaMaxAggregateInputType
  }

  export type RecorrenciaGroupByOutputType = {
    id: number
    id_cliente: number
    id_servico: number
    valor_cobrado: Decimal
    periodicidade: $Enums.Periodicidade
    dia_vencimento: number
    status: $Enums.StatusRecorrencia
    _count: RecorrenciaCountAggregateOutputType | null
    _avg: RecorrenciaAvgAggregateOutputType | null
    _sum: RecorrenciaSumAggregateOutputType | null
    _min: RecorrenciaMinAggregateOutputType | null
    _max: RecorrenciaMaxAggregateOutputType | null
  }

  type GetRecorrenciaGroupByPayload<T extends RecorrenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecorrenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecorrenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecorrenciaGroupByOutputType[P]>
            : GetScalarType<T[P], RecorrenciaGroupByOutputType[P]>
        }
      >
    >


  export type RecorrenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cliente?: boolean
    id_servico?: boolean
    valor_cobrado?: boolean
    periodicidade?: boolean
    dia_vencimento?: boolean
    status?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    faturas?: boolean | Recorrencia$faturasArgs<ExtArgs>
    _count?: boolean | RecorrenciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recorrencia"]>

  export type RecorrenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cliente?: boolean
    id_servico?: boolean
    valor_cobrado?: boolean
    periodicidade?: boolean
    dia_vencimento?: boolean
    status?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recorrencia"]>

  export type RecorrenciaSelectScalar = {
    id?: boolean
    id_cliente?: boolean
    id_servico?: boolean
    valor_cobrado?: boolean
    periodicidade?: boolean
    dia_vencimento?: boolean
    status?: boolean
  }

  export type RecorrenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    faturas?: boolean | Recorrencia$faturasArgs<ExtArgs>
    _count?: boolean | RecorrenciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecorrenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }

  export type $RecorrenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recorrencia"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      servico: Prisma.$ServicoPayload<ExtArgs>
      faturas: Prisma.$FaturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_cliente: number
      id_servico: number
      valor_cobrado: Prisma.Decimal
      periodicidade: $Enums.Periodicidade
      dia_vencimento: number
      status: $Enums.StatusRecorrencia
    }, ExtArgs["result"]["recorrencia"]>
    composites: {}
  }

  type RecorrenciaGetPayload<S extends boolean | null | undefined | RecorrenciaDefaultArgs> = $Result.GetResult<Prisma.$RecorrenciaPayload, S>

  type RecorrenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecorrenciaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecorrenciaCountAggregateInputType | true
    }

  export interface RecorrenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recorrencia'], meta: { name: 'Recorrencia' } }
    /**
     * Find zero or one Recorrencia that matches the filter.
     * @param {RecorrenciaFindUniqueArgs} args - Arguments to find a Recorrencia
     * @example
     * // Get one Recorrencia
     * const recorrencia = await prisma.recorrencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecorrenciaFindUniqueArgs>(args: SelectSubset<T, RecorrenciaFindUniqueArgs<ExtArgs>>): Prisma__RecorrenciaClient<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Recorrencia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecorrenciaFindUniqueOrThrowArgs} args - Arguments to find a Recorrencia
     * @example
     * // Get one Recorrencia
     * const recorrencia = await prisma.recorrencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecorrenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, RecorrenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecorrenciaClient<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Recorrencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecorrenciaFindFirstArgs} args - Arguments to find a Recorrencia
     * @example
     * // Get one Recorrencia
     * const recorrencia = await prisma.recorrencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecorrenciaFindFirstArgs>(args?: SelectSubset<T, RecorrenciaFindFirstArgs<ExtArgs>>): Prisma__RecorrenciaClient<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Recorrencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecorrenciaFindFirstOrThrowArgs} args - Arguments to find a Recorrencia
     * @example
     * // Get one Recorrencia
     * const recorrencia = await prisma.recorrencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecorrenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, RecorrenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecorrenciaClient<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Recorrencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecorrenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recorrencias
     * const recorrencias = await prisma.recorrencia.findMany()
     * 
     * // Get first 10 Recorrencias
     * const recorrencias = await prisma.recorrencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recorrenciaWithIdOnly = await prisma.recorrencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecorrenciaFindManyArgs>(args?: SelectSubset<T, RecorrenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Recorrencia.
     * @param {RecorrenciaCreateArgs} args - Arguments to create a Recorrencia.
     * @example
     * // Create one Recorrencia
     * const Recorrencia = await prisma.recorrencia.create({
     *   data: {
     *     // ... data to create a Recorrencia
     *   }
     * })
     * 
     */
    create<T extends RecorrenciaCreateArgs>(args: SelectSubset<T, RecorrenciaCreateArgs<ExtArgs>>): Prisma__RecorrenciaClient<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Recorrencias.
     * @param {RecorrenciaCreateManyArgs} args - Arguments to create many Recorrencias.
     * @example
     * // Create many Recorrencias
     * const recorrencia = await prisma.recorrencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecorrenciaCreateManyArgs>(args?: SelectSubset<T, RecorrenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recorrencias and returns the data saved in the database.
     * @param {RecorrenciaCreateManyAndReturnArgs} args - Arguments to create many Recorrencias.
     * @example
     * // Create many Recorrencias
     * const recorrencia = await prisma.recorrencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recorrencias and only return the `id`
     * const recorrenciaWithIdOnly = await prisma.recorrencia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecorrenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, RecorrenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Recorrencia.
     * @param {RecorrenciaDeleteArgs} args - Arguments to delete one Recorrencia.
     * @example
     * // Delete one Recorrencia
     * const Recorrencia = await prisma.recorrencia.delete({
     *   where: {
     *     // ... filter to delete one Recorrencia
     *   }
     * })
     * 
     */
    delete<T extends RecorrenciaDeleteArgs>(args: SelectSubset<T, RecorrenciaDeleteArgs<ExtArgs>>): Prisma__RecorrenciaClient<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Recorrencia.
     * @param {RecorrenciaUpdateArgs} args - Arguments to update one Recorrencia.
     * @example
     * // Update one Recorrencia
     * const recorrencia = await prisma.recorrencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecorrenciaUpdateArgs>(args: SelectSubset<T, RecorrenciaUpdateArgs<ExtArgs>>): Prisma__RecorrenciaClient<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Recorrencias.
     * @param {RecorrenciaDeleteManyArgs} args - Arguments to filter Recorrencias to delete.
     * @example
     * // Delete a few Recorrencias
     * const { count } = await prisma.recorrencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecorrenciaDeleteManyArgs>(args?: SelectSubset<T, RecorrenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recorrencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecorrenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recorrencias
     * const recorrencia = await prisma.recorrencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecorrenciaUpdateManyArgs>(args: SelectSubset<T, RecorrenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recorrencia.
     * @param {RecorrenciaUpsertArgs} args - Arguments to update or create a Recorrencia.
     * @example
     * // Update or create a Recorrencia
     * const recorrencia = await prisma.recorrencia.upsert({
     *   create: {
     *     // ... data to create a Recorrencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recorrencia we want to update
     *   }
     * })
     */
    upsert<T extends RecorrenciaUpsertArgs>(args: SelectSubset<T, RecorrenciaUpsertArgs<ExtArgs>>): Prisma__RecorrenciaClient<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Recorrencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecorrenciaCountArgs} args - Arguments to filter Recorrencias to count.
     * @example
     * // Count the number of Recorrencias
     * const count = await prisma.recorrencia.count({
     *   where: {
     *     // ... the filter for the Recorrencias we want to count
     *   }
     * })
    **/
    count<T extends RecorrenciaCountArgs>(
      args?: Subset<T, RecorrenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecorrenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recorrencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecorrenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecorrenciaAggregateArgs>(args: Subset<T, RecorrenciaAggregateArgs>): Prisma.PrismaPromise<GetRecorrenciaAggregateType<T>>

    /**
     * Group by Recorrencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecorrenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecorrenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecorrenciaGroupByArgs['orderBy'] }
        : { orderBy?: RecorrenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecorrenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecorrenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recorrencia model
   */
  readonly fields: RecorrenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recorrencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecorrenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    faturas<T extends Recorrencia$faturasArgs<ExtArgs> = {}>(args?: Subset<T, Recorrencia$faturasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recorrencia model
   */ 
  interface RecorrenciaFieldRefs {
    readonly id: FieldRef<"Recorrencia", 'Int'>
    readonly id_cliente: FieldRef<"Recorrencia", 'Int'>
    readonly id_servico: FieldRef<"Recorrencia", 'Int'>
    readonly valor_cobrado: FieldRef<"Recorrencia", 'Decimal'>
    readonly periodicidade: FieldRef<"Recorrencia", 'Periodicidade'>
    readonly dia_vencimento: FieldRef<"Recorrencia", 'Int'>
    readonly status: FieldRef<"Recorrencia", 'StatusRecorrencia'>
  }
    

  // Custom InputTypes
  /**
   * Recorrencia findUnique
   */
  export type RecorrenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
    /**
     * Filter, which Recorrencia to fetch.
     */
    where: RecorrenciaWhereUniqueInput
  }

  /**
   * Recorrencia findUniqueOrThrow
   */
  export type RecorrenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
    /**
     * Filter, which Recorrencia to fetch.
     */
    where: RecorrenciaWhereUniqueInput
  }

  /**
   * Recorrencia findFirst
   */
  export type RecorrenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
    /**
     * Filter, which Recorrencia to fetch.
     */
    where?: RecorrenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recorrencias to fetch.
     */
    orderBy?: RecorrenciaOrderByWithRelationInput | RecorrenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recorrencias.
     */
    cursor?: RecorrenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recorrencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recorrencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recorrencias.
     */
    distinct?: RecorrenciaScalarFieldEnum | RecorrenciaScalarFieldEnum[]
  }

  /**
   * Recorrencia findFirstOrThrow
   */
  export type RecorrenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
    /**
     * Filter, which Recorrencia to fetch.
     */
    where?: RecorrenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recorrencias to fetch.
     */
    orderBy?: RecorrenciaOrderByWithRelationInput | RecorrenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recorrencias.
     */
    cursor?: RecorrenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recorrencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recorrencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recorrencias.
     */
    distinct?: RecorrenciaScalarFieldEnum | RecorrenciaScalarFieldEnum[]
  }

  /**
   * Recorrencia findMany
   */
  export type RecorrenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
    /**
     * Filter, which Recorrencias to fetch.
     */
    where?: RecorrenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recorrencias to fetch.
     */
    orderBy?: RecorrenciaOrderByWithRelationInput | RecorrenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recorrencias.
     */
    cursor?: RecorrenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recorrencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recorrencias.
     */
    skip?: number
    distinct?: RecorrenciaScalarFieldEnum | RecorrenciaScalarFieldEnum[]
  }

  /**
   * Recorrencia create
   */
  export type RecorrenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Recorrencia.
     */
    data: XOR<RecorrenciaCreateInput, RecorrenciaUncheckedCreateInput>
  }

  /**
   * Recorrencia createMany
   */
  export type RecorrenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recorrencias.
     */
    data: RecorrenciaCreateManyInput | RecorrenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recorrencia createManyAndReturn
   */
  export type RecorrenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Recorrencias.
     */
    data: RecorrenciaCreateManyInput | RecorrenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recorrencia update
   */
  export type RecorrenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Recorrencia.
     */
    data: XOR<RecorrenciaUpdateInput, RecorrenciaUncheckedUpdateInput>
    /**
     * Choose, which Recorrencia to update.
     */
    where: RecorrenciaWhereUniqueInput
  }

  /**
   * Recorrencia updateMany
   */
  export type RecorrenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recorrencias.
     */
    data: XOR<RecorrenciaUpdateManyMutationInput, RecorrenciaUncheckedUpdateManyInput>
    /**
     * Filter which Recorrencias to update
     */
    where?: RecorrenciaWhereInput
  }

  /**
   * Recorrencia upsert
   */
  export type RecorrenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Recorrencia to update in case it exists.
     */
    where: RecorrenciaWhereUniqueInput
    /**
     * In case the Recorrencia found by the `where` argument doesn't exist, create a new Recorrencia with this data.
     */
    create: XOR<RecorrenciaCreateInput, RecorrenciaUncheckedCreateInput>
    /**
     * In case the Recorrencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecorrenciaUpdateInput, RecorrenciaUncheckedUpdateInput>
  }

  /**
   * Recorrencia delete
   */
  export type RecorrenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
    /**
     * Filter which Recorrencia to delete.
     */
    where: RecorrenciaWhereUniqueInput
  }

  /**
   * Recorrencia deleteMany
   */
  export type RecorrenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recorrencias to delete
     */
    where?: RecorrenciaWhereInput
  }

  /**
   * Recorrencia.faturas
   */
  export type Recorrencia$faturasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    where?: FaturaWhereInput
    orderBy?: FaturaOrderByWithRelationInput | FaturaOrderByWithRelationInput[]
    cursor?: FaturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaturaScalarFieldEnum | FaturaScalarFieldEnum[]
  }

  /**
   * Recorrencia without action
   */
  export type RecorrenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
  }


  /**
   * Model Fatura
   */

  export type AggregateFatura = {
    _count: FaturaCountAggregateOutputType | null
    _avg: FaturaAvgAggregateOutputType | null
    _sum: FaturaSumAggregateOutputType | null
    _min: FaturaMinAggregateOutputType | null
    _max: FaturaMaxAggregateOutputType | null
  }

  export type FaturaAvgAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_recorrencia: number | null
    id_usuario_criador: number | null
    valor_total: Decimal | null
  }

  export type FaturaSumAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_recorrencia: number | null
    id_usuario_criador: number | null
    valor_total: Decimal | null
  }

  export type FaturaMinAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_recorrencia: number | null
    id_usuario_criador: number | null
    valor_total: Decimal | null
    data_vencimento: Date | null
    data_pagamento: Date | null
    status: $Enums.StatusFatura | null
    tipo_pagamento_preferencial: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway: string | null
    linha_digitavel_boleto: string | null
    link_qr_code_pix: string | null
  }

  export type FaturaMaxAggregateOutputType = {
    id: number | null
    id_cliente: number | null
    id_recorrencia: number | null
    id_usuario_criador: number | null
    valor_total: Decimal | null
    data_vencimento: Date | null
    data_pagamento: Date | null
    status: $Enums.StatusFatura | null
    tipo_pagamento_preferencial: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway: string | null
    linha_digitavel_boleto: string | null
    link_qr_code_pix: string | null
  }

  export type FaturaCountAggregateOutputType = {
    id: number
    id_cliente: number
    id_recorrencia: number
    id_usuario_criador: number
    valor_total: number
    data_vencimento: number
    data_pagamento: number
    status: number
    tipo_pagamento_preferencial: number
    id_externo_gateway: number
    linha_digitavel_boleto: number
    link_qr_code_pix: number
    _all: number
  }


  export type FaturaAvgAggregateInputType = {
    id?: true
    id_cliente?: true
    id_recorrencia?: true
    id_usuario_criador?: true
    valor_total?: true
  }

  export type FaturaSumAggregateInputType = {
    id?: true
    id_cliente?: true
    id_recorrencia?: true
    id_usuario_criador?: true
    valor_total?: true
  }

  export type FaturaMinAggregateInputType = {
    id?: true
    id_cliente?: true
    id_recorrencia?: true
    id_usuario_criador?: true
    valor_total?: true
    data_vencimento?: true
    data_pagamento?: true
    status?: true
    tipo_pagamento_preferencial?: true
    id_externo_gateway?: true
    linha_digitavel_boleto?: true
    link_qr_code_pix?: true
  }

  export type FaturaMaxAggregateInputType = {
    id?: true
    id_cliente?: true
    id_recorrencia?: true
    id_usuario_criador?: true
    valor_total?: true
    data_vencimento?: true
    data_pagamento?: true
    status?: true
    tipo_pagamento_preferencial?: true
    id_externo_gateway?: true
    linha_digitavel_boleto?: true
    link_qr_code_pix?: true
  }

  export type FaturaCountAggregateInputType = {
    id?: true
    id_cliente?: true
    id_recorrencia?: true
    id_usuario_criador?: true
    valor_total?: true
    data_vencimento?: true
    data_pagamento?: true
    status?: true
    tipo_pagamento_preferencial?: true
    id_externo_gateway?: true
    linha_digitavel_boleto?: true
    link_qr_code_pix?: true
    _all?: true
  }

  export type FaturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fatura to aggregate.
     */
    where?: FaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faturas to fetch.
     */
    orderBy?: FaturaOrderByWithRelationInput | FaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faturas
    **/
    _count?: true | FaturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaturaMaxAggregateInputType
  }

  export type GetFaturaAggregateType<T extends FaturaAggregateArgs> = {
        [P in keyof T & keyof AggregateFatura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFatura[P]>
      : GetScalarType<T[P], AggregateFatura[P]>
  }




  export type FaturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaturaWhereInput
    orderBy?: FaturaOrderByWithAggregationInput | FaturaOrderByWithAggregationInput[]
    by: FaturaScalarFieldEnum[] | FaturaScalarFieldEnum
    having?: FaturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaturaCountAggregateInputType | true
    _avg?: FaturaAvgAggregateInputType
    _sum?: FaturaSumAggregateInputType
    _min?: FaturaMinAggregateInputType
    _max?: FaturaMaxAggregateInputType
  }

  export type FaturaGroupByOutputType = {
    id: number
    id_cliente: number
    id_recorrencia: number | null
    id_usuario_criador: number | null
    valor_total: Decimal
    data_vencimento: Date
    data_pagamento: Date | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway: string | null
    linha_digitavel_boleto: string | null
    link_qr_code_pix: string | null
    _count: FaturaCountAggregateOutputType | null
    _avg: FaturaAvgAggregateOutputType | null
    _sum: FaturaSumAggregateOutputType | null
    _min: FaturaMinAggregateOutputType | null
    _max: FaturaMaxAggregateOutputType | null
  }

  type GetFaturaGroupByPayload<T extends FaturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaturaGroupByOutputType[P]>
            : GetScalarType<T[P], FaturaGroupByOutputType[P]>
        }
      >
    >


  export type FaturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cliente?: boolean
    id_recorrencia?: boolean
    id_usuario_criador?: boolean
    valor_total?: boolean
    data_vencimento?: boolean
    data_pagamento?: boolean
    status?: boolean
    tipo_pagamento_preferencial?: boolean
    id_externo_gateway?: boolean
    linha_digitavel_boleto?: boolean
    link_qr_code_pix?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    recorrencia?: boolean | Fatura$recorrenciaArgs<ExtArgs>
    usuario_criador?: boolean | Fatura$usuario_criadorArgs<ExtArgs>
    transacoes?: boolean | Fatura$transacoesArgs<ExtArgs>
    nota_fiscal?: boolean | Fatura$nota_fiscalArgs<ExtArgs>
    _count?: boolean | FaturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fatura"]>

  export type FaturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cliente?: boolean
    id_recorrencia?: boolean
    id_usuario_criador?: boolean
    valor_total?: boolean
    data_vencimento?: boolean
    data_pagamento?: boolean
    status?: boolean
    tipo_pagamento_preferencial?: boolean
    id_externo_gateway?: boolean
    linha_digitavel_boleto?: boolean
    link_qr_code_pix?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    recorrencia?: boolean | Fatura$recorrenciaArgs<ExtArgs>
    usuario_criador?: boolean | Fatura$usuario_criadorArgs<ExtArgs>
  }, ExtArgs["result"]["fatura"]>

  export type FaturaSelectScalar = {
    id?: boolean
    id_cliente?: boolean
    id_recorrencia?: boolean
    id_usuario_criador?: boolean
    valor_total?: boolean
    data_vencimento?: boolean
    data_pagamento?: boolean
    status?: boolean
    tipo_pagamento_preferencial?: boolean
    id_externo_gateway?: boolean
    linha_digitavel_boleto?: boolean
    link_qr_code_pix?: boolean
  }

  export type FaturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    recorrencia?: boolean | Fatura$recorrenciaArgs<ExtArgs>
    usuario_criador?: boolean | Fatura$usuario_criadorArgs<ExtArgs>
    transacoes?: boolean | Fatura$transacoesArgs<ExtArgs>
    nota_fiscal?: boolean | Fatura$nota_fiscalArgs<ExtArgs>
    _count?: boolean | FaturaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FaturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    recorrencia?: boolean | Fatura$recorrenciaArgs<ExtArgs>
    usuario_criador?: boolean | Fatura$usuario_criadorArgs<ExtArgs>
  }

  export type $FaturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fatura"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      recorrencia: Prisma.$RecorrenciaPayload<ExtArgs> | null
      usuario_criador: Prisma.$UsuarioPayload<ExtArgs> | null
      transacoes: Prisma.$TransacaoPayload<ExtArgs>[]
      nota_fiscal: Prisma.$NotaFiscalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_cliente: number
      id_recorrencia: number | null
      id_usuario_criador: number | null
      valor_total: Prisma.Decimal
      data_vencimento: Date
      data_pagamento: Date | null
      status: $Enums.StatusFatura
      tipo_pagamento_preferencial: $Enums.TipoPagamentoPreferencial | null
      id_externo_gateway: string | null
      linha_digitavel_boleto: string | null
      link_qr_code_pix: string | null
    }, ExtArgs["result"]["fatura"]>
    composites: {}
  }

  type FaturaGetPayload<S extends boolean | null | undefined | FaturaDefaultArgs> = $Result.GetResult<Prisma.$FaturaPayload, S>

  type FaturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FaturaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FaturaCountAggregateInputType | true
    }

  export interface FaturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fatura'], meta: { name: 'Fatura' } }
    /**
     * Find zero or one Fatura that matches the filter.
     * @param {FaturaFindUniqueArgs} args - Arguments to find a Fatura
     * @example
     * // Get one Fatura
     * const fatura = await prisma.fatura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaturaFindUniqueArgs>(args: SelectSubset<T, FaturaFindUniqueArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Fatura that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FaturaFindUniqueOrThrowArgs} args - Arguments to find a Fatura
     * @example
     * // Get one Fatura
     * const fatura = await prisma.fatura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaturaFindUniqueOrThrowArgs>(args: SelectSubset<T, FaturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Fatura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaFindFirstArgs} args - Arguments to find a Fatura
     * @example
     * // Get one Fatura
     * const fatura = await prisma.fatura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaturaFindFirstArgs>(args?: SelectSubset<T, FaturaFindFirstArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Fatura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaFindFirstOrThrowArgs} args - Arguments to find a Fatura
     * @example
     * // Get one Fatura
     * const fatura = await prisma.fatura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaturaFindFirstOrThrowArgs>(args?: SelectSubset<T, FaturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Faturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faturas
     * const faturas = await prisma.fatura.findMany()
     * 
     * // Get first 10 Faturas
     * const faturas = await prisma.fatura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faturaWithIdOnly = await prisma.fatura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaturaFindManyArgs>(args?: SelectSubset<T, FaturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Fatura.
     * @param {FaturaCreateArgs} args - Arguments to create a Fatura.
     * @example
     * // Create one Fatura
     * const Fatura = await prisma.fatura.create({
     *   data: {
     *     // ... data to create a Fatura
     *   }
     * })
     * 
     */
    create<T extends FaturaCreateArgs>(args: SelectSubset<T, FaturaCreateArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Faturas.
     * @param {FaturaCreateManyArgs} args - Arguments to create many Faturas.
     * @example
     * // Create many Faturas
     * const fatura = await prisma.fatura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaturaCreateManyArgs>(args?: SelectSubset<T, FaturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faturas and returns the data saved in the database.
     * @param {FaturaCreateManyAndReturnArgs} args - Arguments to create many Faturas.
     * @example
     * // Create many Faturas
     * const fatura = await prisma.fatura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faturas and only return the `id`
     * const faturaWithIdOnly = await prisma.fatura.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FaturaCreateManyAndReturnArgs>(args?: SelectSubset<T, FaturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Fatura.
     * @param {FaturaDeleteArgs} args - Arguments to delete one Fatura.
     * @example
     * // Delete one Fatura
     * const Fatura = await prisma.fatura.delete({
     *   where: {
     *     // ... filter to delete one Fatura
     *   }
     * })
     * 
     */
    delete<T extends FaturaDeleteArgs>(args: SelectSubset<T, FaturaDeleteArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Fatura.
     * @param {FaturaUpdateArgs} args - Arguments to update one Fatura.
     * @example
     * // Update one Fatura
     * const fatura = await prisma.fatura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaturaUpdateArgs>(args: SelectSubset<T, FaturaUpdateArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Faturas.
     * @param {FaturaDeleteManyArgs} args - Arguments to filter Faturas to delete.
     * @example
     * // Delete a few Faturas
     * const { count } = await prisma.fatura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaturaDeleteManyArgs>(args?: SelectSubset<T, FaturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faturas
     * const fatura = await prisma.fatura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaturaUpdateManyArgs>(args: SelectSubset<T, FaturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fatura.
     * @param {FaturaUpsertArgs} args - Arguments to update or create a Fatura.
     * @example
     * // Update or create a Fatura
     * const fatura = await prisma.fatura.upsert({
     *   create: {
     *     // ... data to create a Fatura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fatura we want to update
     *   }
     * })
     */
    upsert<T extends FaturaUpsertArgs>(args: SelectSubset<T, FaturaUpsertArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Faturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaCountArgs} args - Arguments to filter Faturas to count.
     * @example
     * // Count the number of Faturas
     * const count = await prisma.fatura.count({
     *   where: {
     *     // ... the filter for the Faturas we want to count
     *   }
     * })
    **/
    count<T extends FaturaCountArgs>(
      args?: Subset<T, FaturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FaturaAggregateArgs>(args: Subset<T, FaturaAggregateArgs>): Prisma.PrismaPromise<GetFaturaAggregateType<T>>

    /**
     * Group by Fatura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FaturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaturaGroupByArgs['orderBy'] }
        : { orderBy?: FaturaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FaturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fatura model
   */
  readonly fields: FaturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fatura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    recorrencia<T extends Fatura$recorrenciaArgs<ExtArgs> = {}>(args?: Subset<T, Fatura$recorrenciaArgs<ExtArgs>>): Prisma__RecorrenciaClient<$Result.GetResult<Prisma.$RecorrenciaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    usuario_criador<T extends Fatura$usuario_criadorArgs<ExtArgs> = {}>(args?: Subset<T, Fatura$usuario_criadorArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    transacoes<T extends Fatura$transacoesArgs<ExtArgs> = {}>(args?: Subset<T, Fatura$transacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany"> | Null>
    nota_fiscal<T extends Fatura$nota_fiscalArgs<ExtArgs> = {}>(args?: Subset<T, Fatura$nota_fiscalArgs<ExtArgs>>): Prisma__NotaFiscalClient<$Result.GetResult<Prisma.$NotaFiscalPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fatura model
   */ 
  interface FaturaFieldRefs {
    readonly id: FieldRef<"Fatura", 'Int'>
    readonly id_cliente: FieldRef<"Fatura", 'Int'>
    readonly id_recorrencia: FieldRef<"Fatura", 'Int'>
    readonly id_usuario_criador: FieldRef<"Fatura", 'Int'>
    readonly valor_total: FieldRef<"Fatura", 'Decimal'>
    readonly data_vencimento: FieldRef<"Fatura", 'DateTime'>
    readonly data_pagamento: FieldRef<"Fatura", 'DateTime'>
    readonly status: FieldRef<"Fatura", 'StatusFatura'>
    readonly tipo_pagamento_preferencial: FieldRef<"Fatura", 'TipoPagamentoPreferencial'>
    readonly id_externo_gateway: FieldRef<"Fatura", 'String'>
    readonly linha_digitavel_boleto: FieldRef<"Fatura", 'String'>
    readonly link_qr_code_pix: FieldRef<"Fatura", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fatura findUnique
   */
  export type FaturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * Filter, which Fatura to fetch.
     */
    where: FaturaWhereUniqueInput
  }

  /**
   * Fatura findUniqueOrThrow
   */
  export type FaturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * Filter, which Fatura to fetch.
     */
    where: FaturaWhereUniqueInput
  }

  /**
   * Fatura findFirst
   */
  export type FaturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * Filter, which Fatura to fetch.
     */
    where?: FaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faturas to fetch.
     */
    orderBy?: FaturaOrderByWithRelationInput | FaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faturas.
     */
    cursor?: FaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faturas.
     */
    distinct?: FaturaScalarFieldEnum | FaturaScalarFieldEnum[]
  }

  /**
   * Fatura findFirstOrThrow
   */
  export type FaturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * Filter, which Fatura to fetch.
     */
    where?: FaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faturas to fetch.
     */
    orderBy?: FaturaOrderByWithRelationInput | FaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faturas.
     */
    cursor?: FaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faturas.
     */
    distinct?: FaturaScalarFieldEnum | FaturaScalarFieldEnum[]
  }

  /**
   * Fatura findMany
   */
  export type FaturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * Filter, which Faturas to fetch.
     */
    where?: FaturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faturas to fetch.
     */
    orderBy?: FaturaOrderByWithRelationInput | FaturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faturas.
     */
    cursor?: FaturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faturas.
     */
    skip?: number
    distinct?: FaturaScalarFieldEnum | FaturaScalarFieldEnum[]
  }

  /**
   * Fatura create
   */
  export type FaturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Fatura.
     */
    data: XOR<FaturaCreateInput, FaturaUncheckedCreateInput>
  }

  /**
   * Fatura createMany
   */
  export type FaturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faturas.
     */
    data: FaturaCreateManyInput | FaturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fatura createManyAndReturn
   */
  export type FaturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Faturas.
     */
    data: FaturaCreateManyInput | FaturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fatura update
   */
  export type FaturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Fatura.
     */
    data: XOR<FaturaUpdateInput, FaturaUncheckedUpdateInput>
    /**
     * Choose, which Fatura to update.
     */
    where: FaturaWhereUniqueInput
  }

  /**
   * Fatura updateMany
   */
  export type FaturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faturas.
     */
    data: XOR<FaturaUpdateManyMutationInput, FaturaUncheckedUpdateManyInput>
    /**
     * Filter which Faturas to update
     */
    where?: FaturaWhereInput
  }

  /**
   * Fatura upsert
   */
  export type FaturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Fatura to update in case it exists.
     */
    where: FaturaWhereUniqueInput
    /**
     * In case the Fatura found by the `where` argument doesn't exist, create a new Fatura with this data.
     */
    create: XOR<FaturaCreateInput, FaturaUncheckedCreateInput>
    /**
     * In case the Fatura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaturaUpdateInput, FaturaUncheckedUpdateInput>
  }

  /**
   * Fatura delete
   */
  export type FaturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
    /**
     * Filter which Fatura to delete.
     */
    where: FaturaWhereUniqueInput
  }

  /**
   * Fatura deleteMany
   */
  export type FaturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faturas to delete
     */
    where?: FaturaWhereInput
  }

  /**
   * Fatura.recorrencia
   */
  export type Fatura$recorrenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recorrencia
     */
    select?: RecorrenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecorrenciaInclude<ExtArgs> | null
    where?: RecorrenciaWhereInput
  }

  /**
   * Fatura.usuario_criador
   */
  export type Fatura$usuario_criadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Fatura.transacoes
   */
  export type Fatura$transacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    cursor?: TransacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Fatura.nota_fiscal
   */
  export type Fatura$nota_fiscalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscal
     */
    select?: NotaFiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalInclude<ExtArgs> | null
    where?: NotaFiscalWhereInput
  }

  /**
   * Fatura without action
   */
  export type FaturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fatura
     */
    select?: FaturaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturaInclude<ExtArgs> | null
  }


  /**
   * Model ContaPagar
   */

  export type AggregateContaPagar = {
    _count: ContaPagarCountAggregateOutputType | null
    _avg: ContaPagarAvgAggregateOutputType | null
    _sum: ContaPagarSumAggregateOutputType | null
    _min: ContaPagarMinAggregateOutputType | null
    _max: ContaPagarMaxAggregateOutputType | null
  }

  export type ContaPagarAvgAggregateOutputType = {
    id: number | null
    id_parceiro: number | null
    id_usuario_lancamento: number | null
    valor: Decimal | null
  }

  export type ContaPagarSumAggregateOutputType = {
    id: number | null
    id_parceiro: number | null
    id_usuario_lancamento: number | null
    valor: Decimal | null
  }

  export type ContaPagarMinAggregateOutputType = {
    id: number | null
    id_parceiro: number | null
    id_usuario_lancamento: number | null
    descricao: string | null
    valor: Decimal | null
    data_vencimento: Date | null
    data_pagamento: Date | null
    forma_pagamento: $Enums.FormaPagamento | null
    status: $Enums.StatusContaPagar | null
  }

  export type ContaPagarMaxAggregateOutputType = {
    id: number | null
    id_parceiro: number | null
    id_usuario_lancamento: number | null
    descricao: string | null
    valor: Decimal | null
    data_vencimento: Date | null
    data_pagamento: Date | null
    forma_pagamento: $Enums.FormaPagamento | null
    status: $Enums.StatusContaPagar | null
  }

  export type ContaPagarCountAggregateOutputType = {
    id: number
    id_parceiro: number
    id_usuario_lancamento: number
    descricao: number
    valor: number
    data_vencimento: number
    data_pagamento: number
    forma_pagamento: number
    status: number
    _all: number
  }


  export type ContaPagarAvgAggregateInputType = {
    id?: true
    id_parceiro?: true
    id_usuario_lancamento?: true
    valor?: true
  }

  export type ContaPagarSumAggregateInputType = {
    id?: true
    id_parceiro?: true
    id_usuario_lancamento?: true
    valor?: true
  }

  export type ContaPagarMinAggregateInputType = {
    id?: true
    id_parceiro?: true
    id_usuario_lancamento?: true
    descricao?: true
    valor?: true
    data_vencimento?: true
    data_pagamento?: true
    forma_pagamento?: true
    status?: true
  }

  export type ContaPagarMaxAggregateInputType = {
    id?: true
    id_parceiro?: true
    id_usuario_lancamento?: true
    descricao?: true
    valor?: true
    data_vencimento?: true
    data_pagamento?: true
    forma_pagamento?: true
    status?: true
  }

  export type ContaPagarCountAggregateInputType = {
    id?: true
    id_parceiro?: true
    id_usuario_lancamento?: true
    descricao?: true
    valor?: true
    data_vencimento?: true
    data_pagamento?: true
    forma_pagamento?: true
    status?: true
    _all?: true
  }

  export type ContaPagarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContaPagar to aggregate.
     */
    where?: ContaPagarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContaPagars to fetch.
     */
    orderBy?: ContaPagarOrderByWithRelationInput | ContaPagarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContaPagarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContaPagars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContaPagars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContaPagars
    **/
    _count?: true | ContaPagarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContaPagarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContaPagarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContaPagarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContaPagarMaxAggregateInputType
  }

  export type GetContaPagarAggregateType<T extends ContaPagarAggregateArgs> = {
        [P in keyof T & keyof AggregateContaPagar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContaPagar[P]>
      : GetScalarType<T[P], AggregateContaPagar[P]>
  }




  export type ContaPagarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContaPagarWhereInput
    orderBy?: ContaPagarOrderByWithAggregationInput | ContaPagarOrderByWithAggregationInput[]
    by: ContaPagarScalarFieldEnum[] | ContaPagarScalarFieldEnum
    having?: ContaPagarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContaPagarCountAggregateInputType | true
    _avg?: ContaPagarAvgAggregateInputType
    _sum?: ContaPagarSumAggregateInputType
    _min?: ContaPagarMinAggregateInputType
    _max?: ContaPagarMaxAggregateInputType
  }

  export type ContaPagarGroupByOutputType = {
    id: number
    id_parceiro: number
    id_usuario_lancamento: number
    descricao: string
    valor: Decimal
    data_vencimento: Date
    data_pagamento: Date | null
    forma_pagamento: $Enums.FormaPagamento
    status: $Enums.StatusContaPagar
    _count: ContaPagarCountAggregateOutputType | null
    _avg: ContaPagarAvgAggregateOutputType | null
    _sum: ContaPagarSumAggregateOutputType | null
    _min: ContaPagarMinAggregateOutputType | null
    _max: ContaPagarMaxAggregateOutputType | null
  }

  type GetContaPagarGroupByPayload<T extends ContaPagarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContaPagarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContaPagarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContaPagarGroupByOutputType[P]>
            : GetScalarType<T[P], ContaPagarGroupByOutputType[P]>
        }
      >
    >


  export type ContaPagarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_parceiro?: boolean
    id_usuario_lancamento?: boolean
    descricao?: boolean
    valor?: boolean
    data_vencimento?: boolean
    data_pagamento?: boolean
    forma_pagamento?: boolean
    status?: boolean
    parceiro?: boolean | ParceiroDefaultArgs<ExtArgs>
    usuario_lancamento?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contaPagar"]>

  export type ContaPagarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_parceiro?: boolean
    id_usuario_lancamento?: boolean
    descricao?: boolean
    valor?: boolean
    data_vencimento?: boolean
    data_pagamento?: boolean
    forma_pagamento?: boolean
    status?: boolean
    parceiro?: boolean | ParceiroDefaultArgs<ExtArgs>
    usuario_lancamento?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contaPagar"]>

  export type ContaPagarSelectScalar = {
    id?: boolean
    id_parceiro?: boolean
    id_usuario_lancamento?: boolean
    descricao?: boolean
    valor?: boolean
    data_vencimento?: boolean
    data_pagamento?: boolean
    forma_pagamento?: boolean
    status?: boolean
  }

  export type ContaPagarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parceiro?: boolean | ParceiroDefaultArgs<ExtArgs>
    usuario_lancamento?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ContaPagarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parceiro?: boolean | ParceiroDefaultArgs<ExtArgs>
    usuario_lancamento?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ContaPagarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContaPagar"
    objects: {
      parceiro: Prisma.$ParceiroPayload<ExtArgs>
      usuario_lancamento: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_parceiro: number
      id_usuario_lancamento: number
      descricao: string
      valor: Prisma.Decimal
      data_vencimento: Date
      data_pagamento: Date | null
      forma_pagamento: $Enums.FormaPagamento
      status: $Enums.StatusContaPagar
    }, ExtArgs["result"]["contaPagar"]>
    composites: {}
  }

  type ContaPagarGetPayload<S extends boolean | null | undefined | ContaPagarDefaultArgs> = $Result.GetResult<Prisma.$ContaPagarPayload, S>

  type ContaPagarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContaPagarFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContaPagarCountAggregateInputType | true
    }

  export interface ContaPagarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContaPagar'], meta: { name: 'ContaPagar' } }
    /**
     * Find zero or one ContaPagar that matches the filter.
     * @param {ContaPagarFindUniqueArgs} args - Arguments to find a ContaPagar
     * @example
     * // Get one ContaPagar
     * const contaPagar = await prisma.contaPagar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContaPagarFindUniqueArgs>(args: SelectSubset<T, ContaPagarFindUniqueArgs<ExtArgs>>): Prisma__ContaPagarClient<$Result.GetResult<Prisma.$ContaPagarPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ContaPagar that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContaPagarFindUniqueOrThrowArgs} args - Arguments to find a ContaPagar
     * @example
     * // Get one ContaPagar
     * const contaPagar = await prisma.contaPagar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContaPagarFindUniqueOrThrowArgs>(args: SelectSubset<T, ContaPagarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContaPagarClient<$Result.GetResult<Prisma.$ContaPagarPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ContaPagar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaPagarFindFirstArgs} args - Arguments to find a ContaPagar
     * @example
     * // Get one ContaPagar
     * const contaPagar = await prisma.contaPagar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContaPagarFindFirstArgs>(args?: SelectSubset<T, ContaPagarFindFirstArgs<ExtArgs>>): Prisma__ContaPagarClient<$Result.GetResult<Prisma.$ContaPagarPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ContaPagar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaPagarFindFirstOrThrowArgs} args - Arguments to find a ContaPagar
     * @example
     * // Get one ContaPagar
     * const contaPagar = await prisma.contaPagar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContaPagarFindFirstOrThrowArgs>(args?: SelectSubset<T, ContaPagarFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContaPagarClient<$Result.GetResult<Prisma.$ContaPagarPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ContaPagars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaPagarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContaPagars
     * const contaPagars = await prisma.contaPagar.findMany()
     * 
     * // Get first 10 ContaPagars
     * const contaPagars = await prisma.contaPagar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contaPagarWithIdOnly = await prisma.contaPagar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContaPagarFindManyArgs>(args?: SelectSubset<T, ContaPagarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContaPagarPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ContaPagar.
     * @param {ContaPagarCreateArgs} args - Arguments to create a ContaPagar.
     * @example
     * // Create one ContaPagar
     * const ContaPagar = await prisma.contaPagar.create({
     *   data: {
     *     // ... data to create a ContaPagar
     *   }
     * })
     * 
     */
    create<T extends ContaPagarCreateArgs>(args: SelectSubset<T, ContaPagarCreateArgs<ExtArgs>>): Prisma__ContaPagarClient<$Result.GetResult<Prisma.$ContaPagarPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ContaPagars.
     * @param {ContaPagarCreateManyArgs} args - Arguments to create many ContaPagars.
     * @example
     * // Create many ContaPagars
     * const contaPagar = await prisma.contaPagar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContaPagarCreateManyArgs>(args?: SelectSubset<T, ContaPagarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContaPagars and returns the data saved in the database.
     * @param {ContaPagarCreateManyAndReturnArgs} args - Arguments to create many ContaPagars.
     * @example
     * // Create many ContaPagars
     * const contaPagar = await prisma.contaPagar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContaPagars and only return the `id`
     * const contaPagarWithIdOnly = await prisma.contaPagar.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContaPagarCreateManyAndReturnArgs>(args?: SelectSubset<T, ContaPagarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContaPagarPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ContaPagar.
     * @param {ContaPagarDeleteArgs} args - Arguments to delete one ContaPagar.
     * @example
     * // Delete one ContaPagar
     * const ContaPagar = await prisma.contaPagar.delete({
     *   where: {
     *     // ... filter to delete one ContaPagar
     *   }
     * })
     * 
     */
    delete<T extends ContaPagarDeleteArgs>(args: SelectSubset<T, ContaPagarDeleteArgs<ExtArgs>>): Prisma__ContaPagarClient<$Result.GetResult<Prisma.$ContaPagarPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ContaPagar.
     * @param {ContaPagarUpdateArgs} args - Arguments to update one ContaPagar.
     * @example
     * // Update one ContaPagar
     * const contaPagar = await prisma.contaPagar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContaPagarUpdateArgs>(args: SelectSubset<T, ContaPagarUpdateArgs<ExtArgs>>): Prisma__ContaPagarClient<$Result.GetResult<Prisma.$ContaPagarPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ContaPagars.
     * @param {ContaPagarDeleteManyArgs} args - Arguments to filter ContaPagars to delete.
     * @example
     * // Delete a few ContaPagars
     * const { count } = await prisma.contaPagar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContaPagarDeleteManyArgs>(args?: SelectSubset<T, ContaPagarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContaPagars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaPagarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContaPagars
     * const contaPagar = await prisma.contaPagar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContaPagarUpdateManyArgs>(args: SelectSubset<T, ContaPagarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContaPagar.
     * @param {ContaPagarUpsertArgs} args - Arguments to update or create a ContaPagar.
     * @example
     * // Update or create a ContaPagar
     * const contaPagar = await prisma.contaPagar.upsert({
     *   create: {
     *     // ... data to create a ContaPagar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContaPagar we want to update
     *   }
     * })
     */
    upsert<T extends ContaPagarUpsertArgs>(args: SelectSubset<T, ContaPagarUpsertArgs<ExtArgs>>): Prisma__ContaPagarClient<$Result.GetResult<Prisma.$ContaPagarPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ContaPagars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaPagarCountArgs} args - Arguments to filter ContaPagars to count.
     * @example
     * // Count the number of ContaPagars
     * const count = await prisma.contaPagar.count({
     *   where: {
     *     // ... the filter for the ContaPagars we want to count
     *   }
     * })
    **/
    count<T extends ContaPagarCountArgs>(
      args?: Subset<T, ContaPagarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContaPagarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContaPagar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaPagarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContaPagarAggregateArgs>(args: Subset<T, ContaPagarAggregateArgs>): Prisma.PrismaPromise<GetContaPagarAggregateType<T>>

    /**
     * Group by ContaPagar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContaPagarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContaPagarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContaPagarGroupByArgs['orderBy'] }
        : { orderBy?: ContaPagarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContaPagarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContaPagarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContaPagar model
   */
  readonly fields: ContaPagarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContaPagar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContaPagarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parceiro<T extends ParceiroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParceiroDefaultArgs<ExtArgs>>): Prisma__ParceiroClient<$Result.GetResult<Prisma.$ParceiroPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    usuario_lancamento<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContaPagar model
   */ 
  interface ContaPagarFieldRefs {
    readonly id: FieldRef<"ContaPagar", 'Int'>
    readonly id_parceiro: FieldRef<"ContaPagar", 'Int'>
    readonly id_usuario_lancamento: FieldRef<"ContaPagar", 'Int'>
    readonly descricao: FieldRef<"ContaPagar", 'String'>
    readonly valor: FieldRef<"ContaPagar", 'Decimal'>
    readonly data_vencimento: FieldRef<"ContaPagar", 'DateTime'>
    readonly data_pagamento: FieldRef<"ContaPagar", 'DateTime'>
    readonly forma_pagamento: FieldRef<"ContaPagar", 'FormaPagamento'>
    readonly status: FieldRef<"ContaPagar", 'StatusContaPagar'>
  }
    

  // Custom InputTypes
  /**
   * ContaPagar findUnique
   */
  export type ContaPagarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarInclude<ExtArgs> | null
    /**
     * Filter, which ContaPagar to fetch.
     */
    where: ContaPagarWhereUniqueInput
  }

  /**
   * ContaPagar findUniqueOrThrow
   */
  export type ContaPagarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarInclude<ExtArgs> | null
    /**
     * Filter, which ContaPagar to fetch.
     */
    where: ContaPagarWhereUniqueInput
  }

  /**
   * ContaPagar findFirst
   */
  export type ContaPagarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarInclude<ExtArgs> | null
    /**
     * Filter, which ContaPagar to fetch.
     */
    where?: ContaPagarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContaPagars to fetch.
     */
    orderBy?: ContaPagarOrderByWithRelationInput | ContaPagarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContaPagars.
     */
    cursor?: ContaPagarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContaPagars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContaPagars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContaPagars.
     */
    distinct?: ContaPagarScalarFieldEnum | ContaPagarScalarFieldEnum[]
  }

  /**
   * ContaPagar findFirstOrThrow
   */
  export type ContaPagarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarInclude<ExtArgs> | null
    /**
     * Filter, which ContaPagar to fetch.
     */
    where?: ContaPagarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContaPagars to fetch.
     */
    orderBy?: ContaPagarOrderByWithRelationInput | ContaPagarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContaPagars.
     */
    cursor?: ContaPagarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContaPagars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContaPagars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContaPagars.
     */
    distinct?: ContaPagarScalarFieldEnum | ContaPagarScalarFieldEnum[]
  }

  /**
   * ContaPagar findMany
   */
  export type ContaPagarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarInclude<ExtArgs> | null
    /**
     * Filter, which ContaPagars to fetch.
     */
    where?: ContaPagarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContaPagars to fetch.
     */
    orderBy?: ContaPagarOrderByWithRelationInput | ContaPagarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContaPagars.
     */
    cursor?: ContaPagarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContaPagars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContaPagars.
     */
    skip?: number
    distinct?: ContaPagarScalarFieldEnum | ContaPagarScalarFieldEnum[]
  }

  /**
   * ContaPagar create
   */
  export type ContaPagarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarInclude<ExtArgs> | null
    /**
     * The data needed to create a ContaPagar.
     */
    data: XOR<ContaPagarCreateInput, ContaPagarUncheckedCreateInput>
  }

  /**
   * ContaPagar createMany
   */
  export type ContaPagarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContaPagars.
     */
    data: ContaPagarCreateManyInput | ContaPagarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContaPagar createManyAndReturn
   */
  export type ContaPagarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ContaPagars.
     */
    data: ContaPagarCreateManyInput | ContaPagarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContaPagar update
   */
  export type ContaPagarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarInclude<ExtArgs> | null
    /**
     * The data needed to update a ContaPagar.
     */
    data: XOR<ContaPagarUpdateInput, ContaPagarUncheckedUpdateInput>
    /**
     * Choose, which ContaPagar to update.
     */
    where: ContaPagarWhereUniqueInput
  }

  /**
   * ContaPagar updateMany
   */
  export type ContaPagarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContaPagars.
     */
    data: XOR<ContaPagarUpdateManyMutationInput, ContaPagarUncheckedUpdateManyInput>
    /**
     * Filter which ContaPagars to update
     */
    where?: ContaPagarWhereInput
  }

  /**
   * ContaPagar upsert
   */
  export type ContaPagarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarInclude<ExtArgs> | null
    /**
     * The filter to search for the ContaPagar to update in case it exists.
     */
    where: ContaPagarWhereUniqueInput
    /**
     * In case the ContaPagar found by the `where` argument doesn't exist, create a new ContaPagar with this data.
     */
    create: XOR<ContaPagarCreateInput, ContaPagarUncheckedCreateInput>
    /**
     * In case the ContaPagar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContaPagarUpdateInput, ContaPagarUncheckedUpdateInput>
  }

  /**
   * ContaPagar delete
   */
  export type ContaPagarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarInclude<ExtArgs> | null
    /**
     * Filter which ContaPagar to delete.
     */
    where: ContaPagarWhereUniqueInput
  }

  /**
   * ContaPagar deleteMany
   */
  export type ContaPagarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContaPagars to delete
     */
    where?: ContaPagarWhereInput
  }

  /**
   * ContaPagar without action
   */
  export type ContaPagarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContaPagar
     */
    select?: ContaPagarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContaPagarInclude<ExtArgs> | null
  }


  /**
   * Model NotaFiscal
   */

  export type AggregateNotaFiscal = {
    _count: NotaFiscalCountAggregateOutputType | null
    _avg: NotaFiscalAvgAggregateOutputType | null
    _sum: NotaFiscalSumAggregateOutputType | null
    _min: NotaFiscalMinAggregateOutputType | null
    _max: NotaFiscalMaxAggregateOutputType | null
  }

  export type NotaFiscalAvgAggregateOutputType = {
    id: number | null
    id_fatura: number | null
    numero: number | null
    valor_total: Decimal | null
  }

  export type NotaFiscalSumAggregateOutputType = {
    id: number | null
    id_fatura: number | null
    numero: number | null
    valor_total: Decimal | null
  }

  export type NotaFiscalMinAggregateOutputType = {
    id: number | null
    id_fatura: number | null
    numero: number | null
    data_emissao: Date | null
    valor_total: Decimal | null
    status_api: $Enums.StatusNotaFiscal | null
    id_externo_api: string | null
    link_xml: string | null
    link_pdf: string | null
  }

  export type NotaFiscalMaxAggregateOutputType = {
    id: number | null
    id_fatura: number | null
    numero: number | null
    data_emissao: Date | null
    valor_total: Decimal | null
    status_api: $Enums.StatusNotaFiscal | null
    id_externo_api: string | null
    link_xml: string | null
    link_pdf: string | null
  }

  export type NotaFiscalCountAggregateOutputType = {
    id: number
    id_fatura: number
    numero: number
    data_emissao: number
    valor_total: number
    status_api: number
    id_externo_api: number
    link_xml: number
    link_pdf: number
    _all: number
  }


  export type NotaFiscalAvgAggregateInputType = {
    id?: true
    id_fatura?: true
    numero?: true
    valor_total?: true
  }

  export type NotaFiscalSumAggregateInputType = {
    id?: true
    id_fatura?: true
    numero?: true
    valor_total?: true
  }

  export type NotaFiscalMinAggregateInputType = {
    id?: true
    id_fatura?: true
    numero?: true
    data_emissao?: true
    valor_total?: true
    status_api?: true
    id_externo_api?: true
    link_xml?: true
    link_pdf?: true
  }

  export type NotaFiscalMaxAggregateInputType = {
    id?: true
    id_fatura?: true
    numero?: true
    data_emissao?: true
    valor_total?: true
    status_api?: true
    id_externo_api?: true
    link_xml?: true
    link_pdf?: true
  }

  export type NotaFiscalCountAggregateInputType = {
    id?: true
    id_fatura?: true
    numero?: true
    data_emissao?: true
    valor_total?: true
    status_api?: true
    id_externo_api?: true
    link_xml?: true
    link_pdf?: true
    _all?: true
  }

  export type NotaFiscalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotaFiscal to aggregate.
     */
    where?: NotaFiscalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaFiscals to fetch.
     */
    orderBy?: NotaFiscalOrderByWithRelationInput | NotaFiscalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotaFiscalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaFiscals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaFiscals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotaFiscals
    **/
    _count?: true | NotaFiscalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotaFiscalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotaFiscalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotaFiscalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotaFiscalMaxAggregateInputType
  }

  export type GetNotaFiscalAggregateType<T extends NotaFiscalAggregateArgs> = {
        [P in keyof T & keyof AggregateNotaFiscal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotaFiscal[P]>
      : GetScalarType<T[P], AggregateNotaFiscal[P]>
  }




  export type NotaFiscalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotaFiscalWhereInput
    orderBy?: NotaFiscalOrderByWithAggregationInput | NotaFiscalOrderByWithAggregationInput[]
    by: NotaFiscalScalarFieldEnum[] | NotaFiscalScalarFieldEnum
    having?: NotaFiscalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotaFiscalCountAggregateInputType | true
    _avg?: NotaFiscalAvgAggregateInputType
    _sum?: NotaFiscalSumAggregateInputType
    _min?: NotaFiscalMinAggregateInputType
    _max?: NotaFiscalMaxAggregateInputType
  }

  export type NotaFiscalGroupByOutputType = {
    id: number
    id_fatura: number
    numero: number
    data_emissao: Date
    valor_total: Decimal
    status_api: $Enums.StatusNotaFiscal
    id_externo_api: string | null
    link_xml: string | null
    link_pdf: string | null
    _count: NotaFiscalCountAggregateOutputType | null
    _avg: NotaFiscalAvgAggregateOutputType | null
    _sum: NotaFiscalSumAggregateOutputType | null
    _min: NotaFiscalMinAggregateOutputType | null
    _max: NotaFiscalMaxAggregateOutputType | null
  }

  type GetNotaFiscalGroupByPayload<T extends NotaFiscalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotaFiscalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotaFiscalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotaFiscalGroupByOutputType[P]>
            : GetScalarType<T[P], NotaFiscalGroupByOutputType[P]>
        }
      >
    >


  export type NotaFiscalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_fatura?: boolean
    numero?: boolean
    data_emissao?: boolean
    valor_total?: boolean
    status_api?: boolean
    id_externo_api?: boolean
    link_xml?: boolean
    link_pdf?: boolean
    fatura?: boolean | FaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notaFiscal"]>

  export type NotaFiscalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_fatura?: boolean
    numero?: boolean
    data_emissao?: boolean
    valor_total?: boolean
    status_api?: boolean
    id_externo_api?: boolean
    link_xml?: boolean
    link_pdf?: boolean
    fatura?: boolean | FaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notaFiscal"]>

  export type NotaFiscalSelectScalar = {
    id?: boolean
    id_fatura?: boolean
    numero?: boolean
    data_emissao?: boolean
    valor_total?: boolean
    status_api?: boolean
    id_externo_api?: boolean
    link_xml?: boolean
    link_pdf?: boolean
  }

  export type NotaFiscalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fatura?: boolean | FaturaDefaultArgs<ExtArgs>
  }
  export type NotaFiscalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fatura?: boolean | FaturaDefaultArgs<ExtArgs>
  }

  export type $NotaFiscalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotaFiscal"
    objects: {
      fatura: Prisma.$FaturaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_fatura: number
      numero: number
      data_emissao: Date
      valor_total: Prisma.Decimal
      status_api: $Enums.StatusNotaFiscal
      id_externo_api: string | null
      link_xml: string | null
      link_pdf: string | null
    }, ExtArgs["result"]["notaFiscal"]>
    composites: {}
  }

  type NotaFiscalGetPayload<S extends boolean | null | undefined | NotaFiscalDefaultArgs> = $Result.GetResult<Prisma.$NotaFiscalPayload, S>

  type NotaFiscalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotaFiscalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotaFiscalCountAggregateInputType | true
    }

  export interface NotaFiscalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotaFiscal'], meta: { name: 'NotaFiscal' } }
    /**
     * Find zero or one NotaFiscal that matches the filter.
     * @param {NotaFiscalFindUniqueArgs} args - Arguments to find a NotaFiscal
     * @example
     * // Get one NotaFiscal
     * const notaFiscal = await prisma.notaFiscal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotaFiscalFindUniqueArgs>(args: SelectSubset<T, NotaFiscalFindUniqueArgs<ExtArgs>>): Prisma__NotaFiscalClient<$Result.GetResult<Prisma.$NotaFiscalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NotaFiscal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotaFiscalFindUniqueOrThrowArgs} args - Arguments to find a NotaFiscal
     * @example
     * // Get one NotaFiscal
     * const notaFiscal = await prisma.notaFiscal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotaFiscalFindUniqueOrThrowArgs>(args: SelectSubset<T, NotaFiscalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotaFiscalClient<$Result.GetResult<Prisma.$NotaFiscalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NotaFiscal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalFindFirstArgs} args - Arguments to find a NotaFiscal
     * @example
     * // Get one NotaFiscal
     * const notaFiscal = await prisma.notaFiscal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotaFiscalFindFirstArgs>(args?: SelectSubset<T, NotaFiscalFindFirstArgs<ExtArgs>>): Prisma__NotaFiscalClient<$Result.GetResult<Prisma.$NotaFiscalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NotaFiscal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalFindFirstOrThrowArgs} args - Arguments to find a NotaFiscal
     * @example
     * // Get one NotaFiscal
     * const notaFiscal = await prisma.notaFiscal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotaFiscalFindFirstOrThrowArgs>(args?: SelectSubset<T, NotaFiscalFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotaFiscalClient<$Result.GetResult<Prisma.$NotaFiscalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NotaFiscals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotaFiscals
     * const notaFiscals = await prisma.notaFiscal.findMany()
     * 
     * // Get first 10 NotaFiscals
     * const notaFiscals = await prisma.notaFiscal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notaFiscalWithIdOnly = await prisma.notaFiscal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotaFiscalFindManyArgs>(args?: SelectSubset<T, NotaFiscalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaFiscalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NotaFiscal.
     * @param {NotaFiscalCreateArgs} args - Arguments to create a NotaFiscal.
     * @example
     * // Create one NotaFiscal
     * const NotaFiscal = await prisma.notaFiscal.create({
     *   data: {
     *     // ... data to create a NotaFiscal
     *   }
     * })
     * 
     */
    create<T extends NotaFiscalCreateArgs>(args: SelectSubset<T, NotaFiscalCreateArgs<ExtArgs>>): Prisma__NotaFiscalClient<$Result.GetResult<Prisma.$NotaFiscalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NotaFiscals.
     * @param {NotaFiscalCreateManyArgs} args - Arguments to create many NotaFiscals.
     * @example
     * // Create many NotaFiscals
     * const notaFiscal = await prisma.notaFiscal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotaFiscalCreateManyArgs>(args?: SelectSubset<T, NotaFiscalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotaFiscals and returns the data saved in the database.
     * @param {NotaFiscalCreateManyAndReturnArgs} args - Arguments to create many NotaFiscals.
     * @example
     * // Create many NotaFiscals
     * const notaFiscal = await prisma.notaFiscal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotaFiscals and only return the `id`
     * const notaFiscalWithIdOnly = await prisma.notaFiscal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotaFiscalCreateManyAndReturnArgs>(args?: SelectSubset<T, NotaFiscalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaFiscalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NotaFiscal.
     * @param {NotaFiscalDeleteArgs} args - Arguments to delete one NotaFiscal.
     * @example
     * // Delete one NotaFiscal
     * const NotaFiscal = await prisma.notaFiscal.delete({
     *   where: {
     *     // ... filter to delete one NotaFiscal
     *   }
     * })
     * 
     */
    delete<T extends NotaFiscalDeleteArgs>(args: SelectSubset<T, NotaFiscalDeleteArgs<ExtArgs>>): Prisma__NotaFiscalClient<$Result.GetResult<Prisma.$NotaFiscalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NotaFiscal.
     * @param {NotaFiscalUpdateArgs} args - Arguments to update one NotaFiscal.
     * @example
     * // Update one NotaFiscal
     * const notaFiscal = await prisma.notaFiscal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotaFiscalUpdateArgs>(args: SelectSubset<T, NotaFiscalUpdateArgs<ExtArgs>>): Prisma__NotaFiscalClient<$Result.GetResult<Prisma.$NotaFiscalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NotaFiscals.
     * @param {NotaFiscalDeleteManyArgs} args - Arguments to filter NotaFiscals to delete.
     * @example
     * // Delete a few NotaFiscals
     * const { count } = await prisma.notaFiscal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotaFiscalDeleteManyArgs>(args?: SelectSubset<T, NotaFiscalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotaFiscals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotaFiscals
     * const notaFiscal = await prisma.notaFiscal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotaFiscalUpdateManyArgs>(args: SelectSubset<T, NotaFiscalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotaFiscal.
     * @param {NotaFiscalUpsertArgs} args - Arguments to update or create a NotaFiscal.
     * @example
     * // Update or create a NotaFiscal
     * const notaFiscal = await prisma.notaFiscal.upsert({
     *   create: {
     *     // ... data to create a NotaFiscal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotaFiscal we want to update
     *   }
     * })
     */
    upsert<T extends NotaFiscalUpsertArgs>(args: SelectSubset<T, NotaFiscalUpsertArgs<ExtArgs>>): Prisma__NotaFiscalClient<$Result.GetResult<Prisma.$NotaFiscalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NotaFiscals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalCountArgs} args - Arguments to filter NotaFiscals to count.
     * @example
     * // Count the number of NotaFiscals
     * const count = await prisma.notaFiscal.count({
     *   where: {
     *     // ... the filter for the NotaFiscals we want to count
     *   }
     * })
    **/
    count<T extends NotaFiscalCountArgs>(
      args?: Subset<T, NotaFiscalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotaFiscalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotaFiscal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotaFiscalAggregateArgs>(args: Subset<T, NotaFiscalAggregateArgs>): Prisma.PrismaPromise<GetNotaFiscalAggregateType<T>>

    /**
     * Group by NotaFiscal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaFiscalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotaFiscalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotaFiscalGroupByArgs['orderBy'] }
        : { orderBy?: NotaFiscalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotaFiscalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotaFiscalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotaFiscal model
   */
  readonly fields: NotaFiscalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotaFiscal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotaFiscalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fatura<T extends FaturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FaturaDefaultArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotaFiscal model
   */ 
  interface NotaFiscalFieldRefs {
    readonly id: FieldRef<"NotaFiscal", 'Int'>
    readonly id_fatura: FieldRef<"NotaFiscal", 'Int'>
    readonly numero: FieldRef<"NotaFiscal", 'Int'>
    readonly data_emissao: FieldRef<"NotaFiscal", 'DateTime'>
    readonly valor_total: FieldRef<"NotaFiscal", 'Decimal'>
    readonly status_api: FieldRef<"NotaFiscal", 'StatusNotaFiscal'>
    readonly id_externo_api: FieldRef<"NotaFiscal", 'String'>
    readonly link_xml: FieldRef<"NotaFiscal", 'String'>
    readonly link_pdf: FieldRef<"NotaFiscal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NotaFiscal findUnique
   */
  export type NotaFiscalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscal
     */
    select?: NotaFiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalInclude<ExtArgs> | null
    /**
     * Filter, which NotaFiscal to fetch.
     */
    where: NotaFiscalWhereUniqueInput
  }

  /**
   * NotaFiscal findUniqueOrThrow
   */
  export type NotaFiscalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscal
     */
    select?: NotaFiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalInclude<ExtArgs> | null
    /**
     * Filter, which NotaFiscal to fetch.
     */
    where: NotaFiscalWhereUniqueInput
  }

  /**
   * NotaFiscal findFirst
   */
  export type NotaFiscalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscal
     */
    select?: NotaFiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalInclude<ExtArgs> | null
    /**
     * Filter, which NotaFiscal to fetch.
     */
    where?: NotaFiscalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaFiscals to fetch.
     */
    orderBy?: NotaFiscalOrderByWithRelationInput | NotaFiscalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotaFiscals.
     */
    cursor?: NotaFiscalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaFiscals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaFiscals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotaFiscals.
     */
    distinct?: NotaFiscalScalarFieldEnum | NotaFiscalScalarFieldEnum[]
  }

  /**
   * NotaFiscal findFirstOrThrow
   */
  export type NotaFiscalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscal
     */
    select?: NotaFiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalInclude<ExtArgs> | null
    /**
     * Filter, which NotaFiscal to fetch.
     */
    where?: NotaFiscalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaFiscals to fetch.
     */
    orderBy?: NotaFiscalOrderByWithRelationInput | NotaFiscalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotaFiscals.
     */
    cursor?: NotaFiscalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaFiscals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaFiscals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotaFiscals.
     */
    distinct?: NotaFiscalScalarFieldEnum | NotaFiscalScalarFieldEnum[]
  }

  /**
   * NotaFiscal findMany
   */
  export type NotaFiscalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscal
     */
    select?: NotaFiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalInclude<ExtArgs> | null
    /**
     * Filter, which NotaFiscals to fetch.
     */
    where?: NotaFiscalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaFiscals to fetch.
     */
    orderBy?: NotaFiscalOrderByWithRelationInput | NotaFiscalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotaFiscals.
     */
    cursor?: NotaFiscalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaFiscals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaFiscals.
     */
    skip?: number
    distinct?: NotaFiscalScalarFieldEnum | NotaFiscalScalarFieldEnum[]
  }

  /**
   * NotaFiscal create
   */
  export type NotaFiscalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscal
     */
    select?: NotaFiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalInclude<ExtArgs> | null
    /**
     * The data needed to create a NotaFiscal.
     */
    data: XOR<NotaFiscalCreateInput, NotaFiscalUncheckedCreateInput>
  }

  /**
   * NotaFiscal createMany
   */
  export type NotaFiscalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotaFiscals.
     */
    data: NotaFiscalCreateManyInput | NotaFiscalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotaFiscal createManyAndReturn
   */
  export type NotaFiscalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscal
     */
    select?: NotaFiscalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NotaFiscals.
     */
    data: NotaFiscalCreateManyInput | NotaFiscalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotaFiscal update
   */
  export type NotaFiscalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscal
     */
    select?: NotaFiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalInclude<ExtArgs> | null
    /**
     * The data needed to update a NotaFiscal.
     */
    data: XOR<NotaFiscalUpdateInput, NotaFiscalUncheckedUpdateInput>
    /**
     * Choose, which NotaFiscal to update.
     */
    where: NotaFiscalWhereUniqueInput
  }

  /**
   * NotaFiscal updateMany
   */
  export type NotaFiscalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotaFiscals.
     */
    data: XOR<NotaFiscalUpdateManyMutationInput, NotaFiscalUncheckedUpdateManyInput>
    /**
     * Filter which NotaFiscals to update
     */
    where?: NotaFiscalWhereInput
  }

  /**
   * NotaFiscal upsert
   */
  export type NotaFiscalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscal
     */
    select?: NotaFiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalInclude<ExtArgs> | null
    /**
     * The filter to search for the NotaFiscal to update in case it exists.
     */
    where: NotaFiscalWhereUniqueInput
    /**
     * In case the NotaFiscal found by the `where` argument doesn't exist, create a new NotaFiscal with this data.
     */
    create: XOR<NotaFiscalCreateInput, NotaFiscalUncheckedCreateInput>
    /**
     * In case the NotaFiscal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotaFiscalUpdateInput, NotaFiscalUncheckedUpdateInput>
  }

  /**
   * NotaFiscal delete
   */
  export type NotaFiscalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscal
     */
    select?: NotaFiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalInclude<ExtArgs> | null
    /**
     * Filter which NotaFiscal to delete.
     */
    where: NotaFiscalWhereUniqueInput
  }

  /**
   * NotaFiscal deleteMany
   */
  export type NotaFiscalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotaFiscals to delete
     */
    where?: NotaFiscalWhereInput
  }

  /**
   * NotaFiscal without action
   */
  export type NotaFiscalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaFiscal
     */
    select?: NotaFiscalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaFiscalInclude<ExtArgs> | null
  }


  /**
   * Model Transacao
   */

  export type AggregateTransacao = {
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  export type TransacaoAvgAggregateOutputType = {
    id: number | null
    id_fatura: number | null
  }

  export type TransacaoSumAggregateOutputType = {
    id: number | null
    id_fatura: number | null
  }

  export type TransacaoMinAggregateOutputType = {
    id: number | null
    id_fatura: number | null
    data_hora: Date | null
    evento: string | null
    tipo_notificacao_api: string | null
  }

  export type TransacaoMaxAggregateOutputType = {
    id: number | null
    id_fatura: number | null
    data_hora: Date | null
    evento: string | null
    tipo_notificacao_api: string | null
  }

  export type TransacaoCountAggregateOutputType = {
    id: number
    id_fatura: number
    data_hora: number
    evento: number
    tipo_notificacao_api: number
    dados_resposta: number
    _all: number
  }


  export type TransacaoAvgAggregateInputType = {
    id?: true
    id_fatura?: true
  }

  export type TransacaoSumAggregateInputType = {
    id?: true
    id_fatura?: true
  }

  export type TransacaoMinAggregateInputType = {
    id?: true
    id_fatura?: true
    data_hora?: true
    evento?: true
    tipo_notificacao_api?: true
  }

  export type TransacaoMaxAggregateInputType = {
    id?: true
    id_fatura?: true
    data_hora?: true
    evento?: true
    tipo_notificacao_api?: true
  }

  export type TransacaoCountAggregateInputType = {
    id?: true
    id_fatura?: true
    data_hora?: true
    evento?: true
    tipo_notificacao_api?: true
    dados_resposta?: true
    _all?: true
  }

  export type TransacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacao to aggregate.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transacaos
    **/
    _count?: true | TransacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransacaoMaxAggregateInputType
  }

  export type GetTransacaoAggregateType<T extends TransacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTransacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransacao[P]>
      : GetScalarType<T[P], AggregateTransacao[P]>
  }




  export type TransacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithAggregationInput | TransacaoOrderByWithAggregationInput[]
    by: TransacaoScalarFieldEnum[] | TransacaoScalarFieldEnum
    having?: TransacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransacaoCountAggregateInputType | true
    _avg?: TransacaoAvgAggregateInputType
    _sum?: TransacaoSumAggregateInputType
    _min?: TransacaoMinAggregateInputType
    _max?: TransacaoMaxAggregateInputType
  }

  export type TransacaoGroupByOutputType = {
    id: number
    id_fatura: number
    data_hora: Date
    evento: string
    tipo_notificacao_api: string | null
    dados_resposta: JsonValue | null
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  type GetTransacaoGroupByPayload<T extends TransacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
            : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
        }
      >
    >


  export type TransacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_fatura?: boolean
    data_hora?: boolean
    evento?: boolean
    tipo_notificacao_api?: boolean
    dados_resposta?: boolean
    fatura?: boolean | FaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_fatura?: boolean
    data_hora?: boolean
    evento?: boolean
    tipo_notificacao_api?: boolean
    dados_resposta?: boolean
    fatura?: boolean | FaturaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectScalar = {
    id?: boolean
    id_fatura?: boolean
    data_hora?: boolean
    evento?: boolean
    tipo_notificacao_api?: boolean
    dados_resposta?: boolean
  }

  export type TransacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fatura?: boolean | FaturaDefaultArgs<ExtArgs>
  }
  export type TransacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fatura?: boolean | FaturaDefaultArgs<ExtArgs>
  }

  export type $TransacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transacao"
    objects: {
      fatura: Prisma.$FaturaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_fatura: number
      data_hora: Date
      evento: string
      tipo_notificacao_api: string | null
      dados_resposta: Prisma.JsonValue | null
    }, ExtArgs["result"]["transacao"]>
    composites: {}
  }

  type TransacaoGetPayload<S extends boolean | null | undefined | TransacaoDefaultArgs> = $Result.GetResult<Prisma.$TransacaoPayload, S>

  type TransacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransacaoCountAggregateInputType | true
    }

  export interface TransacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transacao'], meta: { name: 'Transacao' } }
    /**
     * Find zero or one Transacao that matches the filter.
     * @param {TransacaoFindUniqueArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransacaoFindUniqueArgs>(args: SelectSubset<T, TransacaoFindUniqueArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transacao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransacaoFindUniqueOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, TransacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransacaoFindFirstArgs>(args?: SelectSubset<T, TransacaoFindFirstArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, TransacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transacaos
     * const transacaos = await prisma.transacao.findMany()
     * 
     * // Get first 10 Transacaos
     * const transacaos = await prisma.transacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transacaoWithIdOnly = await prisma.transacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransacaoFindManyArgs>(args?: SelectSubset<T, TransacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transacao.
     * @param {TransacaoCreateArgs} args - Arguments to create a Transacao.
     * @example
     * // Create one Transacao
     * const Transacao = await prisma.transacao.create({
     *   data: {
     *     // ... data to create a Transacao
     *   }
     * })
     * 
     */
    create<T extends TransacaoCreateArgs>(args: SelectSubset<T, TransacaoCreateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transacaos.
     * @param {TransacaoCreateManyArgs} args - Arguments to create many Transacaos.
     * @example
     * // Create many Transacaos
     * const transacao = await prisma.transacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransacaoCreateManyArgs>(args?: SelectSubset<T, TransacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transacaos and returns the data saved in the database.
     * @param {TransacaoCreateManyAndReturnArgs} args - Arguments to create many Transacaos.
     * @example
     * // Create many Transacaos
     * const transacao = await prisma.transacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transacaos and only return the `id`
     * const transacaoWithIdOnly = await prisma.transacao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, TransacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transacao.
     * @param {TransacaoDeleteArgs} args - Arguments to delete one Transacao.
     * @example
     * // Delete one Transacao
     * const Transacao = await prisma.transacao.delete({
     *   where: {
     *     // ... filter to delete one Transacao
     *   }
     * })
     * 
     */
    delete<T extends TransacaoDeleteArgs>(args: SelectSubset<T, TransacaoDeleteArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transacao.
     * @param {TransacaoUpdateArgs} args - Arguments to update one Transacao.
     * @example
     * // Update one Transacao
     * const transacao = await prisma.transacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransacaoUpdateArgs>(args: SelectSubset<T, TransacaoUpdateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transacaos.
     * @param {TransacaoDeleteManyArgs} args - Arguments to filter Transacaos to delete.
     * @example
     * // Delete a few Transacaos
     * const { count } = await prisma.transacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransacaoDeleteManyArgs>(args?: SelectSubset<T, TransacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transacaos
     * const transacao = await prisma.transacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransacaoUpdateManyArgs>(args: SelectSubset<T, TransacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transacao.
     * @param {TransacaoUpsertArgs} args - Arguments to update or create a Transacao.
     * @example
     * // Update or create a Transacao
     * const transacao = await prisma.transacao.upsert({
     *   create: {
     *     // ... data to create a Transacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transacao we want to update
     *   }
     * })
     */
    upsert<T extends TransacaoUpsertArgs>(args: SelectSubset<T, TransacaoUpsertArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoCountArgs} args - Arguments to filter Transacaos to count.
     * @example
     * // Count the number of Transacaos
     * const count = await prisma.transacao.count({
     *   where: {
     *     // ... the filter for the Transacaos we want to count
     *   }
     * })
    **/
    count<T extends TransacaoCountArgs>(
      args?: Subset<T, TransacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransacaoAggregateArgs>(args: Subset<T, TransacaoAggregateArgs>): Prisma.PrismaPromise<GetTransacaoAggregateType<T>>

    /**
     * Group by Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransacaoGroupByArgs['orderBy'] }
        : { orderBy?: TransacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transacao model
   */
  readonly fields: TransacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fatura<T extends FaturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FaturaDefaultArgs<ExtArgs>>): Prisma__FaturaClient<$Result.GetResult<Prisma.$FaturaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transacao model
   */ 
  interface TransacaoFieldRefs {
    readonly id: FieldRef<"Transacao", 'Int'>
    readonly id_fatura: FieldRef<"Transacao", 'Int'>
    readonly data_hora: FieldRef<"Transacao", 'DateTime'>
    readonly evento: FieldRef<"Transacao", 'String'>
    readonly tipo_notificacao_api: FieldRef<"Transacao", 'String'>
    readonly dados_resposta: FieldRef<"Transacao", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Transacao findUnique
   */
  export type TransacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findUniqueOrThrow
   */
  export type TransacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findFirst
   */
  export type TransacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findFirstOrThrow
   */
  export type TransacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findMany
   */
  export type TransacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter, which Transacaos to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao create
   */
  export type TransacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Transacao.
     */
    data: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
  }

  /**
   * Transacao createMany
   */
  export type TransacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transacaos.
     */
    data: TransacaoCreateManyInput | TransacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transacao createManyAndReturn
   */
  export type TransacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transacaos.
     */
    data: TransacaoCreateManyInput | TransacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transacao update
   */
  export type TransacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Transacao.
     */
    data: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
    /**
     * Choose, which Transacao to update.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao updateMany
   */
  export type TransacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transacaos.
     */
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyInput>
    /**
     * Filter which Transacaos to update
     */
    where?: TransacaoWhereInput
  }

  /**
   * Transacao upsert
   */
  export type TransacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Transacao to update in case it exists.
     */
    where: TransacaoWhereUniqueInput
    /**
     * In case the Transacao found by the `where` argument doesn't exist, create a new Transacao with this data.
     */
    create: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
    /**
     * In case the Transacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
  }

  /**
   * Transacao delete
   */
  export type TransacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
    /**
     * Filter which Transacao to delete.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao deleteMany
   */
  export type TransacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacaos to delete
     */
    where?: TransacaoWhereInput
  }

  /**
   * Transacao without action
   */
  export type TransacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransacaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome_razao_social: 'nome_razao_social',
    cpf_cnpj: 'cpf_cnpj',
    email: 'email',
    telefone: 'telefone',
    endereco_completo: 'endereco_completo'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ServicoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    valor_padrao: 'valor_padrao'
  };

  export type ServicoScalarFieldEnum = (typeof ServicoScalarFieldEnum)[keyof typeof ServicoScalarFieldEnum]


  export const PerfilScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    permissoes: 'permissoes'
  };

  export type PerfilScalarFieldEnum = (typeof PerfilScalarFieldEnum)[keyof typeof PerfilScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    id_perfil: 'id_perfil',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    ativo: 'ativo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ParceiroScalarFieldEnum: {
    id: 'id',
    nome_razao_social: 'nome_razao_social',
    cpf_cnpj: 'cpf_cnpj',
    email_contato: 'email_contato',
    dados_bancarios_pix: 'dados_bancarios_pix'
  };

  export type ParceiroScalarFieldEnum = (typeof ParceiroScalarFieldEnum)[keyof typeof ParceiroScalarFieldEnum]


  export const RecorrenciaScalarFieldEnum: {
    id: 'id',
    id_cliente: 'id_cliente',
    id_servico: 'id_servico',
    valor_cobrado: 'valor_cobrado',
    periodicidade: 'periodicidade',
    dia_vencimento: 'dia_vencimento',
    status: 'status'
  };

  export type RecorrenciaScalarFieldEnum = (typeof RecorrenciaScalarFieldEnum)[keyof typeof RecorrenciaScalarFieldEnum]


  export const FaturaScalarFieldEnum: {
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

  export type FaturaScalarFieldEnum = (typeof FaturaScalarFieldEnum)[keyof typeof FaturaScalarFieldEnum]


  export const ContaPagarScalarFieldEnum: {
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

  export type ContaPagarScalarFieldEnum = (typeof ContaPagarScalarFieldEnum)[keyof typeof ContaPagarScalarFieldEnum]


  export const NotaFiscalScalarFieldEnum: {
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

  export type NotaFiscalScalarFieldEnum = (typeof NotaFiscalScalarFieldEnum)[keyof typeof NotaFiscalScalarFieldEnum]


  export const TransacaoScalarFieldEnum: {
    id: 'id',
    id_fatura: 'id_fatura',
    data_hora: 'data_hora',
    evento: 'evento',
    tipo_notificacao_api: 'tipo_notificacao_api',
    dados_resposta: 'dados_resposta'
  };

  export type TransacaoScalarFieldEnum = (typeof TransacaoScalarFieldEnum)[keyof typeof TransacaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Periodicidade'
   */
  export type EnumPeriodicidadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Periodicidade'>
    


  /**
   * Reference to a field of type 'Periodicidade[]'
   */
  export type ListEnumPeriodicidadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Periodicidade[]'>
    


  /**
   * Reference to a field of type 'StatusRecorrencia'
   */
  export type EnumStatusRecorrenciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRecorrencia'>
    


  /**
   * Reference to a field of type 'StatusRecorrencia[]'
   */
  export type ListEnumStatusRecorrenciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRecorrencia[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusFatura'
   */
  export type EnumStatusFaturaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusFatura'>
    


  /**
   * Reference to a field of type 'StatusFatura[]'
   */
  export type ListEnumStatusFaturaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusFatura[]'>
    


  /**
   * Reference to a field of type 'TipoPagamentoPreferencial'
   */
  export type EnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPagamentoPreferencial'>
    


  /**
   * Reference to a field of type 'TipoPagamentoPreferencial[]'
   */
  export type ListEnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPagamentoPreferencial[]'>
    


  /**
   * Reference to a field of type 'FormaPagamento'
   */
  export type EnumFormaPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormaPagamento'>
    


  /**
   * Reference to a field of type 'FormaPagamento[]'
   */
  export type ListEnumFormaPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormaPagamento[]'>
    


  /**
   * Reference to a field of type 'StatusContaPagar'
   */
  export type EnumStatusContaPagarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusContaPagar'>
    


  /**
   * Reference to a field of type 'StatusContaPagar[]'
   */
  export type ListEnumStatusContaPagarFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusContaPagar[]'>
    


  /**
   * Reference to a field of type 'StatusNotaFiscal'
   */
  export type EnumStatusNotaFiscalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusNotaFiscal'>
    


  /**
   * Reference to a field of type 'StatusNotaFiscal[]'
   */
  export type ListEnumStatusNotaFiscalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusNotaFiscal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nome_razao_social?: StringFilter<"Cliente"> | string
    cpf_cnpj?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    endereco_completo?: StringFilter<"Cliente"> | string
    recorrencias?: RecorrenciaListRelationFilter
    faturas?: FaturaListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome_razao_social?: SortOrder
    cpf_cnpj?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco_completo?: SortOrder
    recorrencias?: RecorrenciaOrderByRelationAggregateInput
    faturas?: FaturaOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf_cnpj?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome_razao_social?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    endereco_completo?: StringFilter<"Cliente"> | string
    recorrencias?: RecorrenciaListRelationFilter
    faturas?: FaturaListRelationFilter
  }, "id" | "cpf_cnpj">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome_razao_social?: SortOrder
    cpf_cnpj?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco_completo?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nome_razao_social?: StringWithAggregatesFilter<"Cliente"> | string
    cpf_cnpj?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    telefone?: StringWithAggregatesFilter<"Cliente"> | string
    endereco_completo?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type ServicoWhereInput = {
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    id?: IntFilter<"Servico"> | number
    nome?: StringFilter<"Servico"> | string
    descricao?: StringNullableFilter<"Servico"> | string | null
    valor_padrao?: DecimalFilter<"Servico"> | Decimal | DecimalJsLike | number | string
    recorrencias?: RecorrenciaListRelationFilter
  }

  export type ServicoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valor_padrao?: SortOrder
    recorrencias?: RecorrenciaOrderByRelationAggregateInput
  }

  export type ServicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    nome?: StringFilter<"Servico"> | string
    descricao?: StringNullableFilter<"Servico"> | string | null
    valor_padrao?: DecimalFilter<"Servico"> | Decimal | DecimalJsLike | number | string
    recorrencias?: RecorrenciaListRelationFilter
  }, "id">

  export type ServicoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    valor_padrao?: SortOrder
    _count?: ServicoCountOrderByAggregateInput
    _avg?: ServicoAvgOrderByAggregateInput
    _max?: ServicoMaxOrderByAggregateInput
    _min?: ServicoMinOrderByAggregateInput
    _sum?: ServicoSumOrderByAggregateInput
  }

  export type ServicoScalarWhereWithAggregatesInput = {
    AND?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    OR?: ServicoScalarWhereWithAggregatesInput[]
    NOT?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Servico"> | number
    nome?: StringWithAggregatesFilter<"Servico"> | string
    descricao?: StringNullableWithAggregatesFilter<"Servico"> | string | null
    valor_padrao?: DecimalWithAggregatesFilter<"Servico"> | Decimal | DecimalJsLike | number | string
  }

  export type PerfilWhereInput = {
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    id?: IntFilter<"Perfil"> | number
    nome?: StringFilter<"Perfil"> | string
    permissoes?: StringFilter<"Perfil"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type PerfilOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    permissoes?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type PerfilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    nome?: StringFilter<"Perfil"> | string
    permissoes?: StringFilter<"Perfil"> | string
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type PerfilOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    permissoes?: SortOrder
    _count?: PerfilCountOrderByAggregateInput
    _avg?: PerfilAvgOrderByAggregateInput
    _max?: PerfilMaxOrderByAggregateInput
    _min?: PerfilMinOrderByAggregateInput
    _sum?: PerfilSumOrderByAggregateInput
  }

  export type PerfilScalarWhereWithAggregatesInput = {
    AND?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    OR?: PerfilScalarWhereWithAggregatesInput[]
    NOT?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Perfil"> | number
    nome?: StringWithAggregatesFilter<"Perfil"> | string
    permissoes?: StringWithAggregatesFilter<"Perfil"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    id_perfil?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha_hash?: StringFilter<"Usuario"> | string
    ativo?: BoolFilter<"Usuario"> | boolean
    perfil?: XOR<PerfilRelationFilter, PerfilWhereInput>
    faturas_criadas?: FaturaListRelationFilter
    contas_pagar_lancadas?: ContaPagarListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    id_perfil?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    ativo?: SortOrder
    perfil?: PerfilOrderByWithRelationInput
    faturas_criadas?: FaturaOrderByRelationAggregateInput
    contas_pagar_lancadas?: ContaPagarOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_perfil?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    senha_hash?: StringFilter<"Usuario"> | string
    ativo?: BoolFilter<"Usuario"> | boolean
    perfil?: XOR<PerfilRelationFilter, PerfilWhereInput>
    faturas_criadas?: FaturaListRelationFilter
    contas_pagar_lancadas?: ContaPagarListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    id_perfil?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    ativo?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    id_perfil?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha_hash?: StringWithAggregatesFilter<"Usuario"> | string
    ativo?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type ParceiroWhereInput = {
    AND?: ParceiroWhereInput | ParceiroWhereInput[]
    OR?: ParceiroWhereInput[]
    NOT?: ParceiroWhereInput | ParceiroWhereInput[]
    id?: IntFilter<"Parceiro"> | number
    nome_razao_social?: StringFilter<"Parceiro"> | string
    cpf_cnpj?: StringFilter<"Parceiro"> | string
    email_contato?: StringFilter<"Parceiro"> | string
    dados_bancarios_pix?: StringNullableFilter<"Parceiro"> | string | null
    contas_pagar?: ContaPagarListRelationFilter
  }

  export type ParceiroOrderByWithRelationInput = {
    id?: SortOrder
    nome_razao_social?: SortOrder
    cpf_cnpj?: SortOrder
    email_contato?: SortOrder
    dados_bancarios_pix?: SortOrderInput | SortOrder
    contas_pagar?: ContaPagarOrderByRelationAggregateInput
  }

  export type ParceiroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf_cnpj?: string
    AND?: ParceiroWhereInput | ParceiroWhereInput[]
    OR?: ParceiroWhereInput[]
    NOT?: ParceiroWhereInput | ParceiroWhereInput[]
    nome_razao_social?: StringFilter<"Parceiro"> | string
    email_contato?: StringFilter<"Parceiro"> | string
    dados_bancarios_pix?: StringNullableFilter<"Parceiro"> | string | null
    contas_pagar?: ContaPagarListRelationFilter
  }, "id" | "cpf_cnpj">

  export type ParceiroOrderByWithAggregationInput = {
    id?: SortOrder
    nome_razao_social?: SortOrder
    cpf_cnpj?: SortOrder
    email_contato?: SortOrder
    dados_bancarios_pix?: SortOrderInput | SortOrder
    _count?: ParceiroCountOrderByAggregateInput
    _avg?: ParceiroAvgOrderByAggregateInput
    _max?: ParceiroMaxOrderByAggregateInput
    _min?: ParceiroMinOrderByAggregateInput
    _sum?: ParceiroSumOrderByAggregateInput
  }

  export type ParceiroScalarWhereWithAggregatesInput = {
    AND?: ParceiroScalarWhereWithAggregatesInput | ParceiroScalarWhereWithAggregatesInput[]
    OR?: ParceiroScalarWhereWithAggregatesInput[]
    NOT?: ParceiroScalarWhereWithAggregatesInput | ParceiroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Parceiro"> | number
    nome_razao_social?: StringWithAggregatesFilter<"Parceiro"> | string
    cpf_cnpj?: StringWithAggregatesFilter<"Parceiro"> | string
    email_contato?: StringWithAggregatesFilter<"Parceiro"> | string
    dados_bancarios_pix?: StringNullableWithAggregatesFilter<"Parceiro"> | string | null
  }

  export type RecorrenciaWhereInput = {
    AND?: RecorrenciaWhereInput | RecorrenciaWhereInput[]
    OR?: RecorrenciaWhereInput[]
    NOT?: RecorrenciaWhereInput | RecorrenciaWhereInput[]
    id?: IntFilter<"Recorrencia"> | number
    id_cliente?: IntFilter<"Recorrencia"> | number
    id_servico?: IntFilter<"Recorrencia"> | number
    valor_cobrado?: DecimalFilter<"Recorrencia"> | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFilter<"Recorrencia"> | $Enums.Periodicidade
    dia_vencimento?: IntFilter<"Recorrencia"> | number
    status?: EnumStatusRecorrenciaFilter<"Recorrencia"> | $Enums.StatusRecorrencia
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    servico?: XOR<ServicoRelationFilter, ServicoWhereInput>
    faturas?: FaturaListRelationFilter
  }

  export type RecorrenciaOrderByWithRelationInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_servico?: SortOrder
    valor_cobrado?: SortOrder
    periodicidade?: SortOrder
    dia_vencimento?: SortOrder
    status?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    servico?: ServicoOrderByWithRelationInput
    faturas?: FaturaOrderByRelationAggregateInput
  }

  export type RecorrenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecorrenciaWhereInput | RecorrenciaWhereInput[]
    OR?: RecorrenciaWhereInput[]
    NOT?: RecorrenciaWhereInput | RecorrenciaWhereInput[]
    id_cliente?: IntFilter<"Recorrencia"> | number
    id_servico?: IntFilter<"Recorrencia"> | number
    valor_cobrado?: DecimalFilter<"Recorrencia"> | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFilter<"Recorrencia"> | $Enums.Periodicidade
    dia_vencimento?: IntFilter<"Recorrencia"> | number
    status?: EnumStatusRecorrenciaFilter<"Recorrencia"> | $Enums.StatusRecorrencia
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    servico?: XOR<ServicoRelationFilter, ServicoWhereInput>
    faturas?: FaturaListRelationFilter
  }, "id">

  export type RecorrenciaOrderByWithAggregationInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_servico?: SortOrder
    valor_cobrado?: SortOrder
    periodicidade?: SortOrder
    dia_vencimento?: SortOrder
    status?: SortOrder
    _count?: RecorrenciaCountOrderByAggregateInput
    _avg?: RecorrenciaAvgOrderByAggregateInput
    _max?: RecorrenciaMaxOrderByAggregateInput
    _min?: RecorrenciaMinOrderByAggregateInput
    _sum?: RecorrenciaSumOrderByAggregateInput
  }

  export type RecorrenciaScalarWhereWithAggregatesInput = {
    AND?: RecorrenciaScalarWhereWithAggregatesInput | RecorrenciaScalarWhereWithAggregatesInput[]
    OR?: RecorrenciaScalarWhereWithAggregatesInput[]
    NOT?: RecorrenciaScalarWhereWithAggregatesInput | RecorrenciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recorrencia"> | number
    id_cliente?: IntWithAggregatesFilter<"Recorrencia"> | number
    id_servico?: IntWithAggregatesFilter<"Recorrencia"> | number
    valor_cobrado?: DecimalWithAggregatesFilter<"Recorrencia"> | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeWithAggregatesFilter<"Recorrencia"> | $Enums.Periodicidade
    dia_vencimento?: IntWithAggregatesFilter<"Recorrencia"> | number
    status?: EnumStatusRecorrenciaWithAggregatesFilter<"Recorrencia"> | $Enums.StatusRecorrencia
  }

  export type FaturaWhereInput = {
    AND?: FaturaWhereInput | FaturaWhereInput[]
    OR?: FaturaWhereInput[]
    NOT?: FaturaWhereInput | FaturaWhereInput[]
    id?: IntFilter<"Fatura"> | number
    id_cliente?: IntFilter<"Fatura"> | number
    id_recorrencia?: IntNullableFilter<"Fatura"> | number | null
    id_usuario_criador?: IntNullableFilter<"Fatura"> | number | null
    valor_total?: DecimalFilter<"Fatura"> | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFilter<"Fatura"> | Date | string
    data_pagamento?: DateTimeNullableFilter<"Fatura"> | Date | string | null
    status?: EnumStatusFaturaFilter<"Fatura"> | $Enums.StatusFatura
    tipo_pagamento_preferencial?: EnumTipoPagamentoPreferencialNullableFilter<"Fatura"> | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: StringNullableFilter<"Fatura"> | string | null
    linha_digitavel_boleto?: StringNullableFilter<"Fatura"> | string | null
    link_qr_code_pix?: StringNullableFilter<"Fatura"> | string | null
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    recorrencia?: XOR<RecorrenciaNullableRelationFilter, RecorrenciaWhereInput> | null
    usuario_criador?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
    transacoes?: TransacaoListRelationFilter
    nota_fiscal?: XOR<NotaFiscalNullableRelationFilter, NotaFiscalWhereInput> | null
  }

  export type FaturaOrderByWithRelationInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_recorrencia?: SortOrderInput | SortOrder
    id_usuario_criador?: SortOrderInput | SortOrder
    valor_total?: SortOrder
    data_vencimento?: SortOrder
    data_pagamento?: SortOrderInput | SortOrder
    status?: SortOrder
    tipo_pagamento_preferencial?: SortOrderInput | SortOrder
    id_externo_gateway?: SortOrderInput | SortOrder
    linha_digitavel_boleto?: SortOrderInput | SortOrder
    link_qr_code_pix?: SortOrderInput | SortOrder
    cliente?: ClienteOrderByWithRelationInput
    recorrencia?: RecorrenciaOrderByWithRelationInput
    usuario_criador?: UsuarioOrderByWithRelationInput
    transacoes?: TransacaoOrderByRelationAggregateInput
    nota_fiscal?: NotaFiscalOrderByWithRelationInput
  }

  export type FaturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FaturaWhereInput | FaturaWhereInput[]
    OR?: FaturaWhereInput[]
    NOT?: FaturaWhereInput | FaturaWhereInput[]
    id_cliente?: IntFilter<"Fatura"> | number
    id_recorrencia?: IntNullableFilter<"Fatura"> | number | null
    id_usuario_criador?: IntNullableFilter<"Fatura"> | number | null
    valor_total?: DecimalFilter<"Fatura"> | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFilter<"Fatura"> | Date | string
    data_pagamento?: DateTimeNullableFilter<"Fatura"> | Date | string | null
    status?: EnumStatusFaturaFilter<"Fatura"> | $Enums.StatusFatura
    tipo_pagamento_preferencial?: EnumTipoPagamentoPreferencialNullableFilter<"Fatura"> | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: StringNullableFilter<"Fatura"> | string | null
    linha_digitavel_boleto?: StringNullableFilter<"Fatura"> | string | null
    link_qr_code_pix?: StringNullableFilter<"Fatura"> | string | null
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    recorrencia?: XOR<RecorrenciaNullableRelationFilter, RecorrenciaWhereInput> | null
    usuario_criador?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
    transacoes?: TransacaoListRelationFilter
    nota_fiscal?: XOR<NotaFiscalNullableRelationFilter, NotaFiscalWhereInput> | null
  }, "id">

  export type FaturaOrderByWithAggregationInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_recorrencia?: SortOrderInput | SortOrder
    id_usuario_criador?: SortOrderInput | SortOrder
    valor_total?: SortOrder
    data_vencimento?: SortOrder
    data_pagamento?: SortOrderInput | SortOrder
    status?: SortOrder
    tipo_pagamento_preferencial?: SortOrderInput | SortOrder
    id_externo_gateway?: SortOrderInput | SortOrder
    linha_digitavel_boleto?: SortOrderInput | SortOrder
    link_qr_code_pix?: SortOrderInput | SortOrder
    _count?: FaturaCountOrderByAggregateInput
    _avg?: FaturaAvgOrderByAggregateInput
    _max?: FaturaMaxOrderByAggregateInput
    _min?: FaturaMinOrderByAggregateInput
    _sum?: FaturaSumOrderByAggregateInput
  }

  export type FaturaScalarWhereWithAggregatesInput = {
    AND?: FaturaScalarWhereWithAggregatesInput | FaturaScalarWhereWithAggregatesInput[]
    OR?: FaturaScalarWhereWithAggregatesInput[]
    NOT?: FaturaScalarWhereWithAggregatesInput | FaturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fatura"> | number
    id_cliente?: IntWithAggregatesFilter<"Fatura"> | number
    id_recorrencia?: IntNullableWithAggregatesFilter<"Fatura"> | number | null
    id_usuario_criador?: IntNullableWithAggregatesFilter<"Fatura"> | number | null
    valor_total?: DecimalWithAggregatesFilter<"Fatura"> | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeWithAggregatesFilter<"Fatura"> | Date | string
    data_pagamento?: DateTimeNullableWithAggregatesFilter<"Fatura"> | Date | string | null
    status?: EnumStatusFaturaWithAggregatesFilter<"Fatura"> | $Enums.StatusFatura
    tipo_pagamento_preferencial?: EnumTipoPagamentoPreferencialNullableWithAggregatesFilter<"Fatura"> | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: StringNullableWithAggregatesFilter<"Fatura"> | string | null
    linha_digitavel_boleto?: StringNullableWithAggregatesFilter<"Fatura"> | string | null
    link_qr_code_pix?: StringNullableWithAggregatesFilter<"Fatura"> | string | null
  }

  export type ContaPagarWhereInput = {
    AND?: ContaPagarWhereInput | ContaPagarWhereInput[]
    OR?: ContaPagarWhereInput[]
    NOT?: ContaPagarWhereInput | ContaPagarWhereInput[]
    id?: IntFilter<"ContaPagar"> | number
    id_parceiro?: IntFilter<"ContaPagar"> | number
    id_usuario_lancamento?: IntFilter<"ContaPagar"> | number
    descricao?: StringFilter<"ContaPagar"> | string
    valor?: DecimalFilter<"ContaPagar"> | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFilter<"ContaPagar"> | Date | string
    data_pagamento?: DateTimeNullableFilter<"ContaPagar"> | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFilter<"ContaPagar"> | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFilter<"ContaPagar"> | $Enums.StatusContaPagar
    parceiro?: XOR<ParceiroRelationFilter, ParceiroWhereInput>
    usuario_lancamento?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type ContaPagarOrderByWithRelationInput = {
    id?: SortOrder
    id_parceiro?: SortOrder
    id_usuario_lancamento?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data_vencimento?: SortOrder
    data_pagamento?: SortOrderInput | SortOrder
    forma_pagamento?: SortOrder
    status?: SortOrder
    parceiro?: ParceiroOrderByWithRelationInput
    usuario_lancamento?: UsuarioOrderByWithRelationInput
  }

  export type ContaPagarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContaPagarWhereInput | ContaPagarWhereInput[]
    OR?: ContaPagarWhereInput[]
    NOT?: ContaPagarWhereInput | ContaPagarWhereInput[]
    id_parceiro?: IntFilter<"ContaPagar"> | number
    id_usuario_lancamento?: IntFilter<"ContaPagar"> | number
    descricao?: StringFilter<"ContaPagar"> | string
    valor?: DecimalFilter<"ContaPagar"> | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFilter<"ContaPagar"> | Date | string
    data_pagamento?: DateTimeNullableFilter<"ContaPagar"> | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFilter<"ContaPagar"> | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFilter<"ContaPagar"> | $Enums.StatusContaPagar
    parceiro?: XOR<ParceiroRelationFilter, ParceiroWhereInput>
    usuario_lancamento?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ContaPagarOrderByWithAggregationInput = {
    id?: SortOrder
    id_parceiro?: SortOrder
    id_usuario_lancamento?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data_vencimento?: SortOrder
    data_pagamento?: SortOrderInput | SortOrder
    forma_pagamento?: SortOrder
    status?: SortOrder
    _count?: ContaPagarCountOrderByAggregateInput
    _avg?: ContaPagarAvgOrderByAggregateInput
    _max?: ContaPagarMaxOrderByAggregateInput
    _min?: ContaPagarMinOrderByAggregateInput
    _sum?: ContaPagarSumOrderByAggregateInput
  }

  export type ContaPagarScalarWhereWithAggregatesInput = {
    AND?: ContaPagarScalarWhereWithAggregatesInput | ContaPagarScalarWhereWithAggregatesInput[]
    OR?: ContaPagarScalarWhereWithAggregatesInput[]
    NOT?: ContaPagarScalarWhereWithAggregatesInput | ContaPagarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContaPagar"> | number
    id_parceiro?: IntWithAggregatesFilter<"ContaPagar"> | number
    id_usuario_lancamento?: IntWithAggregatesFilter<"ContaPagar"> | number
    descricao?: StringWithAggregatesFilter<"ContaPagar"> | string
    valor?: DecimalWithAggregatesFilter<"ContaPagar"> | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeWithAggregatesFilter<"ContaPagar"> | Date | string
    data_pagamento?: DateTimeNullableWithAggregatesFilter<"ContaPagar"> | Date | string | null
    forma_pagamento?: EnumFormaPagamentoWithAggregatesFilter<"ContaPagar"> | $Enums.FormaPagamento
    status?: EnumStatusContaPagarWithAggregatesFilter<"ContaPagar"> | $Enums.StatusContaPagar
  }

  export type NotaFiscalWhereInput = {
    AND?: NotaFiscalWhereInput | NotaFiscalWhereInput[]
    OR?: NotaFiscalWhereInput[]
    NOT?: NotaFiscalWhereInput | NotaFiscalWhereInput[]
    id?: IntFilter<"NotaFiscal"> | number
    id_fatura?: IntFilter<"NotaFiscal"> | number
    numero?: IntFilter<"NotaFiscal"> | number
    data_emissao?: DateTimeFilter<"NotaFiscal"> | Date | string
    valor_total?: DecimalFilter<"NotaFiscal"> | Decimal | DecimalJsLike | number | string
    status_api?: EnumStatusNotaFiscalFilter<"NotaFiscal"> | $Enums.StatusNotaFiscal
    id_externo_api?: StringNullableFilter<"NotaFiscal"> | string | null
    link_xml?: StringNullableFilter<"NotaFiscal"> | string | null
    link_pdf?: StringNullableFilter<"NotaFiscal"> | string | null
    fatura?: XOR<FaturaRelationFilter, FaturaWhereInput>
  }

  export type NotaFiscalOrderByWithRelationInput = {
    id?: SortOrder
    id_fatura?: SortOrder
    numero?: SortOrder
    data_emissao?: SortOrder
    valor_total?: SortOrder
    status_api?: SortOrder
    id_externo_api?: SortOrderInput | SortOrder
    link_xml?: SortOrderInput | SortOrder
    link_pdf?: SortOrderInput | SortOrder
    fatura?: FaturaOrderByWithRelationInput
  }

  export type NotaFiscalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_fatura?: number
    AND?: NotaFiscalWhereInput | NotaFiscalWhereInput[]
    OR?: NotaFiscalWhereInput[]
    NOT?: NotaFiscalWhereInput | NotaFiscalWhereInput[]
    numero?: IntFilter<"NotaFiscal"> | number
    data_emissao?: DateTimeFilter<"NotaFiscal"> | Date | string
    valor_total?: DecimalFilter<"NotaFiscal"> | Decimal | DecimalJsLike | number | string
    status_api?: EnumStatusNotaFiscalFilter<"NotaFiscal"> | $Enums.StatusNotaFiscal
    id_externo_api?: StringNullableFilter<"NotaFiscal"> | string | null
    link_xml?: StringNullableFilter<"NotaFiscal"> | string | null
    link_pdf?: StringNullableFilter<"NotaFiscal"> | string | null
    fatura?: XOR<FaturaRelationFilter, FaturaWhereInput>
  }, "id" | "id_fatura">

  export type NotaFiscalOrderByWithAggregationInput = {
    id?: SortOrder
    id_fatura?: SortOrder
    numero?: SortOrder
    data_emissao?: SortOrder
    valor_total?: SortOrder
    status_api?: SortOrder
    id_externo_api?: SortOrderInput | SortOrder
    link_xml?: SortOrderInput | SortOrder
    link_pdf?: SortOrderInput | SortOrder
    _count?: NotaFiscalCountOrderByAggregateInput
    _avg?: NotaFiscalAvgOrderByAggregateInput
    _max?: NotaFiscalMaxOrderByAggregateInput
    _min?: NotaFiscalMinOrderByAggregateInput
    _sum?: NotaFiscalSumOrderByAggregateInput
  }

  export type NotaFiscalScalarWhereWithAggregatesInput = {
    AND?: NotaFiscalScalarWhereWithAggregatesInput | NotaFiscalScalarWhereWithAggregatesInput[]
    OR?: NotaFiscalScalarWhereWithAggregatesInput[]
    NOT?: NotaFiscalScalarWhereWithAggregatesInput | NotaFiscalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotaFiscal"> | number
    id_fatura?: IntWithAggregatesFilter<"NotaFiscal"> | number
    numero?: IntWithAggregatesFilter<"NotaFiscal"> | number
    data_emissao?: DateTimeWithAggregatesFilter<"NotaFiscal"> | Date | string
    valor_total?: DecimalWithAggregatesFilter<"NotaFiscal"> | Decimal | DecimalJsLike | number | string
    status_api?: EnumStatusNotaFiscalWithAggregatesFilter<"NotaFiscal"> | $Enums.StatusNotaFiscal
    id_externo_api?: StringNullableWithAggregatesFilter<"NotaFiscal"> | string | null
    link_xml?: StringNullableWithAggregatesFilter<"NotaFiscal"> | string | null
    link_pdf?: StringNullableWithAggregatesFilter<"NotaFiscal"> | string | null
  }

  export type TransacaoWhereInput = {
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    id?: IntFilter<"Transacao"> | number
    id_fatura?: IntFilter<"Transacao"> | number
    data_hora?: DateTimeFilter<"Transacao"> | Date | string
    evento?: StringFilter<"Transacao"> | string
    tipo_notificacao_api?: StringNullableFilter<"Transacao"> | string | null
    dados_resposta?: JsonNullableFilter<"Transacao">
    fatura?: XOR<FaturaRelationFilter, FaturaWhereInput>
  }

  export type TransacaoOrderByWithRelationInput = {
    id?: SortOrder
    id_fatura?: SortOrder
    data_hora?: SortOrder
    evento?: SortOrder
    tipo_notificacao_api?: SortOrderInput | SortOrder
    dados_resposta?: SortOrderInput | SortOrder
    fatura?: FaturaOrderByWithRelationInput
  }

  export type TransacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    id_fatura?: IntFilter<"Transacao"> | number
    data_hora?: DateTimeFilter<"Transacao"> | Date | string
    evento?: StringFilter<"Transacao"> | string
    tipo_notificacao_api?: StringNullableFilter<"Transacao"> | string | null
    dados_resposta?: JsonNullableFilter<"Transacao">
    fatura?: XOR<FaturaRelationFilter, FaturaWhereInput>
  }, "id">

  export type TransacaoOrderByWithAggregationInput = {
    id?: SortOrder
    id_fatura?: SortOrder
    data_hora?: SortOrder
    evento?: SortOrder
    tipo_notificacao_api?: SortOrderInput | SortOrder
    dados_resposta?: SortOrderInput | SortOrder
    _count?: TransacaoCountOrderByAggregateInput
    _avg?: TransacaoAvgOrderByAggregateInput
    _max?: TransacaoMaxOrderByAggregateInput
    _min?: TransacaoMinOrderByAggregateInput
    _sum?: TransacaoSumOrderByAggregateInput
  }

  export type TransacaoScalarWhereWithAggregatesInput = {
    AND?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    OR?: TransacaoScalarWhereWithAggregatesInput[]
    NOT?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transacao"> | number
    id_fatura?: IntWithAggregatesFilter<"Transacao"> | number
    data_hora?: DateTimeWithAggregatesFilter<"Transacao"> | Date | string
    evento?: StringWithAggregatesFilter<"Transacao"> | string
    tipo_notificacao_api?: StringNullableWithAggregatesFilter<"Transacao"> | string | null
    dados_resposta?: JsonNullableWithAggregatesFilter<"Transacao">
  }

  export type ClienteCreateInput = {
    nome_razao_social: string
    cpf_cnpj: string
    email: string
    telefone: string
    endereco_completo: string
    recorrencias?: RecorrenciaCreateNestedManyWithoutClienteInput
    faturas?: FaturaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nome_razao_social: string
    cpf_cnpj: string
    email: string
    telefone: string
    endereco_completo: string
    recorrencias?: RecorrenciaUncheckedCreateNestedManyWithoutClienteInput
    faturas?: FaturaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_completo?: StringFieldUpdateOperationsInput | string
    recorrencias?: RecorrenciaUpdateManyWithoutClienteNestedInput
    faturas?: FaturaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_completo?: StringFieldUpdateOperationsInput | string
    recorrencias?: RecorrenciaUncheckedUpdateManyWithoutClienteNestedInput
    faturas?: FaturaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nome_razao_social: string
    cpf_cnpj: string
    email: string
    telefone: string
    endereco_completo: string
  }

  export type ClienteUpdateManyMutationInput = {
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_completo?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_completo?: StringFieldUpdateOperationsInput | string
  }

  export type ServicoCreateInput = {
    nome: string
    descricao?: string | null
    valor_padrao: Decimal | DecimalJsLike | number | string
    recorrencias?: RecorrenciaCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    valor_padrao: Decimal | DecimalJsLike | number | string
    recorrencias?: RecorrenciaUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_padrao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recorrencias?: RecorrenciaUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_padrao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    recorrencias?: RecorrenciaUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type ServicoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    valor_padrao: Decimal | DecimalJsLike | number | string
  }

  export type ServicoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_padrao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ServicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_padrao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PerfilCreateInput = {
    nome: string
    permissoes: string
    usuarios?: UsuarioCreateNestedManyWithoutPerfilInput
  }

  export type PerfilUncheckedCreateInput = {
    id?: number
    nome: string
    permissoes: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutPerfilInput
  }

  export type PerfilUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    permissoes?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutPerfilNestedInput
  }

  export type PerfilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    permissoes?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutPerfilNestedInput
  }

  export type PerfilCreateManyInput = {
    id?: number
    nome: string
    permissoes: string
  }

  export type PerfilUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    permissoes?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    permissoes?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha_hash: string
    ativo: boolean
    perfil: PerfilCreateNestedOneWithoutUsuariosInput
    faturas_criadas?: FaturaCreateNestedManyWithoutUsuario_criadorInput
    contas_pagar_lancadas?: ContaPagarCreateNestedManyWithoutUsuario_lancamentoInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    id_perfil: number
    nome: string
    email: string
    senha_hash: string
    ativo: boolean
    faturas_criadas?: FaturaUncheckedCreateNestedManyWithoutUsuario_criadorInput
    contas_pagar_lancadas?: ContaPagarUncheckedCreateNestedManyWithoutUsuario_lancamentoInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    perfil?: PerfilUpdateOneRequiredWithoutUsuariosNestedInput
    faturas_criadas?: FaturaUpdateManyWithoutUsuario_criadorNestedInput
    contas_pagar_lancadas?: ContaPagarUpdateManyWithoutUsuario_lancamentoNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_perfil?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    faturas_criadas?: FaturaUncheckedUpdateManyWithoutUsuario_criadorNestedInput
    contas_pagar_lancadas?: ContaPagarUncheckedUpdateManyWithoutUsuario_lancamentoNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    id_perfil: number
    nome: string
    email: string
    senha_hash: string
    ativo: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_perfil?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ParceiroCreateInput = {
    nome_razao_social: string
    cpf_cnpj: string
    email_contato: string
    dados_bancarios_pix?: string | null
    contas_pagar?: ContaPagarCreateNestedManyWithoutParceiroInput
  }

  export type ParceiroUncheckedCreateInput = {
    id?: number
    nome_razao_social: string
    cpf_cnpj: string
    email_contato: string
    dados_bancarios_pix?: string | null
    contas_pagar?: ContaPagarUncheckedCreateNestedManyWithoutParceiroInput
  }

  export type ParceiroUpdateInput = {
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email_contato?: StringFieldUpdateOperationsInput | string
    dados_bancarios_pix?: NullableStringFieldUpdateOperationsInput | string | null
    contas_pagar?: ContaPagarUpdateManyWithoutParceiroNestedInput
  }

  export type ParceiroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email_contato?: StringFieldUpdateOperationsInput | string
    dados_bancarios_pix?: NullableStringFieldUpdateOperationsInput | string | null
    contas_pagar?: ContaPagarUncheckedUpdateManyWithoutParceiroNestedInput
  }

  export type ParceiroCreateManyInput = {
    id?: number
    nome_razao_social: string
    cpf_cnpj: string
    email_contato: string
    dados_bancarios_pix?: string | null
  }

  export type ParceiroUpdateManyMutationInput = {
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email_contato?: StringFieldUpdateOperationsInput | string
    dados_bancarios_pix?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParceiroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email_contato?: StringFieldUpdateOperationsInput | string
    dados_bancarios_pix?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecorrenciaCreateInput = {
    valor_cobrado: Decimal | DecimalJsLike | number | string
    periodicidade: $Enums.Periodicidade
    dia_vencimento: number
    status: $Enums.StatusRecorrencia
    cliente: ClienteCreateNestedOneWithoutRecorrenciasInput
    servico: ServicoCreateNestedOneWithoutRecorrenciasInput
    faturas?: FaturaCreateNestedManyWithoutRecorrenciaInput
  }

  export type RecorrenciaUncheckedCreateInput = {
    id?: number
    id_cliente: number
    id_servico: number
    valor_cobrado: Decimal | DecimalJsLike | number | string
    periodicidade: $Enums.Periodicidade
    dia_vencimento: number
    status: $Enums.StatusRecorrencia
    faturas?: FaturaUncheckedCreateNestedManyWithoutRecorrenciaInput
  }

  export type RecorrenciaUpdateInput = {
    valor_cobrado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFieldUpdateOperationsInput | $Enums.Periodicidade
    dia_vencimento?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRecorrenciaFieldUpdateOperationsInput | $Enums.StatusRecorrencia
    cliente?: ClienteUpdateOneRequiredWithoutRecorrenciasNestedInput
    servico?: ServicoUpdateOneRequiredWithoutRecorrenciasNestedInput
    faturas?: FaturaUpdateManyWithoutRecorrenciaNestedInput
  }

  export type RecorrenciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_servico?: IntFieldUpdateOperationsInput | number
    valor_cobrado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFieldUpdateOperationsInput | $Enums.Periodicidade
    dia_vencimento?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRecorrenciaFieldUpdateOperationsInput | $Enums.StatusRecorrencia
    faturas?: FaturaUncheckedUpdateManyWithoutRecorrenciaNestedInput
  }

  export type RecorrenciaCreateManyInput = {
    id?: number
    id_cliente: number
    id_servico: number
    valor_cobrado: Decimal | DecimalJsLike | number | string
    periodicidade: $Enums.Periodicidade
    dia_vencimento: number
    status: $Enums.StatusRecorrencia
  }

  export type RecorrenciaUpdateManyMutationInput = {
    valor_cobrado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFieldUpdateOperationsInput | $Enums.Periodicidade
    dia_vencimento?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRecorrenciaFieldUpdateOperationsInput | $Enums.StatusRecorrencia
  }

  export type RecorrenciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_servico?: IntFieldUpdateOperationsInput | number
    valor_cobrado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFieldUpdateOperationsInput | $Enums.Periodicidade
    dia_vencimento?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRecorrenciaFieldUpdateOperationsInput | $Enums.StatusRecorrencia
  }

  export type FaturaCreateInput = {
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
    cliente: ClienteCreateNestedOneWithoutFaturasInput
    recorrencia?: RecorrenciaCreateNestedOneWithoutFaturasInput
    usuario_criador?: UsuarioCreateNestedOneWithoutFaturas_criadasInput
    transacoes?: TransacaoCreateNestedManyWithoutFaturaInput
    nota_fiscal?: NotaFiscalCreateNestedOneWithoutFaturaInput
  }

  export type FaturaUncheckedCreateInput = {
    id?: number
    id_cliente: number
    id_recorrencia?: number | null
    id_usuario_criador?: number | null
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutFaturaInput
    nota_fiscal?: NotaFiscalUncheckedCreateNestedOneWithoutFaturaInput
  }

  export type FaturaUpdateInput = {
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutFaturasNestedInput
    recorrencia?: RecorrenciaUpdateOneWithoutFaturasNestedInput
    usuario_criador?: UsuarioUpdateOneWithoutFaturas_criadasNestedInput
    transacoes?: TransacaoUpdateManyWithoutFaturaNestedInput
    nota_fiscal?: NotaFiscalUpdateOneWithoutFaturaNestedInput
  }

  export type FaturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_recorrencia?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario_criador?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
    transacoes?: TransacaoUncheckedUpdateManyWithoutFaturaNestedInput
    nota_fiscal?: NotaFiscalUncheckedUpdateOneWithoutFaturaNestedInput
  }

  export type FaturaCreateManyInput = {
    id?: number
    id_cliente: number
    id_recorrencia?: number | null
    id_usuario_criador?: number | null
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
  }

  export type FaturaUpdateManyMutationInput = {
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FaturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_recorrencia?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario_criador?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContaPagarCreateInput = {
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    forma_pagamento: $Enums.FormaPagamento
    status: $Enums.StatusContaPagar
    parceiro: ParceiroCreateNestedOneWithoutContas_pagarInput
    usuario_lancamento: UsuarioCreateNestedOneWithoutContas_pagar_lancadasInput
  }

  export type ContaPagarUncheckedCreateInput = {
    id?: number
    id_parceiro: number
    id_usuario_lancamento: number
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    forma_pagamento: $Enums.FormaPagamento
    status: $Enums.StatusContaPagar
  }

  export type ContaPagarUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFieldUpdateOperationsInput | $Enums.StatusContaPagar
    parceiro?: ParceiroUpdateOneRequiredWithoutContas_pagarNestedInput
    usuario_lancamento?: UsuarioUpdateOneRequiredWithoutContas_pagar_lancadasNestedInput
  }

  export type ContaPagarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_parceiro?: IntFieldUpdateOperationsInput | number
    id_usuario_lancamento?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFieldUpdateOperationsInput | $Enums.StatusContaPagar
  }

  export type ContaPagarCreateManyInput = {
    id?: number
    id_parceiro: number
    id_usuario_lancamento: number
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    forma_pagamento: $Enums.FormaPagamento
    status: $Enums.StatusContaPagar
  }

  export type ContaPagarUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFieldUpdateOperationsInput | $Enums.StatusContaPagar
  }

  export type ContaPagarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_parceiro?: IntFieldUpdateOperationsInput | number
    id_usuario_lancamento?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFieldUpdateOperationsInput | $Enums.StatusContaPagar
  }

  export type NotaFiscalCreateInput = {
    numero: number
    data_emissao: Date | string
    valor_total: Decimal | DecimalJsLike | number | string
    status_api: $Enums.StatusNotaFiscal
    id_externo_api?: string | null
    link_xml?: string | null
    link_pdf?: string | null
    fatura: FaturaCreateNestedOneWithoutNota_fiscalInput
  }

  export type NotaFiscalUncheckedCreateInput = {
    id?: number
    id_fatura: number
    numero: number
    data_emissao: Date | string
    valor_total: Decimal | DecimalJsLike | number | string
    status_api: $Enums.StatusNotaFiscal
    id_externo_api?: string | null
    link_xml?: string | null
    link_pdf?: string | null
  }

  export type NotaFiscalUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_api?: EnumStatusNotaFiscalFieldUpdateOperationsInput | $Enums.StatusNotaFiscal
    id_externo_api?: NullableStringFieldUpdateOperationsInput | string | null
    link_xml?: NullableStringFieldUpdateOperationsInput | string | null
    link_pdf?: NullableStringFieldUpdateOperationsInput | string | null
    fatura?: FaturaUpdateOneRequiredWithoutNota_fiscalNestedInput
  }

  export type NotaFiscalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_fatura?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_api?: EnumStatusNotaFiscalFieldUpdateOperationsInput | $Enums.StatusNotaFiscal
    id_externo_api?: NullableStringFieldUpdateOperationsInput | string | null
    link_xml?: NullableStringFieldUpdateOperationsInput | string | null
    link_pdf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotaFiscalCreateManyInput = {
    id?: number
    id_fatura: number
    numero: number
    data_emissao: Date | string
    valor_total: Decimal | DecimalJsLike | number | string
    status_api: $Enums.StatusNotaFiscal
    id_externo_api?: string | null
    link_xml?: string | null
    link_pdf?: string | null
  }

  export type NotaFiscalUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_api?: EnumStatusNotaFiscalFieldUpdateOperationsInput | $Enums.StatusNotaFiscal
    id_externo_api?: NullableStringFieldUpdateOperationsInput | string | null
    link_xml?: NullableStringFieldUpdateOperationsInput | string | null
    link_pdf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotaFiscalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_fatura?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_api?: EnumStatusNotaFiscalFieldUpdateOperationsInput | $Enums.StatusNotaFiscal
    id_externo_api?: NullableStringFieldUpdateOperationsInput | string | null
    link_xml?: NullableStringFieldUpdateOperationsInput | string | null
    link_pdf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransacaoCreateInput = {
    data_hora: Date | string
    evento: string
    tipo_notificacao_api?: string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
    fatura: FaturaCreateNestedOneWithoutTransacoesInput
  }

  export type TransacaoUncheckedCreateInput = {
    id?: number
    id_fatura: number
    data_hora: Date | string
    evento: string
    tipo_notificacao_api?: string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransacaoUpdateInput = {
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    tipo_notificacao_api?: NullableStringFieldUpdateOperationsInput | string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
    fatura?: FaturaUpdateOneRequiredWithoutTransacoesNestedInput
  }

  export type TransacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_fatura?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    tipo_notificacao_api?: NullableStringFieldUpdateOperationsInput | string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransacaoCreateManyInput = {
    id?: number
    id_fatura: number
    data_hora: Date | string
    evento: string
    tipo_notificacao_api?: string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransacaoUpdateManyMutationInput = {
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    tipo_notificacao_api?: NullableStringFieldUpdateOperationsInput | string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_fatura?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    tipo_notificacao_api?: NullableStringFieldUpdateOperationsInput | string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type RecorrenciaListRelationFilter = {
    every?: RecorrenciaWhereInput
    some?: RecorrenciaWhereInput
    none?: RecorrenciaWhereInput
  }

  export type FaturaListRelationFilter = {
    every?: FaturaWhereInput
    some?: FaturaWhereInput
    none?: FaturaWhereInput
  }

  export type RecorrenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FaturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome_razao_social?: SortOrder
    cpf_cnpj?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco_completo?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_razao_social?: SortOrder
    cpf_cnpj?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco_completo?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome_razao_social?: SortOrder
    cpf_cnpj?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    endereco_completo?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServicoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor_padrao?: SortOrder
  }

  export type ServicoAvgOrderByAggregateInput = {
    id?: SortOrder
    valor_padrao?: SortOrder
  }

  export type ServicoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor_padrao?: SortOrder
  }

  export type ServicoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    valor_padrao?: SortOrder
  }

  export type ServicoSumOrderByAggregateInput = {
    id?: SortOrder
    valor_padrao?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerfilCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    permissoes?: SortOrder
  }

  export type PerfilAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PerfilMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    permissoes?: SortOrder
  }

  export type PerfilMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    permissoes?: SortOrder
  }

  export type PerfilSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PerfilRelationFilter = {
    is?: PerfilWhereInput
    isNot?: PerfilWhereInput
  }

  export type ContaPagarListRelationFilter = {
    every?: ContaPagarWhereInput
    some?: ContaPagarWhereInput
    none?: ContaPagarWhereInput
  }

  export type ContaPagarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    id_perfil?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    ativo?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_perfil?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    id_perfil?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    ativo?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    id_perfil?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    ativo?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    id_perfil?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParceiroCountOrderByAggregateInput = {
    id?: SortOrder
    nome_razao_social?: SortOrder
    cpf_cnpj?: SortOrder
    email_contato?: SortOrder
    dados_bancarios_pix?: SortOrder
  }

  export type ParceiroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ParceiroMaxOrderByAggregateInput = {
    id?: SortOrder
    nome_razao_social?: SortOrder
    cpf_cnpj?: SortOrder
    email_contato?: SortOrder
    dados_bancarios_pix?: SortOrder
  }

  export type ParceiroMinOrderByAggregateInput = {
    id?: SortOrder
    nome_razao_social?: SortOrder
    cpf_cnpj?: SortOrder
    email_contato?: SortOrder
    dados_bancarios_pix?: SortOrder
  }

  export type ParceiroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPeriodicidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Periodicidade | EnumPeriodicidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Periodicidade[] | ListEnumPeriodicidadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Periodicidade[] | ListEnumPeriodicidadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodicidadeFilter<$PrismaModel> | $Enums.Periodicidade
  }

  export type EnumStatusRecorrenciaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRecorrencia | EnumStatusRecorrenciaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRecorrencia[] | ListEnumStatusRecorrenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRecorrencia[] | ListEnumStatusRecorrenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRecorrenciaFilter<$PrismaModel> | $Enums.StatusRecorrencia
  }

  export type ClienteRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type ServicoRelationFilter = {
    is?: ServicoWhereInput
    isNot?: ServicoWhereInput
  }

  export type RecorrenciaCountOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_servico?: SortOrder
    valor_cobrado?: SortOrder
    periodicidade?: SortOrder
    dia_vencimento?: SortOrder
    status?: SortOrder
  }

  export type RecorrenciaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_servico?: SortOrder
    valor_cobrado?: SortOrder
    dia_vencimento?: SortOrder
  }

  export type RecorrenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_servico?: SortOrder
    valor_cobrado?: SortOrder
    periodicidade?: SortOrder
    dia_vencimento?: SortOrder
    status?: SortOrder
  }

  export type RecorrenciaMinOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_servico?: SortOrder
    valor_cobrado?: SortOrder
    periodicidade?: SortOrder
    dia_vencimento?: SortOrder
    status?: SortOrder
  }

  export type RecorrenciaSumOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_servico?: SortOrder
    valor_cobrado?: SortOrder
    dia_vencimento?: SortOrder
  }

  export type EnumPeriodicidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Periodicidade | EnumPeriodicidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Periodicidade[] | ListEnumPeriodicidadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Periodicidade[] | ListEnumPeriodicidadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodicidadeWithAggregatesFilter<$PrismaModel> | $Enums.Periodicidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodicidadeFilter<$PrismaModel>
    _max?: NestedEnumPeriodicidadeFilter<$PrismaModel>
  }

  export type EnumStatusRecorrenciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRecorrencia | EnumStatusRecorrenciaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRecorrencia[] | ListEnumStatusRecorrenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRecorrencia[] | ListEnumStatusRecorrenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRecorrenciaWithAggregatesFilter<$PrismaModel> | $Enums.StatusRecorrencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRecorrenciaFilter<$PrismaModel>
    _max?: NestedEnumStatusRecorrenciaFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumStatusFaturaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusFatura | EnumStatusFaturaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusFatura[] | ListEnumStatusFaturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusFatura[] | ListEnumStatusFaturaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFaturaFilter<$PrismaModel> | $Enums.StatusFatura
  }

  export type EnumTipoPagamentoPreferencialNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPagamentoPreferencial | EnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> | null
    in?: $Enums.TipoPagamentoPreferencial[] | ListEnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TipoPagamentoPreferencial[] | ListEnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipoPagamentoPreferencialNullableFilter<$PrismaModel> | $Enums.TipoPagamentoPreferencial | null
  }

  export type RecorrenciaNullableRelationFilter = {
    is?: RecorrenciaWhereInput | null
    isNot?: RecorrenciaWhereInput | null
  }

  export type UsuarioNullableRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type TransacaoListRelationFilter = {
    every?: TransacaoWhereInput
    some?: TransacaoWhereInput
    none?: TransacaoWhereInput
  }

  export type NotaFiscalNullableRelationFilter = {
    is?: NotaFiscalWhereInput | null
    isNot?: NotaFiscalWhereInput | null
  }

  export type TransacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FaturaCountOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_recorrencia?: SortOrder
    id_usuario_criador?: SortOrder
    valor_total?: SortOrder
    data_vencimento?: SortOrder
    data_pagamento?: SortOrder
    status?: SortOrder
    tipo_pagamento_preferencial?: SortOrder
    id_externo_gateway?: SortOrder
    linha_digitavel_boleto?: SortOrder
    link_qr_code_pix?: SortOrder
  }

  export type FaturaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_recorrencia?: SortOrder
    id_usuario_criador?: SortOrder
    valor_total?: SortOrder
  }

  export type FaturaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_recorrencia?: SortOrder
    id_usuario_criador?: SortOrder
    valor_total?: SortOrder
    data_vencimento?: SortOrder
    data_pagamento?: SortOrder
    status?: SortOrder
    tipo_pagamento_preferencial?: SortOrder
    id_externo_gateway?: SortOrder
    linha_digitavel_boleto?: SortOrder
    link_qr_code_pix?: SortOrder
  }

  export type FaturaMinOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_recorrencia?: SortOrder
    id_usuario_criador?: SortOrder
    valor_total?: SortOrder
    data_vencimento?: SortOrder
    data_pagamento?: SortOrder
    status?: SortOrder
    tipo_pagamento_preferencial?: SortOrder
    id_externo_gateway?: SortOrder
    linha_digitavel_boleto?: SortOrder
    link_qr_code_pix?: SortOrder
  }

  export type FaturaSumOrderByAggregateInput = {
    id?: SortOrder
    id_cliente?: SortOrder
    id_recorrencia?: SortOrder
    id_usuario_criador?: SortOrder
    valor_total?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatusFaturaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusFatura | EnumStatusFaturaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusFatura[] | ListEnumStatusFaturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusFatura[] | ListEnumStatusFaturaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFaturaWithAggregatesFilter<$PrismaModel> | $Enums.StatusFatura
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFaturaFilter<$PrismaModel>
    _max?: NestedEnumStatusFaturaFilter<$PrismaModel>
  }

  export type EnumTipoPagamentoPreferencialNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPagamentoPreferencial | EnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> | null
    in?: $Enums.TipoPagamentoPreferencial[] | ListEnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TipoPagamentoPreferencial[] | ListEnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipoPagamentoPreferencialNullableWithAggregatesFilter<$PrismaModel> | $Enums.TipoPagamentoPreferencial | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTipoPagamentoPreferencialNullableFilter<$PrismaModel>
    _max?: NestedEnumTipoPagamentoPreferencialNullableFilter<$PrismaModel>
  }

  export type EnumFormaPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaPagamentoFilter<$PrismaModel> | $Enums.FormaPagamento
  }

  export type EnumStatusContaPagarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusContaPagar | EnumStatusContaPagarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusContaPagar[] | ListEnumStatusContaPagarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusContaPagar[] | ListEnumStatusContaPagarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusContaPagarFilter<$PrismaModel> | $Enums.StatusContaPagar
  }

  export type ParceiroRelationFilter = {
    is?: ParceiroWhereInput
    isNot?: ParceiroWhereInput
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ContaPagarCountOrderByAggregateInput = {
    id?: SortOrder
    id_parceiro?: SortOrder
    id_usuario_lancamento?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data_vencimento?: SortOrder
    data_pagamento?: SortOrder
    forma_pagamento?: SortOrder
    status?: SortOrder
  }

  export type ContaPagarAvgOrderByAggregateInput = {
    id?: SortOrder
    id_parceiro?: SortOrder
    id_usuario_lancamento?: SortOrder
    valor?: SortOrder
  }

  export type ContaPagarMaxOrderByAggregateInput = {
    id?: SortOrder
    id_parceiro?: SortOrder
    id_usuario_lancamento?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data_vencimento?: SortOrder
    data_pagamento?: SortOrder
    forma_pagamento?: SortOrder
    status?: SortOrder
  }

  export type ContaPagarMinOrderByAggregateInput = {
    id?: SortOrder
    id_parceiro?: SortOrder
    id_usuario_lancamento?: SortOrder
    descricao?: SortOrder
    valor?: SortOrder
    data_vencimento?: SortOrder
    data_pagamento?: SortOrder
    forma_pagamento?: SortOrder
    status?: SortOrder
  }

  export type ContaPagarSumOrderByAggregateInput = {
    id?: SortOrder
    id_parceiro?: SortOrder
    id_usuario_lancamento?: SortOrder
    valor?: SortOrder
  }

  export type EnumFormaPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.FormaPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaPagamentoFilter<$PrismaModel>
    _max?: NestedEnumFormaPagamentoFilter<$PrismaModel>
  }

  export type EnumStatusContaPagarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusContaPagar | EnumStatusContaPagarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusContaPagar[] | ListEnumStatusContaPagarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusContaPagar[] | ListEnumStatusContaPagarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusContaPagarWithAggregatesFilter<$PrismaModel> | $Enums.StatusContaPagar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusContaPagarFilter<$PrismaModel>
    _max?: NestedEnumStatusContaPagarFilter<$PrismaModel>
  }

  export type EnumStatusNotaFiscalFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusNotaFiscal | EnumStatusNotaFiscalFieldRefInput<$PrismaModel>
    in?: $Enums.StatusNotaFiscal[] | ListEnumStatusNotaFiscalFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusNotaFiscal[] | ListEnumStatusNotaFiscalFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusNotaFiscalFilter<$PrismaModel> | $Enums.StatusNotaFiscal
  }

  export type FaturaRelationFilter = {
    is?: FaturaWhereInput
    isNot?: FaturaWhereInput
  }

  export type NotaFiscalCountOrderByAggregateInput = {
    id?: SortOrder
    id_fatura?: SortOrder
    numero?: SortOrder
    data_emissao?: SortOrder
    valor_total?: SortOrder
    status_api?: SortOrder
    id_externo_api?: SortOrder
    link_xml?: SortOrder
    link_pdf?: SortOrder
  }

  export type NotaFiscalAvgOrderByAggregateInput = {
    id?: SortOrder
    id_fatura?: SortOrder
    numero?: SortOrder
    valor_total?: SortOrder
  }

  export type NotaFiscalMaxOrderByAggregateInput = {
    id?: SortOrder
    id_fatura?: SortOrder
    numero?: SortOrder
    data_emissao?: SortOrder
    valor_total?: SortOrder
    status_api?: SortOrder
    id_externo_api?: SortOrder
    link_xml?: SortOrder
    link_pdf?: SortOrder
  }

  export type NotaFiscalMinOrderByAggregateInput = {
    id?: SortOrder
    id_fatura?: SortOrder
    numero?: SortOrder
    data_emissao?: SortOrder
    valor_total?: SortOrder
    status_api?: SortOrder
    id_externo_api?: SortOrder
    link_xml?: SortOrder
    link_pdf?: SortOrder
  }

  export type NotaFiscalSumOrderByAggregateInput = {
    id?: SortOrder
    id_fatura?: SortOrder
    numero?: SortOrder
    valor_total?: SortOrder
  }

  export type EnumStatusNotaFiscalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusNotaFiscal | EnumStatusNotaFiscalFieldRefInput<$PrismaModel>
    in?: $Enums.StatusNotaFiscal[] | ListEnumStatusNotaFiscalFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusNotaFiscal[] | ListEnumStatusNotaFiscalFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusNotaFiscalWithAggregatesFilter<$PrismaModel> | $Enums.StatusNotaFiscal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusNotaFiscalFilter<$PrismaModel>
    _max?: NestedEnumStatusNotaFiscalFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TransacaoCountOrderByAggregateInput = {
    id?: SortOrder
    id_fatura?: SortOrder
    data_hora?: SortOrder
    evento?: SortOrder
    tipo_notificacao_api?: SortOrder
    dados_resposta?: SortOrder
  }

  export type TransacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_fatura?: SortOrder
  }

  export type TransacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_fatura?: SortOrder
    data_hora?: SortOrder
    evento?: SortOrder
    tipo_notificacao_api?: SortOrder
  }

  export type TransacaoMinOrderByAggregateInput = {
    id?: SortOrder
    id_fatura?: SortOrder
    data_hora?: SortOrder
    evento?: SortOrder
    tipo_notificacao_api?: SortOrder
  }

  export type TransacaoSumOrderByAggregateInput = {
    id?: SortOrder
    id_fatura?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type RecorrenciaCreateNestedManyWithoutClienteInput = {
    create?: XOR<RecorrenciaCreateWithoutClienteInput, RecorrenciaUncheckedCreateWithoutClienteInput> | RecorrenciaCreateWithoutClienteInput[] | RecorrenciaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RecorrenciaCreateOrConnectWithoutClienteInput | RecorrenciaCreateOrConnectWithoutClienteInput[]
    createMany?: RecorrenciaCreateManyClienteInputEnvelope
    connect?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
  }

  export type FaturaCreateNestedManyWithoutClienteInput = {
    create?: XOR<FaturaCreateWithoutClienteInput, FaturaUncheckedCreateWithoutClienteInput> | FaturaCreateWithoutClienteInput[] | FaturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutClienteInput | FaturaCreateOrConnectWithoutClienteInput[]
    createMany?: FaturaCreateManyClienteInputEnvelope
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
  }

  export type RecorrenciaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<RecorrenciaCreateWithoutClienteInput, RecorrenciaUncheckedCreateWithoutClienteInput> | RecorrenciaCreateWithoutClienteInput[] | RecorrenciaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RecorrenciaCreateOrConnectWithoutClienteInput | RecorrenciaCreateOrConnectWithoutClienteInput[]
    createMany?: RecorrenciaCreateManyClienteInputEnvelope
    connect?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
  }

  export type FaturaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<FaturaCreateWithoutClienteInput, FaturaUncheckedCreateWithoutClienteInput> | FaturaCreateWithoutClienteInput[] | FaturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutClienteInput | FaturaCreateOrConnectWithoutClienteInput[]
    createMany?: FaturaCreateManyClienteInputEnvelope
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RecorrenciaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<RecorrenciaCreateWithoutClienteInput, RecorrenciaUncheckedCreateWithoutClienteInput> | RecorrenciaCreateWithoutClienteInput[] | RecorrenciaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RecorrenciaCreateOrConnectWithoutClienteInput | RecorrenciaCreateOrConnectWithoutClienteInput[]
    upsert?: RecorrenciaUpsertWithWhereUniqueWithoutClienteInput | RecorrenciaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: RecorrenciaCreateManyClienteInputEnvelope
    set?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    disconnect?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    delete?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    connect?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    update?: RecorrenciaUpdateWithWhereUniqueWithoutClienteInput | RecorrenciaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: RecorrenciaUpdateManyWithWhereWithoutClienteInput | RecorrenciaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: RecorrenciaScalarWhereInput | RecorrenciaScalarWhereInput[]
  }

  export type FaturaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<FaturaCreateWithoutClienteInput, FaturaUncheckedCreateWithoutClienteInput> | FaturaCreateWithoutClienteInput[] | FaturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutClienteInput | FaturaCreateOrConnectWithoutClienteInput[]
    upsert?: FaturaUpsertWithWhereUniqueWithoutClienteInput | FaturaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: FaturaCreateManyClienteInputEnvelope
    set?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    disconnect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    delete?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    update?: FaturaUpdateWithWhereUniqueWithoutClienteInput | FaturaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: FaturaUpdateManyWithWhereWithoutClienteInput | FaturaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: FaturaScalarWhereInput | FaturaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecorrenciaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<RecorrenciaCreateWithoutClienteInput, RecorrenciaUncheckedCreateWithoutClienteInput> | RecorrenciaCreateWithoutClienteInput[] | RecorrenciaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: RecorrenciaCreateOrConnectWithoutClienteInput | RecorrenciaCreateOrConnectWithoutClienteInput[]
    upsert?: RecorrenciaUpsertWithWhereUniqueWithoutClienteInput | RecorrenciaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: RecorrenciaCreateManyClienteInputEnvelope
    set?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    disconnect?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    delete?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    connect?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    update?: RecorrenciaUpdateWithWhereUniqueWithoutClienteInput | RecorrenciaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: RecorrenciaUpdateManyWithWhereWithoutClienteInput | RecorrenciaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: RecorrenciaScalarWhereInput | RecorrenciaScalarWhereInput[]
  }

  export type FaturaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<FaturaCreateWithoutClienteInput, FaturaUncheckedCreateWithoutClienteInput> | FaturaCreateWithoutClienteInput[] | FaturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutClienteInput | FaturaCreateOrConnectWithoutClienteInput[]
    upsert?: FaturaUpsertWithWhereUniqueWithoutClienteInput | FaturaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: FaturaCreateManyClienteInputEnvelope
    set?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    disconnect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    delete?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    update?: FaturaUpdateWithWhereUniqueWithoutClienteInput | FaturaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: FaturaUpdateManyWithWhereWithoutClienteInput | FaturaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: FaturaScalarWhereInput | FaturaScalarWhereInput[]
  }

  export type RecorrenciaCreateNestedManyWithoutServicoInput = {
    create?: XOR<RecorrenciaCreateWithoutServicoInput, RecorrenciaUncheckedCreateWithoutServicoInput> | RecorrenciaCreateWithoutServicoInput[] | RecorrenciaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: RecorrenciaCreateOrConnectWithoutServicoInput | RecorrenciaCreateOrConnectWithoutServicoInput[]
    createMany?: RecorrenciaCreateManyServicoInputEnvelope
    connect?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
  }

  export type RecorrenciaUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<RecorrenciaCreateWithoutServicoInput, RecorrenciaUncheckedCreateWithoutServicoInput> | RecorrenciaCreateWithoutServicoInput[] | RecorrenciaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: RecorrenciaCreateOrConnectWithoutServicoInput | RecorrenciaCreateOrConnectWithoutServicoInput[]
    createMany?: RecorrenciaCreateManyServicoInputEnvelope
    connect?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type RecorrenciaUpdateManyWithoutServicoNestedInput = {
    create?: XOR<RecorrenciaCreateWithoutServicoInput, RecorrenciaUncheckedCreateWithoutServicoInput> | RecorrenciaCreateWithoutServicoInput[] | RecorrenciaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: RecorrenciaCreateOrConnectWithoutServicoInput | RecorrenciaCreateOrConnectWithoutServicoInput[]
    upsert?: RecorrenciaUpsertWithWhereUniqueWithoutServicoInput | RecorrenciaUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: RecorrenciaCreateManyServicoInputEnvelope
    set?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    disconnect?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    delete?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    connect?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    update?: RecorrenciaUpdateWithWhereUniqueWithoutServicoInput | RecorrenciaUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: RecorrenciaUpdateManyWithWhereWithoutServicoInput | RecorrenciaUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: RecorrenciaScalarWhereInput | RecorrenciaScalarWhereInput[]
  }

  export type RecorrenciaUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<RecorrenciaCreateWithoutServicoInput, RecorrenciaUncheckedCreateWithoutServicoInput> | RecorrenciaCreateWithoutServicoInput[] | RecorrenciaUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: RecorrenciaCreateOrConnectWithoutServicoInput | RecorrenciaCreateOrConnectWithoutServicoInput[]
    upsert?: RecorrenciaUpsertWithWhereUniqueWithoutServicoInput | RecorrenciaUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: RecorrenciaCreateManyServicoInputEnvelope
    set?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    disconnect?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    delete?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    connect?: RecorrenciaWhereUniqueInput | RecorrenciaWhereUniqueInput[]
    update?: RecorrenciaUpdateWithWhereUniqueWithoutServicoInput | RecorrenciaUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: RecorrenciaUpdateManyWithWhereWithoutServicoInput | RecorrenciaUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: RecorrenciaScalarWhereInput | RecorrenciaScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutPerfilInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput> | UsuarioCreateWithoutPerfilInput[] | UsuarioUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput | UsuarioCreateOrConnectWithoutPerfilInput[]
    createMany?: UsuarioCreateManyPerfilInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutPerfilInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput> | UsuarioCreateWithoutPerfilInput[] | UsuarioUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput | UsuarioCreateOrConnectWithoutPerfilInput[]
    createMany?: UsuarioCreateManyPerfilInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput> | UsuarioCreateWithoutPerfilInput[] | UsuarioUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput | UsuarioCreateOrConnectWithoutPerfilInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPerfilInput | UsuarioUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: UsuarioCreateManyPerfilInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPerfilInput | UsuarioUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPerfilInput | UsuarioUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput> | UsuarioCreateWithoutPerfilInput[] | UsuarioUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput | UsuarioCreateOrConnectWithoutPerfilInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPerfilInput | UsuarioUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: UsuarioCreateManyPerfilInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPerfilInput | UsuarioUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPerfilInput | UsuarioUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PerfilCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuariosInput
    connect?: PerfilWhereUniqueInput
  }

  export type FaturaCreateNestedManyWithoutUsuario_criadorInput = {
    create?: XOR<FaturaCreateWithoutUsuario_criadorInput, FaturaUncheckedCreateWithoutUsuario_criadorInput> | FaturaCreateWithoutUsuario_criadorInput[] | FaturaUncheckedCreateWithoutUsuario_criadorInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutUsuario_criadorInput | FaturaCreateOrConnectWithoutUsuario_criadorInput[]
    createMany?: FaturaCreateManyUsuario_criadorInputEnvelope
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
  }

  export type ContaPagarCreateNestedManyWithoutUsuario_lancamentoInput = {
    create?: XOR<ContaPagarCreateWithoutUsuario_lancamentoInput, ContaPagarUncheckedCreateWithoutUsuario_lancamentoInput> | ContaPagarCreateWithoutUsuario_lancamentoInput[] | ContaPagarUncheckedCreateWithoutUsuario_lancamentoInput[]
    connectOrCreate?: ContaPagarCreateOrConnectWithoutUsuario_lancamentoInput | ContaPagarCreateOrConnectWithoutUsuario_lancamentoInput[]
    createMany?: ContaPagarCreateManyUsuario_lancamentoInputEnvelope
    connect?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
  }

  export type FaturaUncheckedCreateNestedManyWithoutUsuario_criadorInput = {
    create?: XOR<FaturaCreateWithoutUsuario_criadorInput, FaturaUncheckedCreateWithoutUsuario_criadorInput> | FaturaCreateWithoutUsuario_criadorInput[] | FaturaUncheckedCreateWithoutUsuario_criadorInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutUsuario_criadorInput | FaturaCreateOrConnectWithoutUsuario_criadorInput[]
    createMany?: FaturaCreateManyUsuario_criadorInputEnvelope
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
  }

  export type ContaPagarUncheckedCreateNestedManyWithoutUsuario_lancamentoInput = {
    create?: XOR<ContaPagarCreateWithoutUsuario_lancamentoInput, ContaPagarUncheckedCreateWithoutUsuario_lancamentoInput> | ContaPagarCreateWithoutUsuario_lancamentoInput[] | ContaPagarUncheckedCreateWithoutUsuario_lancamentoInput[]
    connectOrCreate?: ContaPagarCreateOrConnectWithoutUsuario_lancamentoInput | ContaPagarCreateOrConnectWithoutUsuario_lancamentoInput[]
    createMany?: ContaPagarCreateManyUsuario_lancamentoInputEnvelope
    connect?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PerfilUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuariosInput
    upsert?: PerfilUpsertWithoutUsuariosInput
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutUsuariosInput, PerfilUpdateWithoutUsuariosInput>, PerfilUncheckedUpdateWithoutUsuariosInput>
  }

  export type FaturaUpdateManyWithoutUsuario_criadorNestedInput = {
    create?: XOR<FaturaCreateWithoutUsuario_criadorInput, FaturaUncheckedCreateWithoutUsuario_criadorInput> | FaturaCreateWithoutUsuario_criadorInput[] | FaturaUncheckedCreateWithoutUsuario_criadorInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutUsuario_criadorInput | FaturaCreateOrConnectWithoutUsuario_criadorInput[]
    upsert?: FaturaUpsertWithWhereUniqueWithoutUsuario_criadorInput | FaturaUpsertWithWhereUniqueWithoutUsuario_criadorInput[]
    createMany?: FaturaCreateManyUsuario_criadorInputEnvelope
    set?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    disconnect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    delete?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    update?: FaturaUpdateWithWhereUniqueWithoutUsuario_criadorInput | FaturaUpdateWithWhereUniqueWithoutUsuario_criadorInput[]
    updateMany?: FaturaUpdateManyWithWhereWithoutUsuario_criadorInput | FaturaUpdateManyWithWhereWithoutUsuario_criadorInput[]
    deleteMany?: FaturaScalarWhereInput | FaturaScalarWhereInput[]
  }

  export type ContaPagarUpdateManyWithoutUsuario_lancamentoNestedInput = {
    create?: XOR<ContaPagarCreateWithoutUsuario_lancamentoInput, ContaPagarUncheckedCreateWithoutUsuario_lancamentoInput> | ContaPagarCreateWithoutUsuario_lancamentoInput[] | ContaPagarUncheckedCreateWithoutUsuario_lancamentoInput[]
    connectOrCreate?: ContaPagarCreateOrConnectWithoutUsuario_lancamentoInput | ContaPagarCreateOrConnectWithoutUsuario_lancamentoInput[]
    upsert?: ContaPagarUpsertWithWhereUniqueWithoutUsuario_lancamentoInput | ContaPagarUpsertWithWhereUniqueWithoutUsuario_lancamentoInput[]
    createMany?: ContaPagarCreateManyUsuario_lancamentoInputEnvelope
    set?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    disconnect?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    delete?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    connect?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    update?: ContaPagarUpdateWithWhereUniqueWithoutUsuario_lancamentoInput | ContaPagarUpdateWithWhereUniqueWithoutUsuario_lancamentoInput[]
    updateMany?: ContaPagarUpdateManyWithWhereWithoutUsuario_lancamentoInput | ContaPagarUpdateManyWithWhereWithoutUsuario_lancamentoInput[]
    deleteMany?: ContaPagarScalarWhereInput | ContaPagarScalarWhereInput[]
  }

  export type FaturaUncheckedUpdateManyWithoutUsuario_criadorNestedInput = {
    create?: XOR<FaturaCreateWithoutUsuario_criadorInput, FaturaUncheckedCreateWithoutUsuario_criadorInput> | FaturaCreateWithoutUsuario_criadorInput[] | FaturaUncheckedCreateWithoutUsuario_criadorInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutUsuario_criadorInput | FaturaCreateOrConnectWithoutUsuario_criadorInput[]
    upsert?: FaturaUpsertWithWhereUniqueWithoutUsuario_criadorInput | FaturaUpsertWithWhereUniqueWithoutUsuario_criadorInput[]
    createMany?: FaturaCreateManyUsuario_criadorInputEnvelope
    set?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    disconnect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    delete?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    update?: FaturaUpdateWithWhereUniqueWithoutUsuario_criadorInput | FaturaUpdateWithWhereUniqueWithoutUsuario_criadorInput[]
    updateMany?: FaturaUpdateManyWithWhereWithoutUsuario_criadorInput | FaturaUpdateManyWithWhereWithoutUsuario_criadorInput[]
    deleteMany?: FaturaScalarWhereInput | FaturaScalarWhereInput[]
  }

  export type ContaPagarUncheckedUpdateManyWithoutUsuario_lancamentoNestedInput = {
    create?: XOR<ContaPagarCreateWithoutUsuario_lancamentoInput, ContaPagarUncheckedCreateWithoutUsuario_lancamentoInput> | ContaPagarCreateWithoutUsuario_lancamentoInput[] | ContaPagarUncheckedCreateWithoutUsuario_lancamentoInput[]
    connectOrCreate?: ContaPagarCreateOrConnectWithoutUsuario_lancamentoInput | ContaPagarCreateOrConnectWithoutUsuario_lancamentoInput[]
    upsert?: ContaPagarUpsertWithWhereUniqueWithoutUsuario_lancamentoInput | ContaPagarUpsertWithWhereUniqueWithoutUsuario_lancamentoInput[]
    createMany?: ContaPagarCreateManyUsuario_lancamentoInputEnvelope
    set?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    disconnect?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    delete?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    connect?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    update?: ContaPagarUpdateWithWhereUniqueWithoutUsuario_lancamentoInput | ContaPagarUpdateWithWhereUniqueWithoutUsuario_lancamentoInput[]
    updateMany?: ContaPagarUpdateManyWithWhereWithoutUsuario_lancamentoInput | ContaPagarUpdateManyWithWhereWithoutUsuario_lancamentoInput[]
    deleteMany?: ContaPagarScalarWhereInput | ContaPagarScalarWhereInput[]
  }

  export type ContaPagarCreateNestedManyWithoutParceiroInput = {
    create?: XOR<ContaPagarCreateWithoutParceiroInput, ContaPagarUncheckedCreateWithoutParceiroInput> | ContaPagarCreateWithoutParceiroInput[] | ContaPagarUncheckedCreateWithoutParceiroInput[]
    connectOrCreate?: ContaPagarCreateOrConnectWithoutParceiroInput | ContaPagarCreateOrConnectWithoutParceiroInput[]
    createMany?: ContaPagarCreateManyParceiroInputEnvelope
    connect?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
  }

  export type ContaPagarUncheckedCreateNestedManyWithoutParceiroInput = {
    create?: XOR<ContaPagarCreateWithoutParceiroInput, ContaPagarUncheckedCreateWithoutParceiroInput> | ContaPagarCreateWithoutParceiroInput[] | ContaPagarUncheckedCreateWithoutParceiroInput[]
    connectOrCreate?: ContaPagarCreateOrConnectWithoutParceiroInput | ContaPagarCreateOrConnectWithoutParceiroInput[]
    createMany?: ContaPagarCreateManyParceiroInputEnvelope
    connect?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
  }

  export type ContaPagarUpdateManyWithoutParceiroNestedInput = {
    create?: XOR<ContaPagarCreateWithoutParceiroInput, ContaPagarUncheckedCreateWithoutParceiroInput> | ContaPagarCreateWithoutParceiroInput[] | ContaPagarUncheckedCreateWithoutParceiroInput[]
    connectOrCreate?: ContaPagarCreateOrConnectWithoutParceiroInput | ContaPagarCreateOrConnectWithoutParceiroInput[]
    upsert?: ContaPagarUpsertWithWhereUniqueWithoutParceiroInput | ContaPagarUpsertWithWhereUniqueWithoutParceiroInput[]
    createMany?: ContaPagarCreateManyParceiroInputEnvelope
    set?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    disconnect?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    delete?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    connect?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    update?: ContaPagarUpdateWithWhereUniqueWithoutParceiroInput | ContaPagarUpdateWithWhereUniqueWithoutParceiroInput[]
    updateMany?: ContaPagarUpdateManyWithWhereWithoutParceiroInput | ContaPagarUpdateManyWithWhereWithoutParceiroInput[]
    deleteMany?: ContaPagarScalarWhereInput | ContaPagarScalarWhereInput[]
  }

  export type ContaPagarUncheckedUpdateManyWithoutParceiroNestedInput = {
    create?: XOR<ContaPagarCreateWithoutParceiroInput, ContaPagarUncheckedCreateWithoutParceiroInput> | ContaPagarCreateWithoutParceiroInput[] | ContaPagarUncheckedCreateWithoutParceiroInput[]
    connectOrCreate?: ContaPagarCreateOrConnectWithoutParceiroInput | ContaPagarCreateOrConnectWithoutParceiroInput[]
    upsert?: ContaPagarUpsertWithWhereUniqueWithoutParceiroInput | ContaPagarUpsertWithWhereUniqueWithoutParceiroInput[]
    createMany?: ContaPagarCreateManyParceiroInputEnvelope
    set?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    disconnect?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    delete?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    connect?: ContaPagarWhereUniqueInput | ContaPagarWhereUniqueInput[]
    update?: ContaPagarUpdateWithWhereUniqueWithoutParceiroInput | ContaPagarUpdateWithWhereUniqueWithoutParceiroInput[]
    updateMany?: ContaPagarUpdateManyWithWhereWithoutParceiroInput | ContaPagarUpdateManyWithWhereWithoutParceiroInput[]
    deleteMany?: ContaPagarScalarWhereInput | ContaPagarScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutRecorrenciasInput = {
    create?: XOR<ClienteCreateWithoutRecorrenciasInput, ClienteUncheckedCreateWithoutRecorrenciasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutRecorrenciasInput
    connect?: ClienteWhereUniqueInput
  }

  export type ServicoCreateNestedOneWithoutRecorrenciasInput = {
    create?: XOR<ServicoCreateWithoutRecorrenciasInput, ServicoUncheckedCreateWithoutRecorrenciasInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutRecorrenciasInput
    connect?: ServicoWhereUniqueInput
  }

  export type FaturaCreateNestedManyWithoutRecorrenciaInput = {
    create?: XOR<FaturaCreateWithoutRecorrenciaInput, FaturaUncheckedCreateWithoutRecorrenciaInput> | FaturaCreateWithoutRecorrenciaInput[] | FaturaUncheckedCreateWithoutRecorrenciaInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutRecorrenciaInput | FaturaCreateOrConnectWithoutRecorrenciaInput[]
    createMany?: FaturaCreateManyRecorrenciaInputEnvelope
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
  }

  export type FaturaUncheckedCreateNestedManyWithoutRecorrenciaInput = {
    create?: XOR<FaturaCreateWithoutRecorrenciaInput, FaturaUncheckedCreateWithoutRecorrenciaInput> | FaturaCreateWithoutRecorrenciaInput[] | FaturaUncheckedCreateWithoutRecorrenciaInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutRecorrenciaInput | FaturaCreateOrConnectWithoutRecorrenciaInput[]
    createMany?: FaturaCreateManyRecorrenciaInputEnvelope
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
  }

  export type EnumPeriodicidadeFieldUpdateOperationsInput = {
    set?: $Enums.Periodicidade
  }

  export type EnumStatusRecorrenciaFieldUpdateOperationsInput = {
    set?: $Enums.StatusRecorrencia
  }

  export type ClienteUpdateOneRequiredWithoutRecorrenciasNestedInput = {
    create?: XOR<ClienteCreateWithoutRecorrenciasInput, ClienteUncheckedCreateWithoutRecorrenciasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutRecorrenciasInput
    upsert?: ClienteUpsertWithoutRecorrenciasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutRecorrenciasInput, ClienteUpdateWithoutRecorrenciasInput>, ClienteUncheckedUpdateWithoutRecorrenciasInput>
  }

  export type ServicoUpdateOneRequiredWithoutRecorrenciasNestedInput = {
    create?: XOR<ServicoCreateWithoutRecorrenciasInput, ServicoUncheckedCreateWithoutRecorrenciasInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutRecorrenciasInput
    upsert?: ServicoUpsertWithoutRecorrenciasInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutRecorrenciasInput, ServicoUpdateWithoutRecorrenciasInput>, ServicoUncheckedUpdateWithoutRecorrenciasInput>
  }

  export type FaturaUpdateManyWithoutRecorrenciaNestedInput = {
    create?: XOR<FaturaCreateWithoutRecorrenciaInput, FaturaUncheckedCreateWithoutRecorrenciaInput> | FaturaCreateWithoutRecorrenciaInput[] | FaturaUncheckedCreateWithoutRecorrenciaInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutRecorrenciaInput | FaturaCreateOrConnectWithoutRecorrenciaInput[]
    upsert?: FaturaUpsertWithWhereUniqueWithoutRecorrenciaInput | FaturaUpsertWithWhereUniqueWithoutRecorrenciaInput[]
    createMany?: FaturaCreateManyRecorrenciaInputEnvelope
    set?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    disconnect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    delete?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    update?: FaturaUpdateWithWhereUniqueWithoutRecorrenciaInput | FaturaUpdateWithWhereUniqueWithoutRecorrenciaInput[]
    updateMany?: FaturaUpdateManyWithWhereWithoutRecorrenciaInput | FaturaUpdateManyWithWhereWithoutRecorrenciaInput[]
    deleteMany?: FaturaScalarWhereInput | FaturaScalarWhereInput[]
  }

  export type FaturaUncheckedUpdateManyWithoutRecorrenciaNestedInput = {
    create?: XOR<FaturaCreateWithoutRecorrenciaInput, FaturaUncheckedCreateWithoutRecorrenciaInput> | FaturaCreateWithoutRecorrenciaInput[] | FaturaUncheckedCreateWithoutRecorrenciaInput[]
    connectOrCreate?: FaturaCreateOrConnectWithoutRecorrenciaInput | FaturaCreateOrConnectWithoutRecorrenciaInput[]
    upsert?: FaturaUpsertWithWhereUniqueWithoutRecorrenciaInput | FaturaUpsertWithWhereUniqueWithoutRecorrenciaInput[]
    createMany?: FaturaCreateManyRecorrenciaInputEnvelope
    set?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    disconnect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    delete?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    connect?: FaturaWhereUniqueInput | FaturaWhereUniqueInput[]
    update?: FaturaUpdateWithWhereUniqueWithoutRecorrenciaInput | FaturaUpdateWithWhereUniqueWithoutRecorrenciaInput[]
    updateMany?: FaturaUpdateManyWithWhereWithoutRecorrenciaInput | FaturaUpdateManyWithWhereWithoutRecorrenciaInput[]
    deleteMany?: FaturaScalarWhereInput | FaturaScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutFaturasInput = {
    create?: XOR<ClienteCreateWithoutFaturasInput, ClienteUncheckedCreateWithoutFaturasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutFaturasInput
    connect?: ClienteWhereUniqueInput
  }

  export type RecorrenciaCreateNestedOneWithoutFaturasInput = {
    create?: XOR<RecorrenciaCreateWithoutFaturasInput, RecorrenciaUncheckedCreateWithoutFaturasInput>
    connectOrCreate?: RecorrenciaCreateOrConnectWithoutFaturasInput
    connect?: RecorrenciaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutFaturas_criadasInput = {
    create?: XOR<UsuarioCreateWithoutFaturas_criadasInput, UsuarioUncheckedCreateWithoutFaturas_criadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFaturas_criadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TransacaoCreateNestedManyWithoutFaturaInput = {
    create?: XOR<TransacaoCreateWithoutFaturaInput, TransacaoUncheckedCreateWithoutFaturaInput> | TransacaoCreateWithoutFaturaInput[] | TransacaoUncheckedCreateWithoutFaturaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutFaturaInput | TransacaoCreateOrConnectWithoutFaturaInput[]
    createMany?: TransacaoCreateManyFaturaInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type NotaFiscalCreateNestedOneWithoutFaturaInput = {
    create?: XOR<NotaFiscalCreateWithoutFaturaInput, NotaFiscalUncheckedCreateWithoutFaturaInput>
    connectOrCreate?: NotaFiscalCreateOrConnectWithoutFaturaInput
    connect?: NotaFiscalWhereUniqueInput
  }

  export type TransacaoUncheckedCreateNestedManyWithoutFaturaInput = {
    create?: XOR<TransacaoCreateWithoutFaturaInput, TransacaoUncheckedCreateWithoutFaturaInput> | TransacaoCreateWithoutFaturaInput[] | TransacaoUncheckedCreateWithoutFaturaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutFaturaInput | TransacaoCreateOrConnectWithoutFaturaInput[]
    createMany?: TransacaoCreateManyFaturaInputEnvelope
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
  }

  export type NotaFiscalUncheckedCreateNestedOneWithoutFaturaInput = {
    create?: XOR<NotaFiscalCreateWithoutFaturaInput, NotaFiscalUncheckedCreateWithoutFaturaInput>
    connectOrCreate?: NotaFiscalCreateOrConnectWithoutFaturaInput
    connect?: NotaFiscalWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStatusFaturaFieldUpdateOperationsInput = {
    set?: $Enums.StatusFatura
  }

  export type NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput = {
    set?: $Enums.TipoPagamentoPreferencial | null
  }

  export type ClienteUpdateOneRequiredWithoutFaturasNestedInput = {
    create?: XOR<ClienteCreateWithoutFaturasInput, ClienteUncheckedCreateWithoutFaturasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutFaturasInput
    upsert?: ClienteUpsertWithoutFaturasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutFaturasInput, ClienteUpdateWithoutFaturasInput>, ClienteUncheckedUpdateWithoutFaturasInput>
  }

  export type RecorrenciaUpdateOneWithoutFaturasNestedInput = {
    create?: XOR<RecorrenciaCreateWithoutFaturasInput, RecorrenciaUncheckedCreateWithoutFaturasInput>
    connectOrCreate?: RecorrenciaCreateOrConnectWithoutFaturasInput
    upsert?: RecorrenciaUpsertWithoutFaturasInput
    disconnect?: RecorrenciaWhereInput | boolean
    delete?: RecorrenciaWhereInput | boolean
    connect?: RecorrenciaWhereUniqueInput
    update?: XOR<XOR<RecorrenciaUpdateToOneWithWhereWithoutFaturasInput, RecorrenciaUpdateWithoutFaturasInput>, RecorrenciaUncheckedUpdateWithoutFaturasInput>
  }

  export type UsuarioUpdateOneWithoutFaturas_criadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutFaturas_criadasInput, UsuarioUncheckedCreateWithoutFaturas_criadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFaturas_criadasInput
    upsert?: UsuarioUpsertWithoutFaturas_criadasInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFaturas_criadasInput, UsuarioUpdateWithoutFaturas_criadasInput>, UsuarioUncheckedUpdateWithoutFaturas_criadasInput>
  }

  export type TransacaoUpdateManyWithoutFaturaNestedInput = {
    create?: XOR<TransacaoCreateWithoutFaturaInput, TransacaoUncheckedCreateWithoutFaturaInput> | TransacaoCreateWithoutFaturaInput[] | TransacaoUncheckedCreateWithoutFaturaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutFaturaInput | TransacaoCreateOrConnectWithoutFaturaInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutFaturaInput | TransacaoUpsertWithWhereUniqueWithoutFaturaInput[]
    createMany?: TransacaoCreateManyFaturaInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutFaturaInput | TransacaoUpdateWithWhereUniqueWithoutFaturaInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutFaturaInput | TransacaoUpdateManyWithWhereWithoutFaturaInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type NotaFiscalUpdateOneWithoutFaturaNestedInput = {
    create?: XOR<NotaFiscalCreateWithoutFaturaInput, NotaFiscalUncheckedCreateWithoutFaturaInput>
    connectOrCreate?: NotaFiscalCreateOrConnectWithoutFaturaInput
    upsert?: NotaFiscalUpsertWithoutFaturaInput
    disconnect?: NotaFiscalWhereInput | boolean
    delete?: NotaFiscalWhereInput | boolean
    connect?: NotaFiscalWhereUniqueInput
    update?: XOR<XOR<NotaFiscalUpdateToOneWithWhereWithoutFaturaInput, NotaFiscalUpdateWithoutFaturaInput>, NotaFiscalUncheckedUpdateWithoutFaturaInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransacaoUncheckedUpdateManyWithoutFaturaNestedInput = {
    create?: XOR<TransacaoCreateWithoutFaturaInput, TransacaoUncheckedCreateWithoutFaturaInput> | TransacaoCreateWithoutFaturaInput[] | TransacaoUncheckedCreateWithoutFaturaInput[]
    connectOrCreate?: TransacaoCreateOrConnectWithoutFaturaInput | TransacaoCreateOrConnectWithoutFaturaInput[]
    upsert?: TransacaoUpsertWithWhereUniqueWithoutFaturaInput | TransacaoUpsertWithWhereUniqueWithoutFaturaInput[]
    createMany?: TransacaoCreateManyFaturaInputEnvelope
    set?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    disconnect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    delete?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    connect?: TransacaoWhereUniqueInput | TransacaoWhereUniqueInput[]
    update?: TransacaoUpdateWithWhereUniqueWithoutFaturaInput | TransacaoUpdateWithWhereUniqueWithoutFaturaInput[]
    updateMany?: TransacaoUpdateManyWithWhereWithoutFaturaInput | TransacaoUpdateManyWithWhereWithoutFaturaInput[]
    deleteMany?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
  }

  export type NotaFiscalUncheckedUpdateOneWithoutFaturaNestedInput = {
    create?: XOR<NotaFiscalCreateWithoutFaturaInput, NotaFiscalUncheckedCreateWithoutFaturaInput>
    connectOrCreate?: NotaFiscalCreateOrConnectWithoutFaturaInput
    upsert?: NotaFiscalUpsertWithoutFaturaInput
    disconnect?: NotaFiscalWhereInput | boolean
    delete?: NotaFiscalWhereInput | boolean
    connect?: NotaFiscalWhereUniqueInput
    update?: XOR<XOR<NotaFiscalUpdateToOneWithWhereWithoutFaturaInput, NotaFiscalUpdateWithoutFaturaInput>, NotaFiscalUncheckedUpdateWithoutFaturaInput>
  }

  export type ParceiroCreateNestedOneWithoutContas_pagarInput = {
    create?: XOR<ParceiroCreateWithoutContas_pagarInput, ParceiroUncheckedCreateWithoutContas_pagarInput>
    connectOrCreate?: ParceiroCreateOrConnectWithoutContas_pagarInput
    connect?: ParceiroWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutContas_pagar_lancadasInput = {
    create?: XOR<UsuarioCreateWithoutContas_pagar_lancadasInput, UsuarioUncheckedCreateWithoutContas_pagar_lancadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutContas_pagar_lancadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EnumFormaPagamentoFieldUpdateOperationsInput = {
    set?: $Enums.FormaPagamento
  }

  export type EnumStatusContaPagarFieldUpdateOperationsInput = {
    set?: $Enums.StatusContaPagar
  }

  export type ParceiroUpdateOneRequiredWithoutContas_pagarNestedInput = {
    create?: XOR<ParceiroCreateWithoutContas_pagarInput, ParceiroUncheckedCreateWithoutContas_pagarInput>
    connectOrCreate?: ParceiroCreateOrConnectWithoutContas_pagarInput
    upsert?: ParceiroUpsertWithoutContas_pagarInput
    connect?: ParceiroWhereUniqueInput
    update?: XOR<XOR<ParceiroUpdateToOneWithWhereWithoutContas_pagarInput, ParceiroUpdateWithoutContas_pagarInput>, ParceiroUncheckedUpdateWithoutContas_pagarInput>
  }

  export type UsuarioUpdateOneRequiredWithoutContas_pagar_lancadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutContas_pagar_lancadasInput, UsuarioUncheckedCreateWithoutContas_pagar_lancadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutContas_pagar_lancadasInput
    upsert?: UsuarioUpsertWithoutContas_pagar_lancadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutContas_pagar_lancadasInput, UsuarioUpdateWithoutContas_pagar_lancadasInput>, UsuarioUncheckedUpdateWithoutContas_pagar_lancadasInput>
  }

  export type FaturaCreateNestedOneWithoutNota_fiscalInput = {
    create?: XOR<FaturaCreateWithoutNota_fiscalInput, FaturaUncheckedCreateWithoutNota_fiscalInput>
    connectOrCreate?: FaturaCreateOrConnectWithoutNota_fiscalInput
    connect?: FaturaWhereUniqueInput
  }

  export type EnumStatusNotaFiscalFieldUpdateOperationsInput = {
    set?: $Enums.StatusNotaFiscal
  }

  export type FaturaUpdateOneRequiredWithoutNota_fiscalNestedInput = {
    create?: XOR<FaturaCreateWithoutNota_fiscalInput, FaturaUncheckedCreateWithoutNota_fiscalInput>
    connectOrCreate?: FaturaCreateOrConnectWithoutNota_fiscalInput
    upsert?: FaturaUpsertWithoutNota_fiscalInput
    connect?: FaturaWhereUniqueInput
    update?: XOR<XOR<FaturaUpdateToOneWithWhereWithoutNota_fiscalInput, FaturaUpdateWithoutNota_fiscalInput>, FaturaUncheckedUpdateWithoutNota_fiscalInput>
  }

  export type FaturaCreateNestedOneWithoutTransacoesInput = {
    create?: XOR<FaturaCreateWithoutTransacoesInput, FaturaUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: FaturaCreateOrConnectWithoutTransacoesInput
    connect?: FaturaWhereUniqueInput
  }

  export type FaturaUpdateOneRequiredWithoutTransacoesNestedInput = {
    create?: XOR<FaturaCreateWithoutTransacoesInput, FaturaUncheckedCreateWithoutTransacoesInput>
    connectOrCreate?: FaturaCreateOrConnectWithoutTransacoesInput
    upsert?: FaturaUpsertWithoutTransacoesInput
    connect?: FaturaWhereUniqueInput
    update?: XOR<XOR<FaturaUpdateToOneWithWhereWithoutTransacoesInput, FaturaUpdateWithoutTransacoesInput>, FaturaUncheckedUpdateWithoutTransacoesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPeriodicidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Periodicidade | EnumPeriodicidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Periodicidade[] | ListEnumPeriodicidadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Periodicidade[] | ListEnumPeriodicidadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodicidadeFilter<$PrismaModel> | $Enums.Periodicidade
  }

  export type NestedEnumStatusRecorrenciaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRecorrencia | EnumStatusRecorrenciaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRecorrencia[] | ListEnumStatusRecorrenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRecorrencia[] | ListEnumStatusRecorrenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRecorrenciaFilter<$PrismaModel> | $Enums.StatusRecorrencia
  }

  export type NestedEnumPeriodicidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Periodicidade | EnumPeriodicidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Periodicidade[] | ListEnumPeriodicidadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Periodicidade[] | ListEnumPeriodicidadeFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodicidadeWithAggregatesFilter<$PrismaModel> | $Enums.Periodicidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodicidadeFilter<$PrismaModel>
    _max?: NestedEnumPeriodicidadeFilter<$PrismaModel>
  }

  export type NestedEnumStatusRecorrenciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRecorrencia | EnumStatusRecorrenciaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRecorrencia[] | ListEnumStatusRecorrenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRecorrencia[] | ListEnumStatusRecorrenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRecorrenciaWithAggregatesFilter<$PrismaModel> | $Enums.StatusRecorrencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRecorrenciaFilter<$PrismaModel>
    _max?: NestedEnumStatusRecorrenciaFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusFaturaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusFatura | EnumStatusFaturaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusFatura[] | ListEnumStatusFaturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusFatura[] | ListEnumStatusFaturaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFaturaFilter<$PrismaModel> | $Enums.StatusFatura
  }

  export type NestedEnumTipoPagamentoPreferencialNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPagamentoPreferencial | EnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> | null
    in?: $Enums.TipoPagamentoPreferencial[] | ListEnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TipoPagamentoPreferencial[] | ListEnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipoPagamentoPreferencialNullableFilter<$PrismaModel> | $Enums.TipoPagamentoPreferencial | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusFaturaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusFatura | EnumStatusFaturaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusFatura[] | ListEnumStatusFaturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusFatura[] | ListEnumStatusFaturaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFaturaWithAggregatesFilter<$PrismaModel> | $Enums.StatusFatura
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFaturaFilter<$PrismaModel>
    _max?: NestedEnumStatusFaturaFilter<$PrismaModel>
  }

  export type NestedEnumTipoPagamentoPreferencialNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPagamentoPreferencial | EnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> | null
    in?: $Enums.TipoPagamentoPreferencial[] | ListEnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TipoPagamentoPreferencial[] | ListEnumTipoPagamentoPreferencialFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipoPagamentoPreferencialNullableWithAggregatesFilter<$PrismaModel> | $Enums.TipoPagamentoPreferencial | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTipoPagamentoPreferencialNullableFilter<$PrismaModel>
    _max?: NestedEnumTipoPagamentoPreferencialNullableFilter<$PrismaModel>
  }

  export type NestedEnumFormaPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaPagamentoFilter<$PrismaModel> | $Enums.FormaPagamento
  }

  export type NestedEnumStatusContaPagarFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusContaPagar | EnumStatusContaPagarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusContaPagar[] | ListEnumStatusContaPagarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusContaPagar[] | ListEnumStatusContaPagarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusContaPagarFilter<$PrismaModel> | $Enums.StatusContaPagar
  }

  export type NestedEnumFormaPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormaPagamento | EnumFormaPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormaPagamento[] | ListEnumFormaPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumFormaPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.FormaPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormaPagamentoFilter<$PrismaModel>
    _max?: NestedEnumFormaPagamentoFilter<$PrismaModel>
  }

  export type NestedEnumStatusContaPagarWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusContaPagar | EnumStatusContaPagarFieldRefInput<$PrismaModel>
    in?: $Enums.StatusContaPagar[] | ListEnumStatusContaPagarFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusContaPagar[] | ListEnumStatusContaPagarFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusContaPagarWithAggregatesFilter<$PrismaModel> | $Enums.StatusContaPagar
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusContaPagarFilter<$PrismaModel>
    _max?: NestedEnumStatusContaPagarFilter<$PrismaModel>
  }

  export type NestedEnumStatusNotaFiscalFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusNotaFiscal | EnumStatusNotaFiscalFieldRefInput<$PrismaModel>
    in?: $Enums.StatusNotaFiscal[] | ListEnumStatusNotaFiscalFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusNotaFiscal[] | ListEnumStatusNotaFiscalFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusNotaFiscalFilter<$PrismaModel> | $Enums.StatusNotaFiscal
  }

  export type NestedEnumStatusNotaFiscalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusNotaFiscal | EnumStatusNotaFiscalFieldRefInput<$PrismaModel>
    in?: $Enums.StatusNotaFiscal[] | ListEnumStatusNotaFiscalFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusNotaFiscal[] | ListEnumStatusNotaFiscalFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusNotaFiscalWithAggregatesFilter<$PrismaModel> | $Enums.StatusNotaFiscal
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusNotaFiscalFilter<$PrismaModel>
    _max?: NestedEnumStatusNotaFiscalFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RecorrenciaCreateWithoutClienteInput = {
    valor_cobrado: Decimal | DecimalJsLike | number | string
    periodicidade: $Enums.Periodicidade
    dia_vencimento: number
    status: $Enums.StatusRecorrencia
    servico: ServicoCreateNestedOneWithoutRecorrenciasInput
    faturas?: FaturaCreateNestedManyWithoutRecorrenciaInput
  }

  export type RecorrenciaUncheckedCreateWithoutClienteInput = {
    id?: number
    id_servico: number
    valor_cobrado: Decimal | DecimalJsLike | number | string
    periodicidade: $Enums.Periodicidade
    dia_vencimento: number
    status: $Enums.StatusRecorrencia
    faturas?: FaturaUncheckedCreateNestedManyWithoutRecorrenciaInput
  }

  export type RecorrenciaCreateOrConnectWithoutClienteInput = {
    where: RecorrenciaWhereUniqueInput
    create: XOR<RecorrenciaCreateWithoutClienteInput, RecorrenciaUncheckedCreateWithoutClienteInput>
  }

  export type RecorrenciaCreateManyClienteInputEnvelope = {
    data: RecorrenciaCreateManyClienteInput | RecorrenciaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type FaturaCreateWithoutClienteInput = {
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
    recorrencia?: RecorrenciaCreateNestedOneWithoutFaturasInput
    usuario_criador?: UsuarioCreateNestedOneWithoutFaturas_criadasInput
    transacoes?: TransacaoCreateNestedManyWithoutFaturaInput
    nota_fiscal?: NotaFiscalCreateNestedOneWithoutFaturaInput
  }

  export type FaturaUncheckedCreateWithoutClienteInput = {
    id?: number
    id_recorrencia?: number | null
    id_usuario_criador?: number | null
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutFaturaInput
    nota_fiscal?: NotaFiscalUncheckedCreateNestedOneWithoutFaturaInput
  }

  export type FaturaCreateOrConnectWithoutClienteInput = {
    where: FaturaWhereUniqueInput
    create: XOR<FaturaCreateWithoutClienteInput, FaturaUncheckedCreateWithoutClienteInput>
  }

  export type FaturaCreateManyClienteInputEnvelope = {
    data: FaturaCreateManyClienteInput | FaturaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type RecorrenciaUpsertWithWhereUniqueWithoutClienteInput = {
    where: RecorrenciaWhereUniqueInput
    update: XOR<RecorrenciaUpdateWithoutClienteInput, RecorrenciaUncheckedUpdateWithoutClienteInput>
    create: XOR<RecorrenciaCreateWithoutClienteInput, RecorrenciaUncheckedCreateWithoutClienteInput>
  }

  export type RecorrenciaUpdateWithWhereUniqueWithoutClienteInput = {
    where: RecorrenciaWhereUniqueInput
    data: XOR<RecorrenciaUpdateWithoutClienteInput, RecorrenciaUncheckedUpdateWithoutClienteInput>
  }

  export type RecorrenciaUpdateManyWithWhereWithoutClienteInput = {
    where: RecorrenciaScalarWhereInput
    data: XOR<RecorrenciaUpdateManyMutationInput, RecorrenciaUncheckedUpdateManyWithoutClienteInput>
  }

  export type RecorrenciaScalarWhereInput = {
    AND?: RecorrenciaScalarWhereInput | RecorrenciaScalarWhereInput[]
    OR?: RecorrenciaScalarWhereInput[]
    NOT?: RecorrenciaScalarWhereInput | RecorrenciaScalarWhereInput[]
    id?: IntFilter<"Recorrencia"> | number
    id_cliente?: IntFilter<"Recorrencia"> | number
    id_servico?: IntFilter<"Recorrencia"> | number
    valor_cobrado?: DecimalFilter<"Recorrencia"> | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFilter<"Recorrencia"> | $Enums.Periodicidade
    dia_vencimento?: IntFilter<"Recorrencia"> | number
    status?: EnumStatusRecorrenciaFilter<"Recorrencia"> | $Enums.StatusRecorrencia
  }

  export type FaturaUpsertWithWhereUniqueWithoutClienteInput = {
    where: FaturaWhereUniqueInput
    update: XOR<FaturaUpdateWithoutClienteInput, FaturaUncheckedUpdateWithoutClienteInput>
    create: XOR<FaturaCreateWithoutClienteInput, FaturaUncheckedCreateWithoutClienteInput>
  }

  export type FaturaUpdateWithWhereUniqueWithoutClienteInput = {
    where: FaturaWhereUniqueInput
    data: XOR<FaturaUpdateWithoutClienteInput, FaturaUncheckedUpdateWithoutClienteInput>
  }

  export type FaturaUpdateManyWithWhereWithoutClienteInput = {
    where: FaturaScalarWhereInput
    data: XOR<FaturaUpdateManyMutationInput, FaturaUncheckedUpdateManyWithoutClienteInput>
  }

  export type FaturaScalarWhereInput = {
    AND?: FaturaScalarWhereInput | FaturaScalarWhereInput[]
    OR?: FaturaScalarWhereInput[]
    NOT?: FaturaScalarWhereInput | FaturaScalarWhereInput[]
    id?: IntFilter<"Fatura"> | number
    id_cliente?: IntFilter<"Fatura"> | number
    id_recorrencia?: IntNullableFilter<"Fatura"> | number | null
    id_usuario_criador?: IntNullableFilter<"Fatura"> | number | null
    valor_total?: DecimalFilter<"Fatura"> | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFilter<"Fatura"> | Date | string
    data_pagamento?: DateTimeNullableFilter<"Fatura"> | Date | string | null
    status?: EnumStatusFaturaFilter<"Fatura"> | $Enums.StatusFatura
    tipo_pagamento_preferencial?: EnumTipoPagamentoPreferencialNullableFilter<"Fatura"> | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: StringNullableFilter<"Fatura"> | string | null
    linha_digitavel_boleto?: StringNullableFilter<"Fatura"> | string | null
    link_qr_code_pix?: StringNullableFilter<"Fatura"> | string | null
  }

  export type RecorrenciaCreateWithoutServicoInput = {
    valor_cobrado: Decimal | DecimalJsLike | number | string
    periodicidade: $Enums.Periodicidade
    dia_vencimento: number
    status: $Enums.StatusRecorrencia
    cliente: ClienteCreateNestedOneWithoutRecorrenciasInput
    faturas?: FaturaCreateNestedManyWithoutRecorrenciaInput
  }

  export type RecorrenciaUncheckedCreateWithoutServicoInput = {
    id?: number
    id_cliente: number
    valor_cobrado: Decimal | DecimalJsLike | number | string
    periodicidade: $Enums.Periodicidade
    dia_vencimento: number
    status: $Enums.StatusRecorrencia
    faturas?: FaturaUncheckedCreateNestedManyWithoutRecorrenciaInput
  }

  export type RecorrenciaCreateOrConnectWithoutServicoInput = {
    where: RecorrenciaWhereUniqueInput
    create: XOR<RecorrenciaCreateWithoutServicoInput, RecorrenciaUncheckedCreateWithoutServicoInput>
  }

  export type RecorrenciaCreateManyServicoInputEnvelope = {
    data: RecorrenciaCreateManyServicoInput | RecorrenciaCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type RecorrenciaUpsertWithWhereUniqueWithoutServicoInput = {
    where: RecorrenciaWhereUniqueInput
    update: XOR<RecorrenciaUpdateWithoutServicoInput, RecorrenciaUncheckedUpdateWithoutServicoInput>
    create: XOR<RecorrenciaCreateWithoutServicoInput, RecorrenciaUncheckedCreateWithoutServicoInput>
  }

  export type RecorrenciaUpdateWithWhereUniqueWithoutServicoInput = {
    where: RecorrenciaWhereUniqueInput
    data: XOR<RecorrenciaUpdateWithoutServicoInput, RecorrenciaUncheckedUpdateWithoutServicoInput>
  }

  export type RecorrenciaUpdateManyWithWhereWithoutServicoInput = {
    where: RecorrenciaScalarWhereInput
    data: XOR<RecorrenciaUpdateManyMutationInput, RecorrenciaUncheckedUpdateManyWithoutServicoInput>
  }

  export type UsuarioCreateWithoutPerfilInput = {
    nome: string
    email: string
    senha_hash: string
    ativo: boolean
    faturas_criadas?: FaturaCreateNestedManyWithoutUsuario_criadorInput
    contas_pagar_lancadas?: ContaPagarCreateNestedManyWithoutUsuario_lancamentoInput
  }

  export type UsuarioUncheckedCreateWithoutPerfilInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    ativo: boolean
    faturas_criadas?: FaturaUncheckedCreateNestedManyWithoutUsuario_criadorInput
    contas_pagar_lancadas?: ContaPagarUncheckedCreateNestedManyWithoutUsuario_lancamentoInput
  }

  export type UsuarioCreateOrConnectWithoutPerfilInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
  }

  export type UsuarioCreateManyPerfilInputEnvelope = {
    data: UsuarioCreateManyPerfilInput | UsuarioCreateManyPerfilInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutPerfilInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutPerfilInput, UsuarioUncheckedUpdateWithoutPerfilInput>
    create: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutPerfilInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutPerfilInput, UsuarioUncheckedUpdateWithoutPerfilInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutPerfilInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutPerfilInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    id_perfil?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha_hash?: StringFilter<"Usuario"> | string
    ativo?: BoolFilter<"Usuario"> | boolean
  }

  export type PerfilCreateWithoutUsuariosInput = {
    nome: string
    permissoes: string
  }

  export type PerfilUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nome: string
    permissoes: string
  }

  export type PerfilCreateOrConnectWithoutUsuariosInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
  }

  export type FaturaCreateWithoutUsuario_criadorInput = {
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
    cliente: ClienteCreateNestedOneWithoutFaturasInput
    recorrencia?: RecorrenciaCreateNestedOneWithoutFaturasInput
    transacoes?: TransacaoCreateNestedManyWithoutFaturaInput
    nota_fiscal?: NotaFiscalCreateNestedOneWithoutFaturaInput
  }

  export type FaturaUncheckedCreateWithoutUsuario_criadorInput = {
    id?: number
    id_cliente: number
    id_recorrencia?: number | null
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutFaturaInput
    nota_fiscal?: NotaFiscalUncheckedCreateNestedOneWithoutFaturaInput
  }

  export type FaturaCreateOrConnectWithoutUsuario_criadorInput = {
    where: FaturaWhereUniqueInput
    create: XOR<FaturaCreateWithoutUsuario_criadorInput, FaturaUncheckedCreateWithoutUsuario_criadorInput>
  }

  export type FaturaCreateManyUsuario_criadorInputEnvelope = {
    data: FaturaCreateManyUsuario_criadorInput | FaturaCreateManyUsuario_criadorInput[]
    skipDuplicates?: boolean
  }

  export type ContaPagarCreateWithoutUsuario_lancamentoInput = {
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    forma_pagamento: $Enums.FormaPagamento
    status: $Enums.StatusContaPagar
    parceiro: ParceiroCreateNestedOneWithoutContas_pagarInput
  }

  export type ContaPagarUncheckedCreateWithoutUsuario_lancamentoInput = {
    id?: number
    id_parceiro: number
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    forma_pagamento: $Enums.FormaPagamento
    status: $Enums.StatusContaPagar
  }

  export type ContaPagarCreateOrConnectWithoutUsuario_lancamentoInput = {
    where: ContaPagarWhereUniqueInput
    create: XOR<ContaPagarCreateWithoutUsuario_lancamentoInput, ContaPagarUncheckedCreateWithoutUsuario_lancamentoInput>
  }

  export type ContaPagarCreateManyUsuario_lancamentoInputEnvelope = {
    data: ContaPagarCreateManyUsuario_lancamentoInput | ContaPagarCreateManyUsuario_lancamentoInput[]
    skipDuplicates?: boolean
  }

  export type PerfilUpsertWithoutUsuariosInput = {
    update: XOR<PerfilUpdateWithoutUsuariosInput, PerfilUncheckedUpdateWithoutUsuariosInput>
    create: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutUsuariosInput, PerfilUncheckedUpdateWithoutUsuariosInput>
  }

  export type PerfilUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    permissoes?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    permissoes?: StringFieldUpdateOperationsInput | string
  }

  export type FaturaUpsertWithWhereUniqueWithoutUsuario_criadorInput = {
    where: FaturaWhereUniqueInput
    update: XOR<FaturaUpdateWithoutUsuario_criadorInput, FaturaUncheckedUpdateWithoutUsuario_criadorInput>
    create: XOR<FaturaCreateWithoutUsuario_criadorInput, FaturaUncheckedCreateWithoutUsuario_criadorInput>
  }

  export type FaturaUpdateWithWhereUniqueWithoutUsuario_criadorInput = {
    where: FaturaWhereUniqueInput
    data: XOR<FaturaUpdateWithoutUsuario_criadorInput, FaturaUncheckedUpdateWithoutUsuario_criadorInput>
  }

  export type FaturaUpdateManyWithWhereWithoutUsuario_criadorInput = {
    where: FaturaScalarWhereInput
    data: XOR<FaturaUpdateManyMutationInput, FaturaUncheckedUpdateManyWithoutUsuario_criadorInput>
  }

  export type ContaPagarUpsertWithWhereUniqueWithoutUsuario_lancamentoInput = {
    where: ContaPagarWhereUniqueInput
    update: XOR<ContaPagarUpdateWithoutUsuario_lancamentoInput, ContaPagarUncheckedUpdateWithoutUsuario_lancamentoInput>
    create: XOR<ContaPagarCreateWithoutUsuario_lancamentoInput, ContaPagarUncheckedCreateWithoutUsuario_lancamentoInput>
  }

  export type ContaPagarUpdateWithWhereUniqueWithoutUsuario_lancamentoInput = {
    where: ContaPagarWhereUniqueInput
    data: XOR<ContaPagarUpdateWithoutUsuario_lancamentoInput, ContaPagarUncheckedUpdateWithoutUsuario_lancamentoInput>
  }

  export type ContaPagarUpdateManyWithWhereWithoutUsuario_lancamentoInput = {
    where: ContaPagarScalarWhereInput
    data: XOR<ContaPagarUpdateManyMutationInput, ContaPagarUncheckedUpdateManyWithoutUsuario_lancamentoInput>
  }

  export type ContaPagarScalarWhereInput = {
    AND?: ContaPagarScalarWhereInput | ContaPagarScalarWhereInput[]
    OR?: ContaPagarScalarWhereInput[]
    NOT?: ContaPagarScalarWhereInput | ContaPagarScalarWhereInput[]
    id?: IntFilter<"ContaPagar"> | number
    id_parceiro?: IntFilter<"ContaPagar"> | number
    id_usuario_lancamento?: IntFilter<"ContaPagar"> | number
    descricao?: StringFilter<"ContaPagar"> | string
    valor?: DecimalFilter<"ContaPagar"> | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFilter<"ContaPagar"> | Date | string
    data_pagamento?: DateTimeNullableFilter<"ContaPagar"> | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFilter<"ContaPagar"> | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFilter<"ContaPagar"> | $Enums.StatusContaPagar
  }

  export type ContaPagarCreateWithoutParceiroInput = {
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    forma_pagamento: $Enums.FormaPagamento
    status: $Enums.StatusContaPagar
    usuario_lancamento: UsuarioCreateNestedOneWithoutContas_pagar_lancadasInput
  }

  export type ContaPagarUncheckedCreateWithoutParceiroInput = {
    id?: number
    id_usuario_lancamento: number
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    forma_pagamento: $Enums.FormaPagamento
    status: $Enums.StatusContaPagar
  }

  export type ContaPagarCreateOrConnectWithoutParceiroInput = {
    where: ContaPagarWhereUniqueInput
    create: XOR<ContaPagarCreateWithoutParceiroInput, ContaPagarUncheckedCreateWithoutParceiroInput>
  }

  export type ContaPagarCreateManyParceiroInputEnvelope = {
    data: ContaPagarCreateManyParceiroInput | ContaPagarCreateManyParceiroInput[]
    skipDuplicates?: boolean
  }

  export type ContaPagarUpsertWithWhereUniqueWithoutParceiroInput = {
    where: ContaPagarWhereUniqueInput
    update: XOR<ContaPagarUpdateWithoutParceiroInput, ContaPagarUncheckedUpdateWithoutParceiroInput>
    create: XOR<ContaPagarCreateWithoutParceiroInput, ContaPagarUncheckedCreateWithoutParceiroInput>
  }

  export type ContaPagarUpdateWithWhereUniqueWithoutParceiroInput = {
    where: ContaPagarWhereUniqueInput
    data: XOR<ContaPagarUpdateWithoutParceiroInput, ContaPagarUncheckedUpdateWithoutParceiroInput>
  }

  export type ContaPagarUpdateManyWithWhereWithoutParceiroInput = {
    where: ContaPagarScalarWhereInput
    data: XOR<ContaPagarUpdateManyMutationInput, ContaPagarUncheckedUpdateManyWithoutParceiroInput>
  }

  export type ClienteCreateWithoutRecorrenciasInput = {
    nome_razao_social: string
    cpf_cnpj: string
    email: string
    telefone: string
    endereco_completo: string
    faturas?: FaturaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutRecorrenciasInput = {
    id?: number
    nome_razao_social: string
    cpf_cnpj: string
    email: string
    telefone: string
    endereco_completo: string
    faturas?: FaturaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutRecorrenciasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutRecorrenciasInput, ClienteUncheckedCreateWithoutRecorrenciasInput>
  }

  export type ServicoCreateWithoutRecorrenciasInput = {
    nome: string
    descricao?: string | null
    valor_padrao: Decimal | DecimalJsLike | number | string
  }

  export type ServicoUncheckedCreateWithoutRecorrenciasInput = {
    id?: number
    nome: string
    descricao?: string | null
    valor_padrao: Decimal | DecimalJsLike | number | string
  }

  export type ServicoCreateOrConnectWithoutRecorrenciasInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutRecorrenciasInput, ServicoUncheckedCreateWithoutRecorrenciasInput>
  }

  export type FaturaCreateWithoutRecorrenciaInput = {
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
    cliente: ClienteCreateNestedOneWithoutFaturasInput
    usuario_criador?: UsuarioCreateNestedOneWithoutFaturas_criadasInput
    transacoes?: TransacaoCreateNestedManyWithoutFaturaInput
    nota_fiscal?: NotaFiscalCreateNestedOneWithoutFaturaInput
  }

  export type FaturaUncheckedCreateWithoutRecorrenciaInput = {
    id?: number
    id_cliente: number
    id_usuario_criador?: number | null
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutFaturaInput
    nota_fiscal?: NotaFiscalUncheckedCreateNestedOneWithoutFaturaInput
  }

  export type FaturaCreateOrConnectWithoutRecorrenciaInput = {
    where: FaturaWhereUniqueInput
    create: XOR<FaturaCreateWithoutRecorrenciaInput, FaturaUncheckedCreateWithoutRecorrenciaInput>
  }

  export type FaturaCreateManyRecorrenciaInputEnvelope = {
    data: FaturaCreateManyRecorrenciaInput | FaturaCreateManyRecorrenciaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutRecorrenciasInput = {
    update: XOR<ClienteUpdateWithoutRecorrenciasInput, ClienteUncheckedUpdateWithoutRecorrenciasInput>
    create: XOR<ClienteCreateWithoutRecorrenciasInput, ClienteUncheckedCreateWithoutRecorrenciasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutRecorrenciasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutRecorrenciasInput, ClienteUncheckedUpdateWithoutRecorrenciasInput>
  }

  export type ClienteUpdateWithoutRecorrenciasInput = {
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_completo?: StringFieldUpdateOperationsInput | string
    faturas?: FaturaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutRecorrenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_completo?: StringFieldUpdateOperationsInput | string
    faturas?: FaturaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ServicoUpsertWithoutRecorrenciasInput = {
    update: XOR<ServicoUpdateWithoutRecorrenciasInput, ServicoUncheckedUpdateWithoutRecorrenciasInput>
    create: XOR<ServicoCreateWithoutRecorrenciasInput, ServicoUncheckedCreateWithoutRecorrenciasInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutRecorrenciasInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutRecorrenciasInput, ServicoUncheckedUpdateWithoutRecorrenciasInput>
  }

  export type ServicoUpdateWithoutRecorrenciasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_padrao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ServicoUncheckedUpdateWithoutRecorrenciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_padrao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FaturaUpsertWithWhereUniqueWithoutRecorrenciaInput = {
    where: FaturaWhereUniqueInput
    update: XOR<FaturaUpdateWithoutRecorrenciaInput, FaturaUncheckedUpdateWithoutRecorrenciaInput>
    create: XOR<FaturaCreateWithoutRecorrenciaInput, FaturaUncheckedCreateWithoutRecorrenciaInput>
  }

  export type FaturaUpdateWithWhereUniqueWithoutRecorrenciaInput = {
    where: FaturaWhereUniqueInput
    data: XOR<FaturaUpdateWithoutRecorrenciaInput, FaturaUncheckedUpdateWithoutRecorrenciaInput>
  }

  export type FaturaUpdateManyWithWhereWithoutRecorrenciaInput = {
    where: FaturaScalarWhereInput
    data: XOR<FaturaUpdateManyMutationInput, FaturaUncheckedUpdateManyWithoutRecorrenciaInput>
  }

  export type ClienteCreateWithoutFaturasInput = {
    nome_razao_social: string
    cpf_cnpj: string
    email: string
    telefone: string
    endereco_completo: string
    recorrencias?: RecorrenciaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutFaturasInput = {
    id?: number
    nome_razao_social: string
    cpf_cnpj: string
    email: string
    telefone: string
    endereco_completo: string
    recorrencias?: RecorrenciaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutFaturasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutFaturasInput, ClienteUncheckedCreateWithoutFaturasInput>
  }

  export type RecorrenciaCreateWithoutFaturasInput = {
    valor_cobrado: Decimal | DecimalJsLike | number | string
    periodicidade: $Enums.Periodicidade
    dia_vencimento: number
    status: $Enums.StatusRecorrencia
    cliente: ClienteCreateNestedOneWithoutRecorrenciasInput
    servico: ServicoCreateNestedOneWithoutRecorrenciasInput
  }

  export type RecorrenciaUncheckedCreateWithoutFaturasInput = {
    id?: number
    id_cliente: number
    id_servico: number
    valor_cobrado: Decimal | DecimalJsLike | number | string
    periodicidade: $Enums.Periodicidade
    dia_vencimento: number
    status: $Enums.StatusRecorrencia
  }

  export type RecorrenciaCreateOrConnectWithoutFaturasInput = {
    where: RecorrenciaWhereUniqueInput
    create: XOR<RecorrenciaCreateWithoutFaturasInput, RecorrenciaUncheckedCreateWithoutFaturasInput>
  }

  export type UsuarioCreateWithoutFaturas_criadasInput = {
    nome: string
    email: string
    senha_hash: string
    ativo: boolean
    perfil: PerfilCreateNestedOneWithoutUsuariosInput
    contas_pagar_lancadas?: ContaPagarCreateNestedManyWithoutUsuario_lancamentoInput
  }

  export type UsuarioUncheckedCreateWithoutFaturas_criadasInput = {
    id?: number
    id_perfil: number
    nome: string
    email: string
    senha_hash: string
    ativo: boolean
    contas_pagar_lancadas?: ContaPagarUncheckedCreateNestedManyWithoutUsuario_lancamentoInput
  }

  export type UsuarioCreateOrConnectWithoutFaturas_criadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFaturas_criadasInput, UsuarioUncheckedCreateWithoutFaturas_criadasInput>
  }

  export type TransacaoCreateWithoutFaturaInput = {
    data_hora: Date | string
    evento: string
    tipo_notificacao_api?: string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransacaoUncheckedCreateWithoutFaturaInput = {
    id?: number
    data_hora: Date | string
    evento: string
    tipo_notificacao_api?: string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransacaoCreateOrConnectWithoutFaturaInput = {
    where: TransacaoWhereUniqueInput
    create: XOR<TransacaoCreateWithoutFaturaInput, TransacaoUncheckedCreateWithoutFaturaInput>
  }

  export type TransacaoCreateManyFaturaInputEnvelope = {
    data: TransacaoCreateManyFaturaInput | TransacaoCreateManyFaturaInput[]
    skipDuplicates?: boolean
  }

  export type NotaFiscalCreateWithoutFaturaInput = {
    numero: number
    data_emissao: Date | string
    valor_total: Decimal | DecimalJsLike | number | string
    status_api: $Enums.StatusNotaFiscal
    id_externo_api?: string | null
    link_xml?: string | null
    link_pdf?: string | null
  }

  export type NotaFiscalUncheckedCreateWithoutFaturaInput = {
    id?: number
    numero: number
    data_emissao: Date | string
    valor_total: Decimal | DecimalJsLike | number | string
    status_api: $Enums.StatusNotaFiscal
    id_externo_api?: string | null
    link_xml?: string | null
    link_pdf?: string | null
  }

  export type NotaFiscalCreateOrConnectWithoutFaturaInput = {
    where: NotaFiscalWhereUniqueInput
    create: XOR<NotaFiscalCreateWithoutFaturaInput, NotaFiscalUncheckedCreateWithoutFaturaInput>
  }

  export type ClienteUpsertWithoutFaturasInput = {
    update: XOR<ClienteUpdateWithoutFaturasInput, ClienteUncheckedUpdateWithoutFaturasInput>
    create: XOR<ClienteCreateWithoutFaturasInput, ClienteUncheckedCreateWithoutFaturasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutFaturasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutFaturasInput, ClienteUncheckedUpdateWithoutFaturasInput>
  }

  export type ClienteUpdateWithoutFaturasInput = {
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_completo?: StringFieldUpdateOperationsInput | string
    recorrencias?: RecorrenciaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutFaturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    endereco_completo?: StringFieldUpdateOperationsInput | string
    recorrencias?: RecorrenciaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type RecorrenciaUpsertWithoutFaturasInput = {
    update: XOR<RecorrenciaUpdateWithoutFaturasInput, RecorrenciaUncheckedUpdateWithoutFaturasInput>
    create: XOR<RecorrenciaCreateWithoutFaturasInput, RecorrenciaUncheckedCreateWithoutFaturasInput>
    where?: RecorrenciaWhereInput
  }

  export type RecorrenciaUpdateToOneWithWhereWithoutFaturasInput = {
    where?: RecorrenciaWhereInput
    data: XOR<RecorrenciaUpdateWithoutFaturasInput, RecorrenciaUncheckedUpdateWithoutFaturasInput>
  }

  export type RecorrenciaUpdateWithoutFaturasInput = {
    valor_cobrado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFieldUpdateOperationsInput | $Enums.Periodicidade
    dia_vencimento?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRecorrenciaFieldUpdateOperationsInput | $Enums.StatusRecorrencia
    cliente?: ClienteUpdateOneRequiredWithoutRecorrenciasNestedInput
    servico?: ServicoUpdateOneRequiredWithoutRecorrenciasNestedInput
  }

  export type RecorrenciaUncheckedUpdateWithoutFaturasInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_servico?: IntFieldUpdateOperationsInput | number
    valor_cobrado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFieldUpdateOperationsInput | $Enums.Periodicidade
    dia_vencimento?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRecorrenciaFieldUpdateOperationsInput | $Enums.StatusRecorrencia
  }

  export type UsuarioUpsertWithoutFaturas_criadasInput = {
    update: XOR<UsuarioUpdateWithoutFaturas_criadasInput, UsuarioUncheckedUpdateWithoutFaturas_criadasInput>
    create: XOR<UsuarioCreateWithoutFaturas_criadasInput, UsuarioUncheckedCreateWithoutFaturas_criadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFaturas_criadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFaturas_criadasInput, UsuarioUncheckedUpdateWithoutFaturas_criadasInput>
  }

  export type UsuarioUpdateWithoutFaturas_criadasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    perfil?: PerfilUpdateOneRequiredWithoutUsuariosNestedInput
    contas_pagar_lancadas?: ContaPagarUpdateManyWithoutUsuario_lancamentoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFaturas_criadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_perfil?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    contas_pagar_lancadas?: ContaPagarUncheckedUpdateManyWithoutUsuario_lancamentoNestedInput
  }

  export type TransacaoUpsertWithWhereUniqueWithoutFaturaInput = {
    where: TransacaoWhereUniqueInput
    update: XOR<TransacaoUpdateWithoutFaturaInput, TransacaoUncheckedUpdateWithoutFaturaInput>
    create: XOR<TransacaoCreateWithoutFaturaInput, TransacaoUncheckedCreateWithoutFaturaInput>
  }

  export type TransacaoUpdateWithWhereUniqueWithoutFaturaInput = {
    where: TransacaoWhereUniqueInput
    data: XOR<TransacaoUpdateWithoutFaturaInput, TransacaoUncheckedUpdateWithoutFaturaInput>
  }

  export type TransacaoUpdateManyWithWhereWithoutFaturaInput = {
    where: TransacaoScalarWhereInput
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyWithoutFaturaInput>
  }

  export type TransacaoScalarWhereInput = {
    AND?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
    OR?: TransacaoScalarWhereInput[]
    NOT?: TransacaoScalarWhereInput | TransacaoScalarWhereInput[]
    id?: IntFilter<"Transacao"> | number
    id_fatura?: IntFilter<"Transacao"> | number
    data_hora?: DateTimeFilter<"Transacao"> | Date | string
    evento?: StringFilter<"Transacao"> | string
    tipo_notificacao_api?: StringNullableFilter<"Transacao"> | string | null
    dados_resposta?: JsonNullableFilter<"Transacao">
  }

  export type NotaFiscalUpsertWithoutFaturaInput = {
    update: XOR<NotaFiscalUpdateWithoutFaturaInput, NotaFiscalUncheckedUpdateWithoutFaturaInput>
    create: XOR<NotaFiscalCreateWithoutFaturaInput, NotaFiscalUncheckedCreateWithoutFaturaInput>
    where?: NotaFiscalWhereInput
  }

  export type NotaFiscalUpdateToOneWithWhereWithoutFaturaInput = {
    where?: NotaFiscalWhereInput
    data: XOR<NotaFiscalUpdateWithoutFaturaInput, NotaFiscalUncheckedUpdateWithoutFaturaInput>
  }

  export type NotaFiscalUpdateWithoutFaturaInput = {
    numero?: IntFieldUpdateOperationsInput | number
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_api?: EnumStatusNotaFiscalFieldUpdateOperationsInput | $Enums.StatusNotaFiscal
    id_externo_api?: NullableStringFieldUpdateOperationsInput | string | null
    link_xml?: NullableStringFieldUpdateOperationsInput | string | null
    link_pdf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotaFiscalUncheckedUpdateWithoutFaturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    data_emissao?: DateTimeFieldUpdateOperationsInput | Date | string
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status_api?: EnumStatusNotaFiscalFieldUpdateOperationsInput | $Enums.StatusNotaFiscal
    id_externo_api?: NullableStringFieldUpdateOperationsInput | string | null
    link_xml?: NullableStringFieldUpdateOperationsInput | string | null
    link_pdf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParceiroCreateWithoutContas_pagarInput = {
    nome_razao_social: string
    cpf_cnpj: string
    email_contato: string
    dados_bancarios_pix?: string | null
  }

  export type ParceiroUncheckedCreateWithoutContas_pagarInput = {
    id?: number
    nome_razao_social: string
    cpf_cnpj: string
    email_contato: string
    dados_bancarios_pix?: string | null
  }

  export type ParceiroCreateOrConnectWithoutContas_pagarInput = {
    where: ParceiroWhereUniqueInput
    create: XOR<ParceiroCreateWithoutContas_pagarInput, ParceiroUncheckedCreateWithoutContas_pagarInput>
  }

  export type UsuarioCreateWithoutContas_pagar_lancadasInput = {
    nome: string
    email: string
    senha_hash: string
    ativo: boolean
    perfil: PerfilCreateNestedOneWithoutUsuariosInput
    faturas_criadas?: FaturaCreateNestedManyWithoutUsuario_criadorInput
  }

  export type UsuarioUncheckedCreateWithoutContas_pagar_lancadasInput = {
    id?: number
    id_perfil: number
    nome: string
    email: string
    senha_hash: string
    ativo: boolean
    faturas_criadas?: FaturaUncheckedCreateNestedManyWithoutUsuario_criadorInput
  }

  export type UsuarioCreateOrConnectWithoutContas_pagar_lancadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutContas_pagar_lancadasInput, UsuarioUncheckedCreateWithoutContas_pagar_lancadasInput>
  }

  export type ParceiroUpsertWithoutContas_pagarInput = {
    update: XOR<ParceiroUpdateWithoutContas_pagarInput, ParceiroUncheckedUpdateWithoutContas_pagarInput>
    create: XOR<ParceiroCreateWithoutContas_pagarInput, ParceiroUncheckedCreateWithoutContas_pagarInput>
    where?: ParceiroWhereInput
  }

  export type ParceiroUpdateToOneWithWhereWithoutContas_pagarInput = {
    where?: ParceiroWhereInput
    data: XOR<ParceiroUpdateWithoutContas_pagarInput, ParceiroUncheckedUpdateWithoutContas_pagarInput>
  }

  export type ParceiroUpdateWithoutContas_pagarInput = {
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email_contato?: StringFieldUpdateOperationsInput | string
    dados_bancarios_pix?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParceiroUncheckedUpdateWithoutContas_pagarInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome_razao_social?: StringFieldUpdateOperationsInput | string
    cpf_cnpj?: StringFieldUpdateOperationsInput | string
    email_contato?: StringFieldUpdateOperationsInput | string
    dados_bancarios_pix?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUpsertWithoutContas_pagar_lancadasInput = {
    update: XOR<UsuarioUpdateWithoutContas_pagar_lancadasInput, UsuarioUncheckedUpdateWithoutContas_pagar_lancadasInput>
    create: XOR<UsuarioCreateWithoutContas_pagar_lancadasInput, UsuarioUncheckedCreateWithoutContas_pagar_lancadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutContas_pagar_lancadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutContas_pagar_lancadasInput, UsuarioUncheckedUpdateWithoutContas_pagar_lancadasInput>
  }

  export type UsuarioUpdateWithoutContas_pagar_lancadasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    perfil?: PerfilUpdateOneRequiredWithoutUsuariosNestedInput
    faturas_criadas?: FaturaUpdateManyWithoutUsuario_criadorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutContas_pagar_lancadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_perfil?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    faturas_criadas?: FaturaUncheckedUpdateManyWithoutUsuario_criadorNestedInput
  }

  export type FaturaCreateWithoutNota_fiscalInput = {
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
    cliente: ClienteCreateNestedOneWithoutFaturasInput
    recorrencia?: RecorrenciaCreateNestedOneWithoutFaturasInput
    usuario_criador?: UsuarioCreateNestedOneWithoutFaturas_criadasInput
    transacoes?: TransacaoCreateNestedManyWithoutFaturaInput
  }

  export type FaturaUncheckedCreateWithoutNota_fiscalInput = {
    id?: number
    id_cliente: number
    id_recorrencia?: number | null
    id_usuario_criador?: number | null
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
    transacoes?: TransacaoUncheckedCreateNestedManyWithoutFaturaInput
  }

  export type FaturaCreateOrConnectWithoutNota_fiscalInput = {
    where: FaturaWhereUniqueInput
    create: XOR<FaturaCreateWithoutNota_fiscalInput, FaturaUncheckedCreateWithoutNota_fiscalInput>
  }

  export type FaturaUpsertWithoutNota_fiscalInput = {
    update: XOR<FaturaUpdateWithoutNota_fiscalInput, FaturaUncheckedUpdateWithoutNota_fiscalInput>
    create: XOR<FaturaCreateWithoutNota_fiscalInput, FaturaUncheckedCreateWithoutNota_fiscalInput>
    where?: FaturaWhereInput
  }

  export type FaturaUpdateToOneWithWhereWithoutNota_fiscalInput = {
    where?: FaturaWhereInput
    data: XOR<FaturaUpdateWithoutNota_fiscalInput, FaturaUncheckedUpdateWithoutNota_fiscalInput>
  }

  export type FaturaUpdateWithoutNota_fiscalInput = {
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutFaturasNestedInput
    recorrencia?: RecorrenciaUpdateOneWithoutFaturasNestedInput
    usuario_criador?: UsuarioUpdateOneWithoutFaturas_criadasNestedInput
    transacoes?: TransacaoUpdateManyWithoutFaturaNestedInput
  }

  export type FaturaUncheckedUpdateWithoutNota_fiscalInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_recorrencia?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario_criador?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
    transacoes?: TransacaoUncheckedUpdateManyWithoutFaturaNestedInput
  }

  export type FaturaCreateWithoutTransacoesInput = {
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
    cliente: ClienteCreateNestedOneWithoutFaturasInput
    recorrencia?: RecorrenciaCreateNestedOneWithoutFaturasInput
    usuario_criador?: UsuarioCreateNestedOneWithoutFaturas_criadasInput
    nota_fiscal?: NotaFiscalCreateNestedOneWithoutFaturaInput
  }

  export type FaturaUncheckedCreateWithoutTransacoesInput = {
    id?: number
    id_cliente: number
    id_recorrencia?: number | null
    id_usuario_criador?: number | null
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
    nota_fiscal?: NotaFiscalUncheckedCreateNestedOneWithoutFaturaInput
  }

  export type FaturaCreateOrConnectWithoutTransacoesInput = {
    where: FaturaWhereUniqueInput
    create: XOR<FaturaCreateWithoutTransacoesInput, FaturaUncheckedCreateWithoutTransacoesInput>
  }

  export type FaturaUpsertWithoutTransacoesInput = {
    update: XOR<FaturaUpdateWithoutTransacoesInput, FaturaUncheckedUpdateWithoutTransacoesInput>
    create: XOR<FaturaCreateWithoutTransacoesInput, FaturaUncheckedCreateWithoutTransacoesInput>
    where?: FaturaWhereInput
  }

  export type FaturaUpdateToOneWithWhereWithoutTransacoesInput = {
    where?: FaturaWhereInput
    data: XOR<FaturaUpdateWithoutTransacoesInput, FaturaUncheckedUpdateWithoutTransacoesInput>
  }

  export type FaturaUpdateWithoutTransacoesInput = {
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutFaturasNestedInput
    recorrencia?: RecorrenciaUpdateOneWithoutFaturasNestedInput
    usuario_criador?: UsuarioUpdateOneWithoutFaturas_criadasNestedInput
    nota_fiscal?: NotaFiscalUpdateOneWithoutFaturaNestedInput
  }

  export type FaturaUncheckedUpdateWithoutTransacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_recorrencia?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario_criador?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
    nota_fiscal?: NotaFiscalUncheckedUpdateOneWithoutFaturaNestedInput
  }

  export type RecorrenciaCreateManyClienteInput = {
    id?: number
    id_servico: number
    valor_cobrado: Decimal | DecimalJsLike | number | string
    periodicidade: $Enums.Periodicidade
    dia_vencimento: number
    status: $Enums.StatusRecorrencia
  }

  export type FaturaCreateManyClienteInput = {
    id?: number
    id_recorrencia?: number | null
    id_usuario_criador?: number | null
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
  }

  export type RecorrenciaUpdateWithoutClienteInput = {
    valor_cobrado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFieldUpdateOperationsInput | $Enums.Periodicidade
    dia_vencimento?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRecorrenciaFieldUpdateOperationsInput | $Enums.StatusRecorrencia
    servico?: ServicoUpdateOneRequiredWithoutRecorrenciasNestedInput
    faturas?: FaturaUpdateManyWithoutRecorrenciaNestedInput
  }

  export type RecorrenciaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_servico?: IntFieldUpdateOperationsInput | number
    valor_cobrado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFieldUpdateOperationsInput | $Enums.Periodicidade
    dia_vencimento?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRecorrenciaFieldUpdateOperationsInput | $Enums.StatusRecorrencia
    faturas?: FaturaUncheckedUpdateManyWithoutRecorrenciaNestedInput
  }

  export type RecorrenciaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_servico?: IntFieldUpdateOperationsInput | number
    valor_cobrado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFieldUpdateOperationsInput | $Enums.Periodicidade
    dia_vencimento?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRecorrenciaFieldUpdateOperationsInput | $Enums.StatusRecorrencia
  }

  export type FaturaUpdateWithoutClienteInput = {
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
    recorrencia?: RecorrenciaUpdateOneWithoutFaturasNestedInput
    usuario_criador?: UsuarioUpdateOneWithoutFaturas_criadasNestedInput
    transacoes?: TransacaoUpdateManyWithoutFaturaNestedInput
    nota_fiscal?: NotaFiscalUpdateOneWithoutFaturaNestedInput
  }

  export type FaturaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_recorrencia?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario_criador?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
    transacoes?: TransacaoUncheckedUpdateManyWithoutFaturaNestedInput
    nota_fiscal?: NotaFiscalUncheckedUpdateOneWithoutFaturaNestedInput
  }

  export type FaturaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_recorrencia?: NullableIntFieldUpdateOperationsInput | number | null
    id_usuario_criador?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecorrenciaCreateManyServicoInput = {
    id?: number
    id_cliente: number
    valor_cobrado: Decimal | DecimalJsLike | number | string
    periodicidade: $Enums.Periodicidade
    dia_vencimento: number
    status: $Enums.StatusRecorrencia
  }

  export type RecorrenciaUpdateWithoutServicoInput = {
    valor_cobrado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFieldUpdateOperationsInput | $Enums.Periodicidade
    dia_vencimento?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRecorrenciaFieldUpdateOperationsInput | $Enums.StatusRecorrencia
    cliente?: ClienteUpdateOneRequiredWithoutRecorrenciasNestedInput
    faturas?: FaturaUpdateManyWithoutRecorrenciaNestedInput
  }

  export type RecorrenciaUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    valor_cobrado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFieldUpdateOperationsInput | $Enums.Periodicidade
    dia_vencimento?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRecorrenciaFieldUpdateOperationsInput | $Enums.StatusRecorrencia
    faturas?: FaturaUncheckedUpdateManyWithoutRecorrenciaNestedInput
  }

  export type RecorrenciaUncheckedUpdateManyWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    valor_cobrado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    periodicidade?: EnumPeriodicidadeFieldUpdateOperationsInput | $Enums.Periodicidade
    dia_vencimento?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRecorrenciaFieldUpdateOperationsInput | $Enums.StatusRecorrencia
  }

  export type UsuarioCreateManyPerfilInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    ativo: boolean
  }

  export type UsuarioUpdateWithoutPerfilInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    faturas_criadas?: FaturaUpdateManyWithoutUsuario_criadorNestedInput
    contas_pagar_lancadas?: ContaPagarUpdateManyWithoutUsuario_lancamentoNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPerfilInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    faturas_criadas?: FaturaUncheckedUpdateManyWithoutUsuario_criadorNestedInput
    contas_pagar_lancadas?: ContaPagarUncheckedUpdateManyWithoutUsuario_lancamentoNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutPerfilInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FaturaCreateManyUsuario_criadorInput = {
    id?: number
    id_cliente: number
    id_recorrencia?: number | null
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
  }

  export type ContaPagarCreateManyUsuario_lancamentoInput = {
    id?: number
    id_parceiro: number
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    forma_pagamento: $Enums.FormaPagamento
    status: $Enums.StatusContaPagar
  }

  export type FaturaUpdateWithoutUsuario_criadorInput = {
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutFaturasNestedInput
    recorrencia?: RecorrenciaUpdateOneWithoutFaturasNestedInput
    transacoes?: TransacaoUpdateManyWithoutFaturaNestedInput
    nota_fiscal?: NotaFiscalUpdateOneWithoutFaturaNestedInput
  }

  export type FaturaUncheckedUpdateWithoutUsuario_criadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_recorrencia?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
    transacoes?: TransacaoUncheckedUpdateManyWithoutFaturaNestedInput
    nota_fiscal?: NotaFiscalUncheckedUpdateOneWithoutFaturaNestedInput
  }

  export type FaturaUncheckedUpdateManyWithoutUsuario_criadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_recorrencia?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContaPagarUpdateWithoutUsuario_lancamentoInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFieldUpdateOperationsInput | $Enums.StatusContaPagar
    parceiro?: ParceiroUpdateOneRequiredWithoutContas_pagarNestedInput
  }

  export type ContaPagarUncheckedUpdateWithoutUsuario_lancamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_parceiro?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFieldUpdateOperationsInput | $Enums.StatusContaPagar
  }

  export type ContaPagarUncheckedUpdateManyWithoutUsuario_lancamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_parceiro?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFieldUpdateOperationsInput | $Enums.StatusContaPagar
  }

  export type ContaPagarCreateManyParceiroInput = {
    id?: number
    id_usuario_lancamento: number
    descricao: string
    valor: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    forma_pagamento: $Enums.FormaPagamento
    status: $Enums.StatusContaPagar
  }

  export type ContaPagarUpdateWithoutParceiroInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFieldUpdateOperationsInput | $Enums.StatusContaPagar
    usuario_lancamento?: UsuarioUpdateOneRequiredWithoutContas_pagar_lancadasNestedInput
  }

  export type ContaPagarUncheckedUpdateWithoutParceiroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_lancamento?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFieldUpdateOperationsInput | $Enums.StatusContaPagar
  }

  export type ContaPagarUncheckedUpdateManyWithoutParceiroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_usuario_lancamento?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forma_pagamento?: EnumFormaPagamentoFieldUpdateOperationsInput | $Enums.FormaPagamento
    status?: EnumStatusContaPagarFieldUpdateOperationsInput | $Enums.StatusContaPagar
  }

  export type FaturaCreateManyRecorrenciaInput = {
    id?: number
    id_cliente: number
    id_usuario_criador?: number | null
    valor_total: Decimal | DecimalJsLike | number | string
    data_vencimento: Date | string
    data_pagamento?: Date | string | null
    status: $Enums.StatusFatura
    tipo_pagamento_preferencial?: $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: string | null
    linha_digitavel_boleto?: string | null
    link_qr_code_pix?: string | null
  }

  export type FaturaUpdateWithoutRecorrenciaInput = {
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutFaturasNestedInput
    usuario_criador?: UsuarioUpdateOneWithoutFaturas_criadasNestedInput
    transacoes?: TransacaoUpdateManyWithoutFaturaNestedInput
    nota_fiscal?: NotaFiscalUpdateOneWithoutFaturaNestedInput
  }

  export type FaturaUncheckedUpdateWithoutRecorrenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_criador?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
    transacoes?: TransacaoUncheckedUpdateManyWithoutFaturaNestedInput
    nota_fiscal?: NotaFiscalUncheckedUpdateOneWithoutFaturaNestedInput
  }

  export type FaturaUncheckedUpdateManyWithoutRecorrenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_usuario_criador?: NullableIntFieldUpdateOperationsInput | number | null
    valor_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    data_pagamento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumStatusFaturaFieldUpdateOperationsInput | $Enums.StatusFatura
    tipo_pagamento_preferencial?: NullableEnumTipoPagamentoPreferencialFieldUpdateOperationsInput | $Enums.TipoPagamentoPreferencial | null
    id_externo_gateway?: NullableStringFieldUpdateOperationsInput | string | null
    linha_digitavel_boleto?: NullableStringFieldUpdateOperationsInput | string | null
    link_qr_code_pix?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransacaoCreateManyFaturaInput = {
    id?: number
    data_hora: Date | string
    evento: string
    tipo_notificacao_api?: string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransacaoUpdateWithoutFaturaInput = {
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    tipo_notificacao_api?: NullableStringFieldUpdateOperationsInput | string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransacaoUncheckedUpdateWithoutFaturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    tipo_notificacao_api?: NullableStringFieldUpdateOperationsInput | string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TransacaoUncheckedUpdateManyWithoutFaturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    evento?: StringFieldUpdateOperationsInput | string
    tipo_notificacao_api?: NullableStringFieldUpdateOperationsInput | string | null
    dados_resposta?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClienteCountOutputTypeDefaultArgs instead
     */
    export type ClienteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServicoCountOutputTypeDefaultArgs instead
     */
    export type ServicoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServicoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PerfilCountOutputTypeDefaultArgs instead
     */
    export type PerfilCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PerfilCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParceiroCountOutputTypeDefaultArgs instead
     */
    export type ParceiroCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParceiroCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecorrenciaCountOutputTypeDefaultArgs instead
     */
    export type RecorrenciaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecorrenciaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FaturaCountOutputTypeDefaultArgs instead
     */
    export type FaturaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FaturaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClienteDefaultArgs instead
     */
    export type ClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServicoDefaultArgs instead
     */
    export type ServicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServicoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PerfilDefaultArgs instead
     */
    export type PerfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PerfilDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParceiroDefaultArgs instead
     */
    export type ParceiroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParceiroDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecorrenciaDefaultArgs instead
     */
    export type RecorrenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecorrenciaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FaturaDefaultArgs instead
     */
    export type FaturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FaturaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContaPagarDefaultArgs instead
     */
    export type ContaPagarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContaPagarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotaFiscalDefaultArgs instead
     */
    export type NotaFiscalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotaFiscalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransacaoDefaultArgs instead
     */
    export type TransacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransacaoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}