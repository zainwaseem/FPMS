import styles from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import { useEffect } from "react";
import { useGetAllProductsQuery } from "../../features/products/productsApi";

const Product = () => {
  const dispatch = useDispatch();
  const dataRT = useSelector((state) => state);
  console.log(dataRT);
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className={styles.homeContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error Occured in Fetching{error.data}:</p>
        ) : (
          <>
            <h2>New Arrivals</h2>
            <div className={styles.products}>
              {data?.map((product) => (
                <div key={product.id} className={styles.product}>
                  <h3>{product.name}</h3>
                  <img src={product.image} alt="" />
                  <div className={styles.details}>
                    <span>{product.desc}</span>
                    <span className={styles.price}>{product.price}</span>
                  </div>
                  <button>Add to cart</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Product;
