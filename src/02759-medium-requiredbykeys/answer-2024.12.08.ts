/*
  2759 - RequiredByKeys
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  Implement a generic `RequiredByKeys<T,  K>` which takes two type argument `T` and `K`.

  `K` specify the set of properties of `T` that should set to be required. When `K` is not provided, it should make all properties required just like the normal `Required<T>`.

  For example

  ```typescript
  interface User {
    name?: string
    age?: number
    address?: string
  }

  type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }

  ```

  > View on GitHub: https://tsch.js.org/2759
*/

/* _____________ Your Code Here _____________ */

type IntersectionToObj<T> = {
  [K in keyof T]: T[K]
}

type RequiredByKeys<T extends Record<string, any>, K extends keyof T = any> = IntersectionToObj<
    { [P in keyof T as P extends K ? P : never]-?: T[P]  } &
    { [U in keyof T as U extends K ? never : U]: T[U] }
  >


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2759/answer
  > View solutions: https://tsch.js.org/2759/solutions
  > More Challenges: https://tsch.js.org
*/
