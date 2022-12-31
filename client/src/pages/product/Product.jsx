import styles from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import { useContext, useEffect } from "react";
import { useGetAllProductsQuery } from "../../features/products/productsApi";
import { addToCart } from "../../features/products/cartSlice";
import { Link } from "react-router-dom";
import AuthContext from "../../context/Authcontext";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useContext(AuthContext);

  const { products } = useSelector((state) => state);
  console.log(products.items);
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data);
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/products/${id}`);
    toast(res.data.message);
  };
  useEffect(() => {
    handleDelete();
    dispatch(fetchProducts());
  }, [dispatch, handleDelete]);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Link className="m-3 btn btn-primary" to="/newproduct">
        Add New Product
      </Link>
      <div className={styles.homeContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error Occured in Fetching{error.data}:</p>
        ) : (
          <>
            <h2>New Arrivals</h2>
            <div className={styles.products}>
              {/* {data?.map((product) => ( */}
              {products.items?.map((product) => (
                <div key={product._id} className={styles.product}>
                  <h3>{product.title}</h3>
                  <img src={product.img.secure_url} alt="" />
                  <div className={styles.details}>
                    <span>{product.desc}</span>

                    <span className={styles.price}>{product.price}</span>
                  </div>
                  {isLoggedIn === "user" && (
                    <button onClick={() => handleAddToCart(product)}>
                      Add to cart
                    </button>
                  )}{" "}
                  {isLoggedIn === "owner" && (
                    <span onClick={() => handleDelete(product._id)}>
                      <MdDelete style={{ cursor: "pointer" }} />
                    </span>
                  )}
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
