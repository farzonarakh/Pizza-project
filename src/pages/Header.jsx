import './Header.css';
import Cart from '../assets/images/cart.png';
import { NavLink } from 'react-router';
import { useState } from 'react';

export function Header() {

  const [open, setOpen] = useState(false);
  return (
    <div className='header'>
      <div className='logo'>pizzashop</div>
      <div className={`header-middle-section ${open ? "open" : ""} `}>
        <NavLink to="/" end
          className={({ isActive }) => (
            isActive ? "active" : ""
          )} >
          <div className="header-link"> Home </div>
        </NavLink>

        <NavLink to="/menu"
          className={({ isActive }) => (
            isActive ? "active" : ""
          )}>
          <div className="header-link">Menu</div>
        </NavLink>

        <NavLink to="/events"
          className={({ isActive }) => (
            isActive ? "active" : ""
          )}>
          <div className="header-link">Events</div>
        </NavLink>

        <NavLink to="/about"
          className={({ isActive }) => (
            isActive ? "active" : ""
          )}>
          <div className="header-link">About us</div>
        </NavLink>
      </div>

      <div className='left-section'>
        <button className="login-button">
          Log in
        </button>
        <button className='cart-img-container'>
          <img className='cart-img' src={Cart} />
        </button>

        <button
          className={`hamburger ${open ? "active" : ""}`}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger-box" >
            <span className="hamburger-line top"></span>
            <span className="hamburger-line mid"></span>
            <span className="hamburger-line bot"></span>
          </span>
        </button>
      </div>

    </div>
  )
}