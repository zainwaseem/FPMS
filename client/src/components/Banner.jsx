import { useContext } from "react";
import AuthContext from "../context/Authcontext";
import styles from "./Banner.module.css";

const Banner = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <div className={styles.banner}>
        {isLoggedIn === "owner" ? (
          <div className={styles.contain}>
            <div className={styles.box} style={{ background: "#E31C24" }}>
              <h3>Orders</h3>
              <span>4</span>
            </div>
            <div className={styles.box} style={{ background: "#026EB5" }}>
              <h3>Employees</h3>
              <span>44</span>
            </div>
            <div className={styles.box} style={{ background: "#38AE48" }}>
              <h3>Users</h3>
              <span>22</span>
            </div>
          </div>
        ) : (
          <div className={styles.wellcome}>
            <h2>Factory Production Management</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Banner;
