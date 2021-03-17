function student(){
    console.log( "Nama : Zachawerus, Evano E V");
    console.log("Exercise 2 - Mobile Application Development A");
    console.log("-------------------------------------------------------------------------")
}
student();

/*---------------------------------------------------*/
//1. CALLBACK

//1.a.
// function mandi (){
//     console.log("Mandi");
// }
//mandi();

//1.b.
// function sarapan () {
//     setTimeout(() => {
//         console.log("Sarapan Tertunda 3 detik");
//     },3000);
// }
// // sarapan();

//1.c.
// function berangkatSekolah () {
//     console.log("Berangkat Sekolah");
// }
//berangkatSekolah();

//1.d.
// function mandi (){
//     console.log("Mandi");
// }

// function sarapan () {
//     setTimeout(() => {
//         console.log("Sarapan Tertunda 3 detik");
//     },3000);
// }

// function berangkatSekolah () {
//     console.log("Berangkat Sekolah");
// }

// mandi();
// sarapan();
// berangkatSekolah();


//1.e.
// function mandi (){
//     console.log("Mandi");
// }
// function sarapan () {
//     console.log("Sarapan")
// }

// function berangkatSekolah () {
//     console.log("Berangkat Sekolah");
// }

//1.f
// mandi();
// sarapan();
// berangkatSekolah();


/*---------------------------------------------------*/
//2.PROMISE

//2.a
// function helloWorld() {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             resolve("Hello World !!");
//         }, 2000);
//     });
//     helloWorld().then((result) => {

//     });
// }

//2.b
// const messages = async (msg) => {
//     msg = await helloWorld();
//     console.log(msg);
// }

//2.c
// messages();

/*-------------------------------------------------------*/

//3. FETCH
// function ambilDataUser(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function (users) {
//         console.log(users);
//     });

// }
// ambilDataUser();
