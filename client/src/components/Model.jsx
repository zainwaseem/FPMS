import axios from "axios";
import { useState } from "react";
import "./Mode.css";

const Model = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const [message, setMessage] = useState(``);
  const handleLogin = async (e) => {
    console.log(`usered added`);
    e.preventDefault();
    seterror(false);
    try {
      const res = await axios.post("http://localhost:5000/register", {
        email,
        password,
      });
      if (res.data.message) {
        seterror(true);
        setMessage(res.data.message);
      }
      if (res.data.token) {
        console.log(res.data.token);
        res.data && window.location.replace("/");
      }
    } catch (error) {
      seterror(true);
    }
    setInterval(() => {
      seterror(false);
    }, 5000);
  };
  return (
    <>
      <div class="wrapper">
        <a href="#demo-modal">Add user</a>
      </div>

      <div id="demo-modal" class="modal">
        <div class="modal__content">
          <div class="modal__footer">
            {/* <i class="fa fa-heart"></i> */}
            {/* <div className="login"> */}
            <span className="loginTitle">Add User</span>
            <form className="loginForm">
              <label>Email</label>
              <input
                type="text"
                value={email}
                className="loginInput"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email..."
              />
              <label>Password</label>
              <input
                type="pasword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="loginInput"
                placeholder="Your password..."
              />
              <button className="loginButton" onClick={handleLogin}>
                Add
              </button>
              <p style={{ color: "red" }}>{error && message}</p>
            </form>
          </div>
          {/* </div> */}

          <a href="#" class="modal__close">
            &times;
          </a>
        </div>
      </div>
    </>
  );
};

export default Model;

// import React from "react";

// const Model = () => {
//   return (
//     <div>
//       <div class="card" style={{ width: "18rem" }}>
//         <div class="card-body fs-1">
//           <h5 class="card-title fs-1">
//             <button
//               style={{ background: "#b1dae7" }}
//               type="button"
//               class="btn fs-1"
//               data-bs-toggle="modal"
//               data-bs-target="#exampleModal"
//             >
//               +
//             </button>
//           </h5>
//         </div>
//       </div>

//       {/* <!-- Modal --> */}
//       <div
//         class="modal fade "
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog modal-dialog modal-dialog-centered">
//           <div class="modal-content">
//             <div
//               class="modal-header"
//               style={{ background: "#b1dae7", color: " #234567" }}
//             >
//               <h5 class="modal-title" id="exampleModalLabel">
//                 Add Product
//               </h5>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body m-0 p-0 ">
//               <form className="loginForm m-0 pt-0 rounded-0">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   className="loginInput"
//                   placeholder="Your Email..."
//                 />
//                 <label>Employee</label>
//                 <input
//                   type="text"
//                   className="loginInput"
//                   placeholder="Your password..."
//                 />{" "}
//                 <label>Employee</label>
//                 <input
//                   type="text"
//                   className="loginInput"
//                   placeholder="Your password..."
//                 />{" "}
//                 <label>Employee</label>
//                 <input
//                   type="text"
//                   className="loginInput"
//                   placeholder="Your password..."
//                 />{" "}
//                 <label>Employee</label>
//                 <input
//                   type="text"
//                   className="loginInput"
//                   placeholder="Your password"
//                 />
//                 <button className="loginButton">Add</button>
//               </form>
//             </div>
//             {/* <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Model;
