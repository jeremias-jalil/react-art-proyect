import React from "react";

import { useSelector } from "react-redux";
import style from "./Favourite.module.css";

import Cuadros from "../cuadros/Cuadros";
import Loading from "../Loading/Loading";
import NoFavourite from "../noFavourite/NoFavourite";

export default function Favourite() {
  var loading = useSelector((state) => state.loading);
  var favourite = useSelector((state) => state.favourite);

  return (
    <div className={style.div}>
      {!loading ? (
        favourite?.length ? (
          <Cuadros cuadros={favourite} />
        ) : (
          <NoFavourite />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
}
