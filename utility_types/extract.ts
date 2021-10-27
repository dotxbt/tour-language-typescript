// use : Extract<Type, Union>
// mengambil type member yang berisisan

type ToNe = "a" | "b" | "c" | "d";

type extractFromToNe = Extract<ToNe, "a">;
// equals : type extractFromToNe = "a";

type TtWo = Extract<string | number | (() => void), Function>;
type extractFromTtWo = Extract<TtWo, Function>;
// equals : type extractFromTtWo = (() => void);