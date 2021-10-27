// use : Exclude<Type, ExcludedUnion>
// menghapus type member yang berisisan

type partOf = "a" | "b" | "c" | "d";
type T0 = Exclude<partOf, "a" |  "d">; // eleminasi type a and d
// equals : type T0 = "b" | "c";

// test code 
const t0:T0 = "c";
console.log(t0);
// const t2:T0 = "a"; // not found "a" in T0 

type aType = string | number | (() => void);
type T1 = Exclude<aType, Function>;
// equals : type T1 = string | number;

const t1: T1 = "Hello";
const t2: T1 = 239842;
// const t3: T1 = () => console.log("Hello"); // not found! a Function type
console.log(t1);
console.log(t2);