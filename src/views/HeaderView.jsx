import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <div className="d-flex justify-content-between p-3 align-items-center">
      <Link className="d-flex gap-3 align-items-center" to={"/"}>
        <img height={40} src="/coinlogo.png" />
        <h3>CoinZerko</h3>
      </Link>
      <nav className="d-flex gap-3">
        <NavLink className={"text-light text-decoration-none"} to={"/"}>
          Giriş Yap
        </NavLink>
        <NavLink className={"text-light text-decoration-none"} to={"/home"}>
          Anasayfa
        </NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;
