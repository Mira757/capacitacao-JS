//usando a notacao literal

const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2)

//Funcoes construtoras

function Produto(nome,preco,desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('caneta',7.99,0.15);
const p2 = new Produto('bike',3000,0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//Funcao Factory
function criarFuncionario(nome,salarioBase,faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30-faltas);
    }
  }
}

const f1 = criarFuncionario('Joao',8000,4);
const f2 = criarFuncionario('Maria',10000,2);
console.log(f1.getSalario(), f2.getSalario());

//Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Uma funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um json"}');
console.log(fromJSON.info);

