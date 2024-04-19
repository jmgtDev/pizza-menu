import React from "react";
import ReactDOM from "react-dom/client";

//todo componente precisa ter nome com letra maíuscula.
function App() {
  return (
    <div>
      {" "}
      {/* essa div é necessária pois o componente só pode retornar uma tag no nível mais externo. Uma tag tem que englobar todas as outras.*/}
      <Pizza />{" "}
      {/* componentes podem ser renderizados dentro de outros componentes quantas vezes for necessário. */}
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="images/spinaci.jpg" alt="spinaci pizza" />{" "}
      {/* a prop src de img aponta automaticamente pra pasta public por causa do webpack. */}
      <h1>Pizza Spinaci</h1>
      <p>Ingredients: Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
