// use:  Readonly<Type>

interface ToDoBro {
  title: string;
}

// using Readonly
const obj: Readonly<ToDoBro> = {
  title: "Ngab ngab ngabberss!!!",
};
console.log("Readonly --- get value");
console.log(obj.title);

// cannot assign to parameter like this
/*
obj.title = "Hello NGab!";
*/

// without Readonly
const obj2: ToDoBro = {
  title: "Ngab ngab ngabberss!!!",
};
console.log("\nBEFORE:");
console.log(obj2.title);

obj2.title = "Tanpa Readonly, kamu bisa mengubah value dari ToDoBro";
console.log("\nAFTER:");
console.log(obj2.title);