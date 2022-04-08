import React, { useEffect, useState } from "react";
import { getSearchApi } from "../../function/api";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

import style from "./Landing.module.css";

export default function Landing() {
  const [landingImage, setLandingImage] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    let interval;
    setLoad(true);
    getSearchApi("art", "Paintings").then((r) => {
      setLandingImage(r[0]);
      setLoad(false);
      var contador = 1;
      interval = setInterval(() => {
        if (contador < r.length) {
          setLandingImage(r[contador]);
          contador = contador + 1;
        } else {
          setLandingImage(r[0]);
          contador = 1;
        }
      }, 2000);
    });
    return () => clearInterval(interval);
  }, []);

  console.log(landingImage);
  return (
    <div className={style.div}>
      {landingImage.primaryImage && (
        <Link to={`/art/${landingImage.objectID}`}>
          <img src={landingImage.primaryImageSmall} />
        </Link>
      )}
      {landingImage.title && (
        <div className={style.titleConteiner}>
          <h2 className={style.title}>{landingImage.title}</h2>
        </div>
      )}

      {load && <Loading />}
    </div>
  );
}
