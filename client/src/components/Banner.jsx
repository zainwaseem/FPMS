import styles from "./Banner.module.css";
import logo from "../img/logo.png";

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <img src={logo} alt="" />
      </div>
    </>
  );
};

export default Banner;
