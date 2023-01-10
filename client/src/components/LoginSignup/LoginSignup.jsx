import './LoginSignup.css'

import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const LoginSignup = () => {
  // using formik
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
  } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(`Name is required`),
      email: Yup.string()
        .email(`Please provide a valid email`)
        .required(`Email is required`),
      password: Yup.string()
        .min(8, `Please provide at least 8 letters`)
        .max(14, `Password contains 8 to 14 letters`)
        .required(`Password is required`),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post('http://localhost:5000/register', values)
        if (res.data.message) {
          if (res.status !== 200) {
            return toast(res.data.message)
          }
          if (res.status === 200) {
            toast(res.data.message)
          }
        }
      } catch (error) {
        toast.error(`Something went Wrong` + error.message)
      }
    },
  })

  // using formik

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/login', {
        email,
        password,
      })
      if (res.data.message) {
        toast(res.data.message)
        console.log(res.data.message)
      }
      if (!res.status === 200) {
        toast(res.data.message)
      }
      if (res.data.token) {
        console.log(res.data.token)
        res.data && window.location.replace('/')
      }
    } catch (error) {
      toast.error(`Something Went Wrong`)
    }
  }
  return (
    <div>
      <div className="main">
        <input
          className="loginInputs"
          type="checkbox"
          id="chk"
          aria-hidden="true"
        />

        <div className="signup">
          <form onSubmit={handleSubmit}>
            <label
              // className={errors.name && 'mb-3'}
              className="loginLabel"
              id="Signup"
              for="chk"
              aria-hidden="true"
            >
              Sign up
            </label>
            <input
              className="loginInputs p-3 "
              type="text"
              // name="txt"
              placeholder="User name"
              required=""
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
            />
            {touched.name && errors.name ? (
              <p className="text-dark text-center p-0 m-0">{errors.name}</p>
            ) : null}
            <input
              className="loginInputs p-3"
              type="email"
              // name="email"
              placeholder="Email"
              required=""
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? (
              <p className="text-dark text-center p-0 m-0">{errors.email}</p>
            ) : null}
            <input
              className="loginInputs p-3"
              value={values.password}
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
              required=""
            />
            {touched.password && errors.password ? (
              <p className="text-dark text-center p-0 m-0">{errors.password}</p>
            ) : null}
            <button className="mybtn P-0 M-0">Sign up</button>
          </form>
        </div>

        {/* LOGINS */}
        <div className="login">
          <form onSubmit={handleLogin}>
            <label class="loginLabel" for="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="loginInputs p-3"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="loginInputs p-3"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="mybtn">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
