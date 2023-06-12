async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();

  console.log(mostrarCursos(data));
}

interface CURSOS {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: Array<number>;
  nivel: string;
  nome: string;
  tags: Array<string>;
}

const colorRed = "Ff0000";
const colorBlue = "2271B3";

function mostrarCursos(cursos: Array<CURSOS>) {
  cursos.map((curso) => {
    document.body.innerHTML += `
    <div>
     <h2 style="color: #${
       curso.nivel === "iniciante" ? colorBlue : colorRed
     }">Nome: ${curso.nome}</h2>
     <p>Horas: ${curso.horas}</p>
     <p>Nivel: ${curso.nivel}</p>
     <p>Gratuito: ${curso.gratuito}</p>
     
    </div>
    `;
  });
}

fetchCursos();
/*



*/
