import styles from "./Banner.module.css";
// import logo from "../img/logo.png";

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        {/* <img src={logo} alt="" /> */}
        <div className={styles.contain}>
          <div className={styles.box} style={{ background: "#E31C24" }}>
            1
          </div>
          <div className={styles.box} style={{ background: "#026EB5" }}>
            2
          </div>
          <div className={styles.box} style={{ background: "#38AE48" }}>
            3
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
