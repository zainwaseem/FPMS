import styles from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import { useContext, useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../features/products/productsApi";
import { addToCart } from "../../features/products/cartSlice";
import { Link } from "react-router-dom";
import AuthContext from "../../context/Authcontext";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";

const Product = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useContext(AuthContext);
  const [query, setQuery] = useState("");

  const { products } = useSelector((state) => state);
  console.log(products.items);
  // const { error, isLoading } = useGetAllProductsQuery();
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data);
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/products/${id}`);
    toast(res.data.message);
    res.data && window.location.replace("/products");
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      {isLoggedIn === "owner" && (
        <Link className="m-3 btn btn-primary" to="/newproduct">
          Add New Product
        </Link>
      )}
      <div className={styles.homeContainer}>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p>Error Occured in Fetching{error.data}:</p>
        ) : (
          <>
            <h2>Products</h2>
            <div class="input-group">
              <div class="form-outline">
                <input
                  id="search-input"
                  placeholder="Serach Product..."
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  class="form-control"
                />
              </div>
            </div>
            <div className={styles.products}>
              {/* {data?.map((product) => ( */}
              {products.items
                .filter((prod) => prod.title.toLowerCase().includes(query))
                .map((product) => (
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
                      <span
                        className="btn btn-danger"
                        onClick={() => handleDelete(product._id)}
                      >
                        <MdDelete size={25} style={{ cursor: "pointer" }} />
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
