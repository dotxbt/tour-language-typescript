// use:  Record<Keys, Type>

interface Mahasiswa {
  name: string;
  age: number;
}

type NamaPanggilan = "adit" | "dewe" | "feller";

const namaPanggilan: Record<NamaPanggilan, Mahasiswa> = {
  adit: { name: "Aditya", age: 22 },
  dewe: { name: "Dimas Wahyu", age: 56 },
  feller: { name: "Ferrel Raditya", age: 42 },
};

const byIndex: Record<number, Mahasiswa> = {
  0: { name: "Aditya", age: 22 },
  1: { name: "Dimas Wahyu", age: 56 },
  2: { name: "Ferrel Raditya", age: 42 },
};

console.log("------------------- using spesific type");
console.log(namaPanggilan.adit);
console.log(namaPanggilan.dewe);
console.log(namaPanggilan.feller);
console.log(namaPanggilan.feller.name);
console.log("------------------- using number");
console.log(byIndex[0]);
console.log(byIndex[1]);
console.log(byIndex[2]);
console.log(byIndex[2].name);
