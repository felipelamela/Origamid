import React from "react";
import style from "./Contato.module.css";
import Head from "./Head";

const Contato = () => {
  return (
    <>
      <Head title="Contato" />

      <section className={style.containerContato}>
        <img className={style.imgContato} src="img/smartwatch-1.jpeg" alt="" />
        <div className={style.containerDetalheContato}>
          <p className={style.nomeContato}>Felipe F. Lamela</p>
          <p className={style.emailContato}>dev.fefl@gmail.com</p>
          <p className={style.numeroContato}>(99) 99999-9999</p>
        </div>
      </section>
    </>
  );
};

export default Contato;
