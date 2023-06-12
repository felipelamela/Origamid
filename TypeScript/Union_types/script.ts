let total: string | number = 200;

//em funções tentar sempre retornar um tipo unico
function isNumber(value: string | number): boolean {
  if (typeof value === "number") {
    return true;
  }
  return false;
}


const button = document.querySelector('button')

// o operador "?" faz o .click() apenas funcionar caso o button seja diferente de null ou undefined
//serve como basicamente um perador ternario

button?.click()