import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthContext from '../context/Authcontext'
import { fetchProducts } from '../features/products/productSlice'
import styles from './Banner.module.css'
import LoginSignup from './LoginSignup/LoginSignup'

const Banner = () => {
  const dispatch = useDispatch()

  const { isLoggedIn } = useContext(AuthContext)
  const { products } = useSelector((state) => state)
  console.log(products.items.length)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      <div className={styles.banner}>
        {isLoggedIn === 'owner' ? (
          <div className={styles.contain}>
            <div className={styles.box} style={{ background: '#E31C24' }}>
              <h3>Users</h3>
              <span>4</span>
            </div>
            <div className={styles.box} style={{ background: '#026EB5' }}>
              <h3>Employees</h3>
              <span>44</span>
            </div>
            <div className={styles.box} style={{ background: '#38AE48' }}>
              <h3>Products</h3>
              <span>{products.items.length}</span>
            </div>
            <div className={styles.box} style={{ background: '#E31C24' }}>
              <h3>Orders</h3>
              <span>{products.items.length}</span>
            </div>
            <div className={styles.box} style={{ background: '#026EB5' }}>
              <h3>Inventory</h3>
              <span>90</span>
            </div>
          </div>
        ) : (
          <div className={styles.wellcome}>
            {!isLoggedIn && <LoginSignup />}
          </div>
        )}
      </div>
    </>
  )
}

export default Banner
