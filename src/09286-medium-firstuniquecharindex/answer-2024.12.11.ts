/*
  9286 - FirstUniqueCharIndex
  -------
  by jiangshan (@jiangshanmeta) #medium #string

  ### Question

  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. (Inspired by [leetcode 387](https://leetcode.com/problems/first-unique-character-in-a-string/))

  > View on GitHub: https://tsch.js.org/9286
*/

/* _____________ Your Code Here _____________ */

// type FirstUniqueCharIndex<T extends string, B extends string = '', U extends any[] = []> =
//   T extends `${infer F}${infer R}`
//   ? R extends `${string}${F}${string}`
//     ? FirstUniqueCharIndex<R, `${B}${F}`, [...U, 1]>
//     : B extends `${string}${F}${string}`
//       ? FirstUniqueCharIndex<R, `${B}${F}`, [...U, 1]>
//       : U['length']
//   : -1

type FirstUniqueCharIndex<T extends string, N extends string = T, U extends unknown[] = []> =
  T extends ''
  ? -1 
  : N extends `${infer F}${infer R}`
    ? T extends `${string}${F}${string}${F}${string}` 
      ? FirstUniqueCharIndex<T, R, [...U, unknown]> 
      : U['length'] 
    : -1

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9286/answer
  > View solutions: https://tsch.js.org/9286/solutions
  > More Challenges: https://tsch.js.org
*/
