// use : Pick<Type, Keys>
// Memilih paramter

interface WargaLokal {
  nama: string;
  alamat: string;
  noRumah: number;
  noHp: string;
  kewarganegaraan: string;
}

// create type using Pick<Type> to select the params of WargaLokal
type WargaRtSebelah = Pick<WargaLokal, "nama" | "noRumah">;

const initData: WargaLokal = {
  nama: "Kakek Legend Sugiono San",
  noRumah: 69,
  alamat: "hore",
  kewarganegaraan: "Belanda",
  noHp: "9283928424"
}

const {nama, noRumah, ...sisa} = initData;
// test code
const warga: WargaRtSebelah = {...initData};

console.log(sisa);
console.log(warga);
console.log(warga.nama);
console.log(warga.noRumah);
