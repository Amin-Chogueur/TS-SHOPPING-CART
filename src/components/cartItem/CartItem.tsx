import styles from "./cartItem.module.css";
import allProducts from "../../data/products.json";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilitis/formatCurrency";
type CartItemProps = {
  item: {
    id: number;
    quantity: number;
  };
};
export default function CartItem({ item }: CartItemProps) {
  const { deleteProducts } = useShoppingCartContext();
  const product = allProducts.find((product) => product.id === item.id);
  if (product) {
    return (
      <div className={styles.cartItem}>
        <div className={styles.item}>
          <img src={product.imgUrl} />
          <div className={styles.title}>
            <h3>
              {product.name}*{item.quantity}
            </h3>
            <p>Price: {formatCurrency(product.price)}</p>
          </div>
        </div>
        <div className={styles.total}>
          <p>Total: {formatCurrency(item.quantity * product.price)}</p>
          <button onClick={() => deleteProducts(product.id)}>✖</button>
        </div>
      </div>
    );
  }
}
