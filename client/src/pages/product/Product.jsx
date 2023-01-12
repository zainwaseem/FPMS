import styles from './Product.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/products/productSlice'
import { useContext, useEffect, useState } from 'react'
import { useGetAllProductsQuery } from '../../features/products/productsApi'
import { addToCart } from '../../features/products/cartSlice'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/Authcontext'
import { MdAddShoppingCart, MdDelete } from 'react-icons/md'
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from '../../components/Spinner/Spinner'
import { AiFillEdit } from 'react-icons/ai'

const Product = () => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useContext(AuthContext)
  const [query, setQuery] = useState('')

  const { products } = useSelector((state) => state)
  const { error, isLoading } = useGetAllProductsQuery()
  // const { data, error, isLoading } = useGetAllProductsQuery();
  // console.log(data);
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/products/${id}`)
    toast(res.data.message)
    res.data && window.location.replace('/products')
  }
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <>
      <div className={styles.productContainer}>
        {isLoggedIn === 'owner' && (
          <Link className="ms-4  mt-2 btn btn-primary" to="/newproduct">
            Add Product 
            <MdAddShoppingCart />
          </Link>
        )}
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p className="ms-4">Error Occured in Fetching{error.data}:</p>
        ) : (
          <>
            {/* <h6 className="ms-4">Total Products:{products.items.length}</h6> */}
            <div className="input-group">
              <div className="form-outline">
                <input
                  id="search-input"
                  placeholder="Serach Product..."
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  className="form-control ms-4 mt-2 w-75"
                />
              </div>
            </div>
            <div className={styles.products}>
              {/* {data?.map((product) => ( */}
              {products.items
                .filter(
                  (prod) =>
                    prod.title.toLowerCase().includes(query) ||
                    prod.desc.toLowerCase().includes(query),
                )
                .map((product) => (
                  <div key={product._id} className={styles.product}>
                    <h3>{product.title}</h3>
                    <img src={product.img.secure_url} alt="" />
                    <div className={styles.details}>
                      <span>{product.desc}</span>

                      <span className={styles.price}>{product.price}Rs</span>
                    </div>
                    {isLoggedIn === 'user' && (
                      <button onClick={() => handleAddToCart(product)}>
                        Add to cart
                      </button>
                    )}{' '}
                    {isLoggedIn === 'owner' && (
                      <>
                        <Link
                          class="  btn btn-success"
                          to={`editproduct/${product._id}`}
                          className={styles.EditLink}
                        >
                          <AiFillEdit size={25} />
                        </Link>
                        <span
                          className="mt-1 btn btn-danger"
                          onClick={() => handleDelete(product._id)}
                        >
                          <MdDelete size={25} style={{ cursor: 'pointer' }} />
                        </span>
                      </>
                    )}
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Product
