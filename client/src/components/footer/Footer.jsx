import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.inside__footer}>
          <p className={styles.copyright}>
            &copy;{new Date().getFullYear()} Nazran, Inc. All Rights Reserved.
          </p>
          <div className={styles.social}>
            <a href="https://www.facebook.com/" className="p-3">
              <BsFacebook size={25} />
            </a>
            <a href="https://www.instagram.com/" className="p-3">
              <AiOutlineInstagram size={25} />
            </a>

            <a href="https://twitter.com/" className="p-3 textwhite">
              <AiOutlineTwitter size={25} className="twitter" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
