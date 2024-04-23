import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/* simulação de um banco de dados com informações sobre as pizzas */
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "images/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "images/prosciutto.jpg",
    soldOut: false,
  },
];

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
    <header className="header">
      <h1>John's Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {/*Agora não é mais necessário passar cada um dos componentes e todos dados individualmente. Essas informações já encontram-se no banco de dados. Dessa forma, só precisamos renderizar o banco de dados com o método .map  */}
      {pizzaData.map((pizza) => (
        <Pizza
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          photoSrc={pizza.photoName}
        />
      ))}
    </div>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoSrc} alt={props.name} />
      <div className="pizzaData">
        <h3>{props.name}</h3>
        <p className="ingredients">{props.ingredients}</p>
        <p>{`Price: $${props.price}`}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <p className="footer">
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
