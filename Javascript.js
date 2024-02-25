// let js = "amazing";
// if (js === "amazing") alert("Javascript is FUN!");

document.addEventListener;
console.log(90 - 4 + 10 + 1);

// Kí tự: $ and _ (đi chung vs chữ cái và chữ số).
let $Cuong = 22;
console.log($Cuong);

// Đổi chữ thường
let myFirstJob = "Coder";
let job1 = "coder";
console.log(myFirstJob);

let year;
console.log(year);
console.log(typeof year);

year = 2002;
console.log(typeof year);

// Ví dụ 1:
const massMark = 40;
const heightMark = 2.78;
const BMIMark = massMark / heightMark ** 2;

const massJohn = 50;
const heightJohn = 2.65;
const BMIJohn = massJohn / heightJohn ** 2;

const BMI = BMIMark < BMIJohn;
console.log(BMI);

if (BMIJohn < BMIMark) {
  console.log(`Mark's (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's (${BMIJohn}) is higher than John's(${BMIMark})!`);
}

// Điều kiện if/else

const age = 18;
const isOldEmough = age <= 12;
if (isOldEmough) {
  console.log("Bạn đã đủ tuổi đi tù 🚚.");
} else {
  console.log("Bạn chưa đủ tuổi đi tù 🚚.");
}

const birthday = 2012;

let century;
if (birthday <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const id = prompt("Xin mời nhập mã: ");
console.log(id);
console.log(typeof id);

// For example 3:

const scoreDolphins = (90 + 20 + 80) / 3;
const scoreKoalas = (100 + 10 + 70) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}
