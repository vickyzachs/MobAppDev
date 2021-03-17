console.log ("Hello W")

//Javascript variable

var hello = "Hello World"; //masukkan data
console.log(hello) //tampilkan data

//PENGGUNAAN LET DAN CONST

/*
let : bisa di ubah. 
data lamanya dihapus, 
diganti data yang baru.
artinya data yang lama itu di timpa dengan data yang baru
let juga bisa di deklarasikan tanpa nilai.

contoh penggunaan let :
*/
let hellow = "hello"; //data lama
hellow = "hai"; //data baru (di timpa)

console.log(hellow) //yang ditampilkan adalah data baru (hai)

/*
const : cuma boleh deklarasi 1x saja
nilainya tidak bisa diganti/ditimpa seperti let.
deklarasi const harus beserta nilainya. 
contoh penggunaan const :
*/
// const tinggiBadan; >>penggunaan const seperti ini tidak bisa
const usia = 33; //penggunaan const

console.log(usia);

//TYPE DATA
//string
let nama = "Evano";
console.log(nama);

//number
const umur = 28;
console.log(umur)

//booelean (true/fase)
let isMarried = true;
console.log(isMarried);

//undefined 
let alamat; //deklarasi tanpa memasukan nilai.
console.log(alamat);

//ARITHMATIC OPERATOR
let bilangan1 = 10;
let bilangan2 = 3;

bilangan2 ++; // 3 + 1 = 4

console.log(bilangan1 - bilangan2); //10 - 4


let namaDepan = "Braiger";
let namaBelakang = "Zachs";

console.log(namaDepan + " " + namaBelakang);
