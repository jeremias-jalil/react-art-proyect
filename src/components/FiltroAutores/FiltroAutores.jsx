import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './FiltroAutores.module.css'

export default function FiltroAutores() {

    var cuadros = useSelector(state => state.cuadros)
    
    const [artistas, setArtistas] = useState([]);

    useEffect(() => { setArtistas(new Set(cuadros?.map(c => c.artistDisplayName))) }, [cuadros])

    return (<div>
        <h3 className={[...artistas].length > 0 ? style.h3 : style.h3Hide}>Artists found: </h3>
        <div className={style.div}>
            {[...artistas].map(a => { return <Link to={`/artist/${a}`}><h5 className={style.h5}>{a}</h5></Link> })}
        </div>
    </div>
    )
}
