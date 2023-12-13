/*
  21104 - FindAll
  -------
  by tunamagur0 (@tunamagur0) #medium #template-literal #string

  ### Question

  Given a pattern string P and a text string T, implement the type `FindAll<T, P>` that returns an Array that contains all indices (0-indexed) from T where P matches.

  > View on GitHub: https://tsch.js.org/21104
*/

/* _____________ Your Code Here _____________ */
type StringToArr<T extends string> =
  T extends `${infer F}${infer R}`
  ? [F, ...StringToArr<R>]
  : []

type StringShift<T extends string> =
  T extends `${infer _}${infer R}`
  ? R
  : T
type StringFirst<T extends string> =
  T extends `${infer F}${string}`
  ? F
  : T
// type FindAll<T extends string, P extends string, I extends string[] = []> =
//   P extends ''
//   ? []
//   : T extends `${infer F}${P}${infer R}`
//     ? [[...I, ...StringToArr<F>]['length'], ...FindAll<R, P, [...I, ...StringToArr<F>, ...StringToArr<P>]>]
//     : []

type FindAll<T extends string, P extends string, REST extends string = T, PRE extends string = ''> =
  P extends ''
  ? []
  : T extends `${PRE}${P}${string}`
    ? [StringToArr<PRE>['length'], ...FindAll<T, P, StringShift<REST>, `${PRE}${StringFirst<REST>}`>]
    : REST extends ''
      ? []
      : FindAll<T, P, StringShift<REST>, `${PRE}${StringFirst<REST>}`>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'Type'>, [14]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'pe'>, [16, 27]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', ''>, []>>,
  Expect<Equal<FindAll<'', 'Type'>, []>>,
  Expect<Equal<FindAll<'', ''>, []>>,
  Expect<Equal<FindAll<'AAAA', 'A'>, [0, 1, 2, 3]>>,
  Expect<Equal<FindAll<'AAAA', 'AA'>, [0, 1, 2]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/21104/answer
  > View solutions: https://tsch.js.org/21104/solutions
  > More Challenges: https://tsch.js.org
*/
