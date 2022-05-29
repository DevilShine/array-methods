/*var arr = [{ name: 'Vasya', age: 24 },
{ name: 'Petya', age: 12 },
{ name: 'Fedya', age: 6 },
{ name: 'Ann', age: 18 },
{ name: 'Nastya', age: 40 }
];

var result = arr.reduce(function (acc, item) {
  if (!acc[item.age]) {
    acc[item.age] = [item.name]
  }
  return acc
}, [])

console.log("result = ", result);*/

//-------------------------------------------

// var arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];

// ----------------- first

// var result = arr.filter(Boolean);

// console.log("result = ", result);

// ----------------- second

// function result(ar) {
//   function fNum(num) {
//     if (num !== false) {
//       return num
//     }
//   }
//   ar = ar.filter(fNum);
//   return ar
// }

// console.log("result = ", result(arr));

//-------------------------------------------

// var arr = [4, 6, 34, 14, 7, -3];

// var index = [];

// for (var i = 0; i < arr.length; i++) {
//   var a;
//   if (arr[i] < 10) {
//     a = arr.findIndex(function (index) {
//       return index === arr[i]
//     });
//     index.push(a)
//   }
// }

// console.log("index", index);

//-------------------------------------------

var random = Math.ceil(Math.random() * 100);

var mas = [];

function createMatrix(row, col) {
  for (let i = 0; i < col; i++) {
    mas[i] = [];
    for (let j = 0; j < row; j++) {
      mas[i][j] = random;
    }
  }
}
createMatrix(4, 5)
console.log(mas)

