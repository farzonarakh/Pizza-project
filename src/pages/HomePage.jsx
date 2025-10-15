import { Header } from "./Header"
import './HomePage.css';
import CookingProcess from '../assets/images/cooking-process.jpg';
import Pizza from '../assets/images/pizza-img.png';
import { NavLink } from "react-router";
import Fries from '../assets/images/fries.png';
import PizzaSlice from '../assets/images/pizza-slice.png';
import Lightning from '../assets/images/Lightning.png';
import PizzaWord from '../assets/images/pizza-word.png';
import Polygon from '../assets/images/polygon 1.png'
import Vector2 from '../assets/images/Vector 2.png';
import Vector1 from '../assets/images/Vector 2.png'


export function HomePage() {
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="left-section">
          <div className="background-word">
            <img src={PizzaWord} />
          </div>
          <h1>
            <div className="the-fastest">
              The Fastest
              <img className="vector2" src={Vector2} />
            </div>
            Pizza
            <span >
              <img className="lightning" src={Lightning} alt="red and orange cartoon lightning" />
            </span>
            Delivery
          </h1>
          <h2>
            We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span className="highlighted-word">pizza is free</span> !
          </h2>
          <div className="video-container">
            <h3>Cooking process:</h3>
            <div className="cooking-video">
              <img className="video" src={CookingProcess} alt="Freshly baked pizza on a white plate with chicken wings spices on the side" />
              <div className="ellipse">
                <img className="polygon" src={Polygon} alt="play-icon" />
              </div>
            </div>
          </div>
          <div className="split-buttons">
            <NavLink className='to-order'>
              To order
            </NavLink>
            <NavLink to='/menu' className='pizza-menu'>
              <span className="pizza-menu-text">Pizza-Menu</span>
            </NavLink>
            <img className="vector1" src={Vector1} />
          </div>
        </div>
        <div className="right-section">
          <img className="pizza-image" src={Pizza} alt="order delicious pizza with mushrooms, olives, pepperoni, and vegetables on a white plate, served with sauces on a red background." />
          <img className="pizza-slice" src={PizzaSlice} alt="slice of cartoon pizza" />
          <img className="fries" src={Fries} alt="Cartoon fries in a red box" />
          <div className="background-word">
            <img src={PizzaWord} />
          </div>
          <div className="background-word-top">
            <img src={PizzaWord} />
          </div>
        </div>
      </div>
    </>
  )
}