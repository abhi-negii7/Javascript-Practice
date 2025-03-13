//Print 1 to 10 but with delay of 1 sec after each number gets printed

// for(let i=1;i<=10;i++){
//     console.log(i);
// }
// for(let i=1;i<=10;i++){
//     setTimeout(function() {
//         console.log(i);
//     },i*1000);
// }

for (let i = 1; i <= 10; i++) {
  setTimeout(function () {
    console.log(11-i);
  }, i * 100);
}

// function hello() {
//   console.log("hello");
// }

// function mello() {
//   console.log("mello");
// }

// setTimeout(hello, 2 * 1000);
// setTimeout(function () {
//   console.log("mello");
// }, 1 * 1000);
