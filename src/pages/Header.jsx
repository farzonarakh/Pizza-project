import './Header.css';
import Cart from '../assets/images/cart.png';
import { NavLink } from 'react-router';

export function Header() {
  return (
    <div className='header'>
      <div className='logo'>pizzashop</div>
      <div className='header-middle-section'>
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
      </div>

    </div>
  )
}