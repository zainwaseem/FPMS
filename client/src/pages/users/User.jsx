import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import usr1 from "../../img/man.png";
import { MdDelete } from 'react-icons/md'
// import { FaUserAlt } from "react-icons/fa";
import { AiFillEdit } from 'react-icons/ai'
import styles from './User.module.css'
import { toast } from 'react-toastify'
// import Spinner from "../../components/Spinner/Spinner";
import userImage from '../../img/sample-img.jpeg'

const User = () => {
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/users/${id}`)
    toast(res.data.message)
  }
  useEffect(() => {
    handleDelete()
  }, [])

  useEffect(() => {
    const userfunc = async () => {
      const res = await axios.get('http://localhost:5000/users')
      console.log(res.data, users)
      setUsers(res.data)
    }
    userfunc()
  }, [users])

  return (
    <>
      <div className={styles.userspage}>
        <Link to="/adduser" className="btn btn-primary ms-5 mt-3">
          Add User
          {/* <div className={styles.cardslist} class="rotate-vert-center">
            <div className={styles.card}>
              <div className={styles.AddButton}>
                <FaUserAlt />
              </div>
              <div className={styles.card_title}>
                <span>Add User</span>
              </div>
            </div>
          </div> */}
        </Link>
        <div>
          <div className="input-group d-flex w-100 justify-content-between">
            <h6 className="ms-5 ps-2 mt-2">Total Users: {users.length}</h6>
            <div className="form-outline">
              <input
                id="search-input"
                style={{ backgroundColor: '#CCEEFA' }}
                placeholder="Serach User..."
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                className={styles.UserSearchInput}
                class="form-control w-75"
              />
            </div>
          </div>
        </div>

        <div className={styles.cardslist}>
          {users
            .filter(
              (user) =>
                user.name.toLowerCase().includes(query) ||
                user.role.toLowerCase().includes(query),
            )
            .map((u, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.card_image}>
                  <img
                    src={userImage}
                    alt=""
                    className="mt-3
                  "
                  />
                  <div className={styles.userData}>
                    <h3>{u.name}</h3>
                    <p>{u.email}</p>
                    {/* <p>{u.active}</p> */}
                    <div className={styles.icons}>
                      <MdDelete size={25} onClick={() => handleDelete(u._id)} />
                      <Link to={`/${u._id}`} className={styles.EditLink}>
                        <AiFillEdit size={25} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.card_title}>
                  <p>{u.role}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default User
