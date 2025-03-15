// filter out even elements
// In filter we return true or false
let arr = [1, 3, 7, 2, 8, 20, 9, 22, 11];

console.log(arr);

// let brr=arr.filter(fun);
// console.log(brr);

// function fun(ele){
//     if(ele%2!=0) return true;
//     else return false;
// }

// Another way of writing it
// let brr = arr.filter(function(ele) {
//   if (ele % 2 != 0) return true;
//   else return false;
// });
// console.log(brr);

//Another way fo writing it
// let brr = arr.filter((ele) => {
//   if (ele % 2 != 0) return true;
//   else return false;
// });
// console.log(brr);

// let brr = arr.filter((ele) => {
//   return ele < 5;
// });

let brr = arr.filter((ele) => ele < 5);
console.log(brr);
