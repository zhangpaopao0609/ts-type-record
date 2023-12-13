/*
  30301 - IsOdd
  -------
  by jiangshan (@jiangshanmeta) #medium #string

  ### Question

  return true is a number is odd

  > View on GitHub: https://tsch.js.org/30301
*/

/* _____________ Your Code Here _____________ */

// type LastOne<T extends string, U extends string = ''> =
//   T extends ''
//   ? U
//   : T extends `${infer F}${infer R}`
//     ? LastOne<R, F>
//     : never
// type ParseInt<T extends string> = T extends `${infer F extends number}` ? F : never
// type NumberToArr<T extends number, U extends number[] = []> =
//   U['length'] extends T
//   ? U
//   : NumberToArr<T, [...U, 0]>

// type Pop<T extends number[]> = T extends [...infer F, infer R] ? F : T;

// type IsOdd<T extends number, A extends number[] = NumberToArr<ParseInt<LastOne<`${T}`>>>> =
//   A['length'] extends 0
//   ? false
//   : A['length'] extends 1
//     ? true
//     : IsOdd<T, Pop<Pop<A>>>

// your answers
type IsOdd<T extends number> =  `${T}` extends `${number | ''}${1 | 3 | 5 | 7 | 9}` ? true : false;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<number>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/30301/answer
  > View solutions: https://tsch.js.org/30301/solutions
  > More Challenges: https://tsch.js.org
*/
