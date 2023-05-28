import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Produto.module.css";
import Head from "./Head";

const Produto = ({ produtoSelecionado }) => {
  const { nome, preco, descricao, fotos } = produtoSelecionado;
  const parametro = useParams();
  return (
    <>
    <Head title="Produto"/>
    <section className={styles.produtoContainer}>
      <img className={styles.imgProduto} src={fotos[0].src} alt="" />
      <div className={styles.descricaoContainer}>
        <h2 className={styles.produto}>{nome}</h2>
        <p className={styles.preco}>R${preco}</p>
        <p className={styles.produto}>{descricao}</p>
      </div>
    </section>
    </>
  );
};

export default Produto;
