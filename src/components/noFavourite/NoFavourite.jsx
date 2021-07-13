import React from 'react'
import style from './NoFavourite.module.css';

export default function NoFavourite() {
    return (
        <div className={style.div}>
            <img src='https://lh3.googleusercontent.com/proxy/PvbnD-En9UEDGD5r8WRTxcIu8nchsSpK56LoEW7mF0L2RNaHGm3z9FVwbtzJLQHu5T2E0aas9A1h9qFOJ6W0JBY2fRpa4xc'/>
            <h1>No favourites</h1>
            <h2>You can add favourites by entering each work of art.</h2>
        </div>
    )
}
