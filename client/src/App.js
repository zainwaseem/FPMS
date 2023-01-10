import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import Product from './pages/product/Product.jsx'
import User from './pages/users/User'
import EditUser from './pages/users/EditUser'
import Employee from './pages/employees/Employee'
import { useContext } from 'react'
import AuthContext from './context/Authcontext'
import AddUser from './pages/addUser/AddUser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import SideBar from "./components/SideBar/SideBar.jsx";
import Material from './pages/Material/Material'
import AddEmp from './pages/employees/AddEmp'
import Error from './components/Error/Error'
import Cart from './pages/product/Cart'
import AddProduct from './pages/product/AddProduct'
import EditEmp from './pages/employees/EditEmp'
import Footer from './components/footer/Footer'
import Spinner from './components/Spinner/Spinner'
import Orders from './pages/Orders/Orders.jsx'

function App() {
  const { isLoggedIn } = useContext(AuthContext)
  console.log(isLoggedIn)
  // const [role, setRole] = useState();
  if (isLoggedIn) {
    toast.success(`logging you in as a ` + isLoggedIn, {
      autoClose: 1000,
      position: `bottom-left`,
    })
  }
  return (
    <>
      <BrowserRouter>
        {/* <SideBar> */}
        <Navbar />
        <Routes>
          {/* {!isLoggedIn && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )} */}
          <Route path="/" element={<Banner />} />
          {isLoggedIn === 'owner' ? (
            <>
              <Route path="/spin" element={<Spinner />} />
              <Route path="/products" element={<Product />} />
              <Route path="/newproduct" element={<AddProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/users" element={<User />} />
              <Route path="/:id" element={<EditUser />} />
              <Route path="/employees" element={<Employee />} />
              <Route path="/adduser" element={<AddUser />} />
              <Route path="/materials" element={<Material />} />
              {/* <Route path="/addemployee" element={<AddEmp />} /> */}
            </>
          ) : null}
          {isLoggedIn === 'manager' ? (
            <>
              <Route path="/orders" element={<Product />} />
              <Route path="/materials" element={<Material />} />
            </>
          ) : null}
          {isLoggedIn === 'supervisor' ? (
            <>
              <Route path="/orders" element={<Orders />} />
              <Route path="/materials" element={<Material />} />

              <Route path="/employees" element={<Employee />} />
              <Route path="/addemployee" element={<AddEmp />} />
              <Route path="/:id" element={<EditEmp />} />
            </>
          ) : null}
          {isLoggedIn === 'user' ? (
            <>
              <Route path="/products" element={<Product />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/home" element={<h1>Home</h1>} />
              <Route path="/about" element={<h1>about</h1>} />
              <Route path="/contact" element={<h1>Contact Us</h1>} />
              <Route path="/products" element={<Product />} />
            </>
          ) : null}
          {setTimeout(() => {
            ;<Route path="*" element={<Error />} />
          }, [1000])}
        </Routes>

        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
        />
        <Footer />
        {/* </SideBar> */}
        {/* <Banner /> */}
      </BrowserRouter>
    </>
  )
}

export default App
