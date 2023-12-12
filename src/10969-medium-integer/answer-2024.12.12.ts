/*
  10969 - Integer
  -------
  by HuaBing (@hbcraft) #medium #template-literal

  ### Question

  Please complete type `Integer<T>`, type `T` inherits from `number`, if `T` is an integer return it, otherwise return `never`.

  > View on GitHub: https://tsch.js.org/10969
*/

/* _____________ Your Code Here _____________ */

type IsZero<T extends string> =
  T extends `${infer F}${infer R}`
  ? F extends '0'
    ? IsZero<R>
    : false
  : true

type IsEqual<U, V> = (<T>() => T extends U ? 1 : 2) extends (<T>() => T extends V ? 1 : 2) ? true : false

type Integer<T extends number> =
  `${T}` extends `${infer F}.${infer R}` 
  ? IsZero<R> extends true
    ? F
    : never
  : IsEqual<T, number> extends true
    ? never
    : T

    // type Integer<T extends string | number> =
//   number extends T
//   ? never
//   : `${T}` extends `${string}.${string}`
//     ? never
//     : T

// type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never

// 好吧，这俩我都没想通
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

let x = 1
let y = 1 as const

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.000000000>, 1>>,
  Expect<Equal<Integer<0.5>, never>>,
  Expect<Equal<Integer<28.00>, 28>>,
  Expect<Equal<Integer<28.101>, never>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/10969/answer
  > View solutions: https://tsch.js.org/10969/solutions
  > More Challenges: https://tsch.js.org
*/
