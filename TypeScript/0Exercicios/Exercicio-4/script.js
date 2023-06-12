"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.origamid.dev/json/cursos.json");
        const data = yield response.json();
        console.log(mostrarCursos(data));
    });
}
const colorRed = "Ff0000";
const colorBlue = "2271B3";
function mostrarCursos(cursos) {
    cursos.map((curso) => {
        document.body.innerHTML += `
    <div>
     <h2 style="color: #${curso.nivel === "iniciante" ? colorBlue : colorRed}">Nome: ${curso.nome}</h2>
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
