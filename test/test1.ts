function g(str: string): string {
  let i: number = 0;
  let new_str: string = "";
  while (i < str.length - 1) {
    new_str = new_str + str.charAt(i + 1);
    i = i + 1;
  }
  return new_str;
}

function f(str: string): string {
  if (str.length == 0) return "";
  else if (str.length == 1) return str;
  else return f(g(str)) + str.charAt(0);
}

function h(n: bigint, str: string): string {
  while (n != 1n) {
    if (n % 2n == 0n) {
      n = n / 2n;
    } else {
      n = 3n * n + 1n;
    }
    str = f(str);
  }
  return str;
}

function pow(x: bigint, y: bigint): bigint {
  if (y === 0n) {
    return 1n;
  } else {
    return x * pow(x, y - 1n);
  }
}

console.log(h(1n, "fruits"));
console.log(h(2n, "fruits"));
console.log(h(5n, "fruits"));
// console.log(h((pow(2n, 1000000000000000n))(), "fruits"));
// console.log(h(pow(2n, 9831050005000007n), "fruits"));
