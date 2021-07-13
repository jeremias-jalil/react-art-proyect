import React from 'react'
import style from './About.module.css';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className={style.div}>
            <img src='https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png' />
            <div className={style.content}><h1>Practice app</h1>
                <h2>This is a development by Jeremías Jalil, used as a practice of the concepts acquired on Reac-Redux within the Full Stack Web Developer Bootcamp</h2>
                <a className={style.a} href='https://www.linkedin.com/in/jeremiasjalil/' target='_blank'>Jeremías Jalil LinkedIn</a>
            </div>
        </div>
    )
}
