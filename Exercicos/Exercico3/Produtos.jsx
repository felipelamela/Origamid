import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produtos = () => {
  const { dados } = React.useContext(GlobalContext);

  if (dados === null) return null;
  return <div>Produtos{dados.map((dado, index) => (
    <h1 key={index}>{dado.nome}</h1>
  ))}</div>;
};

export default Produtos;
