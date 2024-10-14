import allProducts from "../../data/products.json";
import Product from "../../components/product/Product";
import styles from "./store.module.css";
export default function Store() {
  return (
    <div className={styles.storeContainer}>
      <h2>Store</h2>
      <div>
        {allProducts.map((product, i) => (
          <Product key={i} {...product} />
        ))}
      </div>
    </div>
  );
}
