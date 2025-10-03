import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import ToggleNav from "../ui/ToggleNav"; 

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #222;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #ff9800;
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 50px;

    @media (max-width: 550px) {
      display: none; 
    }
  }

  .links {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 1rem;
  }

  .links a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }

  .links .active {
    color: #ff9800;
    border-bottom: 2px solid #ff9800;
  }

  .links a:hover {
    color: #ff9800;
  }
`;

const CartIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  transition: color 0.2s;

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background: red;
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 2px 6px;
    border-radius: 50%;
  }
`;

export default function Header() {
  const cart = useSelector((state) => state.products.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Nav>
      <NavLink to="/" >
      <h2>🛒 Shopon</h2>
      </NavLink>

      <div className="nav-right">
        <div className="links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
            Products
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </div>

        <div className="cart-wrapper">
          <NavLink to="/cart">
            {({ isActive }) => (
              <CartIcon active={isActive}>
                <FaShoppingCart size={20} />
                {totalItems > 0 && <span>{totalItems}</span>}
              </CartIcon>
            )}
          </NavLink>
        </div>
      </div>

      <ToggleNav />
    </Nav>
  );
}
