export type True = { _tag: "True" };

export type False = { _tag: "False" };

export type Bool = True | False;

export type Not<B extends Bool> = B extends True ? False : True;

export type And<B1 extends Bool, B2 extends Bool> = B1 extends True
  ? B2 extends True
    ? True
    : False
  : False;

export type Or<B1 extends Bool, B2 extends Bool> = B1 extends True
  ? True
  : B2 extends True
  ? True
  : False;
