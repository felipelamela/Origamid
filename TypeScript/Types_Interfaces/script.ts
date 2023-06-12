///////////////////////// TYPE /////////////////////////////////////

function preencherDados(dados: {
  nome: string;
  preco: number;
  teclado: boolean;
}) {
  document.body.innerHTML = `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>${dados.teclado ? "Teclado incluso" : "Sem teclado"}</p>
  </div>
  `;
}

preencherDados({
  nome: "Computador",
  preco: 3500,
  teclado: true,
});

///////////////////////////////////////////////////////////////////
type PRODUTO = {
  nome: string;
  preco: number;
  teclado: boolean;
};

function preencerDados1(dados: PRODUTO) {
  document.body.innerHTML = `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>${dados.teclado ? "Teclado incluso" : "Sem teclado"}</p>
  </div>
  `;
}

preencerDados1({
  nome: "Computador",
  preco: 1200,
  teclado: false,
});

////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// INTERFACE /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


interface INTERFACEPRODUTO {
  nome: string;
  preco: number;
  teclado: boolean;
}

/*

interface você abre direto um objeto, sem precisar passar o igual antes, interface é usado diretamente para objetos, enquanto type é voltado para primitivos


*/