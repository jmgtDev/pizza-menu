// o nome do arquivo principal precisa ser index por causa do webpack.
import React from "react";
import ReactDOM from "react-dom/client"; // a versão 18 exige o /client.

function App() {
  return <h1>Olá mundo!!</h1>;
}

//forma de criar a root do React a partir da versão 18.
//são 2 etapas: 1 - criar a root // 2 - renderizar tudo dentro da root.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*StrictMode renderiza tudo dentro dele 2 vezes para verificar a existência de bugs.*/}
    <App />
  </React.StrictMode>
);
