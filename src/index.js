import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 10,
    photoName: "images/focaccia.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 12,
    photoName: "images/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 16,
    photoName: "images/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 18,
    photoName: "images/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 20,
    photoName: "images/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 24,
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
      <h1>John's Pizza Place</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p className="menuParagraph">
        Experience the epitome of Italian cuisine, crafted with natural
        ingredients preserved in the finest conditions. Come, indulge in these
        culinary delights!
      </p>
      {pizzaData.length === 0 && (
        <h1>
          We do not have dishes on the menu yet. Please check back in a few days
          for updates.
        </h1>
      )}{" "}
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoSrc={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))}
      </div>
    </div>
  );
}

function Pizza({ name, ingredients, price, photoSrc, soldOut }) {
  return (
    <div className={`pizza ${soldOut ? "soldOut" : ""}`}>
      {" "}
      <img src={photoSrc} alt={name} />
      <div className="pizzaData">
        <h3>{name}</h3>
        <p className="ingredients">{ingredients}</p>
        <p>{soldOut ? "Sold Out" : `Price: $${price}`}</p>{" "}
      </div>
    </div>
  );
}

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
      <button className="button" type="button">
        Order Now!
      </button>
      {isOpen ? (
        <p>
          Time: {new Date().toLocaleTimeString()} We are{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>open</span> until
          22:00. Come visit us or order online clicking in the button above.
        </p>
      ) : (
        <p>
          Time: {new Date().toLocaleTimeString()} We are{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>closed</span> until
          8:00. Come visit us or order online clicking in the button above.
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
