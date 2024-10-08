//? union type narrowing ts
//? yang mana ini itu mempersempit type union yang ada, dan juga menggunakannya itu dengan faunction

// const hitungLength = (nilai: string | number) => {
//   if (typeof nilai === "string") {
//     return nilai.length; //? ini return supaya tidak void
//   }
//   return nilai; //? inii kalau normal menggunakan pengembaliaan tanpa mempersempit type
//   // return nilai.toString().length;
//   //! maka haarus ubah dulu dengan berikan .toString() supaya bisa di gunakan .length
//   //? ini akan mengembalikan number karena sudah dipersempit type dengan narrowing
// };

//? ini bisa tanpa menggunakan narrwoing kalau ingin mempersempit union dengan cara string of array atau number of array

const hitungLength = (nilai: string | number[]) => {
  return nilai.length; //? cukup ginih aajah
};

console.log(hitungLength("hello world"));
console.log(hitungLength([1, 2, 3, 4, 5]));
