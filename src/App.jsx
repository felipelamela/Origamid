import React from "react";

function App() {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [senha, setSenha] = React.useState('')
  const [rua, setRua] = React.useState('')
  const [cep, setCEP] = React.useState('')
  const [numero, setNumero] = React.useState('')
  const [bairro, setBairro] = React.useState('')
  const [cidade, setCidade] = React.useState('')
  const [estado, setEstado] = React.useState('')


  return (
    <form>

    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" value={nome} onChange={({target}) => setNome(target.value)}/>

    <label htmlFor="email">Email</label>
    <input type="email" id="email" value={email} onChange={({target}) => setEmail(target.value)}/>

    <label htmlFor="senha">Senha</label>
    <input type="password" id="senha" value={senha} onChange={({target}) => setSenha(target.value)}/>

    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" value={nome} onChange={({target}) => setNome(target.value)}/>

    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" value={nome} onChange={({target}) => setNome(target.value)}/>

    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" value={nome} onChange={({target}) => setNome(target.value)}/>

    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" value={nome} onChange={({target}) => setNome(target.value)}/>

    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" value={nome} onChange={({target}) => setNome(target.value)}/>

    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" value={nome} onChange={({target}) => setNome(target.value)}/>

    <button>Enviar</button>
    </form>
  );
}

export default App;
