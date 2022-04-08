import React, { useEffect } from "react";
import { searchCuadrosArtistas } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import Cuadros from "../cuadros/Cuadros";
import Loading from "../Loading/Loading";

export default function AutorArt(props) {
  var loading = useSelector((state) => state.loading);
  var cuadrosArtist = useSelector((state) => state.cuadrosArtist);

  const dispatch = useDispatch();
  useEffect(
    () => dispatch(searchCuadrosArtistas(props.match.params.artistName)),
    []
  );
  useEffect(
    () => dispatch(searchCuadrosArtistas(props.match.params.artistName)),
    [props.match.params.artistName]
  );

  return (
    <div>{!loading ? <Cuadros cuadros={cuadrosArtist} /> : <Loading />}</div>
  );
}
