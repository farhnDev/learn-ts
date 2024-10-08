// function miniMumMaximum(num: number[]): void {
//   const sum = num.reduce((acc, curr) => acc + curr, 0);
//   const max = Math.max(...num);
//   const min = Math.min(...num);

//   //   console.log(sum - max, sum - min);
//? kurang tepaat kalau ini
//   console.log(sum);
// }

// miniMumMaximum([1, 3, 5, 7, 9]); // 10 14

//? pake implentasi ,foreach and filter

function maxMin(arr: number[]): void {
  //   const resultArr: number[] = [];
  //   arr.forEach((ignored) => {
  //     const result = arr
  //       .filter((a) => a !== ignored)
  //       .reduce((acc, curr) => acc + curr, 0);
  //     resultArr.push(result); //? kita push ke variable yang menampung dengaan method push
  //   });

  //   const minResult = Math.min(...resultArr);
  //   const maxResult = Math.max(...resultArr);
  //   console.log(minResult, maxResult); //? kita tampilkan hasilnya

  //? haanya maping and reduce no looping

  //   const result: number[] = arr.map((ignoredNumber) =>
  //     arr.filter((a) => a !== ignoredNumber).reduce((acc, curr) => acc + curr, 0)
  //   );
  //   const minResult = Math.min(...result);
  //   const maxResult = Math.max(...result);

  //   console.log(minResult, maxResult);

  //? dari min-max dari arr

  //? buat dulu masing masing untuk variable penampungan nilai max and min
  const minArr = Math.min(...arr);
  const maxArr = Math.max(...arr);
  //? kita buat sum untuk melakukan filtering supaya bisa mendapatkan nilai max and min
  //   const minSum = arr
  //     .filter((a) => a !== minArr)
  //     .reduce((acc, curr) => acc + curr, 0);
  //   const maxSum = arr             //! ternyata dengan kita menggunakan minsum dan maxsum langsung seperti ini itu mmemberikan kesalahan kalau data arr nya itu sama contoh 5,5,5,5,5
  //     .filter((a) => a !== maxArr)
  //     .reduce((acc, curr) => acc + curr, 0);
  //   console.log(maxSum, minSum);
  //! bedanya itu, kita menggunakan filter and reduce kalau di implementaasi ini itu hanya 2x,
  //! dengan menentukan nilai min dan max dari aarr itu aajah

  const arrSum = arr.reduce((acc, curr) => acc + curr, 0); //? kita hitung dulu jumlah dari arr
  // const minSum = arrSum - maxArr; //? kita kurangi dengan nilai max
  // const maxSum = arrSum - minArr; //? kita kurangi dengan nilai min
  // console.log(minSum, maxSum); //? kita tampilkan hasilnya
  //! bisa dengan ini, dan bisa dengan ini juga yang di bawah ya
  console.log(arrSum - maxArr, arrSum - minArr); //? ini ya cepet ajah gitu
}

maxMin([1, 3, 5, 7, 9]); // 10 14  //?ini ya study kasus ya utama,
maxMin([5, 5, 5, 5, 5]); //? ini yang membuat ada permasalahan
