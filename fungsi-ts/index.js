// //? implisit
// //* tanpa parameter
// let asep = () => {
//   console.log("asep");
// };
// asep();
// //* type any
// let nama = (name, usia) => {
//   console.log(`nama saya ${name} dan umur saya ${usia} tahun`);
// };
// nama("lita", 22);
// //* default value, yang mana jadi parameternya itu atau function tsb sudah di tetapkan tipe nya
// //* dan kalau default itu bisa di isi atau tidak
// let rama = (usia = 22) => {
//   console.log(`umur saya ${usia} tahun`);
// };
// rama();
// //? explisit
// let myFunction = (hobi: string = "ngoding") => {
//   console.log(`hobi saya ${hobi}`);
// };
// myFunction("mancing");
// const luasPersegi = (panjang: number, lebar: number) => {
//   return `luas persegi panjang adalah ${panjang * lebar}`;
// };
// console.log(luasPersegi(10, 5));
//? anonymous function
var istri = ["lita", "siti", "sari"];
istri.forEach(function (nama, index) {
    console.log("istri ke ".concat(index + 1, " namanya ").concat(nama));
});
