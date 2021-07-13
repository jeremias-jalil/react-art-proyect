import React, { useEffect } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { cuadroDetail, cleanArt, add_favourite } from '../../redux/actions'
import { Link, useHistory } from 'react-router-dom';


import style from './Detalle.module.css'

export default function Detalle(props) {
    const dispatch = useDispatch()

    useEffect(() => dispatch(cuadroDetail(props.match.params.artId)), [])

    useEffect(() => {
        return () => {
            return dispatch(cleanArt())
        }
    } , [])

    const cuadro = useSelector(state => state.cuadro)
    const favourite=useSelector(state => state.favourite)

    let fav=favourite.filter((e)=>e.objectID===cuadro.objectID).length===0;
    let history = useHistory()

    return (
        <div className={style.div}>
            <h1 className={style.title}>{cuadro.title}</h1>
            <div className={style.divImg}>
                <InnerImageZoom className={style.img} zoomType='click' src={cuadro?.primaryImageSmall} zoomSrc={cuadro?.primaryImage} />
            </div>
            <div className={style.divCont}>
                <div className={style.divInfo}>
                    <h2>Date: </h2>
                    <h4>{cuadro.objectDate}</h4>
                    <h2>Autor: </h2>
                    <Link to={`/artist/${cuadro.artistDisplayName}`} className={style.link}>{cuadro.artistDisplayName}</Link>
                    <h2>Autor Bio: </h2>
                    <h4>{cuadro.artistDisplayBio}</h4>
                    <h2>Dimentions: </h2>
                    <h4>{cuadro.dimensions}</h4>
                    <button className={fav ? style.button:style.buttonOff} onClick={()=>dispatch(add_favourite(cuadro))}>Add favourite</button>
                    <button className={!fav ? style.button:style.buttonOff} onClick={()=>history.push('/favourite')}>View my favourites</button>
                </div>
            </div>
        </div>
    )
}


