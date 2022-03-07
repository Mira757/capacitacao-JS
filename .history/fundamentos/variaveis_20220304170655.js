/* 
Var =  escopo global e de funcao
Let = escopo global de funcao e de bloco
*/

var numero = 1; 
{
  var numero = 2;
  console.log(numero);
}

console.log(numero);

