import React, { useState, useEffect } from 'react';
import style from './App.module.css';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavBar from './components/navBar/NavBar';
import Cuadros from './components/cuadros/Cuadros'
import Detalle from './components/detalle/Detalle';
import TopBar from './components/TopBar/TopBar';
import Landing from './components/landing/Landing';
import AutorArt from './components/AutorArt/AutorArt';
import Loading from './components/Loading/Loading';
import Favourite from './components/Favourite/Favourite';
import About from './components/About/About';

function App() {

  var favourites = useSelector(state => state.favourite)
  var cuadros = useSelector(state => state.cuadros)
  var loading = useSelector(state => state.loading)
  const [navState, setNavState] = useState(true)


  useEffect(() => {
    if (favourite.length > 0) {
      localStorage.setItem('favourites', JSON.stringify(favourites))
    }
  }, [favourites])


  return (
    <div className={style.div}>
      <Route path='/' >
        <div className={style.topBar}>
          <TopBar />
        </div>
      </Route>
      <Route path='/' >
        <div>
          <div className={navState ? style.divNav : style.divNavNone}>
            <div className={style.hamb} onClick={() => setNavState(!navState)}>
              <div className={style.line}></div>
              <div className={style.line}></div>
              <div className={style.line}></div>
            </div>
            <div className={navState ? style.navBar : style.none}>
              <NavBar />
            </div>
          </div>
          <div className={navState ? style.transp : style.none} onClick={() => setNavState(!navState)}></div>
        </div>
      </Route>

      <div className={style.divContent}>
        <Route exact path='/' >
          {!loading ? cuadros?.length ? <Cuadros cuadros={cuadros} /> : <Landing /> : <Loading />}
        </Route>

        <Route path='/art/:artId' component={Detalle} />

        <Route exact path='/artist/:artistName' component={AutorArt} />

        <Route exact path='/favourite' >
          <Favourite />
        </Route>

        <Route exact path='/about' >
          <About />
        </Route>

      </div>
    </div>
  );
}

export default App;
