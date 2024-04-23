import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //importação de arquivo CSS global pelo webpack.

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    /* estilização através de classes. Observe que utiliza-se className e não class, pois class é uma palavra reservada do JS. */
    <header className="header">
      <h1>John's Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div className="pizza">
      <img src="images/spinaci.jpg" alt="spinaci pizza" />
      <h3>Pizza Spinaci</h3>
      <p>Ingredients: Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

function Footer() {
  return (
    /*   estilização inline dentro do JSX. Primeiro precisa abrir chaves para pode usar JS e depois precisa de mais um par de chaves porque a estilização é um objeto. Além disso, nos nomes dos estilos não são aceitos traços, sendo necessário o uso do camelCase */
    /* essa estilização poderia ser colocada dentro de uma variável e depois a variável poderia ser passada para dentro do jsx. */
    <p style={{ fontSize: "12px" }}>
      Time:{new Date().toLocaleTimeString()} We are open until 22:00. Come visit
      us or order online.
    </p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
