/*
  2595 - PickByType
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  From `T`, pick a set of properties whose type are assignable to `U`.

  For Example

  ```typescript
  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }
  ```

  > View on GitHub: https://tsch.js.org/2595
*/

/* _____________ Your Code Here _____________ */

type PickByType<T extends Record<string, any>, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K]
}

// type PickByType<T extends Record<string, any>, U> = {
//   [K in keyof T as T[K] extends U ? K : never]: U
// }
// 为什么这种不够好哈，因为 U 是联合类型
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
  Expect<Equal<PickByType<Model, number | string>, { count: number, name: string }>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2595/answer
  > View solutions: https://tsch.js.org/2595/solutions
  > More Challenges: https://tsch.js.org
*/
