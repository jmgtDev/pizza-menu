import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Pizza /* Componente pai agora manda propriedades para o elemento filho para que ele seja capaz de mudar de acordo com essas propriedades. */
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={
          6
        } /* como quero passar um número e não uma string preciso colocar entre chaves. */
        photoSrc="images/focaccia.jpg"
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        photoSrc="images/margherita.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoSrc="images/funghi.jpg"
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
        photoSrc="images/salamino.jpg"
      />
    </div>
  );
}

/* o componente recebe o objeto props, que contém todas as propriedades do passadas pelo elemento pai. Com isso, os dados agora são dinâmicos, mudando de acordo com as propriedades recebidas.
Para acessar os valores de props, basta acessar suas propriedades com ponto e o nome da propriedade, como é feito abaixo*/
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
