import React from 'react'
import style from './cuadro.module.css'
import { Link } from 'react-router-dom'
import {remove_favourite} from '../../redux/actions'
import {useDispatch, useSelector} from 'react-redux';


export default function Cuadro({ id, artist, date, imgSmall, title, index }) {
    const dispatch = useDispatch()
    const favourite=useSelector(state => state.favourite)
    let fav=favourite.filter((e)=>e.objectID===id).length===0;
        
    
    return (
        <div className={index%2===0?style.div:style.divReverse}>
            <div className={style.divImage}>
                <img className={style.cuadro} src={imgSmall} />
            </div>
            <div className={style.divInfo}>
                <h2 className={style.title}>{title}</h2>
                <h3 className={style.date}>{date}</h3>
                <h3 className={style.artist}>{artist}</h3>
                <Link to={`/art/${id}`}className={style.link}><button className={style.button}>Take a close look</button></Link>
                <button className={!fav ? style.button:style.buttonOff} onClick={()=>dispatch(remove_favourite(id))}>Remove favourite</button>

            </div>
        </div>
    )
}
