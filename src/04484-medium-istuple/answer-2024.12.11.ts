/*
  4484 - IsTuple
  -------
  by jiangshan (@jiangshanmeta) #medium #tuple

  ### Question

  Implement a type ```IsTuple```, which takes an input type ```T``` and returns whether ```T``` is tuple type.

  For example:

  ```typescript
  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false
  ```

  > View on GitHub: https://tsch.js.org/4484
*/

/* _____________ Your Code Here _____________ */

type IsTuple<T> =
  [T] extends [never]
  ? false
  : T extends readonly any[]
    ? number extends T['length']
      ? false
      : true
    : false

type cc<T> = [T] extends [never] ? 2: 3
type dd = cc<never>

// `never` 是 TypeScript 中的一个特殊类型，它表示永远不会发生的值的类型。当你有一个 `never` 类型的值，那意味着该值永远不会存在。

// 当 `T` 是 `never` 的时候，`T extends U ? X : Y` 的结果也会是 `never`。这是因为 `never` 类型表示一个永远不会存在的值，所以没有任何类型可以扩展 `never`，即使是 `never extends never`。

// 这就是为什么 `cc<never>` 在你的第二个例子中返回 `never` 的原因。因为 `T` 是 `never`，所以 `T extends never ? X : Y` 的结果也是 `never`。

// 然而，当你用 `[T] extends [U] ? X : Y` 的形式，即使 `T` 是 `never`，结果也不会是 `never`。这是因为 `[never]` 是一个具有一个 `never` 类型元素的元组，它实际上是存在的，所以 `[never] extends [never] ? X : Y` 的结果不是 `never`。

// 总的来说，`never extends never` 会返回 `never`，而 `[never] extends [never]` 不会返回 `never`。

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4484/answer
  > View solutions: https://tsch.js.org/4484/solutions
  > More Challenges: https://tsch.js.org
*/
