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

// test code
const warga: WargaRtSebelah = {
  nama: "Kakek Legend Sugiono San",
  noRumah: 69,
};

console.log(warga);
console.log(warga.nama);
console.log(warga.noRumah);
