//? generic pada ts itu adalah suatu fitur yang dapat mengirim data secara dinamis pada suatu fungsi, class, atau interface
//? dan pada suatu fungsi, class atau interface itu dapat memiliki tipe data yang berbeda dan inilah yang dinamakan generic
//! karaketeristik generic itu dengan tanda (<_>) nah didalamnya itu lah generic, dan generic itu dapati dibatasi dengan extends

//! alasan menggunakan generic
//? 1. reusable component : kita bisa menggunakan generic untuk logic,itu di berbagai tempat
//? 2. flexibility : kita bisa menggunakan generic untuk berbagai tipe data
//? 3. type safety : kita bisa menggunakan generic untuk menentukan tipe data yang akan digunakan, akan lebih aman
//? 4. performance : kita bisa menggunakan generic untuk mengoptimalkan performa aplikasi, dengan sekali deklarasi saja dan bisa secara flexibel

//* implementasi
//* fungsi dan variable
// const cetakId = (id:string | number) => {
//     console.log(id);
// }
// cetakId(123); //? ini simpel untuk membuat suatu fungsi, tapi kita ingin membuat type untuk argument bahwa bisa deklarasi datanya itu lebih mudah
//? caranya itu dengan (<_>)
// const cetakId = <T>(id: T) => {  //? dan membuat generic type itu bisa lebih dari 1
//   //? seperti inilah caranya
//   //   console.log(id);
//   return id; //? supaya tidak void
// };
//

//* interface implementasi
//? kita coba membuat interface untuk api

interface Mahasiswa {
  nama: string;
  nim: number | string;
  jurusan: string;
}
interface MataKuliah {
  nama: string;
  sks: number;
  dosen: string;
  kode: string;
}
// interface MahasiswaResponse {
//     message:string;
//     status:number;
//     data: Mahasiswa;
// }                        //? nah disinih ada pengulangan data yang padahal dalam nya itu sama, dan kita akna mengurangi redudancy dengan generic
//? dan ingin membuat data key itu secara dinamis
// interface MataKuliahResponse {
//     message:string;
//     status:number;
//     data: MataKuliah;
// }

//? caranya kita buat interface untuk menampung response nya dan membuat generic

// interface ResponseInterface<T> {     //? tanpa dibatasi dengan extends
//   //? jangan response saja berikan interface dan jangan lupa ada unknown kalau pembuatan awal. kalau udah ada response nya hapus ajah gk pp
//   statusCode: number;
//   message: string;
//   data: T;
// }
interface ResponseInterface<T extends object> {
  //? dengan dibatasi dengan extends dengan object, karena type digunakan di key data yang mana dia itu object.
  //? jangan response saja berikan interface dan jangan lupa ada unknown kalau pembuatan awal. kalau udah ada response nya hapus ajah gk pp
  statusCode: number;
  message: string;
  data: T;
}
//? dan bisa menyimpannya di type alias

type MahasiswaResponse = ResponseInterface<Mahasiswa[]>; //? kalau mau response type genericnya itu pada key data array ya berikan saja di responsenya []
type MataKuliahResponse = ResponseInterface<MataKuliah>;
//? type alias ya itu
const mahasiswaResponse: MahasiswaResponse = {
  statusCode: 200,
  message: "Success",
  data: [
    {
      nama: "Budi",
      nim: "123456",
      jurusan: "Informatika",
    },
  ],
};

const mataKuliahResponse: MataKuliahResponse = {
  statusCode: 200,
  message: "Success",
  data: {
    kode: "IF101",
    nama: "Pemrograman",
    sks: 3,
    dosen: "Pak Joko",
  },
};

console.log({ mahasiswaResponse, mataKuliahResponse });
