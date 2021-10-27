// use:  Required<Type>


interface sebuahProps {
  nama?: string;
  alamat?: string;
}

// test code usage
// it's okay 
const object1: sebuahProps = {};
const object2: sebuahProps = { nama: "Jancuk" };
const object3: sebuahProps = { alamat: "Aborigin" };
const object4: sebuahProps = { nama: "Jancuk", alamat: "Aborigin" }; 

// using Required
const object5: Required<sebuahProps> = { nama: "Jancuk", alamat: "Aborigin" }

// print
console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);
console.log(object5);

// it's not okay
/*
const object6: Required<sebuahProps> = {}; 
const object7: Required<sebuahProps> = { nama: "Jancuk" };
const object8: Required<sebuahProps> = { alamat: "Aborigin" };
*/