import React from "react"
import '../gamesList.css'

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

    return(
        <div className="games">
            <div className="games__list-block">
                <div className="games__list-block_list">
                    {base.map((e) =>{
                        return(
                            <div className="games__list-block_list_item" key={e.id} onClick={(e) => window.location.href="/games/1"}>
                            <div className="games__list-block_list_itme_image" style={{backgroundImage: `url("https://www.digiseller.ru/preview/928496/p1_3740137_6c8e439a.jpg")`}}>
                         </div>
                            <div className="games__list-block_list_item_info">
                                <h3 className="games__list-block_list_item_info_name">{e.game_name}</h3>
                                <p className="games__list-block_list_item_info_txt">Жанр: {e.jenre}</p>
                                <p className="games__list-block_list_item_info_txt">Год выхода: {e.year_anonce}</p>
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