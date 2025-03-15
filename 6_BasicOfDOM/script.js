// console.log("Hello World");

// This will only select the first h1 tag even if there are many h1 tags
// let x=document.querySelector("h1");
// x.style.color = "red";
// x.style.fontFamily ="monospace";

// Note -> In css we write font-family but in js we write fontFamily

// Select all h1 tag in the form of array
// let x=document.querySelectorAll("h1");
// console.log(x);

// Select the html element using class (.className)
// let x = document.querySelectorAll(".yes");
// console.log(x);

// Select the html element using id (#idName)
// let x = document.querySelectorAll("#first");
// console.log(x);

// Change html using js with the delay of 2 second using setTimeout
let y = document.querySelector("h1");
setTimeout(function () {
  y.innerHTML = "Changed";
},2000);
