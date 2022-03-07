// Armazenando um funcao sem uma variavel
 const imprimirSoma = function (a,b) {
   console.log(a+b);
 }

 imprimirSoma(2,3);

 //Armazenando um funcao arrow em uma variavel
 const soma = (a,b) => {
   return a + b;
 }

 //Retorno implicito
 const subtracao = (a,b) => a-b;
 console.log(subtracao(2,3))

 const imprimir2 = a => console.log(a);