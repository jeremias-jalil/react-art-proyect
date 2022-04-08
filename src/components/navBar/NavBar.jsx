import React from "react";
import Search from "../search/Search";
import FiltroAutores from "../FiltroAutores/FiltroAutores";
import { Route } from "react-router-dom";
import style from "./NavBar.module.css";

export default function navBar() {
  return (
    <div className={style.div}>
      <h2 className={style.title}>Search for your favorite artwork</h2>
      <Search />
      <Route exact path="/">
        <FiltroAutores />
      </Route>
      <Route path="/artist">
        <FiltroAutores />
      </Route>
    </div>
  );
}
