import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSearch } from '../../redux/actions'
import style from './Search.module.css'


export default function Search() {
    const [type, setType] = useState('Paintings');
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    function buscar(value, type) {
        dispatch(getSearch(value, type))
    }

    let history = useHistory()

    return (
        <form onSubmit={
            e => {
                history.push('/')
                e.preventDefault();
                buscar(value, type)
                
            }

        }>
            <input className={style.input} type="text" placeholder='Art' onChange={e => { return (setValue(e.target.value)) }} />
            <select className={style.select} name='Tipo de arte' onChange={e => { return (setType(e.target.value), buscar(value, e.target.value), history.push('/')) }} >
                <option>Paintings</option>
                <option>Ceramics</option>
                <option>Sculpture</option>
            </select>
            <button className={style.button} type='submit'>Search</button>
        </form>
    )
}
