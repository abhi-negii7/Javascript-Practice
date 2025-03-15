let arr = [1, 9, 2, 7];
console.log(arr);

// It gives wrong sorting order
// arr = arr.sort();

//Actual sorting(increasing order)
// arr = arr.sort((a, b) => a - b);
// console.log(arr);

//Decreasing order sorting
// arr = arr.sort((a, b) => b - a);
// console.log(arr);

// Ignore negative while sorting
arr = arr.sort((a, b) => Math.abs(a) - Math.abs(b));
console.log(arr);
