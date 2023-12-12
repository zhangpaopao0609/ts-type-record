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

type ff<T extends any[]> = T['length'];
type gg = ff<string[]>

// 在 TypeScript 中，`T['length']` 是索引访问类型，它用于访问 `T` 类型的 `'length'` 属性的类型。

// 在你的例子中，`T` 是一个任意数组类型，`T['length']` 就是访问这个数组的 `'length'` 属性的类型。在 JavaScript（以及 TypeScript）中，数组的 `'length'` 属性是一个数字，表示数组中的元素数量。因此，`T['length']` 的类型就是 `number`。

// 所以，当你定义 `type gg = ff<string[]>;` 的时候，`T` 是 `string[]` 类型，`T['length']` 就是 `string[]['length']`，也就是 `number` 类型。因此，`gg` 的类型就是 `number`。

// 在 TypeScript 中，当你使用具体的元组类型（如 `[string]`），TypeScript 会知道这个元组的确切长度。在你的例子中，`[string]` 是一个只有一个元素的元组，所以它的长度是 `1`。

// 当你写 `type gg = ff<[string]>;` 时，`T` 是 `[string]` 类型，`T['length']` 就是 `[string]['length']`。因为 `[string]` 是一个长度为 `1` 的元组，所以 `[string]['length']` 的类型就是具体的数字 `1`，而不是 `number`。

// 这是 TypeScript 的一种类型推导功能，它可以推导出具体的元组长度，而不仅仅是说长度是一个数字。

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
