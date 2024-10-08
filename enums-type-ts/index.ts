//? type enums ini adalah untuk mendifinisikan pilihan beberapa nilai konstanta
//? enums ini menerima nilai string atau number
//! enums ini cocok untuk menggantikan beberapa union dari beberapa type nilai, kalau nilai tsb sudah banyak atau kompleks

//* karakteristik dari enums
//? 1. seluruh anggota enums dapat dijadikan sbagai konstanta member
//? 2. tipe numeric enums itu memiliki sifat increment, dapat bertambah 1
//? 3. enums juga dapat bertipe campuran number dan string (heteregenous enums)
//? 4. enums juga dapat menerima return fungsi atau properti yang bertipe number atau string (computed enums)

//? implementasi enums

//? 1. string enums
// enum ClouthSize {
//     small = "S", //? ini nilai pada enums itu konstanta
//     medium = "M",
//     large = "L",
//     extraLarge = "XL",
// }

// const tshirtSize:string = ClouthSize.small;

//! heterogenous enums
// enum ClouthSize {
//     small = 4, //? ini nilai pada enums itu konstanta, dan medium akan bertambah 1, tapi kalau extralarge ingin number ya large harus di inisiliasasikan
//     medium,
//     large = "L",
//     extraLarge = "XL",
// }

// const tshirtSize  = ClouthSize.small;

//! computed enums

//? rumus lingkaran
// enum circle {
//   radius = 12,
//   diameter = Math.PI * Math.pow(radius, 2),
// }

// console.log(circle.radius);
// console.log(circle.diameter);\

//? kita buat dengan fungsi kita

const circleArea = (radius: number): number => Math.PI * Math.pow(radius, 2);

enum circle {
  radius = 12,
  diameter = circleArea(radius), //? ini adalah member enum yang bisa di compute
}

console.log(circle.diameter);
//? numeric enums ini memiliki sifat increment, dapat bertambah 1, kalau tidak didefinisikan maka akan dimulai dari 0
// enum Directioon {
//   Up = 1,
//   Right, //? karena ini incremental maka nilai selanjutnya apabila member pertama telah didefinisi akan menambah 1
//   Down,
//   Left,
// }

// console.log(Directioon.Up);
// console.log(Directioon.Right);
// console.log(Directioon.Down);
// console.log(Directioon.Left);
