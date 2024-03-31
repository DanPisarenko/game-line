import React, {useEffect, useState} from "react"
import '../gamesList.css'
import axios from "axios"

export default function Games(){

    let base = [{
        'id': 1,
        'game_name': 'hogwarts Legacy',
        'jenre': "Action",
        'year_anonce': 2023,
        'rating': 5
    },
    {
        'id': 2,
        'game_name': 'hogwarts Legacy',
        'jenre': "Action",
        'year_anonce': 2023,
        'rating': 5
    },
    {
        'id': 3,
        'game_name': 'hogwarts Legacy',
        'jenre': "Action",
        'year_anonce': 2023,
        'rating': 5
    },
    {
        'id': 4,
        'game_name': 'hogwarts Legacy',
        'jenre': "Action",
        'year_anonce': 2023,
        'rating': 5
    },{
        'id': 5,
        'game_name': 'hogwarts Legacy',
        'jenre': "Action",
        'year_anonce': 2023,
        'rating': 5
    },{
        'id': 6,
        'game_name': 'hogwarts Legacy',
        'jenre': "Action",
        'year_anonce': 2023,
        'rating': 5
    },{
        'id': 7,
        'game_name': 'hogwarts Legacy',
        'jenre': "Action",
        'year_anonce': 2023,
        'rating': 5
    }]

    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/game`)
            .then(res => {
                console.log(res.data.rows)
                setGames(res.data.rows)
            })
            .catch(err => {
                console.log(err)
            })
    
}, []);


    return(
        <div className="games">
            <div className="games__list-block">
                <div className="games__list-block_list">
                    {games.map((e) =>{
                        return(
                            <div className="games__list-block_list_item" key={e.id} onClick={(e) => window.location.href=`/games/${e.id}`}>
                            <div className="games__list-block_list_itme_image" style={{backgroundImage: `url(${e.image})`}}>
                         </div>
                            <div className="games__list-block_list_item_info">
                                <h3 className="games__list-block_list_item_info_name">{e.name}</h3>
                                <p className="games__list-block_list_item_info_txt">Жанр: </p>
                                <p className="games__list-block_list_item_info_txt">Год выхода: {e.year_of_pub}</p>
                                <p className="games__list-block_list_item_info_txt">Год выхода: 2023 год</p>
                            </div>
                        </div>
                        )
                    } )}
                    {/* <div className="games__list-block_list_item">
                        <div className="games__list-block_list_itme_image" style={{backgroundImage: `url("https://www.digiseller.ru/preview/928496/p1_3740137_6c8e439a.jpg")`}}>
                     </div>
                        <div className="games__list-block_list_item_info">
                            <h3 className="games__list-block_list_item_info_name">hogwarts Legacy</h3>
                            <p className="games__list-block_list_item_info_txt">Жанр: Action/RPG</p>
                            <p className="games__list-block_list_item_info_txt">Год выхода: 2023 год</p>
                            <p className="games__list-block_list_item_info_txt">Год выхода: 2023 год</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}