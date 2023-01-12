import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styles from './EditUser.module.css'
import { useParams } from 'react-router-dom'

const EditUser = () => {
  const { id } = useParams();

  const [name, setName] = useState()
  const [role, setRole] = useState()
  const [email, setEmail] = useState()
  const [active, setActive] = useState(true)
  const [password, setPassword] = useState()

  useEffect(() => {
    const getsingleuser = async () => {
      const res = await axios.get(`http://localhost:5000/users/${id}`)
      setName(res.data.name)
      setRole(res.data.role)
      setEmail(res.data.email)
      setPassword(res.data.password)
    }
    getsingleuser()
  }, [id])

  const [error, seterror] = useState()

  const handleOptionChange = async (e) => {
    console.log(e.target.value)
    if (e.target.value === 'role') {
      return toast('Please select any role')
    }
    await setRole(e.target.value)
    console.log(e.target.value)
  }
  const handleActiveChange = async (e) => {
    console.log(e.target.value)

    await setActive(e.target.value)
    console.log(e.target.value)
  }
  async function handleUpdateUser(e) {
    e.preventDefault()
    seterror(false)
    console.log(role, active)
    try {
      const res = await axios.put(`http://localhost:5000/users/${id}`, {
        name,
        email,
        password,
        role,
        active,
      })
      if (res.data.message) {
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
        <form>
          <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              class="form-control"
            />
          </div>

          <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-2">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label">
              Role
            </label>
            <br />
            <select
              className={styles.SelectOptionStyle}
              onChange={handleOptionChange}
              value={role}
            >
              <option value="role">Select Role...</option>
              <option value="user">User</option>
              <option value="owner">Owner</option>
              <option value="manager">Manager</option>
              <option value="supervisor">Supervisor</option>
            </select>
          </div>
          <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label">
              Block
            </label>
            <br />
            <select
              className={styles.SelectOptionStyle}
              onChange={handleActiveChange}
              value={active ? `Activate` : `deactivate`}
            >
              <option value="true">Activate</option>
              <option value="false">Deactivate</option>
            </select>
          </div>

          <button
            onClick={handleUpdateUser}
            type="submit"
            className={styles.loginButton}
          >
            Update User
          </button>
        </form>
        {/* <span className="text-danger">{error && message}</span> */}
      </div>
    </div>
  )
}

export default EditUser
