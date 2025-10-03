import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";

const ToggleWrapper = styled.div`
  display: none;

  @media (max-width: 550px) {
    display: block;

    .menu-icon {
      font-size: 1.5rem;
      cursor: pointer;
      color: #ff9800;
      z-index: 3000;
    }

    .menu {
      position: fixed;
      top: 10;
      right: 0;
      width: 250px;
      height: 100vh;
      background: #222;
      padding: 60px 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
      transition: transform 0.3s ease-in-out;
      z-index: 2000;
    }

    .menu a {
      color: #fff;
      font-size: 1.2rem;
      text-decoration: none;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .menu a.active {
      color: #ff9800;
      border-bottom: 2px solid #ff9800;
    }

    .cart-icon {
      display: flex;
      align-items: center;
      gap: 5px;
      position: relative;
    }

    .cart-icon span {
      position: absolute;
      top: -5px;
      right: -15px;
      background: red;
      color: white;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: 50%;
    }
  }
`;

export default function ToggleNav() {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.products.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => setOpen(!open); 

  return (
    <ToggleWrapper open={open}>
      <div className="menu-icon" onClick={toggleMenu}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      <div className="menu">
        <NavLink to="/" end onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/products" onClick={toggleMenu}>
          Products
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/cart" onClick={toggleMenu}>
          <div className="cart-icon">
            <FaShoppingCart />
            <span>{totalItems}</span>
            Cart
          </div>
        </NavLink>
      </div>
    </ToggleWrapper>
  );
}
