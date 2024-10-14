import styles from "./product.module.css";
import { formatCurrency } from "../../utilitis/formatCurrency";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
interface productProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export default function Product({ id, name, price, imgUrl }: productProps) {
  const {
    getProductQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    deleteProducts,
  } = useShoppingCartContext();
  const quntity = getProductQuantity(id);
  return (
    <div id={id.toString()} className={styles.product}>
      <img src={imgUrl} />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{formatCurrency(price)}</p>
      </div>
      <div className={styles.controler}>
        {quntity !== 0 ? (
          <div>
            <div className={styles.quntity}>
              <button onClick={() => decreaseCartQuantity(id)}>-</button>
              <span>{quntity} in cart</span>
              <button onClick={() => increaseCartQuantity(id)}>+</button>
            </div>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => deleteProducts(id)}
            >
              REMOVE
            </button>
          </div>
        ) : (
          <button
            className={styles.addBtn}
            onClick={() => increaseCartQuantity(id)}
          >
            + ADD TO CARD
          </button>
        )}
      </div>
    </div>
  );
}
