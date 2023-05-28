import React from "react";
import Button from "./Button";
import Produto from "./Produto";

function App() {
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarrengando] = React.useState(null);

  async function busca(event) {
    setCarrengando(true);
    const link = event.target.innerText;
    const url = `https://ranekapi.origamid.dev/json/api/produto/${link}`;
    const responsta = await fetch(url);
    const json = await responsta.json();
    setCarrengando(false);
    setProduto(json);
  }

  return (
    <>
      <Button busca={busca} name="tablet" />
      <Button busca={busca} name="smartphone" />
      <Button busca={busca} name="notebook" />
      {carregando && <p>...Carregando</p>}
      {!carregando && produto && <Produto produto={produto} />}
    </>
  );
}

export default App;
