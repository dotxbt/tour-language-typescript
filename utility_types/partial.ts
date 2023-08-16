// use:  Partial<Type>

interface AnakAnjay {
  name: string;
  status: string;
}

type partOf = Partial<AnakAnjay>;

const objPartOf: partOf = {
  name: "Sabituddin Bigbang",
};
console.log("PART OF", objPartOf);

function updateAnakAnjay(anjay: AnakAnjay, fields: Partial<AnakAnjay>) {
  return {
    ...anjay,
    ...fields,
  };
}

// test code
const Anak1: AnakAnjay = {
  name: "Vangke",
  status: "Dipenjara",
};

const Anak2 = updateAnakAnjay(Anak1, {
  status: "Diobname",
});

console.log(Anak1);
console.log(Anak2);
