import React from "react";
import Button from "./Button";
import Produto from "./Produto";

function App() {
  // Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
  // Defina o produto clicado como uma preferência do usuário no localStorage
  // Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) {
      localStorage.setItem(`produto`, `${produto}`);
    }
  }, [produto]);

  React.useEffect(() => {
    const produtoLocal = localStorage.getItem(`produto`).toLowerCase();
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);
  const handleClick = (produto) => {
    setProduto(produto);
  };

  return (
    <div>
      <h1>Preferência: {produto}</h1>

      <Button newProduto={handleClick} name="smartphone" />
      <Button newProduto={handleClick} name="notebook" />
      <Produto produto={produto} />
    </div>
  );
}

export default App;
