import React from 'react'
import style from './NoFavourite.module.css';

export default function NoFavourite() {
    return (
        <div className={style.div}>
            <img className={style.img} src='https://images.vexels.com/media/users/3/201518/isolated/preview/8fdf595356aa78bdc51ea055a15f3e5e-elemento-de-pincel-de-pintura-de-corazon.png'/>
            <h1>No favourites</h1>
            <h2>You can add favourites by entering each work of art.</h2>
        </div>
    )
}
