import React from "react";
import style from "./Footer.module.css";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className={style.ft}>
      <h4>Copywrite © {year} Prepared by Abebe T </h4>
    </footer>
  );
}
export default Footer;
