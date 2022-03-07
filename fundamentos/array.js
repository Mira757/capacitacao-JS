const valores = [7.7,8.8,6.3,9.3];
console.log(valores[0],valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push("Oi",false,null,{id:98});
console.log(valores);

console.log(valores.pop()) //mostra e tira o ultimo elemento do array
delete valores[0];
console.log(valores);

console.log(typeof valores);