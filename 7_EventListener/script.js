let x = document.getElementById("ele1"); // Pikachu
x.addEventListener("click", function () {
  x.style.color = "yellow";
  x.style.backgroundColor = "red";
});

x.addEventListener("mouseleave", function () {
  x.style.color = "black";
  x.style.backgroundColor = "white";
});

// mousemove, mouseenter
let y = document.getElementById("ele2"); // Charizard
y.addEventListener("mouseenter", function () {
  y.style.color = "white";
  y.style.backgroundColor = "orange";
});

y.addEventListener("mouseleave", function () {
  y.style.color = "black";
  y.style.backgroundColor = "white";
});

// We made a event listener of charizard So,clicking on it will change the color and bg of Mewto
let z = document.getElementById("ele3"); // Mewto
y.addEventListener("click", function () {
  z.style.color = "white";
  z.style.backgroundColor = "purple";
});

// If we click Mewto the pikachu should be change to Balwasur and color should also changed
z.addEventListener("click", function () {
  x.innerHTML = "Balwasur";
  x.style.color = "white";
  x.style.backgroundColor = "green";
});
