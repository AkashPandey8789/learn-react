import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
// const pizzaData=[];
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
    // const style={color:"red",fontSize:"48px" , textTransform:"uppercase"};
    return <header className='header'><h1 > Fast React Pizza Co.</h1></header>
}

function Menu(){
    const pizzaCompList=pizzaData.map(pizza=><Pizza imgUrl={pizza.photoName} pizzaName={pizza.name} pizzaIngredient={pizza.ingredients} price={pizza.price} soldOut={pizza.soldOut} key={pizza.name}/>)

    return <main className='menu'>
        <h2>Our menu</h2>
        {pizzaData.length && <ul className='pizzas'>{pizzaCompList}</ul>}
    </main>;
}

function Footer(){
    const hour=new Date().getHours();
    const openHour=12;
    const closeHour=24;
    const isOpen =hour>=openHour && hour<=closeHour;
    console.log(isOpen);
    // if(hour>=openHour && hour<=closeHour)alert("We're currently open!");
    // else alert('we are closed!');
    return <footer className='footer'>
        {isOpen && <div className='order'>
            { new Date().toLocaleTimeString()} We're currently open!
            <button className='btn'>Order now</button>
            </div>}
        
    </footer>
    // return React.createElement('footer',null,"We're currently open!")
}

function Pizza(props){
    if(props.soldOut) return null;
    return <li id={props.pizzaName} className='pizza'>
        <img src={props.imgUrl} alt={props.pizzaName}/>
         <div>
            <h3>{props.pizzaName}</h3>
            <p>{props.pizzaIngredient}</p>
            <span>{props.price}</span>
         </div>
    </li>
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