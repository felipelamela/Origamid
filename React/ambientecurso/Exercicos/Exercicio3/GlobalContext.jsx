import React from "react";

export const GlobalContext = React.createContext();

export const LocalContext = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  const resetDados = () => {
    setDados(null);
  };

  return (
    <GlobalContext.Provider value={{ dados, resetDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
