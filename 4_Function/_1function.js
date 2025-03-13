function OnetoN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
  console.log();
}

function eqn(a,b){
    return Math.abs(a*a*a)+Math.abs(b*b*b);
}

// OnetoN(10);
// OnetoN(5);
console.log(eqn(2,4));
