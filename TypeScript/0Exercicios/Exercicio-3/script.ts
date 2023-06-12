async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();

  showProducts(data);
}

fetchProduto();

interface EMPRESA {
  fundacao: number;
  nome: string;
  pais: string;
}

interface DATAPRODUTO {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidente: boolean;
  empresaFabricante: EMPRESA;
  empresaMontadora: EMPRESA;
}

function showProducts(data: DATAPRODUTO) {
  document.body.innerHTML = `
  
    <div>
      <h2>${data.nome}</h2>
    </div>
  
  `;
}
