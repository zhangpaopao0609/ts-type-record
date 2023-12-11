/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */

// type GreaterThan<T extends number, U extends number, A extends number[] = []> =
//   A['length'] extends T
//   ? false
//   : A['length'] extends U
//     ? true
//     : GreaterThan<T, U, [...A, 1]>

// 这样巧妙地利用了数组 length 来比较，但是过不了大数


type ParseInt<S extends string> = S extends `${infer N extends number}` ? N : 0

type GreaterThanBySmallNumber<
  T extends number,
  U extends number,
  A extends number[] = [],
> = T extends A['length']
  ? false
  : U extends A['length']
    ? true
    : GreaterThanBySmallNumber<T, U, [...A, 1]>

type StringToArray<S extends string> = S extends `${infer F}${infer R}`
  ? [F, ...StringToArray<R>]
  : []

type Shift<T extends string[]> = T extends [string, ...infer R] ? R : []

type GreaterThanByArray<T extends string[], U extends string[]> = T[0] extends U[0]
  ? T['length'] extends 1
    ? false
    : GreaterThanByArray<Shift<T>, Shift<U>>
  : GreaterThanBySmallNumber<ParseInt<T[0]>, ParseInt<U[0]>>

type GreaterThan<
  T extends number,
  U extends number,
  TA extends string[] = StringToArray<`${T}`>,
  UA extends string[] = StringToArray<`${U}`>,
> = TA['length'] extends UA['length']
  ? GreaterThanByArray<TA, UA>
  : GreaterThanBySmallNumber<TA['length'], UA['length']>
  
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
