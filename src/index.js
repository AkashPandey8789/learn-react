import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App(){
    //we need to use className instead of class ...
    return <div className='container'>
        <Header />
        <Menu/>
        <Footer/>
    </div>;
}

function Header(){
    //to style component we need to create a javascript object of style and add that like below...
    const style={color:"red",fontSize:"48px" , textTransform:"uppercase"};
    return <h1 style={style}> Fast React Pizza Co.</h1>
}

function Menu(){
    const pizzaCompList=pizzaData.map(pizza=><Pizza imgUrl={pizza.photoName} pizzaName={pizza.name} pizzaIngredient={pizza.ingredients}/>)
    return <div>
        <h2>Our menu</h2>
        {pizzaCompList}
    </div>;
}

function Footer(){
    const hour=new Date().getHours();
    const openHour=12;
    const closeHour=22;
    const isOpen =hour>=openHour && hour<=closeHour;
    console.log(isOpen);
    // if(hour>=openHour && hour<=closeHour)alert("We're currently open!");
    // else alert('we are closed!');
    return <footer>{ new Date().toLocaleTimeString()} We're currently open!</footer>
    // return React.createElement('footer',null,"We're currently open!")
}

function Pizza(props){
    return <div id={props.pizzaName}>
        <img src={props.imgUrl} alt={props.pizzaName}/>
         <h2>{props.pizzaName}</h2>
        <p>{props.pizzaIngredient}</p>
    </div>
    // const pizzaList=pizzaData.map(pizza=><div><img src={pizza.photoName }alt={pizza.name}/><h2>{pizza.name}</h2><p>{pizza.ingredients}</p></div>)
    // return pizzaList;
    // <div>
    //     <img src='pizzas/prosciutto.jpg' alt='Pizza Prosciutto'/>
    //     <h2>Pizza Prosciutto</h2>
    //     <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    // </div>;
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);