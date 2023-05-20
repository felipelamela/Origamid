import React from "react";

const Produto = ({ produto }) => {
  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>{produto.preco}</p>
      <img style={{ maxWidth: `500px` }} src={produto.fotos[0].src} alt="" />
    </div>
  );
};

export default Produto;
