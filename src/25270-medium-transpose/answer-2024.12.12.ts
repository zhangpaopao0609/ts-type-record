/*
  25270 - Transpose
  -------
  by Apollo Wayne (@Shinerising) #medium #array #math

  ### Question

  The transpose of a matrix is an operator which flips a matrix over its diagonal; that is, it switches the row and column indices of the matrix A by producing another matrix, often denoted by A<sup>T</sup>.

  ```ts
  type Matrix = Transpose <[[1]]>; // expected to be [[1]]
  type Matrix1 = Transpose <[[1, 2], [3, 4]]>; // expected to be [[1, 3], [2, 4]]
  type Matrix2 = Transpose <[[1, 2, 3], [4, 5, 6]]>; // expected to be [[1, 4], [2, 5], [3, 6]]
  ```

  > View on GitHub: https://tsch.js.org/25270
*/

/* _____________ Your Code Here _____________ */

function transpose(arr: number[][]) {
  const m = arr.length;
  const n = arr[0].length;
  const res: number[][] = new Array(n).fill(0).map(() => new Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      res[i][j] = arr[j][i]
    }
  }

  return res
}

// type Transpose<T extends number[][], M extends number[] = [], N extends number[] = [], NR extends number[] = []> =
//   N['length'] extends T[0]['length']
//   ? NR
//   : M['length'] extends T['length']
//     ? [NR, ...Transpose<T, [], [...N, 1], []>]
//     : Transpose<T, [...M, 1], N, [...NR, T[M['length']][N['length']]]>


type Transpose<M extends number[][], R = M['length'] extends 0 ? [] : M[0]> = {
  [X in keyof R]: { [Y in keyof M]: X extends keyof M[Y] ? M[Y][X] : never }
}    
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Transpose<[]>, []>>,
  Expect<Equal<Transpose<[[1]]>, [[1]]>>,
  Expect<Equal<Transpose<[[1, 2]]>, [[1], [2]]>>,
  Expect<Equal<Transpose<[[1, 2], [3, 4]]>, [[1, 3], [2, 4]]>>,
  Expect<Equal<Transpose<[[1, 2, 3], [4, 5, 6]]>, [[1, 4], [2, 5], [3, 6]]>>,
  Expect<Equal<Transpose<[[1, 4], [2, 5], [3, 6]]>, [[1, 2, 3], [4, 5, 6]]>>,
  Expect<Equal<Transpose<[[1, 2, 3], [4, 5, 6], [7, 8, 9]]>, [[1, 4, 7], [2, 5, 8], [3, 6, 9]]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/25270/answer
  > View solutions: https://tsch.js.org/25270/solutions
  > More Challenges: https://tsch.js.org
*/
