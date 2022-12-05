import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    const userfunc = async () => {
      const res = await axios.get("http://localhost:5000/users");
      setusers(res.data);
    };

    userfunc();
  }, []);

  return (
    <>
      <div>
        {users.map((user,index) => (
          <div key={index}>
            <h3>User: {user.name}</h3>
            <b>User Role: {user.role}</b>
            <p>User Email: {user.email}</p>
            <p>User CreatedAt: {user.createdAt}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
