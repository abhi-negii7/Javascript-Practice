let arr = [1, 6, 3, 8];
console.log(arr);

// let brr = [];
// for (const ele of arr) {
//   brr.push(ele * ele);
// }
// console.log(brr);

// let brr=arr.map(square);
// function square(ele){
//     return ele*ele;
// }
// console.log(brr);

// let brr = arr.map(function square(ele) {
//   return ele * ele;
// });

// => this is called arrow function
let brr = arr.map((ele) => {
  return ele * ele;
});
// console.log(brr);

//if you want to make changes in existing array
// arr = arr.map((ele) => {
//   return ele * ele;
// });

arr = arr.map((ele) => ele * ele);
console.log(arr);
