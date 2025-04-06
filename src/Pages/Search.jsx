import {Link, useParams} from 'react-router'
import React, {useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import "../styles/card.css"

export function SearchByGame({props}){

    const {search_text} = useParams()

    const [games, setGames] = useState([])
    const [gamesCnt, setCount] = useState(0)

    useEffect(() => {
        if ( search_text ) {
            axios.get(`http://localhost:8080/api/gamesearch/${search_text}`)
                .then(res => {
                    console.log(res.data.rows)
                    setGames(res.data.rows)
                    setCount(res.data.rowCount)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ search_text ]);
      

    return(
        <div className="serach">
            <div  className="search_info">
                <p className="serach_cnt-info">Найдено игр: {gamesCnt} по запросу {search_text}</p>

            </div>
            <div className="search_items">
                {games.map((e)=> {
                    return(
                <div className="search_item" key={e.id}>
                    <div className='search_item__img'>
                        <img src={e.image} alt='aaaa' width={240}/>
                    </div>
                    <div className='search_item__info'>
                        <h4 className='search_item__info_header_name'> <Link to={`/games/${e.id}`}>{e.name}</Link></h4>
                        <p>Платформа: {e.os_windows} {e.os_mac} {e.os_linux}</p>
                        <p>Жанр: {e.zhanr}</p>
                        <p>Описание: видеоигра -головоломка 2009 года , разработанная SCEE Cambridge Studio и изданная Sony Computer Entertainment для PlayStation Portable . Это вторая часть в серии LittleBigPlanet , в которой представлен совершенно новый сюжетный режим...</p>
                    </div>
                </div>
                    )
                })}

          </div> 
        </div>
    )
}