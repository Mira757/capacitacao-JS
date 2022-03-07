function rand([min = 0, max = 1000]) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand[50,40]);
console.log(rand([988]));
console.log(rand ([,9]));
console.log(rand([]));
//console.log(rand());