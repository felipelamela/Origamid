"use strict";
/*
Arrume a função abaixo

function normalizarTexto(texto){
  return texto.trims().toLowercase()
}


///////////////////////////////////////////

const input = document.querySelector('input');

const total = localStorage.getItem('total');
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector('p');
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem('total', value);
  calcularGanho(value);
}

input.addEventListener('keyup', totalMudou);



function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

/////////////////////////////////////////////////////
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
  input.value = total;
  const valor = Number(input.value);
  calcularGanho(valor);
}

function calcularGanho(value:number) {
  const p = document.querySelector("p");
  if (p) p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}
function totalMudou() {
  const value = Number(input?.value);
  localStorage.setItem("total", String(value));
  calcularGanho(value);
}
input ? input.addEventListener("keyup", totalMudou) : null;
*/
