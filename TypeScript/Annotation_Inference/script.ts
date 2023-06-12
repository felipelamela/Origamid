
const produto: string = "Livro";

const preco: number = 200;

const carro: {
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 4,
};

//Passar os annotatios em funções não em variaveis que tenha o tipo pre definido
// a inference vai analisar o valor da variavel e automaticamente passar o type caso ela entenda o valor
const produto1 = "Livro";
const preco1 = 200;
const carro1 = {
  marca: "Audi",
  porta: 4,
};

function somar(a: number, b: number): number {
  return a + b;
}
