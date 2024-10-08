function plusMinus(arr: number[]): void {
  const arrLength = arr.length;
  //? kita buat dulu propotionalnya
  const positive = arr.filter((n) => n > 0);
  const negative = arr.filter((n) => n < 0);
  const zero = arr.filter((n) => n === 0);

  console.log((positive.length / arrLength).toFixed(6));
  console.log((negative.length / arrLength).toFixed(6));
  console.log((zero.length / arrLength).toFixed(6));
  console.log(positive);
  console.log(negative);
  console.log(zero);
}
plusMinus([-4, 3, -9, 0, 4, 1]); // 0.500000 0.333333 0.166667
