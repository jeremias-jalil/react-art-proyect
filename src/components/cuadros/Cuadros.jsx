import React, { useState } from 'react'
import Cuadro from '../cuadro/Cuadro'
import style from './cuadros.module.css'
import { useSelector } from 'react-redux';




export default function Cuadros({cuadros}) {
    //const cuadros = useSelector(state => state.cuadros)

    return (
        <div className={style.div}>
            {cuadros?.map((c, i) => {
                return (
                    <Cuadro
                        key={c.objectID}
                        id={c.objectID}
                        artist={c.artistDisplayName}
                        date={c.objectDate}
                        imgSmall={c.primaryImageSmall}
                        title={c.title}
                        index={i}
                    />
                )
            })}
        </div>
    )
}
