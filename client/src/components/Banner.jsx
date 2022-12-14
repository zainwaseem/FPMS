import "./Banner.css";
import logo from "../img/logo.png";

const Banner = () => {
  return (
    <>
      {/* <div className="cotainer"> */}
      <div className="banner">
        <h1>
          {/* Factory Production <br /> Management System */}
          <img src={logo} className="ms-3" alt="" height="80px" />
        </h1>
      </div>
      {/* </div> */}
    </>
  );
};

export default Banner;
