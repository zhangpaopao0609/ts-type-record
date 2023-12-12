/*
  9898 - Appear only once
  -------
  by X.Q. Chen (@brenner8023) #medium

  ### Question

  Find the elements in the target array that appear only once. For example：input: `[1,2,2,3,3,4,5,6,6,6]`，ouput: `[1,4,5]`.

  > View on GitHub: https://tsch.js.org/9898
*/

/* _____________ Your Code Here _____________ */

// type ArrToString<T extends number[]> = T extends [infer F extends number, ...infer R extends number[]] ? `${F}${ArrToString<R>}` : ''

// type FindEles<T extends number[], N extends number[] = T> =
// N extends [infer F extends number, ...infer R extends number[]]
//   ? ArrToString<T> extends `${string}${F}${string}${F}${string}`
//     ? FindEles<T, R>
//     : [F, ...FindEles<T, R>]
//   : []

// 所谓的只出现一次，就是查看除自己以外，其它元素是否还存在有与之相同的，所以维护两个数组，一个用于收集结果，一个用于收集这个数之前的
type FindEles<T extends any[], U extends any[] = [], O extends any[] = []> =
  T extends [infer F, ...infer R]
  ? F extends [...R, ...O][number]
    ? FindEles<R, U, [...O, F]>
    : FindEles<R, [...U, F], [...O, F]>
  : U
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9898/answer
  > View solutions: https://tsch.js.org/9898/solutions
  > More Challenges: https://tsch.js.org
*/
