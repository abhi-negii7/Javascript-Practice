// Object is kind of like map/dictionary where we have "Key-Value" pairs
var details = ["Abhishek", 21, 92, false];

let x = {
  name: "Abhishek",
  "nick name": "Abhi",
  age: 24,
  percentage: 92,
  isMarried: false,
};
console.log(x);

//print the Values
console.log(x.age);
console.log(x["name"]);

//Update the value of keys
// x.age=22;
// console.log(x.age);

x["name"] = "Abhishek";
console.log(x.name);

//print the whole object using loop
for (const key in x) {
  console.log(key, x[key]);
}
