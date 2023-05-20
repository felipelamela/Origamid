import React from "react";

const Button = ({name, busca}) => {


  return <button onClick={busca}>{name}</button>;
};

export default Button;
