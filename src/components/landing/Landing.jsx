import React from 'react'
import Vimeo from '@u-wave/react-vimeo';
import style from './Landing.module.css'

export default function Landing() {
    return (
        <div className={style.div}>
            <iframe className={style.video} src="https://player.vimeo.com/video/555289972?dnt=1&amp;loop=1&amp;background=1&amp;app_id=122963" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen="" title="(2021) HomePage" id="vimeo-3227808" data-ready="true"></iframe>
        </div>
    )
}
