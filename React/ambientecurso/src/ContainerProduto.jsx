import React from "react";
import { Link } from "react-router-dom";
import style from "./ContainerProduto.module.css";

const ContainerProduto = ({ produto, setProdutoSelecionado }) => {
  const { nome, fotos, id } = produto;

  return (
    <div className={style.containerProduto}>
      <Link className={style.Link} onClick={() => setProdutoSelecionado(produto)} to={`produto/${id}`}>
        <img
          className={style.produtosIMG}
          value={nome}
          src={fotos[0].src}
          alt=""
        />
        <h1 className={style.produtoTitulo}>{nome}</h1>
      </Link>
    </div>
  );
};

export default ContainerProduto;
