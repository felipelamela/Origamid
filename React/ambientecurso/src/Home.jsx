import React from "react";
import ContainerProduto from "./ContainerProduto";
import styles from "./Home.module.css";
import LoadSvg from "./LoadSvg";
import Head from "./Head";

const Home = ({ setProdutoSelecionado }) => {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(!loading);
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then((response) => response.json())
      .then((json) => setProdutos(json));
    setLoading(!loading);
  }, []);

  if (!produtos && loading) return <LoadSvg />; //mudar para o carregando
  if (produtos && loading)
    return (
      <>
        <Head title="Home"/>
        <section className={styles.containerSec}>
          {produtos.map((produto) => (
            <ContainerProduto
              setProdutoSelecionado={setProdutoSelecionado}
              key={produto.id}
              produto={produto}
            />
          ))}
        </section>
      </>
    );
};

export default Home;
