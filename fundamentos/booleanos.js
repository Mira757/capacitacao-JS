let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

/* Os verdadeiros:
console.log(__)
!!3
!!-1
!!" "
!![]
!!{}
!!Infinity
!!(isAtivo = true)
*/

/* Os falsos 
console.log(__)
!!0
!!""
!!null
!!NaN
!!undefined
!!(isAtivo = false)
*/

console.log("para finalizar...");
console.log(!!(""|| null || 0 || " "));

let nome = "";
console.log(nome || "Desconhecido" );

let nome = "Mira";
console.log(nome || "Desconhecido" );
