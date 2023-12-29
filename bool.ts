import { And, Bool, False, Not, Or, True } from "./bool.d.ts";

type IsTrue<B extends Bool> = B extends True ? true : false;

const expect = <T>(_: T) => void 0;

expect<IsTrue<True>>(true);
expect<IsTrue<Not<False>>>(true);
expect<IsTrue<And<True, True>>>(true);
expect<IsTrue<Or<True, False>>>(true);
expect<IsTrue<And<True, Or<True, False>>>>(true);

expect<IsTrue<False>>(false);
expect<IsTrue<Not<True>>>(false);
expect<IsTrue<And<True, False>>>(false);
expect<IsTrue<Or<False, False>>>(false);
