import { Header } from "./Header"
import './Header.css';
import CookingProcess from '../assets/images/cooking-process.png';
import Pizza from '../assets/images/pizza-img.png';
import { NavLink } from "react-router";
import Fries from '../assets/images/fries.png';
import PizzaSlice from '../assets/images/pizza-slice.png';

export function HomePage() {
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="left-section">
          <h1>
            The Fastest Pizza 
            <span className="lightning"></span>     Delivery
          </h1>
          <h2>
            We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span>pizza is free</span>!
          </h2>
          <div className="video-container">
            <h3>Cooking process:</h3>
            <img src={CookingProcess} alt="Freshly baked pizza on a white plate with chicken wings spices on the side" />
            <div className="ellipse">
              <span className="polygon"></span>
            </div>
          </div>
          <div className="button-split">
            <NavLink >
              To order
            </NavLink>
            <NavLink to='/menu'>
              Pizza-Menu
            </NavLink>
          </div>
        </div>
        <div className="right-section">
          <img src={Pizza} alt="order delicious pizza with mushrooms, olives, pepperoni, and vegetables on a white plate, served with sauces on a red background." />
          <img src={PizzaSlice} alt="slice of cartoon pizza" />
          <img src={Fries} alt="Cartoon fries in a red box" />
        </div>
      </div>
    </>
  )
}