/*
  9989 - Count Element Number To Object
  -------
  by 凤之兮原 (@kongmingLatern) #medium

  ### Question

  With type ``CountElementNumberToObject``, get the number of occurrences of every item from an array and return them in an object. For example:

  ~~~ts
  type Simple1 = CountElementNumberToObject<[]> // return {}
  type Simple2 = CountElementNumberToObject<[1,2,3,4,5]>
  // return {
  //   1: 1,
  //   2: 1,
  //   3: 1,
  //   4: 1,
  //   5: 1
  // }

  type Simple3 = CountElementNumberToObject<[1,2,3,4,5,[1,2,3]]>
  // return {
  //   1: 2,
  //   2: 2,
  //   3: 2,
  //   4: 1,
  //   5: 1
  // }
  ~~~

  > View on GitHub: https://tsch.js.org/9989
*/

/* _____________ Your Code Here _____________ */

// type Flatten<T extends any[]> =
//   T extends [infer F, ...infer R]
//   ? F extends any[]
//     ? [...Flatten<F>, ...Flatten<R>]
//     : [F, ...Flatten<R>]
//   : T

// type PlusOne<T extends number, U extends number[] = []> =
//   U['length'] extends T
//   ? [...U, 1]['length']
//   : PlusOne<T, [...U, 1]>

// type CountElementNumberToObjectInner<T extends any[], U extends Record<any, any> = {}> =
//   T extends [infer F extends string | number, ...infer R]
//   ? CountElementNumberToObjectInner<R, { 
//     [K in F | keyof U]: 
//       K extends F
//       ? K extends keyof U
//         ? PlusOne<U[K]> 
//         : 1
//       : U[K]
//   }>
//   : U

// type CountElementNumberToObject<T extends any[]> = CountElementNumberToObjectInner<Flatten<T>>

type Flatten<T extends any[]> =
  T extends [infer F, ...infer R]
  ? [F] extends [never]
    ? Flatten<R>
    : F extends any[]
      ? [...Flatten<F>, ...Flatten<R>]
      : [F, ...Flatten<R>]
  : T


type Count<T, R extends Record<string | number,any[]> = {}> = 
  T extends [infer F extends string | number, ...infer L]
  ? F extends keyof R
    ? Count<L, Omit<R, F> & Record<F, [...R[F], 0]>>
    : Count<L, R & Record<F,[0]>>
  : { [K in keyof R]: R[K]['length'] }


type CountElementNumberToObject<T extends any[]> = Count<Flatten<T>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
type cases = [
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5]>, {
    1: 1
    2: 1
    3: 1
    4: 1
    5: 1
  }
  >>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>, {
    1: 2
    2: 2
    3: 2
    4: 1
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>, {
    1: 3
    2: 3
    3: 2
    4: 3
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<Equal<CountElementNumberToObject<['1', '2', '0']>, {
    0: 1
    1: 1
    2: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<['a', 'b', ['c', ['d']]]>, {
    'a': 1
    'b': 1
    'c': 1
    'd': 1
  }>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9989/answer
  > View solutions: https://tsch.js.org/9989/solutions
  > More Challenges: https://tsch.js.org
*/
