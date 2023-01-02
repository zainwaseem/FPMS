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
            &copy;2022 Nazran, Inc. All Rights Reserved.
          </p>
          <div className={styles.social}>
            <a href="https://www.facebook.com/" className="p-3">
              <title>Facebook</title>
              <BsFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/" className="p-3">
              <title>Instagram</title>
              <AiOutlineInstagram size={20} />
            </a>

            <a href="https://twitter.com/" className="p-3 textwhite">
              <title>Twitter</title>
              <AiOutlineTwitter size={20} className="twitter" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
