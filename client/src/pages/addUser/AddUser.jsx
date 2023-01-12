import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import styles from './AddUser.module.css'

const AddUser = () => {
  const [name, setName] = useState()
  const [role, setRole] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, seterror] = useState()

  const handleOptionChane = async (e) => {
    console.log(e.target.value)
    if (e.target.value === 'role') {
      return toast('Please select any role')
    }
    await setRole(e.target.value)
  }
  async function hanldeSubmit(e) {
    e.preventDefault()
    seterror(false)
    try {
      const res = await axios.post('http://localhost:5000/register', {
        name,
        role,
        email,
        password,
      })
      if (res.data.message) {
        seterror(true)
        toast(res.data.message)
        res.data && window.location.replace('/users')
      }
    } catch (err) {
      seterror(true)
      toast(error)
    }
    setInterval(() => {
      seterror(false)
    }, 5000)
  }

  return (
    <div className={styles.container}>
      <div className={styles.adduser}>
        <form onSubmit={hanldeSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              required={true}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required={true}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Role
            </label>
            <br />
            <select
              className={styles.SelectOptionStyle}
              onChange={handleOptionChane}
            >
              <option value="role">Select Role...</option>
              <option value="user">user</option>
              <option value="owner">Owner</option>
              <option value="manager">Manager</option>
              <option value="supervisor">Supervisor</option>
            </select>

            {/* <label for="exampleInputEmail1" className="form-label">
              Role
            </label>
            <input
              onChange={(e) => setRole(e.target.value)}
              value={role}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            /> */}
          </div>

          <button type="submit" className={styles.loginButton}>
            Add User
          </button>
        </form>
        {/* <span classNameName="text-danger">{error && message}</span> */}
      </div>
    </div>
  )
}

export default AddUser
