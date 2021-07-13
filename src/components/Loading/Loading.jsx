import React from 'react'

import style from './Loading.module.css';

export default function Loading() {
    return (
        <div className={style.div}>
            <img src='https://felixbulnes.cl/wp-content/plugins/form-maker/images/spinner.gif'/>
        </div>
    )
}
