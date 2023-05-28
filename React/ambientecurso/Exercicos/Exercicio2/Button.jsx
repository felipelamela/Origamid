import React from "react";

const Button = ({ name, newProduto }) => {
  return <button onClick={() => newProduto(name)}>{name}</button>;
};

export default Button;
