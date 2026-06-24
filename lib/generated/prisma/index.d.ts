
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Artisan
 * 
 */
export type Artisan = $Result.DefaultSelection<Prisma.$ArtisanPayload>
/**
 * Model Demande
 * 
 */
export type Demande = $Result.DefaultSelection<Prisma.$DemandePayload>
/**
 * Model Avis
 * 
 */
export type Avis = $Result.DefaultSelection<Prisma.$AvisPayload>
/**
 * Model Signalement
 * 
 */
export type Signalement = $Result.DefaultSelection<Prisma.$SignalementPayload>
/**
 * Model CodeVerif
 * 
 */
export type CodeVerif = $Result.DefaultSelection<Prisma.$CodeVerifPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CLIENT: 'CLIENT',
  ARTISAN: 'ARTISAN',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Metier: {
  CLIMATISATION: 'CLIMATISATION',
  PLOMBERIE: 'PLOMBERIE',
  ELECTRICITE: 'ELECTRICITE',
  ELECTROMENAGER: 'ELECTROMENAGER',
  PEINTURE: 'PEINTURE'
};

export type Metier = (typeof Metier)[keyof typeof Metier]


export const StatutDemande: {
  EN_ATTENTE: 'EN_ATTENTE',
  ACCEPTEE: 'ACCEPTEE',
  EN_COURS: 'EN_COURS',
  TERMINEE: 'TERMINEE',
  CONFIRMEE: 'CONFIRMEE',
  PAYEE: 'PAYEE',
  ANNULEE: 'ANNULEE'
};

export type StatutDemande = (typeof StatutDemande)[keyof typeof StatutDemande]


export const MotifSignalement: {
  TRAVAIL_MAL_FAIT: 'TRAVAIL_MAL_FAIT',
  PRIX_ABUSIF: 'PRIX_ABUSIF',
  COMPORTEMENT: 'COMPORTEMENT',
  ABSENT: 'ABSENT',
  AUTRE: 'AUTRE'
};

export type MotifSignalement = (typeof MotifSignalement)[keyof typeof MotifSignalement]


export const StatutSignalement: {
  NOUVEAU: 'NOUVEAU',
  TRAITE: 'TRAITE'
};

export type StatutSignalement = (typeof StatutSignalement)[keyof typeof StatutSignalement]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Metier = $Enums.Metier

export const Metier: typeof $Enums.Metier

export type StatutDemande = $Enums.StatutDemande

export const StatutDemande: typeof $Enums.StatutDemande

export type MotifSignalement = $Enums.MotifSignalement

export const MotifSignalement: typeof $Enums.MotifSignalement

export type StatutSignalement = $Enums.StatutSignalement

