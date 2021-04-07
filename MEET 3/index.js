/*CHAPTER 2 : JavaScript Foundation For React
---------------------------------------------------------------------------------------------------*/

//How to run JavaScript
    //VS codse Extention (Live Server, Prettier, Bracket Pair Colorizer) = DONE

//-------------------------------------------------------------------------------------------------

//JAVASCRIPT VARIABLE

    //*Variable : Tempat menyimpan data.

console.log ("Hello WORLD")

//-------------------------------------------------------------------------------------------------

//PENGGUNAAN VARIABLE MENGGUNAKAN VAR

var hello = "Hello World"; //masukkan data
console.log(hello) //tampilkan data

//-------------------------------------------------------------------------------------------------

//PENGGUNAAN LET DAN CONST
    //Perbedaan
    //Let : Data/nilai BISA di ganti dengan cara di timpa
    //Const(Constanta) : Data/nilai TIDAK BISA diganti (FIX)

//--------------------------------------------------------------------------------------------------
/*PENGGUNAAN LET-

    LET : 
    1. bisa di ubah. 
    2. data lamanya dihapus, 
    3. diganti data yang baru. artinya data yang lama itu di timpa dengan data yang baru
    4. let juga bisa di deklarasikan tanpa nilai.
*/

//contoh penggunaan let :

let hellow = "hello"; //data lama
hellow = "hai"; //data baru (di timpa)

console.log(hellow) //yang ditampilkan adalah data baru ("hai") karena sudah di timpa

//-------------------------------------------------------------------------------------------------
/*PENGGUNAAN CONST(CONSTANTA)

    CONST : 
    1. cuma boleh deklarasi 1x saja
    2. nilainya tidak bisa diganti/ditimpa seperti let.
    3. deklarasi const harus beserta nilainya. 
*/

//contoh penggunaan const :

// const tinggiBadan; >>penggunaan const seperti ini tidak bisa
const usia = 33; //penggunaan const

console.log(usia);

//-------------------------------------------------------------------------------------------------
//TYPE DATA (Ada 5 : string, number, booelean, undefined, null)

//1. STRING
    //berisi kata atau kalimat
    //bisa di apit menggunakann tanda 'petik satu' atau "petik dua" , sama saja.
    //string biasanya menggunakan variable let.

let nama = "Evano"; //menggunakan "petik dua"
console.log(nama);

let namaPanggilan = 'Vicky / kiki / kibo / kokobu;' //menggunakan`; // menggunakan 'petik satu'
console.log(namaPanggilan); 

//2. NUMBER
    //berisi angka
    //bisa bilangan bulat,
    //bisa juga bilangan pecahan koma(floating point)

const umur = 28; //bilangan bulat
console.log(umur)

const gpa = 3.99; //bilangann pecahan
console.log(gpa);

//BOOELEAN (true/fase)
    //biasanya digunakan dalam bentuk model pertanyaan
let isMarried = true;
console.log(isMarried);

//UNDEFINED 
    //deklarasi tanpa memasukan nilai.
let alamat; //belum mengisi nilai apapun
console.log(alamat);

//NULL
    //nilai yang berisi NULL/kosong(sama seperti undefined), hanya saja kita tetap isi nilai keterangan berupa : "NULL"

let ukuranSepatu = "NULL";
console.log(ukuranSepatu);

//----------------------------------------------------------------------------------------------------------------
//CONSOLE.LOG()
    //output dari pada variable

//----------------------------------------------------------------------------------------------------------------

//JAVASCRIPT OPERATOR
    /*
    + : Penjumlahan
    - : Pengurangan
    * : Perkalian
    / : Pembagian
    **: Eksponen(Pangkat)
    % : Modulus(menghasilkan sisa hasil pembagian)
    ++: Increment (menambah 1)
    --: Decrement (mengurangi 1)
    */

//ARITHMATIC OPERATOR
let bilangan1 = 10;
let bilangan2 = 3;

//PENJUMLAHAN
console.log(bilangan1 + bilangan2); //10 + 3 = 13

//PENGURANGAN
console.log(bilangan1 - bilangan2); //10 - 3 = 7

//PERKALIAN
console.log(bilangan1 * bilangan2); //10 * 3 = 30

//PEMBAGIAN
console.log(bilangan1 / bilangan2); //10 / 3 = 3.333333333333335

//EKSPONEN(PANGKAT)
console.log(bilangan1 ** bilangan2); //10 pangkat 3 = 1000

//MODULUS(menghasilkan sisa hasil pembagian)
console.log(bilangan1 % bilangan2); //10 % 3 = 1

//INCREMENT (menambah 1)
let bilangan3 = 5;
bilangan3++;
conslole.log(bilangan3); // 10 + 1 = 11

//DECREMENT (mengurangi 1)
bilangan2--;
console.log(bilangan2); // 3 - 1 = 2


let namaDepan = "Braiger";
let namaBelakang = "Zachs";

console.log(namaDepan + " " + namaBelakang);
