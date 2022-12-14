

const Model = () => {
  return (
    <>
      <a class="button" href="#openModal">Open it up!</a>

<div id="openModal" class="modalbg">
  <div class="dialog">
    <a href="#close" title="Close" class="close">X</a>
  	<h2>Holy Crap!!!</h2>
		<p>You freakin' did it!</p>
		<p>You opened up the freakin' modal window! Now close it, ya dingus.</p>
    <p class="fineprint">Based on the article "Creating a modal window with HTML5 & CSS3" at <a href="webdesignerdepot.com">Webdesigner Depot</a></p>
    <p class="fineprint">p.s. Sorry for calling you a dingus earlier.</p>
	</div>
</div>
    </>
  )
}

export default Model





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
