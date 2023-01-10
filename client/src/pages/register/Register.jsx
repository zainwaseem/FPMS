import axios from "axios";
import { toast } from "react-toastify";
import styles from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const Register = () => {
  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
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
          const res = await axios.post(
            "http://localhost:5000/register",
            values
          );
          if (res.data.message) {
            if (res.status !== 200) {
              return toast(res.data.message);
            }
            if (res.status === 200) {
              toast(res.data.message);
            }
          }
        } catch (error) {
          toast.error(`Something went Wrong` + error.message);
        }
      },
    });

  return (
    <div className={styles.container}>
      <div className={styles.adduser}>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              class="form-control"
              required={true}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small style={{ color: "red" }}>
              {touched.name && errors.name ? errors.name : null}
            </small>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required={true}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small style={{ color: "red" }}>
              {touched.email && errors.email ? errors.email : null}
            </small>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              value={values.password}
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              class="form-control"
              required={true}
              id="exampleInputPassword1"
            />
            <small style={{ color: "red" }}>
              {touched.password && errors.password ? errors.password : null}
            </small>
          </div>

          <button type="submit" className="btn btn-primary" id={styles.loginButton}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
