// novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    rua: 'Anao',
    numero: 15
  }
}

const {nome,idade} = pessoa;
console.log(nome,idade);

const {nome: n, idade: i } = pessoa;
console.log(n,i);

const {sobrenome , humor = true} = pessoa;
console.log(sobrenome,humor);

const { endereco: {rua,numero,cep}} = pessoa;
console.log(rua,numero,cep);

const {conta: {ag,num}} = pessoa;
console.log(ag,num);