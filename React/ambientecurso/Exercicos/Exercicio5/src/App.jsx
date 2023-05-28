import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Contato from "./Contato";
import Produto from "./Produto";
import "./App.module.css";

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

function App() {
  const [produtoSelecionado, setProdutoSelecionado] = React.useState(null);


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path=""
          element={<Home setProdutoSelecionado={setProdutoSelecionado} 
          />}
        />
        <Route path="contato" element={<Contato />} />
        <Route
          path="produto/:id"
          element={<Produto produtoSelecionado={produtoSelecionado} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
