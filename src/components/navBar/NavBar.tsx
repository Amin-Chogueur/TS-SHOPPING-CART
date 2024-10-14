import { useState } from "react";
import styles from "./navBar.module.css";
import { NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

export default function NavBar() {
  const { cartQuantity } = useShoppingCartContext();
  const [IsOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <h1>LOGO</h1>
        <nav className={styles.nav}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/store"}>Store</NavLink>
          <button onClick={() => setShowCart((prev) => !prev)}>
            🛒 <span>{cartQuantity}</span>
          </button>
        </nav>
        <div className={styles.mobileMenu}>
          <div
            className={styles.bergerMenu}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <p></p>
            <p></p>
            <p></p>
          </div>

          {IsOpen ? (
            <nav className={styles.MobileNav}>
              <NavLink to={"/"} onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
              <NavLink to={"/about"} onClick={() => setIsOpen(false)}>
                About
              </NavLink>
              <NavLink to={"/store"} onClick={() => setIsOpen(false)}>
                Store
              </NavLink>
            </nav>
          ) : null}
          <button onClick={() => setShowCart((prev) => !prev)}>
            🛒 <span>{cartQuantity}</span>
          </button>
        </div>
      </header>
      <Cart showCart={showCart} />
    </>
  );
}
