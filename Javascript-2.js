let js = 'amazing';
if (js === 'amazing') alert('Hello me friends');
function logger() {
  console.log('Hello word');
}

logger();
logger();
logger();
logger();

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitPro(apples, oranges) {
//   const applesFruitPieces = cutFruitPieces(apples);
//   const orangesFruitPieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applesFruitPieces} pieces of apple and ${orangesFruitPieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitPro(4, 5));

// const applesJuice = fruitPro(5, 0);
// console.log(applesJuice);

// Hàm suy luận

// const calcAge = (birthday) => 2023 - birthday;
// const age = calcAge(2002);
// console.log(age);

// const birthdayYear = (birthday, firstName) => {
//   const age3 = 2023 - birthday;
//   const Arge = 65 - age3;
//   // return Arge;
//   return `${firstName} retires in ${Arge}`;
// };

// console.log(birthdayYear(2004, "Hiển 🔭"));
// console.log(birthdayYear(2003, "Dũng 🔭"));

//CHALLENGE #1:

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(45, 6, 78));

// Test 1:
// let scoreDolphins = calcAverage(8, 90, 80);
// let scoreKoalas = calcAverage(78, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(200, 90);

// Test 2:
// scoreDolphins = calcAverage(80, 85, 90);
// scoreKoalas = calcAverage(95, 70, 67);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

//CHALLENGE #2:

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// Gọi 1 object trong mảng
// const jonas = {
//   firstName: "Cường",
//   lastName: "Phạm",
//   age: 2023 - 2002,
//   job: "web programming",
//   friends: ["Hiển", "Dũng", "Đạt", "Chí Dũng"],
// };
// console.log(jonas);

// console.log(jonas.firstName);
// console.log(jonas.age);

// const keys = "Name";
// console.log(jonas["first" + keys]);
// console.log(jonas["last" + keys]);

// const interestedIn = prompt("Mời bạn nhập thông tin vào đây:");
// console.log(jonas[interestedIn]);

// //CHALLENGE
// jonas.location = "VietNamese";
// jonas["twitter"] = "@phamquoccuong";
// // console.log(jonas);
// console.log(
//   `My name is ${jonas.firstName} and I work as a ${jonas.job} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "Cường",
//   lastName: "Phạm",
//   birthYear: 2002,
//   job: "web programming",
//   friends: ["Hiển", "Dũng", "Đạt", "Chí Dũng"],
//   hasDrives: true,

//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} -year old ${
//       this.job
//     }, and he has ${this.hasDrives ? "a" : "no"} drive's license.`;
//   },
// };

// console.log(jonas["calcAge"](2002));
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.getSummary());

// const mark = {
//   fullName: "Mark's",
//   mass: 69,
//   height: 1.89,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//   },
// };

// mark.calcBMI();
// console.log(mark.bmi);

// const jonas = [
//   `Cuong`,
//   `Phạm`,
//   2023 - 2002,
//   `web programming`,
//   [`Hiển", "Dũng", "Đạt", "Chí Dũng`],
//   true,
// ];
// const type = [];
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]); // typeof: trả về kiểu của đối số.

//   type[i] = typeof jonas[i];
// }

// console.log(type);

// const years = [2000, 2001, 2002, 2003, 2004];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);

// console.log("===== CONTINUE =====");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("===== BREAK =====");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] == "number") break;

//   console.log(jonas[i], typeof jonas[i]);
// }

// let dice = Math.trunc(Math.random() * 6) + 1; //Math.trunc: loại bỏ phần số thập phân sau dấu chấm.
// while (dice != 6) {
// console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice == 6) {
//     console.log("Loop is about to end....");
//   }
// }

// CHALLENGE #4:

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [23, 90, 100, 500, 89, 67, 1, 230, 50, 790];
// const tips = [];
// const totals = [];
// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAge = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAge([2, 4, 8]));
// console.log(calcAge(tips));
// console.log(calcAge(totals));

const arry = [4, 8, 40, -5, 10, -7, 49];

const calcAverageo = function (temps) {
  let max = temps[0]; // Lấy giá trị đầu của 0 để đi so sánh max = 4;
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    // max = 4;
    // 4 > 4;
    // 9 > 4; so sánh cho đến hết chuỗi.(lấy kết quả lonw nhất)
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const mang = calcAverageo(arry);
console.log(mang);

const calcAveragenew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0]; // Lấy giá trị đầu của 0 để đi so sánh max = 4;
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    // max = 4;
    // 4 > 4;
    // 9 > 4; so sánh cho đến hết chuỗi.(lấy kết quả lonw nhất)
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const agenew = calcAveragenew([3, 4, 5], [7, 8, 9]);
console.log(agenew);
console.warn(agenew); // cảnh báo.
console.error(agenew); //lỗi
