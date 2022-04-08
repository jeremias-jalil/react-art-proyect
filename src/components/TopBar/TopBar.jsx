import React from "react";
import style from "./TopBar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clean } from "../../redux/actions";

export default function TopBar() {
  const dispatch = useDispatch();

  return (
    <div className={style.div}>
      <a href="https://metmuseum.github.io/" target="_blank">
        <img
          className={style.logo}
          onClick={() => dispatch(clean())}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/The_Metropolitan_Museum_of_Art_Logo.svg/1028px-The_Metropolitan_Museum_of_Art_Logo.svg.png"
        />
      </a>
      <div className={style.menu}>
        <NavLink
          className={style.menuElement}
          exact
          to="/"
          activeClassName={style.activeMenu}
        >
          Home
        </NavLink>
        <NavLink
          className={style.menuElement}
          exact
          to="/favourite"
          activeClassName={style.activeMenu}
        >
          Favourite
        </NavLink>
        <NavLink
          className={style.menuElement}
          exact
          to="/about"
          activeClassName={style.activeMenu}
        >
          About
        </NavLink>
      </div>
    </div>
  );
}
