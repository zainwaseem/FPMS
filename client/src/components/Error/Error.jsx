import styles from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={styles.Error}>
      <h1>404!</h1>
      <div>Page Not Found</div>
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
};

export default Error;
