import React, { useState } from "react";
import usr1 from "../../img/1.png";
import usr2 from "../../img/2.png";
import usr3 from "../../img/3.png";
import "./User.css";
const User = () => {
  const users = [
    {
      name: "zain waseem",
      role: "manager",
      email: "zain@msds.scsdo",
      img: usr1,
    },
    {
      name: "zain waseem",
      role: "manager",
      email: "zain@msds.scsdo",
      img: usr1,
    },
    {
      name: "zain waseem",
      role: "manager",
      email: "zain@msds.scsdo",
      img: usr1,
    },
    {
      name: "zain waseem",
      role: "manager",
      email: "zain@msds.scsdo",
      img: usr2,
    },
    {
      name: "zain waseem",
      role: "manager",
      email: "zain@msds.scsdo",
      img: usr1,
    },
    {
      name: "zain waseem",
      role: "manager",
      email: "zain@msds.scsdo",
      img: usr2,
    },
    {
      name: "zain waseem",
      role: "manager",
      email: "zain@msds.scsdo",
      img: usr1,
    },
    {
      name: "zain waseem",
      role: "manager",
      email: "zain@msds.scsdo",
      img: usr3,
    },
    {
      name: "zain waseem",
      role: "manager",
      email: "zain@msds.scsdo",
      img: usr1,
    },
  ];
  const [user, setUsers] = useState(users);
  return (
    <>
      <div class="cards-list">
        {user.map((u) => (
          <div class="card 1">
            <div class="card_image">
              <img src={u.img} alt="" />
            </div>
            <div class="card_title">
              <p>{u.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default User;
