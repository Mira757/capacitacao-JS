// Colecao dinamica de pares chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 8000,
  proprietario: {
    nome: 'Joao',
    idade: 20,
    endereco: {
      rua: 'balblalbla',
      numero: 123
    }
  },
  parentes: [{
    mae: 'Luana',
    pai: 'Rinaldo'
  },
  {
    mae: 'jabsdhab',
    pai: 'asandaisn'
  }],
  calcularvalor: function() {
    //...
  }

}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['numero'] = 899
console.log(carro);

delete carro.calcularvalor;
delete carro.proprietario;
console.log(carro);