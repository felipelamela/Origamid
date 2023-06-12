"use strict";
/*
1 - Selecione os elementos com a classe link.
2 - Crie uma função que deve ser executada para cada elemento.
3 - Modificar através da função o estilo da color e border.
*/
const links = document.querySelectorAll(".link");
function modificaLink(links, color, border) {
    const linksArray = Array.from(links);
    linksArray.forEach((link) => {
        if (link instanceof HTMLElement) {
            link.style.color = `#${color}`;
            link.style.border = `${border}`;
        }
    });
}
modificaLink(links, "ff9933", "3px solid red");
