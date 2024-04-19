import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>FAST REACT PIZZA CO.</h1>;
}

function Menu() {
  return (
    <div>
      <h3>Our Menu:</h3>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="images/spinaci.jpg" alt="spinaci pizza" />
      <h1>Pizza Spinaci</h1>
      <p>Ingredients: Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

function Footer() {
  return (
    /* new Date().toLocaleTimeString() é para colocar em string o horário local. */
    <p>
      Time:{new Date().toLocaleTimeString()} We are open ultil 22:00. Come visit
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
