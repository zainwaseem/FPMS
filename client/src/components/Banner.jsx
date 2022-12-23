import styles from "./Banner.module.css";
import logo from "../img/logo.png";

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        {/* <img src={logo} alt="" /> */}
        <div className={styles.contain}>
          <div className={styles.box}>1</div>
          <div className={styles.box}>2</div>
          <div className={styles.box}>3</div>
        </div>
      </div>
    </>
  );
};

export default Banner;
