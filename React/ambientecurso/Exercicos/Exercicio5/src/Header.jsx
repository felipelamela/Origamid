import React from "react";
import style from "./Header.module.css";
import "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className={style.NavLink}>
      <NavLink className={style.Link} to="/" end>
        Home
      </NavLink>
      <NavLink className={style.Link} to="contato">
        Contato
      </NavLink>
    </section>
  );
};

export default Header;
