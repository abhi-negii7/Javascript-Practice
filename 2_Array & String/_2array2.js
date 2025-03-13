let arr=[2,3,7,8];
arr[0]=9;
// console.log(arr);
arr=2.4;
// console.log(arr);

const num=[4,5,8,3];
// console.log(num);
//This is not possible
// num=10;

//This is possible
num[0]=10;
// console.log(num);

a=[4,"abhi",true,[2,4,6]];
console.log(typeof a);

//ForOf Loop
// for (const ele of a) {
//     console.log(ele);
// }


b=[2,7,5,9,1,6];
// Difference between forof and for loop
// for (let index = 0; index < b.length; index++) {
//      b[index]*=2;
// }
// console.log(b)

// for (let ele of b) {
//     ele*=2;
//     // console.log(ele);
// }
// console.log(b);

// For each loop
brr=[4,6,3,1,8];
brr.forEach((ele,i) => {
    console.log(ele,i);
});

