import { useShoppingCartContext } from "../../context/ShoppingCartContext";

import CartItem from "../cartItem/CartItem";
import styles from "./cart.module.css";
type CartProps = {
  showCart: boolean;
};

export default function Cart({ showCart }: CartProps) {
  const { cartItems } = useShoppingCartContext();
  return (
    <div className={showCart ? styles.cartOpen : styles.cartClose}>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
