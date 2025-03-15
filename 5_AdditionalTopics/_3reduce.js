let arr = [1, 3, 7, 2, 8, 20, 9, 22, 11];
console.log(arr);

let x=arr.reduce(function(a,b){
    return a+b;
});
console.log(x);

//Explanation -> It is taking two element from the start and adding them and storing in a and doing the same for the other element and store the value in x. So, we got the sum of the array