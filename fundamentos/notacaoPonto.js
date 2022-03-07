console.log(Math.ceil(6.1));

const any1 = {}
any1.nome = 'Bola';

console.log(any1.nome);

function Obj(nome) {
  this.nome = nome;
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa')
console.log(obj2.nome);
console.log(obj3.nome);