export const StatutSignalement: typeof $Enums.StatutSignalement

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artisan`: Exposes CRUD operations for the **Artisan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artisans
    * const artisans = await prisma.artisan.findMany()
    * ```
    */
  get artisan(): Prisma.ArtisanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.demande`: Exposes CRUD operations for the **Demande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Demandes
    * const demandes = await prisma.demande.findMany()
    * ```
    */
  get demande(): Prisma.DemandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avis`: Exposes CRUD operations for the **Avis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avis
    * const avis = await prisma.avis.findMany()
    * ```
    */
  get avis(): Prisma.AvisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signalement`: Exposes CRUD operations for the **Signalement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signalements
    * const signalements = await prisma.signalement.findMany()
    * ```
    */
  get signalement(): Prisma.SignalementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codeVerif`: Exposes CRUD operations for the **CodeVerif** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeVerifs
    * const codeVerifs = await prisma.codeVerif.findMany()
    * ```
    */
  get codeVerif(): Prisma.CodeVerifDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Artisan: 'Artisan',
    Demande: 'Demande',
    Avis: 'Avis',
    Signalement: 'Signalement',
    CodeVerif: 'CodeVerif'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "artisan" | "demande" | "avis" | "signalement" | "codeVerif"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Artisan: {
        payload: Prisma.$ArtisanPayload<ExtArgs>
        fields: Prisma.ArtisanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtisanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtisanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          findFirst: {
            args: Prisma.ArtisanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtisanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          findMany: {
            args: Prisma.ArtisanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>[]
          }
          create: {
            args: Prisma.ArtisanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          createMany: {
            args: Prisma.ArtisanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtisanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>[]
          }
          delete: {
            args: Prisma.ArtisanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          update: {
            args: Prisma.ArtisanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          deleteMany: {
            args: Prisma.ArtisanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtisanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtisanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>[]
          }
          upsert: {
            args: Prisma.ArtisanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          aggregate: {
            args: Prisma.ArtisanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtisan>
          }
          groupBy: {
            args: Prisma.ArtisanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtisanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtisanCountArgs<ExtArgs>
            result: $Utils.Optional<ArtisanCountAggregateOutputType> | number
          }
        }
      }
      Demande: {
        payload: Prisma.$DemandePayload<ExtArgs>
        fields: Prisma.DemandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          findFirst: {
            args: Prisma.DemandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          findMany: {
            args: Prisma.DemandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>[]
          }
          create: {
            args: Prisma.DemandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          createMany: {
            args: Prisma.DemandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemandeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>[]
          }
          delete: {
            args: Prisma.DemandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          update: {
            args: Prisma.DemandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          deleteMany: {
            args: Prisma.DemandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemandeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>[]
          }
          upsert: {
            args: Prisma.DemandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          aggregate: {
            args: Prisma.DemandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemande>
          }
          groupBy: {
            args: Prisma.DemandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemandeCountArgs<ExtArgs>
            result: $Utils.Optional<DemandeCountAggregateOutputType> | number
          }
        }
      }
      Avis: {
        payload: Prisma.$AvisPayload<ExtArgs>
        fields: Prisma.AvisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          findFirst: {
            args: Prisma.AvisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          findMany: {
            args: Prisma.AvisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>[]
          }
          create: {
            args: Prisma.AvisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          createMany: {
            args: Prisma.AvisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>[]
          }
          delete: {
            args: Prisma.AvisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          update: {
            args: Prisma.AvisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          deleteMany: {
            args: Prisma.AvisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>[]
          }
          upsert: {
            args: Prisma.AvisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          aggregate: {
            args: Prisma.AvisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvis>
          }
          groupBy: {
            args: Prisma.AvisGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvisGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvisCountArgs<ExtArgs>
            result: $Utils.Optional<AvisCountAggregateOutputType> | number
          }
        }
      }
      Signalement: {
        payload: Prisma.$SignalementPayload<ExtArgs>
        fields: Prisma.SignalementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignalementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignalementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>
          }
          findFirst: {
            args: Prisma.SignalementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignalementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>
          }
          findMany: {
            args: Prisma.SignalementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>[]
          }
          create: {
            args: Prisma.SignalementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>
          }
          createMany: {
            args: Prisma.SignalementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignalementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>[]
          }
          delete: {
            args: Prisma.SignalementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>
          }
          update: {
            args: Prisma.SignalementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>
          }
          deleteMany: {
            args: Prisma.SignalementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignalementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignalementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>[]
          }
          upsert: {
            args: Prisma.SignalementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalementPayload>
          }
          aggregate: {
            args: Prisma.SignalementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignalement>
          }
          groupBy: {
            args: Prisma.SignalementGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignalementGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignalementCountArgs<ExtArgs>
            result: $Utils.Optional<SignalementCountAggregateOutputType> | number
          }
        }
      }
      CodeVerif: {
        payload: Prisma.$CodeVerifPayload<ExtArgs>
        fields: Prisma.CodeVerifFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeVerifFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeVerifPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeVerifFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeVerifPayload>
          }
          findFirst: {
            args: Prisma.CodeVerifFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeVerifPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeVerifFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeVerifPayload>
          }
          findMany: {
            args: Prisma.CodeVerifFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeVerifPayload>[]
          }
          create: {
            args: Prisma.CodeVerifCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeVerifPayload>
          }
          createMany: {
            args: Prisma.CodeVerifCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeVerifCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeVerifPayload>[]
          }
          delete: {
            args: Prisma.CodeVerifDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeVerifPayload>
          }
          update: {
            args: Prisma.CodeVerifUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeVerifPayload>
          }
          deleteMany: {
            args: Prisma.CodeVerifDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeVerifUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodeVerifUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeVerifPayload>[]
          }
          upsert: {
            args: Prisma.CodeVerifUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeVerifPayload>
          }
          aggregate: {
            args: Prisma.CodeVerifAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeVerif>
          }
          groupBy: {
            args: Prisma.CodeVerifGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeVerifGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeVerifCountArgs<ExtArgs>
            result: $Utils.Optional<CodeVerifCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    artisan?: ArtisanOmit
    demande?: DemandeOmit
    avis?: AvisOmit
    signalement?: SignalementOmit
    codeVerif?: CodeVerifOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    demandesClient: number
    avisDonnes: number
    signalements: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandesClient?: boolean | UserCountOutputTypeCountDemandesClientArgs
    avisDonnes?: boolean | UserCountOutputTypeCountAvisDonnesArgs
    signalements?: boolean | UserCountOutputTypeCountSignalementsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDemandesClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvisDonnesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSignalementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalementWhereInput
  }


  /**
   * Count Type ArtisanCountOutputType
   */

  export type ArtisanCountOutputType = {
    demandes: number
    avisRecus: number
    signalementsRecus: number
  }

  export type ArtisanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandes?: boolean | ArtisanCountOutputTypeCountDemandesArgs
    avisRecus?: boolean | ArtisanCountOutputTypeCountAvisRecusArgs
    signalementsRecus?: boolean | ArtisanCountOutputTypeCountSignalementsRecusArgs
  }

  // Custom InputTypes
  /**
   * ArtisanCountOutputType without action
   */
  export type ArtisanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanCountOutputType
     */
    select?: ArtisanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtisanCountOutputType without action
   */
  export type ArtisanCountOutputTypeCountDemandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
  }

  /**
   * ArtisanCountOutputType without action
   */
  export type ArtisanCountOutputTypeCountAvisRecusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisWhereInput
  }

  /**
   * ArtisanCountOutputType without action
   */
  export type ArtisanCountOutputTypeCountSignalementsRecusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    phone: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone: number
    name: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    phone?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone?: true
    name?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    phone: string
    name: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    artisan?: boolean | User$artisanArgs<ExtArgs>
    demandesClient?: boolean | User$demandesClientArgs<ExtArgs>
    avisDonnes?: boolean | User$avisDonnesArgs<ExtArgs>
    signalements?: boolean | User$signalementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "name" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artisan?: boolean | User$artisanArgs<ExtArgs>
    demandesClient?: boolean | User$demandesClientArgs<ExtArgs>
    avisDonnes?: boolean | User$avisDonnesArgs<ExtArgs>
    signalements?: boolean | User$signalementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      artisan: Prisma.$ArtisanPayload<ExtArgs> | null
      demandesClient: Prisma.$DemandePayload<ExtArgs>[]
      avisDonnes: Prisma.$AvisPayload<ExtArgs>[]
      signalements: Prisma.$SignalementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      name: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artisan<T extends User$artisanArgs<ExtArgs> = {}>(args?: Subset<T, User$artisanArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    demandesClient<T extends User$demandesClientArgs<ExtArgs> = {}>(args?: Subset<T, User$demandesClientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avisDonnes<T extends User$avisDonnesArgs<ExtArgs> = {}>(args?: Subset<T, User$avisDonnesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    signalements<T extends User$signalementsArgs<ExtArgs> = {}>(args?: Subset<T, User$signalementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.artisan
   */
  export type User$artisanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    where?: ArtisanWhereInput
  }

  /**
   * User.demandesClient
   */
  export type User$demandesClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    cursor?: DemandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * User.avisDonnes
   */
  export type User$avisDonnesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    where?: AvisWhereInput
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    cursor?: AvisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * User.signalements
   */
  export type User$signalementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
    where?: SignalementWhereInput
    orderBy?: SignalementOrderByWithRelationInput | SignalementOrderByWithRelationInput[]
    cursor?: SignalementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignalementScalarFieldEnum | SignalementScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Artisan
   */

  export type AggregateArtisan = {
    _count: ArtisanCountAggregateOutputType | null
    _avg: ArtisanAvgAggregateOutputType | null
    _sum: ArtisanSumAggregateOutputType | null
    _min: ArtisanMinAggregateOutputType | null
    _max: ArtisanMaxAggregateOutputType | null
  }

  export type ArtisanAvgAggregateOutputType = {
    note: number | null
    nbAvis: number | null
    experience: number | null
    soldeKobo: number | null
  }

  export type ArtisanSumAggregateOutputType = {
    note: number | null
    nbAvis: number | null
    experience: number | null
    soldeKobo: number | null
  }

  export type ArtisanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    commune: string | null
    verifie: boolean | null
    note: number | null
    nbAvis: number | null
    experience: number | null
    soldeKobo: number | null
    createdAt: Date | null
  }

  export type ArtisanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    commune: string | null
    verifie: boolean | null
    note: number | null
    nbAvis: number | null
    experience: number | null
    soldeKobo: number | null
    createdAt: Date | null
  }

  export type ArtisanCountAggregateOutputType = {
    id: number
    userId: number
    metiers: number
    commune: number
    verifie: number
    note: number
    nbAvis: number
    experience: number
    soldeKobo: number
    createdAt: number
    _all: number
  }


  export type ArtisanAvgAggregateInputType = {
    note?: true
    nbAvis?: true
    experience?: true
    soldeKobo?: true
  }

  export type ArtisanSumAggregateInputType = {
    note?: true
    nbAvis?: true
    experience?: true
    soldeKobo?: true
  }

  export type ArtisanMinAggregateInputType = {
    id?: true
    userId?: true
    commune?: true
    verifie?: true
    note?: true
    nbAvis?: true
    experience?: true
    soldeKobo?: true
    createdAt?: true
  }

  export type ArtisanMaxAggregateInputType = {
    id?: true
    userId?: true
    commune?: true
    verifie?: true
    note?: true
    nbAvis?: true
    experience?: true
    soldeKobo?: true
    createdAt?: true
  }

  export type ArtisanCountAggregateInputType = {
    id?: true
    userId?: true
    metiers?: true
    commune?: true
    verifie?: true
    note?: true
    nbAvis?: true
    experience?: true
    soldeKobo?: true
    createdAt?: true
    _all?: true
  }

  export type ArtisanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artisan to aggregate.
     */
    where?: ArtisanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artisans to fetch.
     */
    orderBy?: ArtisanOrderByWithRelationInput | ArtisanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtisanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artisans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artisans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artisans
    **/
    _count?: true | ArtisanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtisanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtisanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtisanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtisanMaxAggregateInputType
  }

  export type GetArtisanAggregateType<T extends ArtisanAggregateArgs> = {
        [P in keyof T & keyof AggregateArtisan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtisan[P]>
      : GetScalarType<T[P], AggregateArtisan[P]>
  }




  export type ArtisanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtisanWhereInput
    orderBy?: ArtisanOrderByWithAggregationInput | ArtisanOrderByWithAggregationInput[]
    by: ArtisanScalarFieldEnum[] | ArtisanScalarFieldEnum
    having?: ArtisanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtisanCountAggregateInputType | true
    _avg?: ArtisanAvgAggregateInputType
    _sum?: ArtisanSumAggregateInputType
    _min?: ArtisanMinAggregateInputType
    _max?: ArtisanMaxAggregateInputType
  }

  export type ArtisanGroupByOutputType = {
    id: string
    userId: string
    metiers: $Enums.Metier[]
    commune: string
    verifie: boolean
    note: number
    nbAvis: number
    experience: number
    soldeKobo: number
    createdAt: Date
    _count: ArtisanCountAggregateOutputType | null
    _avg: ArtisanAvgAggregateOutputType | null
    _sum: ArtisanSumAggregateOutputType | null
    _min: ArtisanMinAggregateOutputType | null
    _max: ArtisanMaxAggregateOutputType | null
  }

  type GetArtisanGroupByPayload<T extends ArtisanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtisanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtisanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtisanGroupByOutputType[P]>
            : GetScalarType<T[P], ArtisanGroupByOutputType[P]>
        }
      >
    >


  export type ArtisanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    metiers?: boolean
    commune?: boolean
    verifie?: boolean
    note?: boolean
    nbAvis?: boolean
    experience?: boolean
    soldeKobo?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    demandes?: boolean | Artisan$demandesArgs<ExtArgs>
    avisRecus?: boolean | Artisan$avisRecusArgs<ExtArgs>
    signalementsRecus?: boolean | Artisan$signalementsRecusArgs<ExtArgs>
    _count?: boolean | ArtisanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artisan"]>

  export type ArtisanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    metiers?: boolean
    commune?: boolean
    verifie?: boolean
    note?: boolean
    nbAvis?: boolean
    experience?: boolean
    soldeKobo?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artisan"]>

  export type ArtisanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    metiers?: boolean
    commune?: boolean
    verifie?: boolean
    note?: boolean
    nbAvis?: boolean
    experience?: boolean
    soldeKobo?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artisan"]>

  export type ArtisanSelectScalar = {
    id?: boolean
    userId?: boolean
    metiers?: boolean
    commune?: boolean
    verifie?: boolean
    note?: boolean
    nbAvis?: boolean
    experience?: boolean
    soldeKobo?: boolean
    createdAt?: boolean
  }

  export type ArtisanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "metiers" | "commune" | "verifie" | "note" | "nbAvis" | "experience" | "soldeKobo" | "createdAt", ExtArgs["result"]["artisan"]>
  export type ArtisanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    demandes?: boolean | Artisan$demandesArgs<ExtArgs>
    avisRecus?: boolean | Artisan$avisRecusArgs<ExtArgs>
    signalementsRecus?: boolean | Artisan$signalementsRecusArgs<ExtArgs>
    _count?: boolean | ArtisanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtisanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArtisanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArtisanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artisan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      demandes: Prisma.$DemandePayload<ExtArgs>[]
      avisRecus: Prisma.$AvisPayload<ExtArgs>[]
      signalementsRecus: Prisma.$SignalementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      metiers: $Enums.Metier[]
      commune: string
      verifie: boolean
      note: number
      nbAvis: number
      experience: number
      soldeKobo: number
      createdAt: Date
    }, ExtArgs["result"]["artisan"]>
    composites: {}
  }

  type ArtisanGetPayload<S extends boolean | null | undefined | ArtisanDefaultArgs> = $Result.GetResult<Prisma.$ArtisanPayload, S>

  type ArtisanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtisanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtisanCountAggregateInputType | true
    }

  export interface ArtisanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artisan'], meta: { name: 'Artisan' } }
    /**
     * Find zero or one Artisan that matches the filter.
     * @param {ArtisanFindUniqueArgs} args - Arguments to find a Artisan
     * @example
     * // Get one Artisan
     * const artisan = await prisma.artisan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtisanFindUniqueArgs>(args: SelectSubset<T, ArtisanFindUniqueArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artisan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtisanFindUniqueOrThrowArgs} args - Arguments to find a Artisan
     * @example
     * // Get one Artisan
     * const artisan = await prisma.artisan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtisanFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtisanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artisan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanFindFirstArgs} args - Arguments to find a Artisan
     * @example
     * // Get one Artisan
     * const artisan = await prisma.artisan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtisanFindFirstArgs>(args?: SelectSubset<T, ArtisanFindFirstArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artisan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanFindFirstOrThrowArgs} args - Arguments to find a Artisan
     * @example
     * // Get one Artisan
     * const artisan = await prisma.artisan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtisanFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtisanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artisans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artisans
     * const artisans = await prisma.artisan.findMany()
     * 
     * // Get first 10 Artisans
     * const artisans = await prisma.artisan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artisanWithIdOnly = await prisma.artisan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtisanFindManyArgs>(args?: SelectSubset<T, ArtisanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artisan.
     * @param {ArtisanCreateArgs} args - Arguments to create a Artisan.
     * @example
     * // Create one Artisan
     * const Artisan = await prisma.artisan.create({
     *   data: {
     *     // ... data to create a Artisan
     *   }
     * })
     * 
     */
    create<T extends ArtisanCreateArgs>(args: SelectSubset<T, ArtisanCreateArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artisans.
     * @param {ArtisanCreateManyArgs} args - Arguments to create many Artisans.
     * @example
     * // Create many Artisans
     * const artisan = await prisma.artisan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtisanCreateManyArgs>(args?: SelectSubset<T, ArtisanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artisans and returns the data saved in the database.
     * @param {ArtisanCreateManyAndReturnArgs} args - Arguments to create many Artisans.
     * @example
     * // Create many Artisans
     * const artisan = await prisma.artisan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artisans and only return the `id`
     * const artisanWithIdOnly = await prisma.artisan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtisanCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtisanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artisan.
     * @param {ArtisanDeleteArgs} args - Arguments to delete one Artisan.
     * @example
     * // Delete one Artisan
     * const Artisan = await prisma.artisan.delete({
     *   where: {
     *     // ... filter to delete one Artisan
     *   }
     * })
     * 
     */
    delete<T extends ArtisanDeleteArgs>(args: SelectSubset<T, ArtisanDeleteArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artisan.
     * @param {ArtisanUpdateArgs} args - Arguments to update one Artisan.
     * @example
     * // Update one Artisan
     * const artisan = await prisma.artisan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtisanUpdateArgs>(args: SelectSubset<T, ArtisanUpdateArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artisans.
     * @param {ArtisanDeleteManyArgs} args - Arguments to filter Artisans to delete.
     * @example
     * // Delete a few Artisans
     * const { count } = await prisma.artisan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtisanDeleteManyArgs>(args?: SelectSubset<T, ArtisanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artisans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artisans
     * const artisan = await prisma.artisan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtisanUpdateManyArgs>(args: SelectSubset<T, ArtisanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artisans and returns the data updated in the database.
     * @param {ArtisanUpdateManyAndReturnArgs} args - Arguments to update many Artisans.
     * @example
     * // Update many Artisans
     * const artisan = await prisma.artisan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artisans and only return the `id`
     * const artisanWithIdOnly = await prisma.artisan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtisanUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtisanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artisan.
     * @param {ArtisanUpsertArgs} args - Arguments to update or create a Artisan.
     * @example
     * // Update or create a Artisan
     * const artisan = await prisma.artisan.upsert({
     *   create: {
     *     // ... data to create a Artisan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artisan we want to update
     *   }
     * })
     */
    upsert<T extends ArtisanUpsertArgs>(args: SelectSubset<T, ArtisanUpsertArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artisans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanCountArgs} args - Arguments to filter Artisans to count.
     * @example
     * // Count the number of Artisans
     * const count = await prisma.artisan.count({
     *   where: {
     *     // ... the filter for the Artisans we want to count
     *   }
     * })
    **/
    count<T extends ArtisanCountArgs>(
      args?: Subset<T, ArtisanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtisanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artisan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtisanAggregateArgs>(args: Subset<T, ArtisanAggregateArgs>): Prisma.PrismaPromise<GetArtisanAggregateType<T>>

    /**
     * Group by Artisan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanGroupByArgs} args - Group by arguments.
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
      T extends ArtisanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtisanGroupByArgs['orderBy'] }
        : { orderBy?: ArtisanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtisanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtisanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artisan model
   */
  readonly fields: ArtisanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artisan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtisanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    demandes<T extends Artisan$demandesArgs<ExtArgs> = {}>(args?: Subset<T, Artisan$demandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avisRecus<T extends Artisan$avisRecusArgs<ExtArgs> = {}>(args?: Subset<T, Artisan$avisRecusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    signalementsRecus<T extends Artisan$signalementsRecusArgs<ExtArgs> = {}>(args?: Subset<T, Artisan$signalementsRecusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artisan model
   */
  interface ArtisanFieldRefs {
    readonly id: FieldRef<"Artisan", 'String'>
    readonly userId: FieldRef<"Artisan", 'String'>
    readonly metiers: FieldRef<"Artisan", 'Metier[]'>
    readonly commune: FieldRef<"Artisan", 'String'>
    readonly verifie: FieldRef<"Artisan", 'Boolean'>
    readonly note: FieldRef<"Artisan", 'Float'>
    readonly nbAvis: FieldRef<"Artisan", 'Int'>
    readonly experience: FieldRef<"Artisan", 'Int'>
    readonly soldeKobo: FieldRef<"Artisan", 'Int'>
    readonly createdAt: FieldRef<"Artisan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artisan findUnique
   */
  export type ArtisanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisan to fetch.
     */
    where: ArtisanWhereUniqueInput
  }

  /**
   * Artisan findUniqueOrThrow
   */
  export type ArtisanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisan to fetch.
     */
    where: ArtisanWhereUniqueInput
  }

  /**
   * Artisan findFirst
   */
  export type ArtisanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisan to fetch.
     */
    where?: ArtisanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artisans to fetch.
     */
    orderBy?: ArtisanOrderByWithRelationInput | ArtisanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artisans.
     */
    cursor?: ArtisanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artisans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artisans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artisans.
     */
    distinct?: ArtisanScalarFieldEnum | ArtisanScalarFieldEnum[]
  }

  /**
   * Artisan findFirstOrThrow
   */
  export type ArtisanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisan to fetch.
     */
    where?: ArtisanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artisans to fetch.
     */
    orderBy?: ArtisanOrderByWithRelationInput | ArtisanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artisans.
     */
    cursor?: ArtisanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artisans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artisans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artisans.
     */
    distinct?: ArtisanScalarFieldEnum | ArtisanScalarFieldEnum[]
  }

  /**
   * Artisan findMany
   */
  export type ArtisanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisans to fetch.
     */
    where?: ArtisanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artisans to fetch.
     */
    orderBy?: ArtisanOrderByWithRelationInput | ArtisanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artisans.
     */
    cursor?: ArtisanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artisans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artisans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artisans.
     */
    distinct?: ArtisanScalarFieldEnum | ArtisanScalarFieldEnum[]
  }

  /**
   * Artisan create
   */
  export type ArtisanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * The data needed to create a Artisan.
     */
    data: XOR<ArtisanCreateInput, ArtisanUncheckedCreateInput>
  }

  /**
   * Artisan createMany
   */
  export type ArtisanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artisans.
     */
    data: ArtisanCreateManyInput | ArtisanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artisan createManyAndReturn
   */
  export type ArtisanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * The data used to create many Artisans.
     */
    data: ArtisanCreateManyInput | ArtisanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Artisan update
   */
  export type ArtisanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * The data needed to update a Artisan.
     */
    data: XOR<ArtisanUpdateInput, ArtisanUncheckedUpdateInput>
    /**
     * Choose, which Artisan to update.
     */
    where: ArtisanWhereUniqueInput
  }

  /**
   * Artisan updateMany
   */
  export type ArtisanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artisans.
     */
    data: XOR<ArtisanUpdateManyMutationInput, ArtisanUncheckedUpdateManyInput>
    /**
     * Filter which Artisans to update
     */
    where?: ArtisanWhereInput
    /**
     * Limit how many Artisans to update.
     */
    limit?: number
  }

  /**
   * Artisan updateManyAndReturn
   */
  export type ArtisanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * The data used to update Artisans.
     */
    data: XOR<ArtisanUpdateManyMutationInput, ArtisanUncheckedUpdateManyInput>
    /**
     * Filter which Artisans to update
     */
    where?: ArtisanWhereInput
    /**
     * Limit how many Artisans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Artisan upsert
   */
  export type ArtisanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * The filter to search for the Artisan to update in case it exists.
     */
    where: ArtisanWhereUniqueInput
    /**
     * In case the Artisan found by the `where` argument doesn't exist, create a new Artisan with this data.
     */
    create: XOR<ArtisanCreateInput, ArtisanUncheckedCreateInput>
    /**
     * In case the Artisan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtisanUpdateInput, ArtisanUncheckedUpdateInput>
  }

  /**
   * Artisan delete
   */
  export type ArtisanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter which Artisan to delete.
     */
    where: ArtisanWhereUniqueInput
  }

  /**
   * Artisan deleteMany
   */
  export type ArtisanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artisans to delete
     */
    where?: ArtisanWhereInput
    /**
     * Limit how many Artisans to delete.
     */
    limit?: number
  }

  /**
   * Artisan.demandes
   */
  export type Artisan$demandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    cursor?: DemandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Artisan.avisRecus
   */
  export type Artisan$avisRecusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    where?: AvisWhereInput
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    cursor?: AvisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Artisan.signalementsRecus
   */
  export type Artisan$signalementsRecusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
    where?: SignalementWhereInput
    orderBy?: SignalementOrderByWithRelationInput | SignalementOrderByWithRelationInput[]
    cursor?: SignalementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignalementScalarFieldEnum | SignalementScalarFieldEnum[]
  }

  /**
   * Artisan without action
   */
  export type ArtisanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
  }


  /**
   * Model Demande
   */

  export type AggregateDemande = {
    _count: DemandeCountAggregateOutputType | null
    _avg: DemandeAvgAggregateOutputType | null
    _sum: DemandeSumAggregateOutputType | null
    _min: DemandeMinAggregateOutputType | null
    _max: DemandeMaxAggregateOutputType | null
  }

  export type DemandeAvgAggregateOutputType = {
    prixDevis: number | null
  }

  export type DemandeSumAggregateOutputType = {
    prixDevis: number | null
  }

  export type DemandeMinAggregateOutputType = {
    id: string | null
    metier: $Enums.Metier | null
    description: string | null
    commune: string | null
    adresse: string | null
    statut: $Enums.StatutDemande | null
    prixDevis: number | null
    createdAt: Date | null
    clientId: string | null
    artisanId: string | null
  }

  export type DemandeMaxAggregateOutputType = {
    id: string | null
    metier: $Enums.Metier | null
    description: string | null
    commune: string | null
    adresse: string | null
    statut: $Enums.StatutDemande | null
    prixDevis: number | null
    createdAt: Date | null
    clientId: string | null
    artisanId: string | null
  }

  export type DemandeCountAggregateOutputType = {
    id: number
    metier: number
    description: number
    commune: number
    adresse: number
    statut: number
    prixDevis: number
    createdAt: number
    clientId: number
    artisanId: number
    _all: number
  }


  export type DemandeAvgAggregateInputType = {
    prixDevis?: true
  }

  export type DemandeSumAggregateInputType = {
    prixDevis?: true
  }

  export type DemandeMinAggregateInputType = {
    id?: true
    metier?: true
    description?: true
    commune?: true
    adresse?: true
    statut?: true
    prixDevis?: true
    createdAt?: true
    clientId?: true
    artisanId?: true
  }

  export type DemandeMaxAggregateInputType = {
    id?: true
    metier?: true
    description?: true
    commune?: true
    adresse?: true
    statut?: true
    prixDevis?: true
    createdAt?: true
    clientId?: true
    artisanId?: true
  }

  export type DemandeCountAggregateInputType = {
    id?: true
    metier?: true
    description?: true
    commune?: true
    adresse?: true
    statut?: true
    prixDevis?: true
    createdAt?: true
    clientId?: true
    artisanId?: true
    _all?: true
  }

  export type DemandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demande to aggregate.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Demandes
    **/
    _count?: true | DemandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DemandeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DemandeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemandeMaxAggregateInputType
  }

  export type GetDemandeAggregateType<T extends DemandeAggregateArgs> = {
        [P in keyof T & keyof AggregateDemande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemande[P]>
      : GetScalarType<T[P], AggregateDemande[P]>
  }




  export type DemandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithAggregationInput | DemandeOrderByWithAggregationInput[]
    by: DemandeScalarFieldEnum[] | DemandeScalarFieldEnum
    having?: DemandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemandeCountAggregateInputType | true
    _avg?: DemandeAvgAggregateInputType
    _sum?: DemandeSumAggregateInputType
    _min?: DemandeMinAggregateInputType
    _max?: DemandeMaxAggregateInputType
  }

  export type DemandeGroupByOutputType = {
    id: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut: $Enums.StatutDemande
    prixDevis: number | null
    createdAt: Date
    clientId: string
    artisanId: string | null
    _count: DemandeCountAggregateOutputType | null
    _avg: DemandeAvgAggregateOutputType | null
    _sum: DemandeSumAggregateOutputType | null
    _min: DemandeMinAggregateOutputType | null
    _max: DemandeMaxAggregateOutputType | null
  }

  type GetDemandeGroupByPayload<T extends DemandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemandeGroupByOutputType[P]>
            : GetScalarType<T[P], DemandeGroupByOutputType[P]>
        }
      >
    >


  export type DemandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metier?: boolean
    description?: boolean
    commune?: boolean
    adresse?: boolean
    statut?: boolean
    prixDevis?: boolean
    createdAt?: boolean
    clientId?: boolean
    artisanId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | Demande$artisanArgs<ExtArgs>
    avis?: boolean | Demande$avisArgs<ExtArgs>
    signalement?: boolean | Demande$signalementArgs<ExtArgs>
  }, ExtArgs["result"]["demande"]>

  export type DemandeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metier?: boolean
    description?: boolean
    commune?: boolean
    adresse?: boolean
    statut?: boolean
    prixDevis?: boolean
    createdAt?: boolean
    clientId?: boolean
    artisanId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | Demande$artisanArgs<ExtArgs>
  }, ExtArgs["result"]["demande"]>

  export type DemandeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metier?: boolean
    description?: boolean
    commune?: boolean
    adresse?: boolean
    statut?: boolean
    prixDevis?: boolean
    createdAt?: boolean
    clientId?: boolean
    artisanId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | Demande$artisanArgs<ExtArgs>
  }, ExtArgs["result"]["demande"]>

  export type DemandeSelectScalar = {
    id?: boolean
    metier?: boolean
    description?: boolean
    commune?: boolean
    adresse?: boolean
    statut?: boolean
    prixDevis?: boolean
    createdAt?: boolean
    clientId?: boolean
    artisanId?: boolean
  }

  export type DemandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metier" | "description" | "commune" | "adresse" | "statut" | "prixDevis" | "createdAt" | "clientId" | "artisanId", ExtArgs["result"]["demande"]>
  export type DemandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | Demande$artisanArgs<ExtArgs>
    avis?: boolean | Demande$avisArgs<ExtArgs>
    signalement?: boolean | Demande$signalementArgs<ExtArgs>
  }
  export type DemandeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | Demande$artisanArgs<ExtArgs>
  }
  export type DemandeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | Demande$artisanArgs<ExtArgs>
  }

  export type $DemandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Demande"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      artisan: Prisma.$ArtisanPayload<ExtArgs> | null
      avis: Prisma.$AvisPayload<ExtArgs> | null
      signalement: Prisma.$SignalementPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      metier: $Enums.Metier
      description: string
      commune: string
      adresse: string
      statut: $Enums.StatutDemande
      prixDevis: number | null
      createdAt: Date
      clientId: string
      artisanId: string | null
    }, ExtArgs["result"]["demande"]>
    composites: {}
  }

  type DemandeGetPayload<S extends boolean | null | undefined | DemandeDefaultArgs> = $Result.GetResult<Prisma.$DemandePayload, S>

  type DemandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemandeCountAggregateInputType | true
    }

  export interface DemandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Demande'], meta: { name: 'Demande' } }
    /**
     * Find zero or one Demande that matches the filter.
     * @param {DemandeFindUniqueArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemandeFindUniqueArgs>(args: SelectSubset<T, DemandeFindUniqueArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Demande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemandeFindUniqueOrThrowArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemandeFindUniqueOrThrowArgs>(args: SelectSubset<T, DemandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindFirstArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemandeFindFirstArgs>(args?: SelectSubset<T, DemandeFindFirstArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindFirstOrThrowArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemandeFindFirstOrThrowArgs>(args?: SelectSubset<T, DemandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Demandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Demandes
     * const demandes = await prisma.demande.findMany()
     * 
     * // Get first 10 Demandes
     * const demandes = await prisma.demande.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demandeWithIdOnly = await prisma.demande.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DemandeFindManyArgs>(args?: SelectSubset<T, DemandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Demande.
     * @param {DemandeCreateArgs} args - Arguments to create a Demande.
     * @example
     * // Create one Demande
     * const Demande = await prisma.demande.create({
     *   data: {
     *     // ... data to create a Demande
     *   }
     * })
     * 
     */
    create<T extends DemandeCreateArgs>(args: SelectSubset<T, DemandeCreateArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Demandes.
     * @param {DemandeCreateManyArgs} args - Arguments to create many Demandes.
     * @example
     * // Create many Demandes
     * const demande = await prisma.demande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemandeCreateManyArgs>(args?: SelectSubset<T, DemandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Demandes and returns the data saved in the database.
     * @param {DemandeCreateManyAndReturnArgs} args - Arguments to create many Demandes.
     * @example
     * // Create many Demandes
     * const demande = await prisma.demande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Demandes and only return the `id`
     * const demandeWithIdOnly = await prisma.demande.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemandeCreateManyAndReturnArgs>(args?: SelectSubset<T, DemandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Demande.
     * @param {DemandeDeleteArgs} args - Arguments to delete one Demande.
     * @example
     * // Delete one Demande
     * const Demande = await prisma.demande.delete({
     *   where: {
     *     // ... filter to delete one Demande
     *   }
     * })
     * 
     */
    delete<T extends DemandeDeleteArgs>(args: SelectSubset<T, DemandeDeleteArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Demande.
     * @param {DemandeUpdateArgs} args - Arguments to update one Demande.
     * @example
     * // Update one Demande
     * const demande = await prisma.demande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemandeUpdateArgs>(args: SelectSubset<T, DemandeUpdateArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Demandes.
     * @param {DemandeDeleteManyArgs} args - Arguments to filter Demandes to delete.
     * @example
     * // Delete a few Demandes
     * const { count } = await prisma.demande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemandeDeleteManyArgs>(args?: SelectSubset<T, DemandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Demandes
     * const demande = await prisma.demande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemandeUpdateManyArgs>(args: SelectSubset<T, DemandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandes and returns the data updated in the database.
     * @param {DemandeUpdateManyAndReturnArgs} args - Arguments to update many Demandes.
     * @example
     * // Update many Demandes
     * const demande = await prisma.demande.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Demandes and only return the `id`
     * const demandeWithIdOnly = await prisma.demande.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DemandeUpdateManyAndReturnArgs>(args: SelectSubset<T, DemandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Demande.
     * @param {DemandeUpsertArgs} args - Arguments to update or create a Demande.
     * @example
     * // Update or create a Demande
     * const demande = await prisma.demande.upsert({
     *   create: {
     *     // ... data to create a Demande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Demande we want to update
     *   }
     * })
     */
    upsert<T extends DemandeUpsertArgs>(args: SelectSubset<T, DemandeUpsertArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Demandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeCountArgs} args - Arguments to filter Demandes to count.
     * @example
     * // Count the number of Demandes
     * const count = await prisma.demande.count({
     *   where: {
     *     // ... the filter for the Demandes we want to count
     *   }
     * })
    **/
    count<T extends DemandeCountArgs>(
      args?: Subset<T, DemandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Demande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DemandeAggregateArgs>(args: Subset<T, DemandeAggregateArgs>): Prisma.PrismaPromise<GetDemandeAggregateType<T>>

    /**
     * Group by Demande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeGroupByArgs} args - Group by arguments.
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
      T extends DemandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemandeGroupByArgs['orderBy'] }
        : { orderBy?: DemandeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DemandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Demande model
   */
  readonly fields: DemandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Demande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artisan<T extends Demande$artisanArgs<ExtArgs> = {}>(args?: Subset<T, Demande$artisanArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    avis<T extends Demande$avisArgs<ExtArgs> = {}>(args?: Subset<T, Demande$avisArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    signalement<T extends Demande$signalementArgs<ExtArgs> = {}>(args?: Subset<T, Demande$signalementArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Demande model
   */
  interface DemandeFieldRefs {
    readonly id: FieldRef<"Demande", 'String'>
    readonly metier: FieldRef<"Demande", 'Metier'>
    readonly description: FieldRef<"Demande", 'String'>
    readonly commune: FieldRef<"Demande", 'String'>
    readonly adresse: FieldRef<"Demande", 'String'>
    readonly statut: FieldRef<"Demande", 'StatutDemande'>
    readonly prixDevis: FieldRef<"Demande", 'Int'>
    readonly createdAt: FieldRef<"Demande", 'DateTime'>
    readonly clientId: FieldRef<"Demande", 'String'>
    readonly artisanId: FieldRef<"Demande", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Demande findUnique
   */
  export type DemandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande findUniqueOrThrow
   */
  export type DemandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande findFirst
   */
  export type DemandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandes.
     */
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande findFirstOrThrow
   */
  export type DemandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandes.
     */
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande findMany
   */
  export type DemandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demandes to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandes.
     */
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande create
   */
  export type DemandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Demande.
     */
    data: XOR<DemandeCreateInput, DemandeUncheckedCreateInput>
  }

  /**
   * Demande createMany
   */
  export type DemandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Demandes.
     */
    data: DemandeCreateManyInput | DemandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Demande createManyAndReturn
   */
  export type DemandeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * The data used to create many Demandes.
     */
    data: DemandeCreateManyInput | DemandeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Demande update
   */
  export type DemandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Demande.
     */
    data: XOR<DemandeUpdateInput, DemandeUncheckedUpdateInput>
    /**
     * Choose, which Demande to update.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande updateMany
   */
  export type DemandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Demandes.
     */
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyInput>
    /**
     * Filter which Demandes to update
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to update.
     */
    limit?: number
  }

  /**
   * Demande updateManyAndReturn
   */
  export type DemandeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * The data used to update Demandes.
     */
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyInput>
    /**
     * Filter which Demandes to update
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Demande upsert
   */
  export type DemandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Demande to update in case it exists.
     */
    where: DemandeWhereUniqueInput
    /**
     * In case the Demande found by the `where` argument doesn't exist, create a new Demande with this data.
     */
    create: XOR<DemandeCreateInput, DemandeUncheckedCreateInput>
    /**
     * In case the Demande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemandeUpdateInput, DemandeUncheckedUpdateInput>
  }

  /**
   * Demande delete
   */
  export type DemandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter which Demande to delete.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande deleteMany
   */
  export type DemandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demandes to delete
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to delete.
     */
    limit?: number
  }

  /**
   * Demande.artisan
   */
  export type Demande$artisanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    where?: ArtisanWhereInput
  }

  /**
   * Demande.avis
   */
  export type Demande$avisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    where?: AvisWhereInput
  }

  /**
   * Demande.signalement
   */
  export type Demande$signalementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
    where?: SignalementWhereInput
  }

  /**
   * Demande without action
   */
  export type DemandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
  }


  /**
   * Model Avis
   */

  export type AggregateAvis = {
    _count: AvisCountAggregateOutputType | null
    _avg: AvisAvgAggregateOutputType | null
    _sum: AvisSumAggregateOutputType | null
    _min: AvisMinAggregateOutputType | null
    _max: AvisMaxAggregateOutputType | null
  }

  export type AvisAvgAggregateOutputType = {
    note: number | null
  }

  export type AvisSumAggregateOutputType = {
    note: number | null
  }

  export type AvisMinAggregateOutputType = {
    id: string | null
    note: number | null
    commentaire: string | null
    createdAt: Date | null
    demandeId: string | null
    artisanId: string | null
    clientId: string | null
  }

  export type AvisMaxAggregateOutputType = {
    id: string | null
    note: number | null
    commentaire: string | null
    createdAt: Date | null
    demandeId: string | null
    artisanId: string | null
    clientId: string | null
  }

  export type AvisCountAggregateOutputType = {
    id: number
    note: number
    commentaire: number
    createdAt: number
    demandeId: number
    artisanId: number
    clientId: number
    _all: number
  }


  export type AvisAvgAggregateInputType = {
    note?: true
  }

  export type AvisSumAggregateInputType = {
    note?: true
  }

  export type AvisMinAggregateInputType = {
    id?: true
    note?: true
    commentaire?: true
    createdAt?: true
    demandeId?: true
    artisanId?: true
    clientId?: true
  }

  export type AvisMaxAggregateInputType = {
    id?: true
    note?: true
    commentaire?: true
    createdAt?: true
    demandeId?: true
    artisanId?: true
    clientId?: true
  }

  export type AvisCountAggregateInputType = {
    id?: true
    note?: true
    commentaire?: true
    createdAt?: true
    demandeId?: true
    artisanId?: true
    clientId?: true
    _all?: true
  }

  export type AvisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avis to aggregate.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avis
    **/
    _count?: true | AvisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvisMaxAggregateInputType
  }

  export type GetAvisAggregateType<T extends AvisAggregateArgs> = {
        [P in keyof T & keyof AggregateAvis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvis[P]>
      : GetScalarType<T[P], AggregateAvis[P]>
  }




  export type AvisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisWhereInput
    orderBy?: AvisOrderByWithAggregationInput | AvisOrderByWithAggregationInput[]
    by: AvisScalarFieldEnum[] | AvisScalarFieldEnum
    having?: AvisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvisCountAggregateInputType | true
    _avg?: AvisAvgAggregateInputType
    _sum?: AvisSumAggregateInputType
    _min?: AvisMinAggregateInputType
    _max?: AvisMaxAggregateInputType
  }

  export type AvisGroupByOutputType = {
    id: string
    note: number
    commentaire: string
    createdAt: Date
    demandeId: string
    artisanId: string
    clientId: string
    _count: AvisCountAggregateOutputType | null
    _avg: AvisAvgAggregateOutputType | null
    _sum: AvisSumAggregateOutputType | null
    _min: AvisMinAggregateOutputType | null
    _max: AvisMaxAggregateOutputType | null
  }

  type GetAvisGroupByPayload<T extends AvisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvisGroupByOutputType[P]>
            : GetScalarType<T[P], AvisGroupByOutputType[P]>
        }
      >
    >


  export type AvisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    commentaire?: boolean
    createdAt?: boolean
    demandeId?: boolean
    artisanId?: boolean
    clientId?: boolean
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avis"]>

  export type AvisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    commentaire?: boolean
    createdAt?: boolean
    demandeId?: boolean
    artisanId?: boolean
    clientId?: boolean
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avis"]>

  export type AvisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    commentaire?: boolean
    createdAt?: boolean
    demandeId?: boolean
    artisanId?: boolean
    clientId?: boolean
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avis"]>

  export type AvisSelectScalar = {
    id?: boolean
    note?: boolean
    commentaire?: boolean
    createdAt?: boolean
    demandeId?: boolean
    artisanId?: boolean
    clientId?: boolean
  }

  export type AvisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "note" | "commentaire" | "createdAt" | "demandeId" | "artisanId" | "clientId", ExtArgs["result"]["avis"]>
  export type AvisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AvisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AvisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AvisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avis"
    objects: {
      demande: Prisma.$DemandePayload<ExtArgs>
      artisan: Prisma.$ArtisanPayload<ExtArgs>
      client: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      note: number
      commentaire: string
      createdAt: Date
      demandeId: string
      artisanId: string
      clientId: string
    }, ExtArgs["result"]["avis"]>
    composites: {}
  }

  type AvisGetPayload<S extends boolean | null | undefined | AvisDefaultArgs> = $Result.GetResult<Prisma.$AvisPayload, S>

  type AvisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvisCountAggregateInputType | true
    }

  export interface AvisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avis'], meta: { name: 'Avis' } }
    /**
     * Find zero or one Avis that matches the filter.
     * @param {AvisFindUniqueArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvisFindUniqueArgs>(args: SelectSubset<T, AvisFindUniqueArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvisFindUniqueOrThrowArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvisFindUniqueOrThrowArgs>(args: SelectSubset<T, AvisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisFindFirstArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvisFindFirstArgs>(args?: SelectSubset<T, AvisFindFirstArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisFindFirstOrThrowArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvisFindFirstOrThrowArgs>(args?: SelectSubset<T, AvisFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avis
     * const avis = await prisma.avis.findMany()
     * 
     * // Get first 10 Avis
     * const avis = await prisma.avis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avisWithIdOnly = await prisma.avis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvisFindManyArgs>(args?: SelectSubset<T, AvisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avis.
     * @param {AvisCreateArgs} args - Arguments to create a Avis.
     * @example
     * // Create one Avis
     * const Avis = await prisma.avis.create({
     *   data: {
     *     // ... data to create a Avis
     *   }
     * })
     * 
     */
    create<T extends AvisCreateArgs>(args: SelectSubset<T, AvisCreateArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avis.
     * @param {AvisCreateManyArgs} args - Arguments to create many Avis.
     * @example
     * // Create many Avis
     * const avis = await prisma.avis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvisCreateManyArgs>(args?: SelectSubset<T, AvisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avis and returns the data saved in the database.
     * @param {AvisCreateManyAndReturnArgs} args - Arguments to create many Avis.
     * @example
     * // Create many Avis
     * const avis = await prisma.avis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avis and only return the `id`
     * const avisWithIdOnly = await prisma.avis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvisCreateManyAndReturnArgs>(args?: SelectSubset<T, AvisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avis.
     * @param {AvisDeleteArgs} args - Arguments to delete one Avis.
     * @example
     * // Delete one Avis
     * const Avis = await prisma.avis.delete({
     *   where: {
     *     // ... filter to delete one Avis
     *   }
     * })
     * 
     */
    delete<T extends AvisDeleteArgs>(args: SelectSubset<T, AvisDeleteArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avis.
     * @param {AvisUpdateArgs} args - Arguments to update one Avis.
     * @example
     * // Update one Avis
     * const avis = await prisma.avis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvisUpdateArgs>(args: SelectSubset<T, AvisUpdateArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avis.
     * @param {AvisDeleteManyArgs} args - Arguments to filter Avis to delete.
     * @example
     * // Delete a few Avis
     * const { count } = await prisma.avis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvisDeleteManyArgs>(args?: SelectSubset<T, AvisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avis
     * const avis = await prisma.avis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvisUpdateManyArgs>(args: SelectSubset<T, AvisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avis and returns the data updated in the database.
     * @param {AvisUpdateManyAndReturnArgs} args - Arguments to update many Avis.
     * @example
     * // Update many Avis
     * const avis = await prisma.avis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avis and only return the `id`
     * const avisWithIdOnly = await prisma.avis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvisUpdateManyAndReturnArgs>(args: SelectSubset<T, AvisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avis.
     * @param {AvisUpsertArgs} args - Arguments to update or create a Avis.
     * @example
     * // Update or create a Avis
     * const avis = await prisma.avis.upsert({
     *   create: {
     *     // ... data to create a Avis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avis we want to update
     *   }
     * })
     */
    upsert<T extends AvisUpsertArgs>(args: SelectSubset<T, AvisUpsertArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisCountArgs} args - Arguments to filter Avis to count.
     * @example
     * // Count the number of Avis
     * const count = await prisma.avis.count({
     *   where: {
     *     // ... the filter for the Avis we want to count
     *   }
     * })
    **/
    count<T extends AvisCountArgs>(
      args?: Subset<T, AvisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvisAggregateArgs>(args: Subset<T, AvisAggregateArgs>): Prisma.PrismaPromise<GetAvisAggregateType<T>>

    /**
     * Group by Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisGroupByArgs} args - Group by arguments.
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
      T extends AvisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvisGroupByArgs['orderBy'] }
        : { orderBy?: AvisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avis model
   */
  readonly fields: AvisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demande<T extends DemandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DemandeDefaultArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artisan<T extends ArtisanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtisanDefaultArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Avis model
   */
  interface AvisFieldRefs {
    readonly id: FieldRef<"Avis", 'String'>
    readonly note: FieldRef<"Avis", 'Int'>
    readonly commentaire: FieldRef<"Avis", 'String'>
    readonly createdAt: FieldRef<"Avis", 'DateTime'>
    readonly demandeId: FieldRef<"Avis", 'String'>
    readonly artisanId: FieldRef<"Avis", 'String'>
    readonly clientId: FieldRef<"Avis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Avis findUnique
   */
  export type AvisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis findUniqueOrThrow
   */
  export type AvisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis findFirst
   */
  export type AvisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avis.
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avis.
     */
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Avis findFirstOrThrow
   */
  export type AvisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avis.
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avis.
     */
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Avis findMany
   */
  export type AvisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avis.
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avis.
     */
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Avis create
   */
  export type AvisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * The data needed to create a Avis.
     */
    data: XOR<AvisCreateInput, AvisUncheckedCreateInput>
  }

  /**
   * Avis createMany
   */
  export type AvisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avis.
     */
    data: AvisCreateManyInput | AvisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avis createManyAndReturn
   */
  export type AvisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * The data used to create many Avis.
     */
    data: AvisCreateManyInput | AvisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avis update
   */
  export type AvisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * The data needed to update a Avis.
     */
    data: XOR<AvisUpdateInput, AvisUncheckedUpdateInput>
    /**
     * Choose, which Avis to update.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis updateMany
   */
  export type AvisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avis.
     */
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyInput>
    /**
     * Filter which Avis to update
     */
    where?: AvisWhereInput
    /**
     * Limit how many Avis to update.
     */
    limit?: number
  }

  /**
   * Avis updateManyAndReturn
   */
  export type AvisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * The data used to update Avis.
     */
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyInput>
    /**
     * Filter which Avis to update
     */
    where?: AvisWhereInput
    /**
     * Limit how many Avis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avis upsert
   */
  export type AvisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * The filter to search for the Avis to update in case it exists.
     */
    where: AvisWhereUniqueInput
    /**
     * In case the Avis found by the `where` argument doesn't exist, create a new Avis with this data.
     */
    create: XOR<AvisCreateInput, AvisUncheckedCreateInput>
    /**
     * In case the Avis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvisUpdateInput, AvisUncheckedUpdateInput>
  }

  /**
   * Avis delete
   */
  export type AvisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter which Avis to delete.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis deleteMany
   */
  export type AvisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avis to delete
     */
    where?: AvisWhereInput
    /**
     * Limit how many Avis to delete.
     */
    limit?: number
  }

  /**
   * Avis without action
   */
  export type AvisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
  }


  /**
   * Model Signalement
   */

  export type AggregateSignalement = {
    _count: SignalementCountAggregateOutputType | null
    _min: SignalementMinAggregateOutputType | null
    _max: SignalementMaxAggregateOutputType | null
  }

  export type SignalementMinAggregateOutputType = {
    id: string | null
    motif: $Enums.MotifSignalement | null
    description: string | null
    statut: $Enums.StatutSignalement | null
    createdAt: Date | null
    demandeId: string | null
    artisanId: string | null
    clientId: string | null
  }

  export type SignalementMaxAggregateOutputType = {
    id: string | null
    motif: $Enums.MotifSignalement | null
    description: string | null
    statut: $Enums.StatutSignalement | null
    createdAt: Date | null
    demandeId: string | null
    artisanId: string | null
    clientId: string | null
  }

  export type SignalementCountAggregateOutputType = {
    id: number
    motif: number
    description: number
    statut: number
    createdAt: number
    demandeId: number
    artisanId: number
    clientId: number
    _all: number
  }


  export type SignalementMinAggregateInputType = {
    id?: true
    motif?: true
    description?: true
    statut?: true
    createdAt?: true
    demandeId?: true
    artisanId?: true
    clientId?: true
  }

  export type SignalementMaxAggregateInputType = {
    id?: true
    motif?: true
    description?: true
    statut?: true
    createdAt?: true
    demandeId?: true
    artisanId?: true
    clientId?: true
  }

  export type SignalementCountAggregateInputType = {
    id?: true
    motif?: true
    description?: true
    statut?: true
    createdAt?: true
    demandeId?: true
    artisanId?: true
    clientId?: true
    _all?: true
  }

  export type SignalementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signalement to aggregate.
     */
    where?: SignalementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalements to fetch.
     */
    orderBy?: SignalementOrderByWithRelationInput | SignalementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignalementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Signalements
    **/
    _count?: true | SignalementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignalementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignalementMaxAggregateInputType
  }

  export type GetSignalementAggregateType<T extends SignalementAggregateArgs> = {
        [P in keyof T & keyof AggregateSignalement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignalement[P]>
      : GetScalarType<T[P], AggregateSignalement[P]>
  }




  export type SignalementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalementWhereInput
    orderBy?: SignalementOrderByWithAggregationInput | SignalementOrderByWithAggregationInput[]
    by: SignalementScalarFieldEnum[] | SignalementScalarFieldEnum
    having?: SignalementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignalementCountAggregateInputType | true
    _min?: SignalementMinAggregateInputType
    _max?: SignalementMaxAggregateInputType
  }

  export type SignalementGroupByOutputType = {
    id: string
    motif: $Enums.MotifSignalement
    description: string
    statut: $Enums.StatutSignalement
    createdAt: Date
    demandeId: string | null
    artisanId: string
    clientId: string
    _count: SignalementCountAggregateOutputType | null
    _min: SignalementMinAggregateOutputType | null
    _max: SignalementMaxAggregateOutputType | null
  }

  type GetSignalementGroupByPayload<T extends SignalementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignalementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignalementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignalementGroupByOutputType[P]>
            : GetScalarType<T[P], SignalementGroupByOutputType[P]>
        }
      >
    >


  export type SignalementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    motif?: boolean
    description?: boolean
    statut?: boolean
    createdAt?: boolean
    demandeId?: boolean
    artisanId?: boolean
    clientId?: boolean
    demande?: boolean | Signalement$demandeArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signalement"]>

  export type SignalementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    motif?: boolean
    description?: boolean
    statut?: boolean
    createdAt?: boolean
    demandeId?: boolean
    artisanId?: boolean
    clientId?: boolean
    demande?: boolean | Signalement$demandeArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signalement"]>

  export type SignalementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    motif?: boolean
    description?: boolean
    statut?: boolean
    createdAt?: boolean
    demandeId?: boolean
    artisanId?: boolean
    clientId?: boolean
    demande?: boolean | Signalement$demandeArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signalement"]>

  export type SignalementSelectScalar = {
    id?: boolean
    motif?: boolean
    description?: boolean
    statut?: boolean
    createdAt?: boolean
    demandeId?: boolean
    artisanId?: boolean
    clientId?: boolean
  }

  export type SignalementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "motif" | "description" | "statut" | "createdAt" | "demandeId" | "artisanId" | "clientId", ExtArgs["result"]["signalement"]>
  export type SignalementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | Signalement$demandeArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SignalementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | Signalement$demandeArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SignalementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | Signalement$demandeArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    client?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SignalementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Signalement"
    objects: {
      demande: Prisma.$DemandePayload<ExtArgs> | null
      artisan: Prisma.$ArtisanPayload<ExtArgs>
      client: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      motif: $Enums.MotifSignalement
      description: string
      statut: $Enums.StatutSignalement
      createdAt: Date
      demandeId: string | null
      artisanId: string
      clientId: string
    }, ExtArgs["result"]["signalement"]>
    composites: {}
  }

  type SignalementGetPayload<S extends boolean | null | undefined | SignalementDefaultArgs> = $Result.GetResult<Prisma.$SignalementPayload, S>

  type SignalementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignalementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignalementCountAggregateInputType | true
    }

  export interface SignalementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Signalement'], meta: { name: 'Signalement' } }
    /**
     * Find zero or one Signalement that matches the filter.
     * @param {SignalementFindUniqueArgs} args - Arguments to find a Signalement
     * @example
     * // Get one Signalement
     * const signalement = await prisma.signalement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignalementFindUniqueArgs>(args: SelectSubset<T, SignalementFindUniqueArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Signalement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignalementFindUniqueOrThrowArgs} args - Arguments to find a Signalement
     * @example
     * // Get one Signalement
     * const signalement = await prisma.signalement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignalementFindUniqueOrThrowArgs>(args: SelectSubset<T, SignalementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signalement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementFindFirstArgs} args - Arguments to find a Signalement
     * @example
     * // Get one Signalement
     * const signalement = await prisma.signalement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignalementFindFirstArgs>(args?: SelectSubset<T, SignalementFindFirstArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signalement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementFindFirstOrThrowArgs} args - Arguments to find a Signalement
     * @example
     * // Get one Signalement
     * const signalement = await prisma.signalement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignalementFindFirstOrThrowArgs>(args?: SelectSubset<T, SignalementFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Signalements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signalements
     * const signalements = await prisma.signalement.findMany()
     * 
     * // Get first 10 Signalements
     * const signalements = await prisma.signalement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signalementWithIdOnly = await prisma.signalement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignalementFindManyArgs>(args?: SelectSubset<T, SignalementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Signalement.
     * @param {SignalementCreateArgs} args - Arguments to create a Signalement.
     * @example
     * // Create one Signalement
     * const Signalement = await prisma.signalement.create({
     *   data: {
     *     // ... data to create a Signalement
     *   }
     * })
     * 
     */
    create<T extends SignalementCreateArgs>(args: SelectSubset<T, SignalementCreateArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Signalements.
     * @param {SignalementCreateManyArgs} args - Arguments to create many Signalements.
     * @example
     * // Create many Signalements
     * const signalement = await prisma.signalement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignalementCreateManyArgs>(args?: SelectSubset<T, SignalementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Signalements and returns the data saved in the database.
     * @param {SignalementCreateManyAndReturnArgs} args - Arguments to create many Signalements.
     * @example
     * // Create many Signalements
     * const signalement = await prisma.signalement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Signalements and only return the `id`
     * const signalementWithIdOnly = await prisma.signalement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignalementCreateManyAndReturnArgs>(args?: SelectSubset<T, SignalementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Signalement.
     * @param {SignalementDeleteArgs} args - Arguments to delete one Signalement.
     * @example
     * // Delete one Signalement
     * const Signalement = await prisma.signalement.delete({
     *   where: {
     *     // ... filter to delete one Signalement
     *   }
     * })
     * 
     */
    delete<T extends SignalementDeleteArgs>(args: SelectSubset<T, SignalementDeleteArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Signalement.
     * @param {SignalementUpdateArgs} args - Arguments to update one Signalement.
     * @example
     * // Update one Signalement
     * const signalement = await prisma.signalement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignalementUpdateArgs>(args: SelectSubset<T, SignalementUpdateArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Signalements.
     * @param {SignalementDeleteManyArgs} args - Arguments to filter Signalements to delete.
     * @example
     * // Delete a few Signalements
     * const { count } = await prisma.signalement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignalementDeleteManyArgs>(args?: SelectSubset<T, SignalementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signalements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signalements
     * const signalement = await prisma.signalement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignalementUpdateManyArgs>(args: SelectSubset<T, SignalementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signalements and returns the data updated in the database.
     * @param {SignalementUpdateManyAndReturnArgs} args - Arguments to update many Signalements.
     * @example
     * // Update many Signalements
     * const signalement = await prisma.signalement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Signalements and only return the `id`
     * const signalementWithIdOnly = await prisma.signalement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SignalementUpdateManyAndReturnArgs>(args: SelectSubset<T, SignalementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Signalement.
     * @param {SignalementUpsertArgs} args - Arguments to update or create a Signalement.
     * @example
     * // Update or create a Signalement
     * const signalement = await prisma.signalement.upsert({
     *   create: {
     *     // ... data to create a Signalement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Signalement we want to update
     *   }
     * })
     */
    upsert<T extends SignalementUpsertArgs>(args: SelectSubset<T, SignalementUpsertArgs<ExtArgs>>): Prisma__SignalementClient<$Result.GetResult<Prisma.$SignalementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Signalements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementCountArgs} args - Arguments to filter Signalements to count.
     * @example
     * // Count the number of Signalements
     * const count = await prisma.signalement.count({
     *   where: {
     *     // ... the filter for the Signalements we want to count
     *   }
     * })
    **/
    count<T extends SignalementCountArgs>(
      args?: Subset<T, SignalementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignalementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Signalement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SignalementAggregateArgs>(args: Subset<T, SignalementAggregateArgs>): Prisma.PrismaPromise<GetSignalementAggregateType<T>>

    /**
     * Group by Signalement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalementGroupByArgs} args - Group by arguments.
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
      T extends SignalementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignalementGroupByArgs['orderBy'] }
        : { orderBy?: SignalementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SignalementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignalementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Signalement model
   */
  readonly fields: SignalementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Signalement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignalementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demande<T extends Signalement$demandeArgs<ExtArgs> = {}>(args?: Subset<T, Signalement$demandeArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    artisan<T extends ArtisanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtisanDefaultArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Signalement model
   */
  interface SignalementFieldRefs {
    readonly id: FieldRef<"Signalement", 'String'>
    readonly motif: FieldRef<"Signalement", 'MotifSignalement'>
    readonly description: FieldRef<"Signalement", 'String'>
    readonly statut: FieldRef<"Signalement", 'StatutSignalement'>
    readonly createdAt: FieldRef<"Signalement", 'DateTime'>
    readonly demandeId: FieldRef<"Signalement", 'String'>
    readonly artisanId: FieldRef<"Signalement", 'String'>
    readonly clientId: FieldRef<"Signalement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Signalement findUnique
   */
  export type SignalementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
    /**
     * Filter, which Signalement to fetch.
     */
    where: SignalementWhereUniqueInput
  }

  /**
   * Signalement findUniqueOrThrow
   */
  export type SignalementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
    /**
     * Filter, which Signalement to fetch.
     */
    where: SignalementWhereUniqueInput
  }

  /**
   * Signalement findFirst
   */
  export type SignalementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
    /**
     * Filter, which Signalement to fetch.
     */
    where?: SignalementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalements to fetch.
     */
    orderBy?: SignalementOrderByWithRelationInput | SignalementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signalements.
     */
    cursor?: SignalementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signalements.
     */
    distinct?: SignalementScalarFieldEnum | SignalementScalarFieldEnum[]
  }

  /**
   * Signalement findFirstOrThrow
   */
  export type SignalementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
    /**
     * Filter, which Signalement to fetch.
     */
    where?: SignalementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalements to fetch.
     */
    orderBy?: SignalementOrderByWithRelationInput | SignalementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signalements.
     */
    cursor?: SignalementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signalements.
     */
    distinct?: SignalementScalarFieldEnum | SignalementScalarFieldEnum[]
  }

  /**
   * Signalement findMany
   */
  export type SignalementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
    /**
     * Filter, which Signalements to fetch.
     */
    where?: SignalementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signalements to fetch.
     */
    orderBy?: SignalementOrderByWithRelationInput | SignalementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Signalements.
     */
    cursor?: SignalementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signalements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signalements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signalements.
     */
    distinct?: SignalementScalarFieldEnum | SignalementScalarFieldEnum[]
  }

  /**
   * Signalement create
   */
  export type SignalementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
    /**
     * The data needed to create a Signalement.
     */
    data: XOR<SignalementCreateInput, SignalementUncheckedCreateInput>
  }

  /**
   * Signalement createMany
   */
  export type SignalementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Signalements.
     */
    data: SignalementCreateManyInput | SignalementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signalement createManyAndReturn
   */
  export type SignalementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * The data used to create many Signalements.
     */
    data: SignalementCreateManyInput | SignalementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signalement update
   */
  export type SignalementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
    /**
     * The data needed to update a Signalement.
     */
    data: XOR<SignalementUpdateInput, SignalementUncheckedUpdateInput>
    /**
     * Choose, which Signalement to update.
     */
    where: SignalementWhereUniqueInput
  }

  /**
   * Signalement updateMany
   */
  export type SignalementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Signalements.
     */
    data: XOR<SignalementUpdateManyMutationInput, SignalementUncheckedUpdateManyInput>
    /**
     * Filter which Signalements to update
     */
    where?: SignalementWhereInput
    /**
     * Limit how many Signalements to update.
     */
    limit?: number
  }

  /**
   * Signalement updateManyAndReturn
   */
  export type SignalementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * The data used to update Signalements.
     */
    data: XOR<SignalementUpdateManyMutationInput, SignalementUncheckedUpdateManyInput>
    /**
     * Filter which Signalements to update
     */
    where?: SignalementWhereInput
    /**
     * Limit how many Signalements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signalement upsert
   */
  export type SignalementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
    /**
     * The filter to search for the Signalement to update in case it exists.
     */
    where: SignalementWhereUniqueInput
    /**
     * In case the Signalement found by the `where` argument doesn't exist, create a new Signalement with this data.
     */
    create: XOR<SignalementCreateInput, SignalementUncheckedCreateInput>
    /**
     * In case the Signalement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignalementUpdateInput, SignalementUncheckedUpdateInput>
  }

  /**
   * Signalement delete
   */
  export type SignalementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
    /**
     * Filter which Signalement to delete.
     */
    where: SignalementWhereUniqueInput
  }

  /**
   * Signalement deleteMany
   */
  export type SignalementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signalements to delete
     */
    where?: SignalementWhereInput
    /**
     * Limit how many Signalements to delete.
     */
    limit?: number
  }

  /**
   * Signalement.demande
   */
  export type Signalement$demandeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
  }

  /**
   * Signalement without action
   */
  export type SignalementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signalement
     */
    select?: SignalementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signalement
     */
    omit?: SignalementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalementInclude<ExtArgs> | null
  }


  /**
   * Model CodeVerif
   */

  export type AggregateCodeVerif = {
    _count: CodeVerifCountAggregateOutputType | null
    _min: CodeVerifMinAggregateOutputType | null
    _max: CodeVerifMaxAggregateOutputType | null
  }

  export type CodeVerifMinAggregateOutputType = {
    id: string | null
    phone: string | null
    code: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type CodeVerifMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    code: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type CodeVerifCountAggregateOutputType = {
    id: number
    phone: number
    code: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type CodeVerifMinAggregateInputType = {
    id?: true
    phone?: true
    code?: true
    expiresAt?: true
    createdAt?: true
  }

  export type CodeVerifMaxAggregateInputType = {
    id?: true
    phone?: true
    code?: true
    expiresAt?: true
    createdAt?: true
  }

  export type CodeVerifCountAggregateInputType = {
    id?: true
    phone?: true
    code?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type CodeVerifAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeVerif to aggregate.
     */
    where?: CodeVerifWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeVerifs to fetch.
     */
    orderBy?: CodeVerifOrderByWithRelationInput | CodeVerifOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeVerifWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeVerifs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeVerifs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeVerifs
    **/
    _count?: true | CodeVerifCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeVerifMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeVerifMaxAggregateInputType
  }

  export type GetCodeVerifAggregateType<T extends CodeVerifAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeVerif]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeVerif[P]>
      : GetScalarType<T[P], AggregateCodeVerif[P]>
  }




  export type CodeVerifGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeVerifWhereInput
    orderBy?: CodeVerifOrderByWithAggregationInput | CodeVerifOrderByWithAggregationInput[]
    by: CodeVerifScalarFieldEnum[] | CodeVerifScalarFieldEnum
    having?: CodeVerifScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeVerifCountAggregateInputType | true
    _min?: CodeVerifMinAggregateInputType
    _max?: CodeVerifMaxAggregateInputType
  }

  export type CodeVerifGroupByOutputType = {
    id: string
    phone: string
    code: string
    expiresAt: Date
    createdAt: Date
    _count: CodeVerifCountAggregateOutputType | null
    _min: CodeVerifMinAggregateOutputType | null
    _max: CodeVerifMaxAggregateOutputType | null
  }

  type GetCodeVerifGroupByPayload<T extends CodeVerifGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeVerifGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeVerifGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeVerifGroupByOutputType[P]>
            : GetScalarType<T[P], CodeVerifGroupByOutputType[P]>
        }
      >
    >


  export type CodeVerifSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["codeVerif"]>

  export type CodeVerifSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["codeVerif"]>

  export type CodeVerifSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["codeVerif"]>

  export type CodeVerifSelectScalar = {
    id?: boolean
    phone?: boolean
    code?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type CodeVerifOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "code" | "expiresAt" | "createdAt", ExtArgs["result"]["codeVerif"]>

  export type $CodeVerifPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeVerif"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      code: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["codeVerif"]>
    composites: {}
  }

  type CodeVerifGetPayload<S extends boolean | null | undefined | CodeVerifDefaultArgs> = $Result.GetResult<Prisma.$CodeVerifPayload, S>

  type CodeVerifCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeVerifFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeVerifCountAggregateInputType | true
    }

  export interface CodeVerifDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeVerif'], meta: { name: 'CodeVerif' } }
    /**
     * Find zero or one CodeVerif that matches the filter.
     * @param {CodeVerifFindUniqueArgs} args - Arguments to find a CodeVerif
     * @example
     * // Get one CodeVerif
     * const codeVerif = await prisma.codeVerif.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeVerifFindUniqueArgs>(args: SelectSubset<T, CodeVerifFindUniqueArgs<ExtArgs>>): Prisma__CodeVerifClient<$Result.GetResult<Prisma.$CodeVerifPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodeVerif that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeVerifFindUniqueOrThrowArgs} args - Arguments to find a CodeVerif
     * @example
     * // Get one CodeVerif
     * const codeVerif = await prisma.codeVerif.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeVerifFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeVerifFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeVerifClient<$Result.GetResult<Prisma.$CodeVerifPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeVerif that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeVerifFindFirstArgs} args - Arguments to find a CodeVerif
     * @example
     * // Get one CodeVerif
     * const codeVerif = await prisma.codeVerif.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeVerifFindFirstArgs>(args?: SelectSubset<T, CodeVerifFindFirstArgs<ExtArgs>>): Prisma__CodeVerifClient<$Result.GetResult<Prisma.$CodeVerifPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeVerif that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeVerifFindFirstOrThrowArgs} args - Arguments to find a CodeVerif
     * @example
     * // Get one CodeVerif
     * const codeVerif = await prisma.codeVerif.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeVerifFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeVerifFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeVerifClient<$Result.GetResult<Prisma.$CodeVerifPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodeVerifs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeVerifFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeVerifs
     * const codeVerifs = await prisma.codeVerif.findMany()
     * 
     * // Get first 10 CodeVerifs
     * const codeVerifs = await prisma.codeVerif.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeVerifWithIdOnly = await prisma.codeVerif.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeVerifFindManyArgs>(args?: SelectSubset<T, CodeVerifFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeVerifPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodeVerif.
     * @param {CodeVerifCreateArgs} args - Arguments to create a CodeVerif.
     * @example
     * // Create one CodeVerif
     * const CodeVerif = await prisma.codeVerif.create({
     *   data: {
     *     // ... data to create a CodeVerif
     *   }
     * })
     * 
     */
    create<T extends CodeVerifCreateArgs>(args: SelectSubset<T, CodeVerifCreateArgs<ExtArgs>>): Prisma__CodeVerifClient<$Result.GetResult<Prisma.$CodeVerifPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodeVerifs.
     * @param {CodeVerifCreateManyArgs} args - Arguments to create many CodeVerifs.
     * @example
     * // Create many CodeVerifs
     * const codeVerif = await prisma.codeVerif.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeVerifCreateManyArgs>(args?: SelectSubset<T, CodeVerifCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodeVerifs and returns the data saved in the database.
     * @param {CodeVerifCreateManyAndReturnArgs} args - Arguments to create many CodeVerifs.
     * @example
     * // Create many CodeVerifs
     * const codeVerif = await prisma.codeVerif.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodeVerifs and only return the `id`
     * const codeVerifWithIdOnly = await prisma.codeVerif.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeVerifCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeVerifCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeVerifPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CodeVerif.
     * @param {CodeVerifDeleteArgs} args - Arguments to delete one CodeVerif.
     * @example
     * // Delete one CodeVerif
     * const CodeVerif = await prisma.codeVerif.delete({
     *   where: {
     *     // ... filter to delete one CodeVerif
     *   }
     * })
     * 
     */
    delete<T extends CodeVerifDeleteArgs>(args: SelectSubset<T, CodeVerifDeleteArgs<ExtArgs>>): Prisma__CodeVerifClient<$Result.GetResult<Prisma.$CodeVerifPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodeVerif.
     * @param {CodeVerifUpdateArgs} args - Arguments to update one CodeVerif.
     * @example
     * // Update one CodeVerif
     * const codeVerif = await prisma.codeVerif.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeVerifUpdateArgs>(args: SelectSubset<T, CodeVerifUpdateArgs<ExtArgs>>): Prisma__CodeVerifClient<$Result.GetResult<Prisma.$CodeVerifPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodeVerifs.
     * @param {CodeVerifDeleteManyArgs} args - Arguments to filter CodeVerifs to delete.
     * @example
     * // Delete a few CodeVerifs
     * const { count } = await prisma.codeVerif.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeVerifDeleteManyArgs>(args?: SelectSubset<T, CodeVerifDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeVerifs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeVerifUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeVerifs
     * const codeVerif = await prisma.codeVerif.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeVerifUpdateManyArgs>(args: SelectSubset<T, CodeVerifUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeVerifs and returns the data updated in the database.
     * @param {CodeVerifUpdateManyAndReturnArgs} args - Arguments to update many CodeVerifs.
     * @example
     * // Update many CodeVerifs
     * const codeVerif = await prisma.codeVerif.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CodeVerifs and only return the `id`
     * const codeVerifWithIdOnly = await prisma.codeVerif.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CodeVerifUpdateManyAndReturnArgs>(args: SelectSubset<T, CodeVerifUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeVerifPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CodeVerif.
     * @param {CodeVerifUpsertArgs} args - Arguments to update or create a CodeVerif.
     * @example
     * // Update or create a CodeVerif
     * const codeVerif = await prisma.codeVerif.upsert({
     *   create: {
     *     // ... data to create a CodeVerif
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeVerif we want to update
     *   }
     * })
     */
    upsert<T extends CodeVerifUpsertArgs>(args: SelectSubset<T, CodeVerifUpsertArgs<ExtArgs>>): Prisma__CodeVerifClient<$Result.GetResult<Prisma.$CodeVerifPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodeVerifs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeVerifCountArgs} args - Arguments to filter CodeVerifs to count.
     * @example
     * // Count the number of CodeVerifs
     * const count = await prisma.codeVerif.count({
     *   where: {
     *     // ... the filter for the CodeVerifs we want to count
     *   }
     * })
    **/
    count<T extends CodeVerifCountArgs>(
      args?: Subset<T, CodeVerifCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeVerifCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeVerif.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeVerifAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeVerifAggregateArgs>(args: Subset<T, CodeVerifAggregateArgs>): Prisma.PrismaPromise<GetCodeVerifAggregateType<T>>

    /**
     * Group by CodeVerif.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeVerifGroupByArgs} args - Group by arguments.
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
      T extends CodeVerifGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeVerifGroupByArgs['orderBy'] }
        : { orderBy?: CodeVerifGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeVerifGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeVerifGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeVerif model
   */
  readonly fields: CodeVerifFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeVerif.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeVerifClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CodeVerif model
   */
  interface CodeVerifFieldRefs {
    readonly id: FieldRef<"CodeVerif", 'String'>
    readonly phone: FieldRef<"CodeVerif", 'String'>
    readonly code: FieldRef<"CodeVerif", 'String'>
    readonly expiresAt: FieldRef<"CodeVerif", 'DateTime'>
    readonly createdAt: FieldRef<"CodeVerif", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CodeVerif findUnique
   */
  export type CodeVerifFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeVerif
     */
    select?: CodeVerifSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeVerif
     */
    omit?: CodeVerifOmit<ExtArgs> | null
    /**
     * Filter, which CodeVerif to fetch.
     */
    where: CodeVerifWhereUniqueInput
  }

  /**
   * CodeVerif findUniqueOrThrow
   */
  export type CodeVerifFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeVerif
     */
    select?: CodeVerifSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeVerif
     */
    omit?: CodeVerifOmit<ExtArgs> | null
    /**
     * Filter, which CodeVerif to fetch.
     */
    where: CodeVerifWhereUniqueInput
  }

  /**
   * CodeVerif findFirst
   */
  export type CodeVerifFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeVerif
     */
    select?: CodeVerifSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeVerif
     */
    omit?: CodeVerifOmit<ExtArgs> | null
    /**
     * Filter, which CodeVerif to fetch.
     */
    where?: CodeVerifWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeVerifs to fetch.
     */
    orderBy?: CodeVerifOrderByWithRelationInput | CodeVerifOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeVerifs.
     */
    cursor?: CodeVerifWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeVerifs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeVerifs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeVerifs.
     */
    distinct?: CodeVerifScalarFieldEnum | CodeVerifScalarFieldEnum[]
  }

  /**
   * CodeVerif findFirstOrThrow
   */
  export type CodeVerifFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeVerif
     */
    select?: CodeVerifSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeVerif
     */
    omit?: CodeVerifOmit<ExtArgs> | null
    /**
     * Filter, which CodeVerif to fetch.
     */
    where?: CodeVerifWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeVerifs to fetch.
     */
    orderBy?: CodeVerifOrderByWithRelationInput | CodeVerifOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeVerifs.
     */
    cursor?: CodeVerifWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeVerifs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeVerifs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeVerifs.
     */
    distinct?: CodeVerifScalarFieldEnum | CodeVerifScalarFieldEnum[]
  }

  /**
   * CodeVerif findMany
   */
  export type CodeVerifFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeVerif
     */
    select?: CodeVerifSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeVerif
     */
    omit?: CodeVerifOmit<ExtArgs> | null
    /**
     * Filter, which CodeVerifs to fetch.
     */
    where?: CodeVerifWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeVerifs to fetch.
     */
    orderBy?: CodeVerifOrderByWithRelationInput | CodeVerifOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeVerifs.
     */
    cursor?: CodeVerifWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeVerifs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeVerifs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeVerifs.
     */
    distinct?: CodeVerifScalarFieldEnum | CodeVerifScalarFieldEnum[]
  }

  /**
   * CodeVerif create
   */
  export type CodeVerifCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeVerif
     */
    select?: CodeVerifSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeVerif
     */
    omit?: CodeVerifOmit<ExtArgs> | null
    /**
     * The data needed to create a CodeVerif.
     */
    data: XOR<CodeVerifCreateInput, CodeVerifUncheckedCreateInput>
  }

  /**
   * CodeVerif createMany
   */
  export type CodeVerifCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeVerifs.
     */
    data: CodeVerifCreateManyInput | CodeVerifCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeVerif createManyAndReturn
   */
  export type CodeVerifCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeVerif
     */
    select?: CodeVerifSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeVerif
     */
    omit?: CodeVerifOmit<ExtArgs> | null
    /**
     * The data used to create many CodeVerifs.
     */
    data: CodeVerifCreateManyInput | CodeVerifCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeVerif update
   */
  export type CodeVerifUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeVerif
     */
    select?: CodeVerifSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeVerif
     */
    omit?: CodeVerifOmit<ExtArgs> | null
    /**
     * The data needed to update a CodeVerif.
     */
    data: XOR<CodeVerifUpdateInput, CodeVerifUncheckedUpdateInput>
    /**
     * Choose, which CodeVerif to update.
     */
    where: CodeVerifWhereUniqueInput
  }

  /**
   * CodeVerif updateMany
   */
  export type CodeVerifUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeVerifs.
     */
    data: XOR<CodeVerifUpdateManyMutationInput, CodeVerifUncheckedUpdateManyInput>
    /**
     * Filter which CodeVerifs to update
     */
    where?: CodeVerifWhereInput
    /**
     * Limit how many CodeVerifs to update.
     */
    limit?: number
  }

  /**
   * CodeVerif updateManyAndReturn
   */
  export type CodeVerifUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeVerif
     */
    select?: CodeVerifSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeVerif
     */
    omit?: CodeVerifOmit<ExtArgs> | null
    /**
     * The data used to update CodeVerifs.
     */
    data: XOR<CodeVerifUpdateManyMutationInput, CodeVerifUncheckedUpdateManyInput>
    /**
     * Filter which CodeVerifs to update
     */
    where?: CodeVerifWhereInput
    /**
     * Limit how many CodeVerifs to update.
     */
    limit?: number
  }

  /**
   * CodeVerif upsert
   */
  export type CodeVerifUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeVerif
     */
    select?: CodeVerifSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeVerif
     */
    omit?: CodeVerifOmit<ExtArgs> | null
    /**
     * The filter to search for the CodeVerif to update in case it exists.
     */
    where: CodeVerifWhereUniqueInput
    /**
     * In case the CodeVerif found by the `where` argument doesn't exist, create a new CodeVerif with this data.
     */
    create: XOR<CodeVerifCreateInput, CodeVerifUncheckedCreateInput>
    /**
     * In case the CodeVerif was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeVerifUpdateInput, CodeVerifUncheckedUpdateInput>
  }

  /**
   * CodeVerif delete
   */
  export type CodeVerifDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeVerif
     */
    select?: CodeVerifSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeVerif
     */
    omit?: CodeVerifOmit<ExtArgs> | null
    /**
     * Filter which CodeVerif to delete.
     */
    where: CodeVerifWhereUniqueInput
  }

  /**
   * CodeVerif deleteMany
   */
  export type CodeVerifDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeVerifs to delete
     */
    where?: CodeVerifWhereInput
    /**
     * Limit how many CodeVerifs to delete.
     */
    limit?: number
  }

  /**
   * CodeVerif without action
   */
  export type CodeVerifDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeVerif
     */
    select?: CodeVerifSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeVerif
     */
    omit?: CodeVerifOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArtisanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    metiers: 'metiers',
    commune: 'commune',
    verifie: 'verifie',
    note: 'note',
    nbAvis: 'nbAvis',
    experience: 'experience',
    soldeKobo: 'soldeKobo',
    createdAt: 'createdAt'
  };

  export type ArtisanScalarFieldEnum = (typeof ArtisanScalarFieldEnum)[keyof typeof ArtisanScalarFieldEnum]


  export const DemandeScalarFieldEnum: {
    id: 'id',
    metier: 'metier',
    description: 'description',
    commune: 'commune',
    adresse: 'adresse',
    statut: 'statut',
    prixDevis: 'prixDevis',
    createdAt: 'createdAt',
    clientId: 'clientId',
    artisanId: 'artisanId'
  };

  export type DemandeScalarFieldEnum = (typeof DemandeScalarFieldEnum)[keyof typeof DemandeScalarFieldEnum]


  export const AvisScalarFieldEnum: {
    id: 'id',
    note: 'note',
    commentaire: 'commentaire',
    createdAt: 'createdAt',
    demandeId: 'demandeId',
    artisanId: 'artisanId',
    clientId: 'clientId'
  };

  export type AvisScalarFieldEnum = (typeof AvisScalarFieldEnum)[keyof typeof AvisScalarFieldEnum]


  export const SignalementScalarFieldEnum: {
    id: 'id',
    motif: 'motif',
    description: 'description',
    statut: 'statut',
    createdAt: 'createdAt',
    demandeId: 'demandeId',
    artisanId: 'artisanId',
    clientId: 'clientId'
  };

  export type SignalementScalarFieldEnum = (typeof SignalementScalarFieldEnum)[keyof typeof SignalementScalarFieldEnum]


  export const CodeVerifScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    code: 'code',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type CodeVerifScalarFieldEnum = (typeof CodeVerifScalarFieldEnum)[keyof typeof CodeVerifScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Metier[]'
   */
  export type ListEnumMetierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Metier[]'>
    


  /**
   * Reference to a field of type 'Metier'
   */
  export type EnumMetierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Metier'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatutDemande'
   */
  export type EnumStatutDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDemande'>
    


  /**
   * Reference to a field of type 'StatutDemande[]'
   */
  export type ListEnumStatutDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDemande[]'>
    


  /**
   * Reference to a field of type 'MotifSignalement'
   */
  export type EnumMotifSignalementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MotifSignalement'>
    


  /**
   * Reference to a field of type 'MotifSignalement[]'
   */
  export type ListEnumMotifSignalementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MotifSignalement[]'>
    


  /**
   * Reference to a field of type 'StatutSignalement'
   */
  export type EnumStatutSignalementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutSignalement'>
    


  /**
   * Reference to a field of type 'StatutSignalement[]'
   */
  export type ListEnumStatutSignalementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutSignalement[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    artisan?: XOR<ArtisanNullableScalarRelationFilter, ArtisanWhereInput> | null
    demandesClient?: DemandeListRelationFilter
    avisDonnes?: AvisListRelationFilter
    signalements?: SignalementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    artisan?: ArtisanOrderByWithRelationInput
    demandesClient?: DemandeOrderByRelationAggregateInput
    avisDonnes?: AvisOrderByRelationAggregateInput
    signalements?: SignalementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    artisan?: XOR<ArtisanNullableScalarRelationFilter, ArtisanWhereInput> | null
    demandesClient?: DemandeListRelationFilter
    avisDonnes?: AvisListRelationFilter
    signalements?: SignalementListRelationFilter
  }, "id" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ArtisanWhereInput = {
    AND?: ArtisanWhereInput | ArtisanWhereInput[]
    OR?: ArtisanWhereInput[]
    NOT?: ArtisanWhereInput | ArtisanWhereInput[]
    id?: StringFilter<"Artisan"> | string
    userId?: StringFilter<"Artisan"> | string
    metiers?: EnumMetierNullableListFilter<"Artisan">
    commune?: StringFilter<"Artisan"> | string
    verifie?: BoolFilter<"Artisan"> | boolean
    note?: FloatFilter<"Artisan"> | number
    nbAvis?: IntFilter<"Artisan"> | number
    experience?: IntFilter<"Artisan"> | number
    soldeKobo?: IntFilter<"Artisan"> | number
    createdAt?: DateTimeFilter<"Artisan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    demandes?: DemandeListRelationFilter
    avisRecus?: AvisListRelationFilter
    signalementsRecus?: SignalementListRelationFilter
  }

  export type ArtisanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    metiers?: SortOrder
    commune?: SortOrder
    verifie?: SortOrder
    note?: SortOrder
    nbAvis?: SortOrder
    experience?: SortOrder
    soldeKobo?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    demandes?: DemandeOrderByRelationAggregateInput
    avisRecus?: AvisOrderByRelationAggregateInput
    signalementsRecus?: SignalementOrderByRelationAggregateInput
  }

  export type ArtisanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ArtisanWhereInput | ArtisanWhereInput[]
    OR?: ArtisanWhereInput[]
    NOT?: ArtisanWhereInput | ArtisanWhereInput[]
    metiers?: EnumMetierNullableListFilter<"Artisan">
    commune?: StringFilter<"Artisan"> | string
    verifie?: BoolFilter<"Artisan"> | boolean
    note?: FloatFilter<"Artisan"> | number
    nbAvis?: IntFilter<"Artisan"> | number
    experience?: IntFilter<"Artisan"> | number
    soldeKobo?: IntFilter<"Artisan"> | number
    createdAt?: DateTimeFilter<"Artisan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    demandes?: DemandeListRelationFilter
    avisRecus?: AvisListRelationFilter
    signalementsRecus?: SignalementListRelationFilter
  }, "id" | "userId">

  export type ArtisanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    metiers?: SortOrder
    commune?: SortOrder
    verifie?: SortOrder
    note?: SortOrder
    nbAvis?: SortOrder
    experience?: SortOrder
    soldeKobo?: SortOrder
    createdAt?: SortOrder
    _count?: ArtisanCountOrderByAggregateInput
    _avg?: ArtisanAvgOrderByAggregateInput
    _max?: ArtisanMaxOrderByAggregateInput
    _min?: ArtisanMinOrderByAggregateInput
    _sum?: ArtisanSumOrderByAggregateInput
  }

  export type ArtisanScalarWhereWithAggregatesInput = {
    AND?: ArtisanScalarWhereWithAggregatesInput | ArtisanScalarWhereWithAggregatesInput[]
    OR?: ArtisanScalarWhereWithAggregatesInput[]
    NOT?: ArtisanScalarWhereWithAggregatesInput | ArtisanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artisan"> | string
    userId?: StringWithAggregatesFilter<"Artisan"> | string
    metiers?: EnumMetierNullableListFilter<"Artisan">
    commune?: StringWithAggregatesFilter<"Artisan"> | string
    verifie?: BoolWithAggregatesFilter<"Artisan"> | boolean
    note?: FloatWithAggregatesFilter<"Artisan"> | number
    nbAvis?: IntWithAggregatesFilter<"Artisan"> | number
    experience?: IntWithAggregatesFilter<"Artisan"> | number
    soldeKobo?: IntWithAggregatesFilter<"Artisan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Artisan"> | Date | string
  }

  export type DemandeWhereInput = {
    AND?: DemandeWhereInput | DemandeWhereInput[]
    OR?: DemandeWhereInput[]
    NOT?: DemandeWhereInput | DemandeWhereInput[]
    id?: StringFilter<"Demande"> | string
    metier?: EnumMetierFilter<"Demande"> | $Enums.Metier
    description?: StringFilter<"Demande"> | string
    commune?: StringFilter<"Demande"> | string
    adresse?: StringFilter<"Demande"> | string
    statut?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    prixDevis?: IntNullableFilter<"Demande"> | number | null
    createdAt?: DateTimeFilter<"Demande"> | Date | string
    clientId?: StringFilter<"Demande"> | string
    artisanId?: StringNullableFilter<"Demande"> | string | null
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    artisan?: XOR<ArtisanNullableScalarRelationFilter, ArtisanWhereInput> | null
    avis?: XOR<AvisNullableScalarRelationFilter, AvisWhereInput> | null
    signalement?: XOR<SignalementNullableScalarRelationFilter, SignalementWhereInput> | null
  }

  export type DemandeOrderByWithRelationInput = {
    id?: SortOrder
    metier?: SortOrder
    description?: SortOrder
    commune?: SortOrder
    adresse?: SortOrder
    statut?: SortOrder
    prixDevis?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    artisanId?: SortOrderInput | SortOrder
    client?: UserOrderByWithRelationInput
    artisan?: ArtisanOrderByWithRelationInput
    avis?: AvisOrderByWithRelationInput
    signalement?: SignalementOrderByWithRelationInput
  }

  export type DemandeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DemandeWhereInput | DemandeWhereInput[]
    OR?: DemandeWhereInput[]
    NOT?: DemandeWhereInput | DemandeWhereInput[]
    metier?: EnumMetierFilter<"Demande"> | $Enums.Metier
    description?: StringFilter<"Demande"> | string
    commune?: StringFilter<"Demande"> | string
    adresse?: StringFilter<"Demande"> | string
    statut?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    prixDevis?: IntNullableFilter<"Demande"> | number | null
    createdAt?: DateTimeFilter<"Demande"> | Date | string
    clientId?: StringFilter<"Demande"> | string
    artisanId?: StringNullableFilter<"Demande"> | string | null
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    artisan?: XOR<ArtisanNullableScalarRelationFilter, ArtisanWhereInput> | null
    avis?: XOR<AvisNullableScalarRelationFilter, AvisWhereInput> | null
    signalement?: XOR<SignalementNullableScalarRelationFilter, SignalementWhereInput> | null
  }, "id">

  export type DemandeOrderByWithAggregationInput = {
    id?: SortOrder
    metier?: SortOrder
    description?: SortOrder
    commune?: SortOrder
    adresse?: SortOrder
    statut?: SortOrder
    prixDevis?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    artisanId?: SortOrderInput | SortOrder
    _count?: DemandeCountOrderByAggregateInput
    _avg?: DemandeAvgOrderByAggregateInput
    _max?: DemandeMaxOrderByAggregateInput
    _min?: DemandeMinOrderByAggregateInput
    _sum?: DemandeSumOrderByAggregateInput
  }

  export type DemandeScalarWhereWithAggregatesInput = {
    AND?: DemandeScalarWhereWithAggregatesInput | DemandeScalarWhereWithAggregatesInput[]
    OR?: DemandeScalarWhereWithAggregatesInput[]
    NOT?: DemandeScalarWhereWithAggregatesInput | DemandeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Demande"> | string
    metier?: EnumMetierWithAggregatesFilter<"Demande"> | $Enums.Metier
    description?: StringWithAggregatesFilter<"Demande"> | string
    commune?: StringWithAggregatesFilter<"Demande"> | string
    adresse?: StringWithAggregatesFilter<"Demande"> | string
    statut?: EnumStatutDemandeWithAggregatesFilter<"Demande"> | $Enums.StatutDemande
    prixDevis?: IntNullableWithAggregatesFilter<"Demande"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Demande"> | Date | string
    clientId?: StringWithAggregatesFilter<"Demande"> | string
    artisanId?: StringNullableWithAggregatesFilter<"Demande"> | string | null
  }

  export type AvisWhereInput = {
    AND?: AvisWhereInput | AvisWhereInput[]
    OR?: AvisWhereInput[]
    NOT?: AvisWhereInput | AvisWhereInput[]
    id?: StringFilter<"Avis"> | string
    note?: IntFilter<"Avis"> | number
    commentaire?: StringFilter<"Avis"> | string
    createdAt?: DateTimeFilter<"Avis"> | Date | string
    demandeId?: StringFilter<"Avis"> | string
    artisanId?: StringFilter<"Avis"> | string
    clientId?: StringFilter<"Avis"> | string
    demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
    artisan?: XOR<ArtisanScalarRelationFilter, ArtisanWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AvisOrderByWithRelationInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrder
    createdAt?: SortOrder
    demandeId?: SortOrder
    artisanId?: SortOrder
    clientId?: SortOrder
    demande?: DemandeOrderByWithRelationInput
    artisan?: ArtisanOrderByWithRelationInput
    client?: UserOrderByWithRelationInput
  }

  export type AvisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    demandeId?: string
    AND?: AvisWhereInput | AvisWhereInput[]
    OR?: AvisWhereInput[]
    NOT?: AvisWhereInput | AvisWhereInput[]
    note?: IntFilter<"Avis"> | number
    commentaire?: StringFilter<"Avis"> | string
    createdAt?: DateTimeFilter<"Avis"> | Date | string
    artisanId?: StringFilter<"Avis"> | string
    clientId?: StringFilter<"Avis"> | string
    demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
    artisan?: XOR<ArtisanScalarRelationFilter, ArtisanWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "demandeId">

  export type AvisOrderByWithAggregationInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrder
    createdAt?: SortOrder
    demandeId?: SortOrder
    artisanId?: SortOrder
    clientId?: SortOrder
    _count?: AvisCountOrderByAggregateInput
    _avg?: AvisAvgOrderByAggregateInput
    _max?: AvisMaxOrderByAggregateInput
    _min?: AvisMinOrderByAggregateInput
    _sum?: AvisSumOrderByAggregateInput
  }

  export type AvisScalarWhereWithAggregatesInput = {
    AND?: AvisScalarWhereWithAggregatesInput | AvisScalarWhereWithAggregatesInput[]
    OR?: AvisScalarWhereWithAggregatesInput[]
    NOT?: AvisScalarWhereWithAggregatesInput | AvisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avis"> | string
    note?: IntWithAggregatesFilter<"Avis"> | number
    commentaire?: StringWithAggregatesFilter<"Avis"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Avis"> | Date | string
    demandeId?: StringWithAggregatesFilter<"Avis"> | string
    artisanId?: StringWithAggregatesFilter<"Avis"> | string
    clientId?: StringWithAggregatesFilter<"Avis"> | string
  }

  export type SignalementWhereInput = {
    AND?: SignalementWhereInput | SignalementWhereInput[]
    OR?: SignalementWhereInput[]
    NOT?: SignalementWhereInput | SignalementWhereInput[]
    id?: StringFilter<"Signalement"> | string
    motif?: EnumMotifSignalementFilter<"Signalement"> | $Enums.MotifSignalement
    description?: StringFilter<"Signalement"> | string
    statut?: EnumStatutSignalementFilter<"Signalement"> | $Enums.StatutSignalement
    createdAt?: DateTimeFilter<"Signalement"> | Date | string
    demandeId?: StringNullableFilter<"Signalement"> | string | null
    artisanId?: StringFilter<"Signalement"> | string
    clientId?: StringFilter<"Signalement"> | string
    demande?: XOR<DemandeNullableScalarRelationFilter, DemandeWhereInput> | null
    artisan?: XOR<ArtisanScalarRelationFilter, ArtisanWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SignalementOrderByWithRelationInput = {
    id?: SortOrder
    motif?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    demandeId?: SortOrderInput | SortOrder
    artisanId?: SortOrder
    clientId?: SortOrder
    demande?: DemandeOrderByWithRelationInput
    artisan?: ArtisanOrderByWithRelationInput
    client?: UserOrderByWithRelationInput
  }

  export type SignalementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    demandeId?: string
    AND?: SignalementWhereInput | SignalementWhereInput[]
    OR?: SignalementWhereInput[]
    NOT?: SignalementWhereInput | SignalementWhereInput[]
    motif?: EnumMotifSignalementFilter<"Signalement"> | $Enums.MotifSignalement
    description?: StringFilter<"Signalement"> | string
    statut?: EnumStatutSignalementFilter<"Signalement"> | $Enums.StatutSignalement
    createdAt?: DateTimeFilter<"Signalement"> | Date | string
    artisanId?: StringFilter<"Signalement"> | string
    clientId?: StringFilter<"Signalement"> | string
    demande?: XOR<DemandeNullableScalarRelationFilter, DemandeWhereInput> | null
    artisan?: XOR<ArtisanScalarRelationFilter, ArtisanWhereInput>
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "demandeId">

  export type SignalementOrderByWithAggregationInput = {
    id?: SortOrder
    motif?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    demandeId?: SortOrderInput | SortOrder
    artisanId?: SortOrder
    clientId?: SortOrder
    _count?: SignalementCountOrderByAggregateInput
    _max?: SignalementMaxOrderByAggregateInput
    _min?: SignalementMinOrderByAggregateInput
  }

  export type SignalementScalarWhereWithAggregatesInput = {
    AND?: SignalementScalarWhereWithAggregatesInput | SignalementScalarWhereWithAggregatesInput[]
    OR?: SignalementScalarWhereWithAggregatesInput[]
    NOT?: SignalementScalarWhereWithAggregatesInput | SignalementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Signalement"> | string
    motif?: EnumMotifSignalementWithAggregatesFilter<"Signalement"> | $Enums.MotifSignalement
    description?: StringWithAggregatesFilter<"Signalement"> | string
    statut?: EnumStatutSignalementWithAggregatesFilter<"Signalement"> | $Enums.StatutSignalement
    createdAt?: DateTimeWithAggregatesFilter<"Signalement"> | Date | string
    demandeId?: StringNullableWithAggregatesFilter<"Signalement"> | string | null
    artisanId?: StringWithAggregatesFilter<"Signalement"> | string
    clientId?: StringWithAggregatesFilter<"Signalement"> | string
  }

  export type CodeVerifWhereInput = {
    AND?: CodeVerifWhereInput | CodeVerifWhereInput[]
    OR?: CodeVerifWhereInput[]
    NOT?: CodeVerifWhereInput | CodeVerifWhereInput[]
    id?: StringFilter<"CodeVerif"> | string
    phone?: StringFilter<"CodeVerif"> | string
    code?: StringFilter<"CodeVerif"> | string
    expiresAt?: DateTimeFilter<"CodeVerif"> | Date | string
    createdAt?: DateTimeFilter<"CodeVerif"> | Date | string
  }

  export type CodeVerifOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeVerifWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CodeVerifWhereInput | CodeVerifWhereInput[]
    OR?: CodeVerifWhereInput[]
    NOT?: CodeVerifWhereInput | CodeVerifWhereInput[]
    phone?: StringFilter<"CodeVerif"> | string
    code?: StringFilter<"CodeVerif"> | string
    expiresAt?: DateTimeFilter<"CodeVerif"> | Date | string
    createdAt?: DateTimeFilter<"CodeVerif"> | Date | string
  }, "id">

  export type CodeVerifOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: CodeVerifCountOrderByAggregateInput
    _max?: CodeVerifMaxOrderByAggregateInput
    _min?: CodeVerifMinOrderByAggregateInput
  }

  export type CodeVerifScalarWhereWithAggregatesInput = {
    AND?: CodeVerifScalarWhereWithAggregatesInput | CodeVerifScalarWhereWithAggregatesInput[]
    OR?: CodeVerifScalarWhereWithAggregatesInput[]
    NOT?: CodeVerifScalarWhereWithAggregatesInput | CodeVerifScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CodeVerif"> | string
    phone?: StringWithAggregatesFilter<"CodeVerif"> | string
    code?: StringWithAggregatesFilter<"CodeVerif"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"CodeVerif"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CodeVerif"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    phone: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    artisan?: ArtisanCreateNestedOneWithoutUserInput
    demandesClient?: DemandeCreateNestedManyWithoutClientInput
    avisDonnes?: AvisCreateNestedManyWithoutClientInput
    signalements?: SignalementCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    phone: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    artisan?: ArtisanUncheckedCreateNestedOneWithoutUserInput
    demandesClient?: DemandeUncheckedCreateNestedManyWithoutClientInput
    avisDonnes?: AvisUncheckedCreateNestedManyWithoutClientInput
    signalements?: SignalementUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUpdateOneWithoutUserNestedInput
    demandesClient?: DemandeUpdateManyWithoutClientNestedInput
    avisDonnes?: AvisUpdateManyWithoutClientNestedInput
    signalements?: SignalementUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUncheckedUpdateOneWithoutUserNestedInput
    demandesClient?: DemandeUncheckedUpdateManyWithoutClientNestedInput
    avisDonnes?: AvisUncheckedUpdateManyWithoutClientNestedInput
    signalements?: SignalementUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    phone: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtisanCreateInput = {
    id?: string
    metiers?: ArtisanCreatemetiersInput | $Enums.Metier[]
    commune: string
    verifie?: boolean
    note?: number
    nbAvis?: number
    experience?: number
    soldeKobo?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutArtisanInput
    demandes?: DemandeCreateNestedManyWithoutArtisanInput
    avisRecus?: AvisCreateNestedManyWithoutArtisanInput
    signalementsRecus?: SignalementCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateInput = {
    id?: string
    userId: string
    metiers?: ArtisanCreatemetiersInput | $Enums.Metier[]
    commune: string
    verifie?: boolean
    note?: number
    nbAvis?: number
    experience?: number
    soldeKobo?: number
    createdAt?: Date | string
    demandes?: DemandeUncheckedCreateNestedManyWithoutArtisanInput
    avisRecus?: AvisUncheckedCreateNestedManyWithoutArtisanInput
    signalementsRecus?: SignalementUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metiers?: ArtisanUpdatemetiersInput | $Enums.Metier[]
    commune?: StringFieldUpdateOperationsInput | string
    verifie?: BoolFieldUpdateOperationsInput | boolean
    note?: FloatFieldUpdateOperationsInput | number
    nbAvis?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    soldeKobo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArtisanNestedInput
    demandes?: DemandeUpdateManyWithoutArtisanNestedInput
    avisRecus?: AvisUpdateManyWithoutArtisanNestedInput
    signalementsRecus?: SignalementUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metiers?: ArtisanUpdatemetiersInput | $Enums.Metier[]
    commune?: StringFieldUpdateOperationsInput | string
    verifie?: BoolFieldUpdateOperationsInput | boolean
    note?: FloatFieldUpdateOperationsInput | number
    nbAvis?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    soldeKobo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUncheckedUpdateManyWithoutArtisanNestedInput
    avisRecus?: AvisUncheckedUpdateManyWithoutArtisanNestedInput
    signalementsRecus?: SignalementUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanCreateManyInput = {
    id?: string
    userId: string
    metiers?: ArtisanCreatemetiersInput | $Enums.Metier[]
    commune: string
    verifie?: boolean
    note?: number
    nbAvis?: number
    experience?: number
    soldeKobo?: number
    createdAt?: Date | string
  }

  export type ArtisanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metiers?: ArtisanUpdatemetiersInput | $Enums.Metier[]
    commune?: StringFieldUpdateOperationsInput | string
    verifie?: BoolFieldUpdateOperationsInput | boolean
    note?: FloatFieldUpdateOperationsInput | number
    nbAvis?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    soldeKobo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtisanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metiers?: ArtisanUpdatemetiersInput | $Enums.Metier[]
    commune?: StringFieldUpdateOperationsInput | string
    verifie?: BoolFieldUpdateOperationsInput | boolean
    note?: FloatFieldUpdateOperationsInput | number
    nbAvis?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    soldeKobo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeCreateInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    client: UserCreateNestedOneWithoutDemandesClientInput
    artisan?: ArtisanCreateNestedOneWithoutDemandesInput
    avis?: AvisCreateNestedOneWithoutDemandeInput
    signalement?: SignalementCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    clientId: string
    artisanId?: string | null
    avis?: AvisUncheckedCreateNestedOneWithoutDemandeInput
    signalement?: SignalementUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutDemandesClientNestedInput
    artisan?: ArtisanUpdateOneWithoutDemandesNestedInput
    avis?: AvisUpdateOneWithoutDemandeNestedInput
    signalement?: SignalementUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    avis?: AvisUncheckedUpdateOneWithoutDemandeNestedInput
    signalement?: SignalementUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeCreateManyInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    clientId: string
    artisanId?: string | null
  }

  export type DemandeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvisCreateInput = {
    id?: string
    note: number
    commentaire?: string
    createdAt?: Date | string
    demande: DemandeCreateNestedOneWithoutAvisInput
    artisan: ArtisanCreateNestedOneWithoutAvisRecusInput
    client: UserCreateNestedOneWithoutAvisDonnesInput
  }

  export type AvisUncheckedCreateInput = {
    id?: string
    note: number
    commentaire?: string
    createdAt?: Date | string
    demandeId: string
    artisanId: string
    clientId: string
  }

  export type AvisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demande?: DemandeUpdateOneRequiredWithoutAvisNestedInput
    artisan?: ArtisanUpdateOneRequiredWithoutAvisRecusNestedInput
    client?: UserUpdateOneRequiredWithoutAvisDonnesNestedInput
  }

  export type AvisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeId?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type AvisCreateManyInput = {
    id?: string
    note: number
    commentaire?: string
    createdAt?: Date | string
    demandeId: string
    artisanId: string
    clientId: string
  }

  export type AvisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeId?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type SignalementCreateInput = {
    id?: string
    motif: $Enums.MotifSignalement
    description?: string
    statut?: $Enums.StatutSignalement
    createdAt?: Date | string
    demande?: DemandeCreateNestedOneWithoutSignalementInput
    artisan: ArtisanCreateNestedOneWithoutSignalementsRecusInput
    client: UserCreateNestedOneWithoutSignalementsInput
  }

  export type SignalementUncheckedCreateInput = {
    id?: string
    motif: $Enums.MotifSignalement
    description?: string
    statut?: $Enums.StatutSignalement
    createdAt?: Date | string
    demandeId?: string | null
    artisanId: string
    clientId: string
  }

  export type SignalementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    motif?: EnumMotifSignalementFieldUpdateOperationsInput | $Enums.MotifSignalement
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutSignalementFieldUpdateOperationsInput | $Enums.StatutSignalement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demande?: DemandeUpdateOneWithoutSignalementNestedInput
    artisan?: ArtisanUpdateOneRequiredWithoutSignalementsRecusNestedInput
    client?: UserUpdateOneRequiredWithoutSignalementsNestedInput
  }

  export type SignalementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    motif?: EnumMotifSignalementFieldUpdateOperationsInput | $Enums.MotifSignalement
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutSignalementFieldUpdateOperationsInput | $Enums.StatutSignalement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeId?: NullableStringFieldUpdateOperationsInput | string | null
    artisanId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type SignalementCreateManyInput = {
    id?: string
    motif: $Enums.MotifSignalement
    description?: string
    statut?: $Enums.StatutSignalement
    createdAt?: Date | string
    demandeId?: string | null
    artisanId: string
    clientId: string
  }

  export type SignalementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    motif?: EnumMotifSignalementFieldUpdateOperationsInput | $Enums.MotifSignalement
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutSignalementFieldUpdateOperationsInput | $Enums.StatutSignalement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    motif?: EnumMotifSignalementFieldUpdateOperationsInput | $Enums.MotifSignalement
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutSignalementFieldUpdateOperationsInput | $Enums.StatutSignalement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeId?: NullableStringFieldUpdateOperationsInput | string | null
    artisanId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type CodeVerifCreateInput = {
    id?: string
    phone: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type CodeVerifUncheckedCreateInput = {
    id?: string
    phone: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type CodeVerifUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeVerifUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeVerifCreateManyInput = {
    id?: string
    phone: string
    code: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type CodeVerifUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeVerifUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ArtisanNullableScalarRelationFilter = {
    is?: ArtisanWhereInput | null
    isNot?: ArtisanWhereInput | null
  }

  export type DemandeListRelationFilter = {
    every?: DemandeWhereInput
    some?: DemandeWhereInput
    none?: DemandeWhereInput
  }

  export type AvisListRelationFilter = {
    every?: AvisWhereInput
    some?: AvisWhereInput
    none?: AvisWhereInput
  }

  export type SignalementListRelationFilter = {
    every?: SignalementWhereInput
    some?: SignalementWhereInput
    none?: SignalementWhereInput
  }

  export type DemandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignalementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumMetierNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Metier[] | ListEnumMetierFieldRefInput<$PrismaModel> | null
    has?: $Enums.Metier | EnumMetierFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Metier[] | ListEnumMetierFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Metier[] | ListEnumMetierFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ArtisanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    metiers?: SortOrder
    commune?: SortOrder
    verifie?: SortOrder
    note?: SortOrder
    nbAvis?: SortOrder
    experience?: SortOrder
    soldeKobo?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtisanAvgOrderByAggregateInput = {
    note?: SortOrder
    nbAvis?: SortOrder
    experience?: SortOrder
    soldeKobo?: SortOrder
  }

  export type ArtisanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commune?: SortOrder
    verifie?: SortOrder
    note?: SortOrder
    nbAvis?: SortOrder
    experience?: SortOrder
    soldeKobo?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtisanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commune?: SortOrder
    verifie?: SortOrder
    note?: SortOrder
    nbAvis?: SortOrder
    experience?: SortOrder
    soldeKobo?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtisanSumOrderByAggregateInput = {
    note?: SortOrder
    nbAvis?: SortOrder
    experience?: SortOrder
    soldeKobo?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumMetierFilter<$PrismaModel = never> = {
    equals?: $Enums.Metier | EnumMetierFieldRefInput<$PrismaModel>
    in?: $Enums.Metier[] | ListEnumMetierFieldRefInput<$PrismaModel>
    notIn?: $Enums.Metier[] | ListEnumMetierFieldRefInput<$PrismaModel>
    not?: NestedEnumMetierFilter<$PrismaModel> | $Enums.Metier
  }

  export type EnumStatutDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeFilter<$PrismaModel> | $Enums.StatutDemande
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

  export type AvisNullableScalarRelationFilter = {
    is?: AvisWhereInput | null
    isNot?: AvisWhereInput | null
  }

  export type SignalementNullableScalarRelationFilter = {
    is?: SignalementWhereInput | null
    isNot?: SignalementWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DemandeCountOrderByAggregateInput = {
    id?: SortOrder
    metier?: SortOrder
    description?: SortOrder
    commune?: SortOrder
    adresse?: SortOrder
    statut?: SortOrder
    prixDevis?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    artisanId?: SortOrder
  }

  export type DemandeAvgOrderByAggregateInput = {
    prixDevis?: SortOrder
  }

  export type DemandeMaxOrderByAggregateInput = {
    id?: SortOrder
    metier?: SortOrder
    description?: SortOrder
    commune?: SortOrder
    adresse?: SortOrder
    statut?: SortOrder
    prixDevis?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    artisanId?: SortOrder
  }

  export type DemandeMinOrderByAggregateInput = {
    id?: SortOrder
    metier?: SortOrder
    description?: SortOrder
    commune?: SortOrder
    adresse?: SortOrder
    statut?: SortOrder
    prixDevis?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    artisanId?: SortOrder
  }

  export type DemandeSumOrderByAggregateInput = {
    prixDevis?: SortOrder
  }

  export type EnumMetierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Metier | EnumMetierFieldRefInput<$PrismaModel>
    in?: $Enums.Metier[] | ListEnumMetierFieldRefInput<$PrismaModel>
    notIn?: $Enums.Metier[] | ListEnumMetierFieldRefInput<$PrismaModel>
    not?: NestedEnumMetierWithAggregatesFilter<$PrismaModel> | $Enums.Metier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetierFilter<$PrismaModel>
    _max?: NestedEnumMetierFilter<$PrismaModel>
  }

  export type EnumStatutDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDemandeFilter<$PrismaModel>
    _max?: NestedEnumStatutDemandeFilter<$PrismaModel>
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

  export type DemandeScalarRelationFilter = {
    is?: DemandeWhereInput
    isNot?: DemandeWhereInput
  }

  export type ArtisanScalarRelationFilter = {
    is?: ArtisanWhereInput
    isNot?: ArtisanWhereInput
  }

  export type AvisCountOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrder
    createdAt?: SortOrder
    demandeId?: SortOrder
    artisanId?: SortOrder
    clientId?: SortOrder
  }

  export type AvisAvgOrderByAggregateInput = {
    note?: SortOrder
  }

  export type AvisMaxOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrder
    createdAt?: SortOrder
    demandeId?: SortOrder
    artisanId?: SortOrder
    clientId?: SortOrder
  }

  export type AvisMinOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    commentaire?: SortOrder
    createdAt?: SortOrder
    demandeId?: SortOrder
    artisanId?: SortOrder
    clientId?: SortOrder
  }

  export type AvisSumOrderByAggregateInput = {
    note?: SortOrder
  }

  export type EnumMotifSignalementFilter<$PrismaModel = never> = {
    equals?: $Enums.MotifSignalement | EnumMotifSignalementFieldRefInput<$PrismaModel>
    in?: $Enums.MotifSignalement[] | ListEnumMotifSignalementFieldRefInput<$PrismaModel>
    notIn?: $Enums.MotifSignalement[] | ListEnumMotifSignalementFieldRefInput<$PrismaModel>
    not?: NestedEnumMotifSignalementFilter<$PrismaModel> | $Enums.MotifSignalement
  }

  export type EnumStatutSignalementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutSignalement | EnumStatutSignalementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutSignalement[] | ListEnumStatutSignalementFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutSignalement[] | ListEnumStatutSignalementFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutSignalementFilter<$PrismaModel> | $Enums.StatutSignalement
  }

  export type DemandeNullableScalarRelationFilter = {
    is?: DemandeWhereInput | null
    isNot?: DemandeWhereInput | null
  }

  export type SignalementCountOrderByAggregateInput = {
    id?: SortOrder
    motif?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    demandeId?: SortOrder
    artisanId?: SortOrder
    clientId?: SortOrder
  }

  export type SignalementMaxOrderByAggregateInput = {
    id?: SortOrder
    motif?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    demandeId?: SortOrder
    artisanId?: SortOrder
    clientId?: SortOrder
  }

  export type SignalementMinOrderByAggregateInput = {
    id?: SortOrder
    motif?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    demandeId?: SortOrder
    artisanId?: SortOrder
    clientId?: SortOrder
  }

  export type EnumMotifSignalementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MotifSignalement | EnumMotifSignalementFieldRefInput<$PrismaModel>
    in?: $Enums.MotifSignalement[] | ListEnumMotifSignalementFieldRefInput<$PrismaModel>
    notIn?: $Enums.MotifSignalement[] | ListEnumMotifSignalementFieldRefInput<$PrismaModel>
    not?: NestedEnumMotifSignalementWithAggregatesFilter<$PrismaModel> | $Enums.MotifSignalement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMotifSignalementFilter<$PrismaModel>
    _max?: NestedEnumMotifSignalementFilter<$PrismaModel>
  }

  export type EnumStatutSignalementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutSignalement | EnumStatutSignalementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutSignalement[] | ListEnumStatutSignalementFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutSignalement[] | ListEnumStatutSignalementFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutSignalementWithAggregatesFilter<$PrismaModel> | $Enums.StatutSignalement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutSignalementFilter<$PrismaModel>
    _max?: NestedEnumStatutSignalementFilter<$PrismaModel>
  }

  export type CodeVerifCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeVerifMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeVerifMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ArtisanCreateNestedOneWithoutUserInput = {
    create?: XOR<ArtisanCreateWithoutUserInput, ArtisanUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutUserInput
    connect?: ArtisanWhereUniqueInput
  }

  export type DemandeCreateNestedManyWithoutClientInput = {
    create?: XOR<DemandeCreateWithoutClientInput, DemandeUncheckedCreateWithoutClientInput> | DemandeCreateWithoutClientInput[] | DemandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutClientInput | DemandeCreateOrConnectWithoutClientInput[]
    createMany?: DemandeCreateManyClientInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type AvisCreateNestedManyWithoutClientInput = {
    create?: XOR<AvisCreateWithoutClientInput, AvisUncheckedCreateWithoutClientInput> | AvisCreateWithoutClientInput[] | AvisUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutClientInput | AvisCreateOrConnectWithoutClientInput[]
    createMany?: AvisCreateManyClientInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type SignalementCreateNestedManyWithoutClientInput = {
    create?: XOR<SignalementCreateWithoutClientInput, SignalementUncheckedCreateWithoutClientInput> | SignalementCreateWithoutClientInput[] | SignalementUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SignalementCreateOrConnectWithoutClientInput | SignalementCreateOrConnectWithoutClientInput[]
    createMany?: SignalementCreateManyClientInputEnvelope
    connect?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
  }

  export type ArtisanUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ArtisanCreateWithoutUserInput, ArtisanUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutUserInput
    connect?: ArtisanWhereUniqueInput
  }

  export type DemandeUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<DemandeCreateWithoutClientInput, DemandeUncheckedCreateWithoutClientInput> | DemandeCreateWithoutClientInput[] | DemandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutClientInput | DemandeCreateOrConnectWithoutClientInput[]
    createMany?: DemandeCreateManyClientInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type AvisUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AvisCreateWithoutClientInput, AvisUncheckedCreateWithoutClientInput> | AvisCreateWithoutClientInput[] | AvisUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutClientInput | AvisCreateOrConnectWithoutClientInput[]
    createMany?: AvisCreateManyClientInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type SignalementUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SignalementCreateWithoutClientInput, SignalementUncheckedCreateWithoutClientInput> | SignalementCreateWithoutClientInput[] | SignalementUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SignalementCreateOrConnectWithoutClientInput | SignalementCreateOrConnectWithoutClientInput[]
    createMany?: SignalementCreateManyClientInputEnvelope
    connect?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArtisanUpdateOneWithoutUserNestedInput = {
    create?: XOR<ArtisanCreateWithoutUserInput, ArtisanUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutUserInput
    upsert?: ArtisanUpsertWithoutUserInput
    disconnect?: ArtisanWhereInput | boolean
    delete?: ArtisanWhereInput | boolean
    connect?: ArtisanWhereUniqueInput
    update?: XOR<XOR<ArtisanUpdateToOneWithWhereWithoutUserInput, ArtisanUpdateWithoutUserInput>, ArtisanUncheckedUpdateWithoutUserInput>
  }

  export type DemandeUpdateManyWithoutClientNestedInput = {
    create?: XOR<DemandeCreateWithoutClientInput, DemandeUncheckedCreateWithoutClientInput> | DemandeCreateWithoutClientInput[] | DemandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutClientInput | DemandeCreateOrConnectWithoutClientInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutClientInput | DemandeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DemandeCreateManyClientInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutClientInput | DemandeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutClientInput | DemandeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type AvisUpdateManyWithoutClientNestedInput = {
    create?: XOR<AvisCreateWithoutClientInput, AvisUncheckedCreateWithoutClientInput> | AvisCreateWithoutClientInput[] | AvisUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutClientInput | AvisCreateOrConnectWithoutClientInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutClientInput | AvisUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AvisCreateManyClientInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutClientInput | AvisUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutClientInput | AvisUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type SignalementUpdateManyWithoutClientNestedInput = {
    create?: XOR<SignalementCreateWithoutClientInput, SignalementUncheckedCreateWithoutClientInput> | SignalementCreateWithoutClientInput[] | SignalementUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SignalementCreateOrConnectWithoutClientInput | SignalementCreateOrConnectWithoutClientInput[]
    upsert?: SignalementUpsertWithWhereUniqueWithoutClientInput | SignalementUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SignalementCreateManyClientInputEnvelope
    set?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    disconnect?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    delete?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    connect?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    update?: SignalementUpdateWithWhereUniqueWithoutClientInput | SignalementUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SignalementUpdateManyWithWhereWithoutClientInput | SignalementUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SignalementScalarWhereInput | SignalementScalarWhereInput[]
  }

  export type ArtisanUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ArtisanCreateWithoutUserInput, ArtisanUncheckedCreateWithoutUserInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutUserInput
    upsert?: ArtisanUpsertWithoutUserInput
    disconnect?: ArtisanWhereInput | boolean
    delete?: ArtisanWhereInput | boolean
    connect?: ArtisanWhereUniqueInput
    update?: XOR<XOR<ArtisanUpdateToOneWithWhereWithoutUserInput, ArtisanUpdateWithoutUserInput>, ArtisanUncheckedUpdateWithoutUserInput>
  }

  export type DemandeUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<DemandeCreateWithoutClientInput, DemandeUncheckedCreateWithoutClientInput> | DemandeCreateWithoutClientInput[] | DemandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutClientInput | DemandeCreateOrConnectWithoutClientInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutClientInput | DemandeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: DemandeCreateManyClientInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutClientInput | DemandeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutClientInput | DemandeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type AvisUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AvisCreateWithoutClientInput, AvisUncheckedCreateWithoutClientInput> | AvisCreateWithoutClientInput[] | AvisUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutClientInput | AvisCreateOrConnectWithoutClientInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutClientInput | AvisUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AvisCreateManyClientInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutClientInput | AvisUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutClientInput | AvisUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type SignalementUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SignalementCreateWithoutClientInput, SignalementUncheckedCreateWithoutClientInput> | SignalementCreateWithoutClientInput[] | SignalementUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SignalementCreateOrConnectWithoutClientInput | SignalementCreateOrConnectWithoutClientInput[]
    upsert?: SignalementUpsertWithWhereUniqueWithoutClientInput | SignalementUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SignalementCreateManyClientInputEnvelope
    set?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    disconnect?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    delete?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    connect?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    update?: SignalementUpdateWithWhereUniqueWithoutClientInput | SignalementUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SignalementUpdateManyWithWhereWithoutClientInput | SignalementUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SignalementScalarWhereInput | SignalementScalarWhereInput[]
  }

  export type ArtisanCreatemetiersInput = {
    set: $Enums.Metier[]
  }

  export type UserCreateNestedOneWithoutArtisanInput = {
    create?: XOR<UserCreateWithoutArtisanInput, UserUncheckedCreateWithoutArtisanInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtisanInput
    connect?: UserWhereUniqueInput
  }

  export type DemandeCreateNestedManyWithoutArtisanInput = {
    create?: XOR<DemandeCreateWithoutArtisanInput, DemandeUncheckedCreateWithoutArtisanInput> | DemandeCreateWithoutArtisanInput[] | DemandeUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutArtisanInput | DemandeCreateOrConnectWithoutArtisanInput[]
    createMany?: DemandeCreateManyArtisanInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type AvisCreateNestedManyWithoutArtisanInput = {
    create?: XOR<AvisCreateWithoutArtisanInput, AvisUncheckedCreateWithoutArtisanInput> | AvisCreateWithoutArtisanInput[] | AvisUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutArtisanInput | AvisCreateOrConnectWithoutArtisanInput[]
    createMany?: AvisCreateManyArtisanInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type SignalementCreateNestedManyWithoutArtisanInput = {
    create?: XOR<SignalementCreateWithoutArtisanInput, SignalementUncheckedCreateWithoutArtisanInput> | SignalementCreateWithoutArtisanInput[] | SignalementUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: SignalementCreateOrConnectWithoutArtisanInput | SignalementCreateOrConnectWithoutArtisanInput[]
    createMany?: SignalementCreateManyArtisanInputEnvelope
    connect?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
  }

  export type DemandeUncheckedCreateNestedManyWithoutArtisanInput = {
    create?: XOR<DemandeCreateWithoutArtisanInput, DemandeUncheckedCreateWithoutArtisanInput> | DemandeCreateWithoutArtisanInput[] | DemandeUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutArtisanInput | DemandeCreateOrConnectWithoutArtisanInput[]
    createMany?: DemandeCreateManyArtisanInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type AvisUncheckedCreateNestedManyWithoutArtisanInput = {
    create?: XOR<AvisCreateWithoutArtisanInput, AvisUncheckedCreateWithoutArtisanInput> | AvisCreateWithoutArtisanInput[] | AvisUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutArtisanInput | AvisCreateOrConnectWithoutArtisanInput[]
    createMany?: AvisCreateManyArtisanInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type SignalementUncheckedCreateNestedManyWithoutArtisanInput = {
    create?: XOR<SignalementCreateWithoutArtisanInput, SignalementUncheckedCreateWithoutArtisanInput> | SignalementCreateWithoutArtisanInput[] | SignalementUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: SignalementCreateOrConnectWithoutArtisanInput | SignalementCreateOrConnectWithoutArtisanInput[]
    createMany?: SignalementCreateManyArtisanInputEnvelope
    connect?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
  }

  export type ArtisanUpdatemetiersInput = {
    set?: $Enums.Metier[]
    push?: $Enums.Metier | $Enums.Metier[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutArtisanNestedInput = {
    create?: XOR<UserCreateWithoutArtisanInput, UserUncheckedCreateWithoutArtisanInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtisanInput
    upsert?: UserUpsertWithoutArtisanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArtisanInput, UserUpdateWithoutArtisanInput>, UserUncheckedUpdateWithoutArtisanInput>
  }

  export type DemandeUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<DemandeCreateWithoutArtisanInput, DemandeUncheckedCreateWithoutArtisanInput> | DemandeCreateWithoutArtisanInput[] | DemandeUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutArtisanInput | DemandeCreateOrConnectWithoutArtisanInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutArtisanInput | DemandeUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: DemandeCreateManyArtisanInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutArtisanInput | DemandeUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutArtisanInput | DemandeUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type AvisUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<AvisCreateWithoutArtisanInput, AvisUncheckedCreateWithoutArtisanInput> | AvisCreateWithoutArtisanInput[] | AvisUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutArtisanInput | AvisCreateOrConnectWithoutArtisanInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutArtisanInput | AvisUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: AvisCreateManyArtisanInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutArtisanInput | AvisUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutArtisanInput | AvisUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type SignalementUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<SignalementCreateWithoutArtisanInput, SignalementUncheckedCreateWithoutArtisanInput> | SignalementCreateWithoutArtisanInput[] | SignalementUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: SignalementCreateOrConnectWithoutArtisanInput | SignalementCreateOrConnectWithoutArtisanInput[]
    upsert?: SignalementUpsertWithWhereUniqueWithoutArtisanInput | SignalementUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: SignalementCreateManyArtisanInputEnvelope
    set?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    disconnect?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    delete?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    connect?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    update?: SignalementUpdateWithWhereUniqueWithoutArtisanInput | SignalementUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: SignalementUpdateManyWithWhereWithoutArtisanInput | SignalementUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: SignalementScalarWhereInput | SignalementScalarWhereInput[]
  }

  export type DemandeUncheckedUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<DemandeCreateWithoutArtisanInput, DemandeUncheckedCreateWithoutArtisanInput> | DemandeCreateWithoutArtisanInput[] | DemandeUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutArtisanInput | DemandeCreateOrConnectWithoutArtisanInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutArtisanInput | DemandeUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: DemandeCreateManyArtisanInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutArtisanInput | DemandeUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutArtisanInput | DemandeUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type AvisUncheckedUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<AvisCreateWithoutArtisanInput, AvisUncheckedCreateWithoutArtisanInput> | AvisCreateWithoutArtisanInput[] | AvisUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutArtisanInput | AvisCreateOrConnectWithoutArtisanInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutArtisanInput | AvisUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: AvisCreateManyArtisanInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutArtisanInput | AvisUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutArtisanInput | AvisUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type SignalementUncheckedUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<SignalementCreateWithoutArtisanInput, SignalementUncheckedCreateWithoutArtisanInput> | SignalementCreateWithoutArtisanInput[] | SignalementUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: SignalementCreateOrConnectWithoutArtisanInput | SignalementCreateOrConnectWithoutArtisanInput[]
    upsert?: SignalementUpsertWithWhereUniqueWithoutArtisanInput | SignalementUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: SignalementCreateManyArtisanInputEnvelope
    set?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    disconnect?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    delete?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    connect?: SignalementWhereUniqueInput | SignalementWhereUniqueInput[]
    update?: SignalementUpdateWithWhereUniqueWithoutArtisanInput | SignalementUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: SignalementUpdateManyWithWhereWithoutArtisanInput | SignalementUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: SignalementScalarWhereInput | SignalementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDemandesClientInput = {
    create?: XOR<UserCreateWithoutDemandesClientInput, UserUncheckedCreateWithoutDemandesClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutDemandesClientInput
    connect?: UserWhereUniqueInput
  }

  export type ArtisanCreateNestedOneWithoutDemandesInput = {
    create?: XOR<ArtisanCreateWithoutDemandesInput, ArtisanUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutDemandesInput
    connect?: ArtisanWhereUniqueInput
  }

  export type AvisCreateNestedOneWithoutDemandeInput = {
    create?: XOR<AvisCreateWithoutDemandeInput, AvisUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: AvisCreateOrConnectWithoutDemandeInput
    connect?: AvisWhereUniqueInput
  }

  export type SignalementCreateNestedOneWithoutDemandeInput = {
    create?: XOR<SignalementCreateWithoutDemandeInput, SignalementUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: SignalementCreateOrConnectWithoutDemandeInput
    connect?: SignalementWhereUniqueInput
  }

  export type AvisUncheckedCreateNestedOneWithoutDemandeInput = {
    create?: XOR<AvisCreateWithoutDemandeInput, AvisUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: AvisCreateOrConnectWithoutDemandeInput
    connect?: AvisWhereUniqueInput
  }

  export type SignalementUncheckedCreateNestedOneWithoutDemandeInput = {
    create?: XOR<SignalementCreateWithoutDemandeInput, SignalementUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: SignalementCreateOrConnectWithoutDemandeInput
    connect?: SignalementWhereUniqueInput
  }

  export type EnumMetierFieldUpdateOperationsInput = {
    set?: $Enums.Metier
  }

  export type EnumStatutDemandeFieldUpdateOperationsInput = {
    set?: $Enums.StatutDemande
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDemandesClientNestedInput = {
    create?: XOR<UserCreateWithoutDemandesClientInput, UserUncheckedCreateWithoutDemandesClientInput>
    connectOrCreate?: UserCreateOrConnectWithoutDemandesClientInput
    upsert?: UserUpsertWithoutDemandesClientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDemandesClientInput, UserUpdateWithoutDemandesClientInput>, UserUncheckedUpdateWithoutDemandesClientInput>
  }

  export type ArtisanUpdateOneWithoutDemandesNestedInput = {
    create?: XOR<ArtisanCreateWithoutDemandesInput, ArtisanUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutDemandesInput
    upsert?: ArtisanUpsertWithoutDemandesInput
    disconnect?: ArtisanWhereInput | boolean
    delete?: ArtisanWhereInput | boolean
    connect?: ArtisanWhereUniqueInput
    update?: XOR<XOR<ArtisanUpdateToOneWithWhereWithoutDemandesInput, ArtisanUpdateWithoutDemandesInput>, ArtisanUncheckedUpdateWithoutDemandesInput>
  }

  export type AvisUpdateOneWithoutDemandeNestedInput = {
    create?: XOR<AvisCreateWithoutDemandeInput, AvisUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: AvisCreateOrConnectWithoutDemandeInput
    upsert?: AvisUpsertWithoutDemandeInput
    disconnect?: AvisWhereInput | boolean
    delete?: AvisWhereInput | boolean
    connect?: AvisWhereUniqueInput
    update?: XOR<XOR<AvisUpdateToOneWithWhereWithoutDemandeInput, AvisUpdateWithoutDemandeInput>, AvisUncheckedUpdateWithoutDemandeInput>
  }

  export type SignalementUpdateOneWithoutDemandeNestedInput = {
    create?: XOR<SignalementCreateWithoutDemandeInput, SignalementUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: SignalementCreateOrConnectWithoutDemandeInput
    upsert?: SignalementUpsertWithoutDemandeInput
    disconnect?: SignalementWhereInput | boolean
    delete?: SignalementWhereInput | boolean
    connect?: SignalementWhereUniqueInput
    update?: XOR<XOR<SignalementUpdateToOneWithWhereWithoutDemandeInput, SignalementUpdateWithoutDemandeInput>, SignalementUncheckedUpdateWithoutDemandeInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AvisUncheckedUpdateOneWithoutDemandeNestedInput = {
    create?: XOR<AvisCreateWithoutDemandeInput, AvisUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: AvisCreateOrConnectWithoutDemandeInput
    upsert?: AvisUpsertWithoutDemandeInput
    disconnect?: AvisWhereInput | boolean
    delete?: AvisWhereInput | boolean
    connect?: AvisWhereUniqueInput
    update?: XOR<XOR<AvisUpdateToOneWithWhereWithoutDemandeInput, AvisUpdateWithoutDemandeInput>, AvisUncheckedUpdateWithoutDemandeInput>
  }

  export type SignalementUncheckedUpdateOneWithoutDemandeNestedInput = {
    create?: XOR<SignalementCreateWithoutDemandeInput, SignalementUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: SignalementCreateOrConnectWithoutDemandeInput
    upsert?: SignalementUpsertWithoutDemandeInput
    disconnect?: SignalementWhereInput | boolean
    delete?: SignalementWhereInput | boolean
    connect?: SignalementWhereUniqueInput
    update?: XOR<XOR<SignalementUpdateToOneWithWhereWithoutDemandeInput, SignalementUpdateWithoutDemandeInput>, SignalementUncheckedUpdateWithoutDemandeInput>
  }

  export type DemandeCreateNestedOneWithoutAvisInput = {
    create?: XOR<DemandeCreateWithoutAvisInput, DemandeUncheckedCreateWithoutAvisInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutAvisInput
    connect?: DemandeWhereUniqueInput
  }

  export type ArtisanCreateNestedOneWithoutAvisRecusInput = {
    create?: XOR<ArtisanCreateWithoutAvisRecusInput, ArtisanUncheckedCreateWithoutAvisRecusInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutAvisRecusInput
    connect?: ArtisanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAvisDonnesInput = {
    create?: XOR<UserCreateWithoutAvisDonnesInput, UserUncheckedCreateWithoutAvisDonnesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvisDonnesInput
    connect?: UserWhereUniqueInput
  }

  export type DemandeUpdateOneRequiredWithoutAvisNestedInput = {
    create?: XOR<DemandeCreateWithoutAvisInput, DemandeUncheckedCreateWithoutAvisInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutAvisInput
    upsert?: DemandeUpsertWithoutAvisInput
    connect?: DemandeWhereUniqueInput
    update?: XOR<XOR<DemandeUpdateToOneWithWhereWithoutAvisInput, DemandeUpdateWithoutAvisInput>, DemandeUncheckedUpdateWithoutAvisInput>
  }

  export type ArtisanUpdateOneRequiredWithoutAvisRecusNestedInput = {
    create?: XOR<ArtisanCreateWithoutAvisRecusInput, ArtisanUncheckedCreateWithoutAvisRecusInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutAvisRecusInput
    upsert?: ArtisanUpsertWithoutAvisRecusInput
    connect?: ArtisanWhereUniqueInput
    update?: XOR<XOR<ArtisanUpdateToOneWithWhereWithoutAvisRecusInput, ArtisanUpdateWithoutAvisRecusInput>, ArtisanUncheckedUpdateWithoutAvisRecusInput>
  }

  export type UserUpdateOneRequiredWithoutAvisDonnesNestedInput = {
    create?: XOR<UserCreateWithoutAvisDonnesInput, UserUncheckedCreateWithoutAvisDonnesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvisDonnesInput
    upsert?: UserUpsertWithoutAvisDonnesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvisDonnesInput, UserUpdateWithoutAvisDonnesInput>, UserUncheckedUpdateWithoutAvisDonnesInput>
  }

  export type DemandeCreateNestedOneWithoutSignalementInput = {
    create?: XOR<DemandeCreateWithoutSignalementInput, DemandeUncheckedCreateWithoutSignalementInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutSignalementInput
    connect?: DemandeWhereUniqueInput
  }

  export type ArtisanCreateNestedOneWithoutSignalementsRecusInput = {
    create?: XOR<ArtisanCreateWithoutSignalementsRecusInput, ArtisanUncheckedCreateWithoutSignalementsRecusInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutSignalementsRecusInput
    connect?: ArtisanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSignalementsInput = {
    create?: XOR<UserCreateWithoutSignalementsInput, UserUncheckedCreateWithoutSignalementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSignalementsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMotifSignalementFieldUpdateOperationsInput = {
    set?: $Enums.MotifSignalement
  }

  export type EnumStatutSignalementFieldUpdateOperationsInput = {
    set?: $Enums.StatutSignalement
  }

  export type DemandeUpdateOneWithoutSignalementNestedInput = {
    create?: XOR<DemandeCreateWithoutSignalementInput, DemandeUncheckedCreateWithoutSignalementInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutSignalementInput
    upsert?: DemandeUpsertWithoutSignalementInput
    disconnect?: DemandeWhereInput | boolean
    delete?: DemandeWhereInput | boolean
    connect?: DemandeWhereUniqueInput
    update?: XOR<XOR<DemandeUpdateToOneWithWhereWithoutSignalementInput, DemandeUpdateWithoutSignalementInput>, DemandeUncheckedUpdateWithoutSignalementInput>
  }

  export type ArtisanUpdateOneRequiredWithoutSignalementsRecusNestedInput = {
    create?: XOR<ArtisanCreateWithoutSignalementsRecusInput, ArtisanUncheckedCreateWithoutSignalementsRecusInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutSignalementsRecusInput
    upsert?: ArtisanUpsertWithoutSignalementsRecusInput
    connect?: ArtisanWhereUniqueInput
    update?: XOR<XOR<ArtisanUpdateToOneWithWhereWithoutSignalementsRecusInput, ArtisanUpdateWithoutSignalementsRecusInput>, ArtisanUncheckedUpdateWithoutSignalementsRecusInput>
  }

  export type UserUpdateOneRequiredWithoutSignalementsNestedInput = {
    create?: XOR<UserCreateWithoutSignalementsInput, UserUncheckedCreateWithoutSignalementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSignalementsInput
    upsert?: UserUpsertWithoutSignalementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSignalementsInput, UserUpdateWithoutSignalementsInput>, UserUncheckedUpdateWithoutSignalementsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumMetierFilter<$PrismaModel = never> = {
    equals?: $Enums.Metier | EnumMetierFieldRefInput<$PrismaModel>
    in?: $Enums.Metier[] | ListEnumMetierFieldRefInput<$PrismaModel>
    notIn?: $Enums.Metier[] | ListEnumMetierFieldRefInput<$PrismaModel>
    not?: NestedEnumMetierFilter<$PrismaModel> | $Enums.Metier
  }

  export type NestedEnumStatutDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeFilter<$PrismaModel> | $Enums.StatutDemande
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

  export type NestedEnumMetierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Metier | EnumMetierFieldRefInput<$PrismaModel>
    in?: $Enums.Metier[] | ListEnumMetierFieldRefInput<$PrismaModel>
    notIn?: $Enums.Metier[] | ListEnumMetierFieldRefInput<$PrismaModel>
    not?: NestedEnumMetierWithAggregatesFilter<$PrismaModel> | $Enums.Metier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetierFilter<$PrismaModel>
    _max?: NestedEnumMetierFilter<$PrismaModel>
  }

  export type NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDemandeFilter<$PrismaModel>
    _max?: NestedEnumStatutDemandeFilter<$PrismaModel>
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

  export type NestedEnumMotifSignalementFilter<$PrismaModel = never> = {
    equals?: $Enums.MotifSignalement | EnumMotifSignalementFieldRefInput<$PrismaModel>
    in?: $Enums.MotifSignalement[] | ListEnumMotifSignalementFieldRefInput<$PrismaModel>
    notIn?: $Enums.MotifSignalement[] | ListEnumMotifSignalementFieldRefInput<$PrismaModel>
    not?: NestedEnumMotifSignalementFilter<$PrismaModel> | $Enums.MotifSignalement
  }

  export type NestedEnumStatutSignalementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutSignalement | EnumStatutSignalementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutSignalement[] | ListEnumStatutSignalementFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutSignalement[] | ListEnumStatutSignalementFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutSignalementFilter<$PrismaModel> | $Enums.StatutSignalement
  }

  export type NestedEnumMotifSignalementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MotifSignalement | EnumMotifSignalementFieldRefInput<$PrismaModel>
    in?: $Enums.MotifSignalement[] | ListEnumMotifSignalementFieldRefInput<$PrismaModel>
    notIn?: $Enums.MotifSignalement[] | ListEnumMotifSignalementFieldRefInput<$PrismaModel>
    not?: NestedEnumMotifSignalementWithAggregatesFilter<$PrismaModel> | $Enums.MotifSignalement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMotifSignalementFilter<$PrismaModel>
    _max?: NestedEnumMotifSignalementFilter<$PrismaModel>
  }

  export type NestedEnumStatutSignalementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutSignalement | EnumStatutSignalementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutSignalement[] | ListEnumStatutSignalementFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutSignalement[] | ListEnumStatutSignalementFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutSignalementWithAggregatesFilter<$PrismaModel> | $Enums.StatutSignalement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutSignalementFilter<$PrismaModel>
    _max?: NestedEnumStatutSignalementFilter<$PrismaModel>
  }

  export type ArtisanCreateWithoutUserInput = {
    id?: string
    metiers?: ArtisanCreatemetiersInput | $Enums.Metier[]
    commune: string
    verifie?: boolean
    note?: number
    nbAvis?: number
    experience?: number
    soldeKobo?: number
    createdAt?: Date | string
    demandes?: DemandeCreateNestedManyWithoutArtisanInput
    avisRecus?: AvisCreateNestedManyWithoutArtisanInput
    signalementsRecus?: SignalementCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateWithoutUserInput = {
    id?: string
    metiers?: ArtisanCreatemetiersInput | $Enums.Metier[]
    commune: string
    verifie?: boolean
    note?: number
    nbAvis?: number
    experience?: number
    soldeKobo?: number
    createdAt?: Date | string
    demandes?: DemandeUncheckedCreateNestedManyWithoutArtisanInput
    avisRecus?: AvisUncheckedCreateNestedManyWithoutArtisanInput
    signalementsRecus?: SignalementUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanCreateOrConnectWithoutUserInput = {
    where: ArtisanWhereUniqueInput
    create: XOR<ArtisanCreateWithoutUserInput, ArtisanUncheckedCreateWithoutUserInput>
  }

  export type DemandeCreateWithoutClientInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    artisan?: ArtisanCreateNestedOneWithoutDemandesInput
    avis?: AvisCreateNestedOneWithoutDemandeInput
    signalement?: SignalementCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutClientInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    artisanId?: string | null
    avis?: AvisUncheckedCreateNestedOneWithoutDemandeInput
    signalement?: SignalementUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutClientInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutClientInput, DemandeUncheckedCreateWithoutClientInput>
  }

  export type DemandeCreateManyClientInputEnvelope = {
    data: DemandeCreateManyClientInput | DemandeCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AvisCreateWithoutClientInput = {
    id?: string
    note: number
    commentaire?: string
    createdAt?: Date | string
    demande: DemandeCreateNestedOneWithoutAvisInput
    artisan: ArtisanCreateNestedOneWithoutAvisRecusInput
  }

  export type AvisUncheckedCreateWithoutClientInput = {
    id?: string
    note: number
    commentaire?: string
    createdAt?: Date | string
    demandeId: string
    artisanId: string
  }

  export type AvisCreateOrConnectWithoutClientInput = {
    where: AvisWhereUniqueInput
    create: XOR<AvisCreateWithoutClientInput, AvisUncheckedCreateWithoutClientInput>
  }

  export type AvisCreateManyClientInputEnvelope = {
    data: AvisCreateManyClientInput | AvisCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type SignalementCreateWithoutClientInput = {
    id?: string
    motif: $Enums.MotifSignalement
    description?: string
    statut?: $Enums.StatutSignalement
    createdAt?: Date | string
    demande?: DemandeCreateNestedOneWithoutSignalementInput
    artisan: ArtisanCreateNestedOneWithoutSignalementsRecusInput
  }

  export type SignalementUncheckedCreateWithoutClientInput = {
    id?: string
    motif: $Enums.MotifSignalement
    description?: string
    statut?: $Enums.StatutSignalement
    createdAt?: Date | string
    demandeId?: string | null
    artisanId: string
  }

  export type SignalementCreateOrConnectWithoutClientInput = {
    where: SignalementWhereUniqueInput
    create: XOR<SignalementCreateWithoutClientInput, SignalementUncheckedCreateWithoutClientInput>
  }

  export type SignalementCreateManyClientInputEnvelope = {
    data: SignalementCreateManyClientInput | SignalementCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ArtisanUpsertWithoutUserInput = {
    update: XOR<ArtisanUpdateWithoutUserInput, ArtisanUncheckedUpdateWithoutUserInput>
    create: XOR<ArtisanCreateWithoutUserInput, ArtisanUncheckedCreateWithoutUserInput>
    where?: ArtisanWhereInput
  }

  export type ArtisanUpdateToOneWithWhereWithoutUserInput = {
    where?: ArtisanWhereInput
    data: XOR<ArtisanUpdateWithoutUserInput, ArtisanUncheckedUpdateWithoutUserInput>
  }

  export type ArtisanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    metiers?: ArtisanUpdatemetiersInput | $Enums.Metier[]
    commune?: StringFieldUpdateOperationsInput | string
    verifie?: BoolFieldUpdateOperationsInput | boolean
    note?: FloatFieldUpdateOperationsInput | number
    nbAvis?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    soldeKobo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUpdateManyWithoutArtisanNestedInput
    avisRecus?: AvisUpdateManyWithoutArtisanNestedInput
    signalementsRecus?: SignalementUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    metiers?: ArtisanUpdatemetiersInput | $Enums.Metier[]
    commune?: StringFieldUpdateOperationsInput | string
    verifie?: BoolFieldUpdateOperationsInput | boolean
    note?: FloatFieldUpdateOperationsInput | number
    nbAvis?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    soldeKobo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUncheckedUpdateManyWithoutArtisanNestedInput
    avisRecus?: AvisUncheckedUpdateManyWithoutArtisanNestedInput
    signalementsRecus?: SignalementUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type DemandeUpsertWithWhereUniqueWithoutClientInput = {
    where: DemandeWhereUniqueInput
    update: XOR<DemandeUpdateWithoutClientInput, DemandeUncheckedUpdateWithoutClientInput>
    create: XOR<DemandeCreateWithoutClientInput, DemandeUncheckedCreateWithoutClientInput>
  }

  export type DemandeUpdateWithWhereUniqueWithoutClientInput = {
    where: DemandeWhereUniqueInput
    data: XOR<DemandeUpdateWithoutClientInput, DemandeUncheckedUpdateWithoutClientInput>
  }

  export type DemandeUpdateManyWithWhereWithoutClientInput = {
    where: DemandeScalarWhereInput
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyWithoutClientInput>
  }

  export type DemandeScalarWhereInput = {
    AND?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
    OR?: DemandeScalarWhereInput[]
    NOT?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
    id?: StringFilter<"Demande"> | string
    metier?: EnumMetierFilter<"Demande"> | $Enums.Metier
    description?: StringFilter<"Demande"> | string
    commune?: StringFilter<"Demande"> | string
    adresse?: StringFilter<"Demande"> | string
    statut?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    prixDevis?: IntNullableFilter<"Demande"> | number | null
    createdAt?: DateTimeFilter<"Demande"> | Date | string
    clientId?: StringFilter<"Demande"> | string
    artisanId?: StringNullableFilter<"Demande"> | string | null
  }

  export type AvisUpsertWithWhereUniqueWithoutClientInput = {
    where: AvisWhereUniqueInput
    update: XOR<AvisUpdateWithoutClientInput, AvisUncheckedUpdateWithoutClientInput>
    create: XOR<AvisCreateWithoutClientInput, AvisUncheckedCreateWithoutClientInput>
  }

  export type AvisUpdateWithWhereUniqueWithoutClientInput = {
    where: AvisWhereUniqueInput
    data: XOR<AvisUpdateWithoutClientInput, AvisUncheckedUpdateWithoutClientInput>
  }

  export type AvisUpdateManyWithWhereWithoutClientInput = {
    where: AvisScalarWhereInput
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyWithoutClientInput>
  }

  export type AvisScalarWhereInput = {
    AND?: AvisScalarWhereInput | AvisScalarWhereInput[]
    OR?: AvisScalarWhereInput[]
    NOT?: AvisScalarWhereInput | AvisScalarWhereInput[]
    id?: StringFilter<"Avis"> | string
    note?: IntFilter<"Avis"> | number
    commentaire?: StringFilter<"Avis"> | string
    createdAt?: DateTimeFilter<"Avis"> | Date | string
    demandeId?: StringFilter<"Avis"> | string
    artisanId?: StringFilter<"Avis"> | string
    clientId?: StringFilter<"Avis"> | string
  }

  export type SignalementUpsertWithWhereUniqueWithoutClientInput = {
    where: SignalementWhereUniqueInput
    update: XOR<SignalementUpdateWithoutClientInput, SignalementUncheckedUpdateWithoutClientInput>
    create: XOR<SignalementCreateWithoutClientInput, SignalementUncheckedCreateWithoutClientInput>
  }

  export type SignalementUpdateWithWhereUniqueWithoutClientInput = {
    where: SignalementWhereUniqueInput
    data: XOR<SignalementUpdateWithoutClientInput, SignalementUncheckedUpdateWithoutClientInput>
  }

  export type SignalementUpdateManyWithWhereWithoutClientInput = {
    where: SignalementScalarWhereInput
    data: XOR<SignalementUpdateManyMutationInput, SignalementUncheckedUpdateManyWithoutClientInput>
  }

  export type SignalementScalarWhereInput = {
    AND?: SignalementScalarWhereInput | SignalementScalarWhereInput[]
    OR?: SignalementScalarWhereInput[]
    NOT?: SignalementScalarWhereInput | SignalementScalarWhereInput[]
    id?: StringFilter<"Signalement"> | string
    motif?: EnumMotifSignalementFilter<"Signalement"> | $Enums.MotifSignalement
    description?: StringFilter<"Signalement"> | string
    statut?: EnumStatutSignalementFilter<"Signalement"> | $Enums.StatutSignalement
    createdAt?: DateTimeFilter<"Signalement"> | Date | string
    demandeId?: StringNullableFilter<"Signalement"> | string | null
    artisanId?: StringFilter<"Signalement"> | string
    clientId?: StringFilter<"Signalement"> | string
  }

  export type UserCreateWithoutArtisanInput = {
    id?: string
    phone: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    demandesClient?: DemandeCreateNestedManyWithoutClientInput
    avisDonnes?: AvisCreateNestedManyWithoutClientInput
    signalements?: SignalementCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutArtisanInput = {
    id?: string
    phone: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    demandesClient?: DemandeUncheckedCreateNestedManyWithoutClientInput
    avisDonnes?: AvisUncheckedCreateNestedManyWithoutClientInput
    signalements?: SignalementUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutArtisanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArtisanInput, UserUncheckedCreateWithoutArtisanInput>
  }

  export type DemandeCreateWithoutArtisanInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    client: UserCreateNestedOneWithoutDemandesClientInput
    avis?: AvisCreateNestedOneWithoutDemandeInput
    signalement?: SignalementCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutArtisanInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    clientId: string
    avis?: AvisUncheckedCreateNestedOneWithoutDemandeInput
    signalement?: SignalementUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutArtisanInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutArtisanInput, DemandeUncheckedCreateWithoutArtisanInput>
  }

  export type DemandeCreateManyArtisanInputEnvelope = {
    data: DemandeCreateManyArtisanInput | DemandeCreateManyArtisanInput[]
    skipDuplicates?: boolean
  }

  export type AvisCreateWithoutArtisanInput = {
    id?: string
    note: number
    commentaire?: string
    createdAt?: Date | string
    demande: DemandeCreateNestedOneWithoutAvisInput
    client: UserCreateNestedOneWithoutAvisDonnesInput
  }

  export type AvisUncheckedCreateWithoutArtisanInput = {
    id?: string
    note: number
    commentaire?: string
    createdAt?: Date | string
    demandeId: string
    clientId: string
  }

  export type AvisCreateOrConnectWithoutArtisanInput = {
    where: AvisWhereUniqueInput
    create: XOR<AvisCreateWithoutArtisanInput, AvisUncheckedCreateWithoutArtisanInput>
  }

  export type AvisCreateManyArtisanInputEnvelope = {
    data: AvisCreateManyArtisanInput | AvisCreateManyArtisanInput[]
    skipDuplicates?: boolean
  }

  export type SignalementCreateWithoutArtisanInput = {
    id?: string
    motif: $Enums.MotifSignalement
    description?: string
    statut?: $Enums.StatutSignalement
    createdAt?: Date | string
    demande?: DemandeCreateNestedOneWithoutSignalementInput
    client: UserCreateNestedOneWithoutSignalementsInput
  }

  export type SignalementUncheckedCreateWithoutArtisanInput = {
    id?: string
    motif: $Enums.MotifSignalement
    description?: string
    statut?: $Enums.StatutSignalement
    createdAt?: Date | string
    demandeId?: string | null
    clientId: string
  }

  export type SignalementCreateOrConnectWithoutArtisanInput = {
    where: SignalementWhereUniqueInput
    create: XOR<SignalementCreateWithoutArtisanInput, SignalementUncheckedCreateWithoutArtisanInput>
  }

  export type SignalementCreateManyArtisanInputEnvelope = {
    data: SignalementCreateManyArtisanInput | SignalementCreateManyArtisanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArtisanInput = {
    update: XOR<UserUpdateWithoutArtisanInput, UserUncheckedUpdateWithoutArtisanInput>
    create: XOR<UserCreateWithoutArtisanInput, UserUncheckedCreateWithoutArtisanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArtisanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArtisanInput, UserUncheckedUpdateWithoutArtisanInput>
  }

  export type UserUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesClient?: DemandeUpdateManyWithoutClientNestedInput
    avisDonnes?: AvisUpdateManyWithoutClientNestedInput
    signalements?: SignalementUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesClient?: DemandeUncheckedUpdateManyWithoutClientNestedInput
    avisDonnes?: AvisUncheckedUpdateManyWithoutClientNestedInput
    signalements?: SignalementUncheckedUpdateManyWithoutClientNestedInput
  }

  export type DemandeUpsertWithWhereUniqueWithoutArtisanInput = {
    where: DemandeWhereUniqueInput
    update: XOR<DemandeUpdateWithoutArtisanInput, DemandeUncheckedUpdateWithoutArtisanInput>
    create: XOR<DemandeCreateWithoutArtisanInput, DemandeUncheckedCreateWithoutArtisanInput>
  }

  export type DemandeUpdateWithWhereUniqueWithoutArtisanInput = {
    where: DemandeWhereUniqueInput
    data: XOR<DemandeUpdateWithoutArtisanInput, DemandeUncheckedUpdateWithoutArtisanInput>
  }

  export type DemandeUpdateManyWithWhereWithoutArtisanInput = {
    where: DemandeScalarWhereInput
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyWithoutArtisanInput>
  }

  export type AvisUpsertWithWhereUniqueWithoutArtisanInput = {
    where: AvisWhereUniqueInput
    update: XOR<AvisUpdateWithoutArtisanInput, AvisUncheckedUpdateWithoutArtisanInput>
    create: XOR<AvisCreateWithoutArtisanInput, AvisUncheckedCreateWithoutArtisanInput>
  }

  export type AvisUpdateWithWhereUniqueWithoutArtisanInput = {
    where: AvisWhereUniqueInput
    data: XOR<AvisUpdateWithoutArtisanInput, AvisUncheckedUpdateWithoutArtisanInput>
  }

  export type AvisUpdateManyWithWhereWithoutArtisanInput = {
    where: AvisScalarWhereInput
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyWithoutArtisanInput>
  }

  export type SignalementUpsertWithWhereUniqueWithoutArtisanInput = {
    where: SignalementWhereUniqueInput
    update: XOR<SignalementUpdateWithoutArtisanInput, SignalementUncheckedUpdateWithoutArtisanInput>
    create: XOR<SignalementCreateWithoutArtisanInput, SignalementUncheckedCreateWithoutArtisanInput>
  }

  export type SignalementUpdateWithWhereUniqueWithoutArtisanInput = {
    where: SignalementWhereUniqueInput
    data: XOR<SignalementUpdateWithoutArtisanInput, SignalementUncheckedUpdateWithoutArtisanInput>
  }

  export type SignalementUpdateManyWithWhereWithoutArtisanInput = {
    where: SignalementScalarWhereInput
    data: XOR<SignalementUpdateManyMutationInput, SignalementUncheckedUpdateManyWithoutArtisanInput>
  }

  export type UserCreateWithoutDemandesClientInput = {
    id?: string
    phone: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    artisan?: ArtisanCreateNestedOneWithoutUserInput
    avisDonnes?: AvisCreateNestedManyWithoutClientInput
    signalements?: SignalementCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutDemandesClientInput = {
    id?: string
    phone: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    artisan?: ArtisanUncheckedCreateNestedOneWithoutUserInput
    avisDonnes?: AvisUncheckedCreateNestedManyWithoutClientInput
    signalements?: SignalementUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutDemandesClientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDemandesClientInput, UserUncheckedCreateWithoutDemandesClientInput>
  }

  export type ArtisanCreateWithoutDemandesInput = {
    id?: string
    metiers?: ArtisanCreatemetiersInput | $Enums.Metier[]
    commune: string
    verifie?: boolean
    note?: number
    nbAvis?: number
    experience?: number
    soldeKobo?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutArtisanInput
    avisRecus?: AvisCreateNestedManyWithoutArtisanInput
    signalementsRecus?: SignalementCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateWithoutDemandesInput = {
    id?: string
    userId: string
    metiers?: ArtisanCreatemetiersInput | $Enums.Metier[]
    commune: string
    verifie?: boolean
    note?: number
    nbAvis?: number
    experience?: number
    soldeKobo?: number
    createdAt?: Date | string
    avisRecus?: AvisUncheckedCreateNestedManyWithoutArtisanInput
    signalementsRecus?: SignalementUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanCreateOrConnectWithoutDemandesInput = {
    where: ArtisanWhereUniqueInput
    create: XOR<ArtisanCreateWithoutDemandesInput, ArtisanUncheckedCreateWithoutDemandesInput>
  }

  export type AvisCreateWithoutDemandeInput = {
    id?: string
    note: number
    commentaire?: string
    createdAt?: Date | string
    artisan: ArtisanCreateNestedOneWithoutAvisRecusInput
    client: UserCreateNestedOneWithoutAvisDonnesInput
  }

  export type AvisUncheckedCreateWithoutDemandeInput = {
    id?: string
    note: number
    commentaire?: string
    createdAt?: Date | string
    artisanId: string
    clientId: string
  }

  export type AvisCreateOrConnectWithoutDemandeInput = {
    where: AvisWhereUniqueInput
    create: XOR<AvisCreateWithoutDemandeInput, AvisUncheckedCreateWithoutDemandeInput>
  }

  export type SignalementCreateWithoutDemandeInput = {
    id?: string
    motif: $Enums.MotifSignalement
    description?: string
    statut?: $Enums.StatutSignalement
    createdAt?: Date | string
    artisan: ArtisanCreateNestedOneWithoutSignalementsRecusInput
    client: UserCreateNestedOneWithoutSignalementsInput
  }

  export type SignalementUncheckedCreateWithoutDemandeInput = {
    id?: string
    motif: $Enums.MotifSignalement
    description?: string
    statut?: $Enums.StatutSignalement
    createdAt?: Date | string
    artisanId: string
    clientId: string
  }

  export type SignalementCreateOrConnectWithoutDemandeInput = {
    where: SignalementWhereUniqueInput
    create: XOR<SignalementCreateWithoutDemandeInput, SignalementUncheckedCreateWithoutDemandeInput>
  }

  export type UserUpsertWithoutDemandesClientInput = {
    update: XOR<UserUpdateWithoutDemandesClientInput, UserUncheckedUpdateWithoutDemandesClientInput>
    create: XOR<UserCreateWithoutDemandesClientInput, UserUncheckedCreateWithoutDemandesClientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDemandesClientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDemandesClientInput, UserUncheckedUpdateWithoutDemandesClientInput>
  }

  export type UserUpdateWithoutDemandesClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUpdateOneWithoutUserNestedInput
    avisDonnes?: AvisUpdateManyWithoutClientNestedInput
    signalements?: SignalementUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutDemandesClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUncheckedUpdateOneWithoutUserNestedInput
    avisDonnes?: AvisUncheckedUpdateManyWithoutClientNestedInput
    signalements?: SignalementUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ArtisanUpsertWithoutDemandesInput = {
    update: XOR<ArtisanUpdateWithoutDemandesInput, ArtisanUncheckedUpdateWithoutDemandesInput>
    create: XOR<ArtisanCreateWithoutDemandesInput, ArtisanUncheckedCreateWithoutDemandesInput>
    where?: ArtisanWhereInput
  }

  export type ArtisanUpdateToOneWithWhereWithoutDemandesInput = {
    where?: ArtisanWhereInput
    data: XOR<ArtisanUpdateWithoutDemandesInput, ArtisanUncheckedUpdateWithoutDemandesInput>
  }

  export type ArtisanUpdateWithoutDemandesInput = {
    id?: StringFieldUpdateOperationsInput | string
    metiers?: ArtisanUpdatemetiersInput | $Enums.Metier[]
    commune?: StringFieldUpdateOperationsInput | string
    verifie?: BoolFieldUpdateOperationsInput | boolean
    note?: FloatFieldUpdateOperationsInput | number
    nbAvis?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    soldeKobo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArtisanNestedInput
    avisRecus?: AvisUpdateManyWithoutArtisanNestedInput
    signalementsRecus?: SignalementUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateWithoutDemandesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metiers?: ArtisanUpdatemetiersInput | $Enums.Metier[]
    commune?: StringFieldUpdateOperationsInput | string
    verifie?: BoolFieldUpdateOperationsInput | boolean
    note?: FloatFieldUpdateOperationsInput | number
    nbAvis?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    soldeKobo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avisRecus?: AvisUncheckedUpdateManyWithoutArtisanNestedInput
    signalementsRecus?: SignalementUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type AvisUpsertWithoutDemandeInput = {
    update: XOR<AvisUpdateWithoutDemandeInput, AvisUncheckedUpdateWithoutDemandeInput>
    create: XOR<AvisCreateWithoutDemandeInput, AvisUncheckedCreateWithoutDemandeInput>
    where?: AvisWhereInput
  }

  export type AvisUpdateToOneWithWhereWithoutDemandeInput = {
    where?: AvisWhereInput
    data: XOR<AvisUpdateWithoutDemandeInput, AvisUncheckedUpdateWithoutDemandeInput>
  }

  export type AvisUpdateWithoutDemandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUpdateOneRequiredWithoutAvisRecusNestedInput
    client?: UserUpdateOneRequiredWithoutAvisDonnesNestedInput
  }

  export type AvisUncheckedUpdateWithoutDemandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisanId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type SignalementUpsertWithoutDemandeInput = {
    update: XOR<SignalementUpdateWithoutDemandeInput, SignalementUncheckedUpdateWithoutDemandeInput>
    create: XOR<SignalementCreateWithoutDemandeInput, SignalementUncheckedCreateWithoutDemandeInput>
    where?: SignalementWhereInput
  }

  export type SignalementUpdateToOneWithWhereWithoutDemandeInput = {
    where?: SignalementWhereInput
    data: XOR<SignalementUpdateWithoutDemandeInput, SignalementUncheckedUpdateWithoutDemandeInput>
  }

  export type SignalementUpdateWithoutDemandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    motif?: EnumMotifSignalementFieldUpdateOperationsInput | $Enums.MotifSignalement
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutSignalementFieldUpdateOperationsInput | $Enums.StatutSignalement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUpdateOneRequiredWithoutSignalementsRecusNestedInput
    client?: UserUpdateOneRequiredWithoutSignalementsNestedInput
  }

  export type SignalementUncheckedUpdateWithoutDemandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    motif?: EnumMotifSignalementFieldUpdateOperationsInput | $Enums.MotifSignalement
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutSignalementFieldUpdateOperationsInput | $Enums.StatutSignalement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisanId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type DemandeCreateWithoutAvisInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    client: UserCreateNestedOneWithoutDemandesClientInput
    artisan?: ArtisanCreateNestedOneWithoutDemandesInput
    signalement?: SignalementCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutAvisInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    clientId: string
    artisanId?: string | null
    signalement?: SignalementUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutAvisInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutAvisInput, DemandeUncheckedCreateWithoutAvisInput>
  }

  export type ArtisanCreateWithoutAvisRecusInput = {
    id?: string
    metiers?: ArtisanCreatemetiersInput | $Enums.Metier[]
    commune: string
    verifie?: boolean
    note?: number
    nbAvis?: number
    experience?: number
    soldeKobo?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutArtisanInput
    demandes?: DemandeCreateNestedManyWithoutArtisanInput
    signalementsRecus?: SignalementCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateWithoutAvisRecusInput = {
    id?: string
    userId: string
    metiers?: ArtisanCreatemetiersInput | $Enums.Metier[]
    commune: string
    verifie?: boolean
    note?: number
    nbAvis?: number
    experience?: number
    soldeKobo?: number
    createdAt?: Date | string
    demandes?: DemandeUncheckedCreateNestedManyWithoutArtisanInput
    signalementsRecus?: SignalementUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanCreateOrConnectWithoutAvisRecusInput = {
    where: ArtisanWhereUniqueInput
    create: XOR<ArtisanCreateWithoutAvisRecusInput, ArtisanUncheckedCreateWithoutAvisRecusInput>
  }

  export type UserCreateWithoutAvisDonnesInput = {
    id?: string
    phone: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    artisan?: ArtisanCreateNestedOneWithoutUserInput
    demandesClient?: DemandeCreateNestedManyWithoutClientInput
    signalements?: SignalementCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutAvisDonnesInput = {
    id?: string
    phone: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    artisan?: ArtisanUncheckedCreateNestedOneWithoutUserInput
    demandesClient?: DemandeUncheckedCreateNestedManyWithoutClientInput
    signalements?: SignalementUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutAvisDonnesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvisDonnesInput, UserUncheckedCreateWithoutAvisDonnesInput>
  }

  export type DemandeUpsertWithoutAvisInput = {
    update: XOR<DemandeUpdateWithoutAvisInput, DemandeUncheckedUpdateWithoutAvisInput>
    create: XOR<DemandeCreateWithoutAvisInput, DemandeUncheckedCreateWithoutAvisInput>
    where?: DemandeWhereInput
  }

  export type DemandeUpdateToOneWithWhereWithoutAvisInput = {
    where?: DemandeWhereInput
    data: XOR<DemandeUpdateWithoutAvisInput, DemandeUncheckedUpdateWithoutAvisInput>
  }

  export type DemandeUpdateWithoutAvisInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutDemandesClientNestedInput
    artisan?: ArtisanUpdateOneWithoutDemandesNestedInput
    signalement?: SignalementUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutAvisInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    signalement?: SignalementUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type ArtisanUpsertWithoutAvisRecusInput = {
    update: XOR<ArtisanUpdateWithoutAvisRecusInput, ArtisanUncheckedUpdateWithoutAvisRecusInput>
    create: XOR<ArtisanCreateWithoutAvisRecusInput, ArtisanUncheckedCreateWithoutAvisRecusInput>
    where?: ArtisanWhereInput
  }

  export type ArtisanUpdateToOneWithWhereWithoutAvisRecusInput = {
    where?: ArtisanWhereInput
    data: XOR<ArtisanUpdateWithoutAvisRecusInput, ArtisanUncheckedUpdateWithoutAvisRecusInput>
  }

  export type ArtisanUpdateWithoutAvisRecusInput = {
    id?: StringFieldUpdateOperationsInput | string
    metiers?: ArtisanUpdatemetiersInput | $Enums.Metier[]
    commune?: StringFieldUpdateOperationsInput | string
    verifie?: BoolFieldUpdateOperationsInput | boolean
    note?: FloatFieldUpdateOperationsInput | number
    nbAvis?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    soldeKobo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArtisanNestedInput
    demandes?: DemandeUpdateManyWithoutArtisanNestedInput
    signalementsRecus?: SignalementUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateWithoutAvisRecusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metiers?: ArtisanUpdatemetiersInput | $Enums.Metier[]
    commune?: StringFieldUpdateOperationsInput | string
    verifie?: BoolFieldUpdateOperationsInput | boolean
    note?: FloatFieldUpdateOperationsInput | number
    nbAvis?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    soldeKobo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUncheckedUpdateManyWithoutArtisanNestedInput
    signalementsRecus?: SignalementUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type UserUpsertWithoutAvisDonnesInput = {
    update: XOR<UserUpdateWithoutAvisDonnesInput, UserUncheckedUpdateWithoutAvisDonnesInput>
    create: XOR<UserCreateWithoutAvisDonnesInput, UserUncheckedCreateWithoutAvisDonnesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvisDonnesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvisDonnesInput, UserUncheckedUpdateWithoutAvisDonnesInput>
  }

  export type UserUpdateWithoutAvisDonnesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUpdateOneWithoutUserNestedInput
    demandesClient?: DemandeUpdateManyWithoutClientNestedInput
    signalements?: SignalementUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutAvisDonnesInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUncheckedUpdateOneWithoutUserNestedInput
    demandesClient?: DemandeUncheckedUpdateManyWithoutClientNestedInput
    signalements?: SignalementUncheckedUpdateManyWithoutClientNestedInput
  }

  export type DemandeCreateWithoutSignalementInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    client: UserCreateNestedOneWithoutDemandesClientInput
    artisan?: ArtisanCreateNestedOneWithoutDemandesInput
    avis?: AvisCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutSignalementInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    clientId: string
    artisanId?: string | null
    avis?: AvisUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutSignalementInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutSignalementInput, DemandeUncheckedCreateWithoutSignalementInput>
  }

  export type ArtisanCreateWithoutSignalementsRecusInput = {
    id?: string
    metiers?: ArtisanCreatemetiersInput | $Enums.Metier[]
    commune: string
    verifie?: boolean
    note?: number
    nbAvis?: number
    experience?: number
    soldeKobo?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutArtisanInput
    demandes?: DemandeCreateNestedManyWithoutArtisanInput
    avisRecus?: AvisCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateWithoutSignalementsRecusInput = {
    id?: string
    userId: string
    metiers?: ArtisanCreatemetiersInput | $Enums.Metier[]
    commune: string
    verifie?: boolean
    note?: number
    nbAvis?: number
    experience?: number
    soldeKobo?: number
    createdAt?: Date | string
    demandes?: DemandeUncheckedCreateNestedManyWithoutArtisanInput
    avisRecus?: AvisUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanCreateOrConnectWithoutSignalementsRecusInput = {
    where: ArtisanWhereUniqueInput
    create: XOR<ArtisanCreateWithoutSignalementsRecusInput, ArtisanUncheckedCreateWithoutSignalementsRecusInput>
  }

  export type UserCreateWithoutSignalementsInput = {
    id?: string
    phone: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    artisan?: ArtisanCreateNestedOneWithoutUserInput
    demandesClient?: DemandeCreateNestedManyWithoutClientInput
    avisDonnes?: AvisCreateNestedManyWithoutClientInput
  }

  export type UserUncheckedCreateWithoutSignalementsInput = {
    id?: string
    phone: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    artisan?: ArtisanUncheckedCreateNestedOneWithoutUserInput
    demandesClient?: DemandeUncheckedCreateNestedManyWithoutClientInput
    avisDonnes?: AvisUncheckedCreateNestedManyWithoutClientInput
  }

  export type UserCreateOrConnectWithoutSignalementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSignalementsInput, UserUncheckedCreateWithoutSignalementsInput>
  }

  export type DemandeUpsertWithoutSignalementInput = {
    update: XOR<DemandeUpdateWithoutSignalementInput, DemandeUncheckedUpdateWithoutSignalementInput>
    create: XOR<DemandeCreateWithoutSignalementInput, DemandeUncheckedCreateWithoutSignalementInput>
    where?: DemandeWhereInput
  }

  export type DemandeUpdateToOneWithWhereWithoutSignalementInput = {
    where?: DemandeWhereInput
    data: XOR<DemandeUpdateWithoutSignalementInput, DemandeUncheckedUpdateWithoutSignalementInput>
  }

  export type DemandeUpdateWithoutSignalementInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutDemandesClientNestedInput
    artisan?: ArtisanUpdateOneWithoutDemandesNestedInput
    avis?: AvisUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutSignalementInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    avis?: AvisUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type ArtisanUpsertWithoutSignalementsRecusInput = {
    update: XOR<ArtisanUpdateWithoutSignalementsRecusInput, ArtisanUncheckedUpdateWithoutSignalementsRecusInput>
    create: XOR<ArtisanCreateWithoutSignalementsRecusInput, ArtisanUncheckedCreateWithoutSignalementsRecusInput>
    where?: ArtisanWhereInput
  }

  export type ArtisanUpdateToOneWithWhereWithoutSignalementsRecusInput = {
    where?: ArtisanWhereInput
    data: XOR<ArtisanUpdateWithoutSignalementsRecusInput, ArtisanUncheckedUpdateWithoutSignalementsRecusInput>
  }

  export type ArtisanUpdateWithoutSignalementsRecusInput = {
    id?: StringFieldUpdateOperationsInput | string
    metiers?: ArtisanUpdatemetiersInput | $Enums.Metier[]
    commune?: StringFieldUpdateOperationsInput | string
    verifie?: BoolFieldUpdateOperationsInput | boolean
    note?: FloatFieldUpdateOperationsInput | number
    nbAvis?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    soldeKobo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArtisanNestedInput
    demandes?: DemandeUpdateManyWithoutArtisanNestedInput
    avisRecus?: AvisUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateWithoutSignalementsRecusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metiers?: ArtisanUpdatemetiersInput | $Enums.Metier[]
    commune?: StringFieldUpdateOperationsInput | string
    verifie?: BoolFieldUpdateOperationsInput | boolean
    note?: FloatFieldUpdateOperationsInput | number
    nbAvis?: IntFieldUpdateOperationsInput | number
    experience?: IntFieldUpdateOperationsInput | number
    soldeKobo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandes?: DemandeUncheckedUpdateManyWithoutArtisanNestedInput
    avisRecus?: AvisUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type UserUpsertWithoutSignalementsInput = {
    update: XOR<UserUpdateWithoutSignalementsInput, UserUncheckedUpdateWithoutSignalementsInput>
    create: XOR<UserCreateWithoutSignalementsInput, UserUncheckedCreateWithoutSignalementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSignalementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSignalementsInput, UserUncheckedUpdateWithoutSignalementsInput>
  }

  export type UserUpdateWithoutSignalementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUpdateOneWithoutUserNestedInput
    demandesClient?: DemandeUpdateManyWithoutClientNestedInput
    avisDonnes?: AvisUpdateManyWithoutClientNestedInput
  }

  export type UserUncheckedUpdateWithoutSignalementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUncheckedUpdateOneWithoutUserNestedInput
    demandesClient?: DemandeUncheckedUpdateManyWithoutClientNestedInput
    avisDonnes?: AvisUncheckedUpdateManyWithoutClientNestedInput
  }

  export type DemandeCreateManyClientInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    artisanId?: string | null
  }

  export type AvisCreateManyClientInput = {
    id?: string
    note: number
    commentaire?: string
    createdAt?: Date | string
    demandeId: string
    artisanId: string
  }

  export type SignalementCreateManyClientInput = {
    id?: string
    motif: $Enums.MotifSignalement
    description?: string
    statut?: $Enums.StatutSignalement
    createdAt?: Date | string
    demandeId?: string | null
    artisanId: string
  }

  export type DemandeUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisan?: ArtisanUpdateOneWithoutDemandesNestedInput
    avis?: AvisUpdateOneWithoutDemandeNestedInput
    signalement?: SignalementUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    avis?: AvisUncheckedUpdateOneWithoutDemandeNestedInput
    signalement?: SignalementUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvisUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demande?: DemandeUpdateOneRequiredWithoutAvisNestedInput
    artisan?: ArtisanUpdateOneRequiredWithoutAvisRecusNestedInput
  }

  export type AvisUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeId?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
  }

  export type AvisUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeId?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
  }

  export type SignalementUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    motif?: EnumMotifSignalementFieldUpdateOperationsInput | $Enums.MotifSignalement
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutSignalementFieldUpdateOperationsInput | $Enums.StatutSignalement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demande?: DemandeUpdateOneWithoutSignalementNestedInput
    artisan?: ArtisanUpdateOneRequiredWithoutSignalementsRecusNestedInput
  }

  export type SignalementUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    motif?: EnumMotifSignalementFieldUpdateOperationsInput | $Enums.MotifSignalement
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutSignalementFieldUpdateOperationsInput | $Enums.StatutSignalement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeId?: NullableStringFieldUpdateOperationsInput | string | null
    artisanId?: StringFieldUpdateOperationsInput | string
  }

  export type SignalementUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    motif?: EnumMotifSignalementFieldUpdateOperationsInput | $Enums.MotifSignalement
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutSignalementFieldUpdateOperationsInput | $Enums.StatutSignalement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeId?: NullableStringFieldUpdateOperationsInput | string | null
    artisanId?: StringFieldUpdateOperationsInput | string
  }

  export type DemandeCreateManyArtisanInput = {
    id?: string
    metier: $Enums.Metier
    description: string
    commune: string
    adresse: string
    statut?: $Enums.StatutDemande
    prixDevis?: number | null
    createdAt?: Date | string
    clientId: string
  }

  export type AvisCreateManyArtisanInput = {
    id?: string
    note: number
    commentaire?: string
    createdAt?: Date | string
    demandeId: string
    clientId: string
  }

  export type SignalementCreateManyArtisanInput = {
    id?: string
    motif: $Enums.MotifSignalement
    description?: string
    statut?: $Enums.StatutSignalement
    createdAt?: Date | string
    demandeId?: string | null
    clientId: string
  }

  export type DemandeUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: UserUpdateOneRequiredWithoutDemandesClientNestedInput
    avis?: AvisUpdateOneWithoutDemandeNestedInput
    signalement?: SignalementUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    avis?: AvisUncheckedUpdateOneWithoutDemandeNestedInput
    signalement?: SignalementUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateManyWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    metier?: EnumMetierFieldUpdateOperationsInput | $Enums.Metier
    description?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    prixDevis?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type AvisUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demande?: DemandeUpdateOneRequiredWithoutAvisNestedInput
    client?: UserUpdateOneRequiredWithoutAvisDonnesNestedInput
  }

  export type AvisUncheckedUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type AvisUncheckedUpdateManyWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: IntFieldUpdateOperationsInput | number
    commentaire?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type SignalementUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    motif?: EnumMotifSignalementFieldUpdateOperationsInput | $Enums.MotifSignalement
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutSignalementFieldUpdateOperationsInput | $Enums.StatutSignalement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demande?: DemandeUpdateOneWithoutSignalementNestedInput
    client?: UserUpdateOneRequiredWithoutSignalementsNestedInput
  }

  export type SignalementUncheckedUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    motif?: EnumMotifSignalementFieldUpdateOperationsInput | $Enums.MotifSignalement
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutSignalementFieldUpdateOperationsInput | $Enums.StatutSignalement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type SignalementUncheckedUpdateManyWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    motif?: EnumMotifSignalementFieldUpdateOperationsInput | $Enums.MotifSignalement
    description?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutSignalementFieldUpdateOperationsInput | $Enums.StatutSignalement
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandeId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
  }



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