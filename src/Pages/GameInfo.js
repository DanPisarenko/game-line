import "../gameInfo.css"
import { useState, useEffect } from "react"
import {useParams} from 'react-router'
import  axios from "axios"
export default function GameInfo() {

    const {id} = useParams()
    const [game, setGame] = useState([])

    useEffect(() => {
        if ( id ) {
            axios.get(`http://localhost:8080/api/game/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setGame(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);
    
    // let ftst = {
    //     display: "flex",
    //     justifyContent: "space-between",
    //     paddingLeft: "32px",
    //     paddingRight: "32px",
    //     backgroundColor: "rgb(255, 221, 158)"
    // }
    return (
        <div className="game-info">
            {game.map((e) => {
                return (
                    <div className="game-info_wrapper" key={e.id}>
                                    <div className="game-info_main">
                <div className="game-info_main__left">
                    <h2>{e.name}</h2>
                    <img src={e.image} alt={e.name} width='400'/>
                    {/* <div className="rus_avail">
                        <p><b>STEAM</b>: Недоступно в РФ</p>
                        <p><b>PS Store</b>: Недоступно в РФ</p>
                        <p><b>XBox Store</b>: Недоступно в РФ</p>
                    </div> */}
                </div>
                <div className="game-info_main__right">
                    <div className="info_short">
<p>Жанр: Action</p>
<p>Год выхода: {(e.year_of_pub).slice(0, 4)}</p>
                    </div>
                    <div className="sys_req">
                        <h3>Минимальные системные требования</h3>
                        <p>Процессор: {e.cpu}</p>
                        <p>ОЗУ: {Math.floor(e.ram_mb / 1024)} Гб</p>
                        <p>Видеокарта: {e.video_card}</p>
                        <p>ОС: {e.os_windows} или новее</p>
                        <p>Свободное место: {Math.floor(e.hdd_mb / 1024)} Гб, желательно SSD.</p>
                        <button>Свертить совместимость</button>
                    </div>
                </div>
            </div>
            <div className="game-Info_descr">
                <p className="game-Info_descr_text">Компьютерная игра в жанре action/RPG, разработанная американской студией Avalanche Software и изданная Warner Bros. Games под лейблом Portkey Games. Действие игры разворачивается в фэнтезийной вселенной «Гарри Поттера» в XIX веке. Изначально выход игры на платформах Windows, PlayStation 4, PlayStation 5, Xbox One и Xbox Series X/S был запланирован на 2021 год, но в январе 2021 года разработчики объявили о переносе даты выхода на 2022 год. 15 декабря разработчики анонсировали дату выхода игры - 10 февраля 2023 года, для консолей текущего поколения и ПК. Релиз игры для консолей прошлого поколения изначально должен был состояться 4 апреля 2023 года, но позднее был перенесён на 5 мая того же года.</p>
            </div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/BtyBjOW8sGY?si=kBVnI2gvwvFM8MUc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    </div>
                )
            })}

            <div className="game-Info_comments">
                <div className="game-Info_comments">
                    <h3>Комментарии</h3>
                    <form className="game-Info_comments_form">
                        <input type="text" placeholder="Оставить комментарий"></input>
                        <input type="submit" placeholder="отправить"></input>
                    </form>
                    <div className="game-Info_comments_list">
                        <div className="game-Info_comments_list_item">
                            <div className="game-Info_comments_list_item_userdata">
                                <img className="game-Info_comments_list_item_userdata_img" src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-lamborgini-lamborghini-38.jpg" width="96" alt="Jack"/>
                                <span className="game-Info_comments_list_item_userdata_name">Jack Garry</span>
                            </div>
                            <div className="game-Info_comments_list_item_text">
                                <p className="game-Info_comments_list_item_text_p">
                                    Великолепная игра!!!
                                </p>
                            </div>
                        </div>
                        <div className="game-Info_comments_list_item">
                            <div className="game-Info_comments_list_item_userdata">
                                <img className="game-Info_comments_list_item_userdata_img" src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-lamborgini-lamborghini-38.jpg" width="96" alt="Jack"/>
                                <span className="game-Info_comments_list_item_userdata_name">Jack Garry</span>
                            </div>
                            <div className="game-Info_comments_list_item_text">
                                <p className="game-Info_comments_list_item_text_p">
                                    Великолепная игра!!!
                                </p>
                            </div>
                        </div>
                        <div className="game-Info_comments_list_item">
                            <div className="game-Info_comments_list_item_userdata">
                                <img className="game-Info_comments_list_item_userdata_img" src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-lamborgini-lamborghini-38.jpg" width="96" alt="Jack"/>
                                <span className="game-Info_comments_list_item_userdata_name">Jack Garry</span>
                            </div>
                            <div className="game-Info_comments_list_item_text">
                                <p className="game-Info_comments_list_item_text_p">
                                    Великолепная игра!!!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}