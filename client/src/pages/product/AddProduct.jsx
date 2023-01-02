import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
// import * as yup from "yup";
// import { Formik } from "formik";

import styles from "./AddProduct.module.css";
const AddProduct = () => {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [size, setSize] = useState();
  const [img, setImg] = useState(``);
  const [price, setPrice] = useState();
  // const [color, setColor] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/products", {
        title,
        desc,
        img,
        price,
        size,
      });
      if (res.data.message) {
        console.log(res.data.message);
        toast(res.data.message);
        // res.data && window.location.replace("/products");
      }
    } catch (err) {
      toast(err);
    }
  };
  return (
    <>
      <div className={styles.EmployeeForm}>
        <form onSubmit={handleSubmit}>
          <h5>Product Details</h5>
          <br />
          <div className="mb-3" style={{ display: "flex" }}>
            <input
              type="text"
              placeholder="Product title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Product description"
              className="mx-2 form-control"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>{" "}
          <div className="mb-3" style={{ display: "flex" }}>
            <select
              className={styles.SelectOptionStyle}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="size">Select Size...</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <input
              placeholder="Product Price"
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              className="form-control mx-2"
            />
          </div>
          <div className="mb-3" style={{ display: "flex" }}>
            <input
              type="file"
              accept="image/*"
              placeholder="Product Image"
              onChange={(e) => {
                let reader = new FileReader();
                reader.onload = () => {
                  if (reader.readyState === 2) {
                    setImg(reader.result);
                  }
                };
                reader.readAsDataURL(e.target.files[0]);
              }}
              className="form-control mx-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
