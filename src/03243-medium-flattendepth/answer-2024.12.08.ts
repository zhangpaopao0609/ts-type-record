/*
  3243 - FlattenDepth
  -------
  by jiangshan (@jiangshanmeta) #medium #array

  ### Question

  Recursively flatten array up to depth times.

  For example:

  ```typescript
  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
  ```

  If the depth is provided, it's guaranteed to be positive integer.

  > View on GitHub: https://tsch.js.org/3243
*/

/* _____________ Your Code Here _____________ */

// type ParseInt<T extends string> = T extends `${infer Digit extends number}` ? Digit : never
// type ReverseString<S extends string> = S extends `${infer First}${infer Rest}` ? `${ReverseString<Rest>}${First}` : ''
// type RemoveLeadingZeros<S extends string> = S extends '0' ? S : S extends `${'0'}${infer R}` ? RemoveLeadingZeros<R> : S
// type InternalMinusOne<
//   S extends string
// > = S extends `${infer Digit extends number}${infer Rest}` ?
//     Digit extends 0 ?
//       `9${InternalMinusOne<Rest>}` :
//     `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][Digit]}${Rest}`:
//   never
// type MinusOne<T extends number> = T extends 0 ? -1 : ParseInt<RemoveLeadingZeros<ReverseString<InternalMinusOne<ReverseString<`${T}`>>>>>

// type FlattenDepth<T extends any[], L extends number = 1> = 
//   L extends 0
//   ? T
//   : T extends [infer F, ...infer R] 
//     ? F extends any[]
//       ?  [...FlattenDepth<F, MinusOne<L>>, ...FlattenDepth<R, L>]
//       : [F, ...FlattenDepth<R, L>]
//     : T
type FlattenDepth<T extends any[], S extends number = 1, U extends any[] = []> = 
  U['length'] extends S
  ? T
  : T extends [infer F, ...infer R]
    ? F extends any[]
      ? [...FlattenDepth<F, S, [...U, 1]>, ...FlattenDepth<R, S, U>]
      : [F, ...FlattenDepth<R, S, U>]
    : T
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3243/answer
  > View solutions: https://tsch.js.org/3243/solutions
  > More Challenges: https://tsch.js.org
*/
