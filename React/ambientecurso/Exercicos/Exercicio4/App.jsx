import React from "react";
import Select from "./Select";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

function App() {
  const [respostas, setRespostas] = React.useState({
    p1: ``,
    p2: ``,
    p3: ``,
    p4: ``,
  });
  const [value, setValue] = React.useState(``);
  const [slide, setSlide] = React.useState(0);
  const [total, setTotal] = React.useState(``);

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setRespostas({ ...respostas, [perguntas[slide].id]: value });
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setTotal(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Select
        perguntas={perguntas}
        value={value}
        setValue={setValue}
        slide={slide}
      />
      {total ? total : <button onClick={handleClick}>Proxima</button>}
    </form>
  );
}
export default App;
