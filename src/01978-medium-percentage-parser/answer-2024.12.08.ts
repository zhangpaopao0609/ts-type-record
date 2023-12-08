/*
  1978 - Percentage Parser
  -------
  by SSShuai1999 (@SSShuai1999) #medium #template-literal

  ### Question

  Implement PercentageParser<T extends string>.
  According to the `/^(\+|\-)?(\d*)?(\%)?$/` regularity to match T and get three matches.

  The structure should be: [`plus or minus`, `number`, `unit`]
  If it is not captured, the default is an empty string.

  For example:

  ```ts
  type PString1 = ""
  type PString2 = "+85%"
  type PString3 = "-85%"
  type PString4 = "85%"
  type PString5 = "85"

  type R1 = PercentageParser<PString1> // expected ['', '', '']
  type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
  type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
  type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
  type R5 = PercentageParser<PString5> // expected ["", "85", ""]
  ```

  > View on GitHub: https://tsch.js.org/1978
*/

/* _____________ Your Code Here _____________ */

// type PercentageParserWithoutSymbol<A extends string, T extends string = ''> =  
//   A extends `${infer S}${infer R}`
//   ? S extends '%'
//     ? [T, S]
//     : PercentageParserWithoutSymbol<R, `${T}${S}`>
//   : [T, '']

// type PercentageParser<A extends string> = 
//   A extends `${infer S}${infer R}`
//   ? S extends '-' | '+'
//     ? [S, ...PercentageParserWithoutSymbol<R>]
//     : ['', ...PercentageParserWithoutSymbol<A>]
//   : ['', '', '']

// type CheckPrefix<T extends string> = T extends '-' | '+' ? T : never; 
// type CheckSuffix<T extends string> = T extends `${infer R}%` ? [R, '%'] : [T, '']; 
// type PercentageParser<A extends string> = 
//   A extends `${infer F}${infer R}` 
//   ? CheckPrefix<F> extends never
//     ? ['', ...CheckSuffix<A>]
//     : [F, ...CheckSuffix<R>]
//   : ['', '', '']




type CheckPrefix<T> = T extends '+' | '-' ? T : never;
type CheckSuffix<T> =  T extends `${infer P}%` ? [P, '%'] : [T, ''];
type PercentageParser<A extends string> = A extends `${CheckPrefix<infer L>}${infer R}` ? [L, ...CheckSuffix<R>] : ['', ...CheckSuffix<A>];
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Case0 = ['', '', '']
type Case1 = ['+', '', '']
type Case2 = ['+', '1', '']
type Case3 = ['+', '100', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '100', '%']
type Case6 = ['-', '100', '%']
type Case7 = ['-', '100', '']
type Case8 = ['-', '1', '']
type Case9 = ['', '', '%']
type Case10 = ['', '1', '']
type Case11 = ['', '100', '']

type cases = [
  Expect<Equal<PercentageParser<''>, Case0>>,
  Expect<Equal<PercentageParser<'+'>, Case1>>,
  Expect<Equal<PercentageParser<'+1'>, Case2>>,
  Expect<Equal<PercentageParser<'+100'>, Case3>>,
  Expect<Equal<PercentageParser<'+100%'>, Case4>>,
  Expect<Equal<PercentageParser<'100%'>, Case5>>,
  Expect<Equal<PercentageParser<'-100%'>, Case6>>,
  Expect<Equal<PercentageParser<'-100'>, Case7>>,
  Expect<Equal<PercentageParser<'-1'>, Case8>>,
  Expect<Equal<PercentageParser<'%'>, Case9>>,
  Expect<Equal<PercentageParser<'1'>, Case10>>,
  Expect<Equal<PercentageParser<'100'>, Case11>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1978/answer
  > View solutions: https://tsch.js.org/1978/solutions
  > More Challenges: https://tsch.js.org
*/
