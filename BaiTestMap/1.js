// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2
// gameEvents.delete(70);

// // 3
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minuter`
// );

// const time = [...gameEvents.keys()].pop(); // lấy phần tử cuối cùng.
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minuter`
// );

// // 4
// for (const [min, values] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min} ${values}`);
// }

const airline = 'TAP Air Portugal';
console.log(airline.length);
// Lấy độ dài chuỗi từ trái tới chỗ quy định.
console.log(airline.indexOf('r'));
// Lấy độ dài chuỗi từ chỗ quy định trở về sau.
console.log(airline.lastIndexOf('r'));
const plane = 'MH370';
console.log(plane[0]);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
// 🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getcode = (str) => str.slice(0, 3).toUpperCase();
// Gặp dấu "+" sẽ tự tách các chuỗi
for (const flight of flights.split('+')) {
  // console.log(flight);
  const [type, from, to, time] = flight.split(';');
  const ouput = `${type.startsWith(`_Delayed`) ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
    // Viết hoa từ phần tử 0 đến 3 => 3 phần tử).
  )} ${getcode(from)} ${getcode(to)} (${time.replace(':', 'h')})`.padStart(37);
  console.log(ouput);
}
