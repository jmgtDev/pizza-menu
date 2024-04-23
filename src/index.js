import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "images/focaccia.jpg",
    soldOut: true,
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
      {pizzaData.length === 0 && <h1>Ainda não temos pizzas!</h1>}{" "}
      {pizzaData.map((pizza) => (
        <Pizza
          key={pizza.name} /* key única para cada elemento da lista */
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          photoSrc={pizza.photoName}
          soldOut={
            pizza.soldOut
          } /* prop soldOut passada para a renderização condicional do componente Pizza */
        />
      ))}
    </div>
  );
}

/* renderização condicional com múltiplos returns. */
function Pizza(props) {
  if (props.soldOut) return null;

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

/*Renderização condicional com o operador ternário*/
function Footer() {
  let isOpen = false;
  const hour = new Date().getHours();
  const closeHour = 22;
  const openHour = 8;
  if (hour >= openHour && hour < closeHour) {
    isOpen = true;
  }
  return (
    <div className="footer">
      {isOpen ? (
        <p>
          Time:{new Date().toLocaleTimeString()} We are{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>open</span> until
          22:00. Come visit us or order online.
        </p>
      ) : (
        <p>
          Time:{new Date().toLocaleTimeString()} We are{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>closed</span> until
          22:00. Come visit us or order online.
        </p>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
