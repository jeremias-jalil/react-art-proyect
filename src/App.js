import React, { useState } from 'react';
import style from './App.module.css';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import NavBar from './components/navBar/NavBar';
import Cuadros from './components/cuadros/Cuadros'
import Detalle from './components/detalle/Detalle';
import TopBar from './components/TopBar/TopBar';
import Landing from './components/landing/Landing';
import AutorArt from './components/AutorArt/AutorArt';
import Loading from './components/Loading/Loading';
import Favourite from'./components/Favourite/Favourite';
import About from './components/About/About';

function App() {

  var cuadros = useSelector(state => state.cuadros)
  var loading = useSelector(state => state.loading)

  return (
    <div className={style.div}>
      <div className={style.topBar}>
        <Route path='/' >
          <TopBar />
        </Route>
      </div>
      <div className={style.divNav}>
        <Route path='/' >
          <NavBar />
        </Route>
      </div>
      <div className={style.divContent}>
        <Route exact path='/' >
          {!loading ? cuadros?.length ? <Cuadros cuadros={cuadros}/> : <Landing /> : <Loading />}
        </Route>

        <Route path='/art/:artId' component={Detalle} />

        <Route exact path='/artist/:artistName' component={AutorArt} />

        <Route exact path='/favourite' >
            <Favourite/>
        </Route>

        <Route exact path='/about' >
            <About/>
        </Route>

      </div>
    </div>
  );
}

export default App;
