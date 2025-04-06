import "../gameInfo.css"
import { useState, useEffect } from "react"
import {useParams} from 'react-router'
import  axios from "axios"
import ModalWindow from "../Components/ModalWindow"
export default function GameInfo() {

    const {id} = useParams()
    const [game, setGame] = useState([])
    const [gamePics, setGamePics] = useState([])
    const [comments, setCommeents] = useState([])
    const id_usr = localStorage.getItem('id_user')

    // const [user, setUser] = useState('');
    // useEffect(() => {
    //         axios.get(`http://localhost:8080/api/user/1`)
    //             .then(res => {
    //                 console.log(res.data.rows)
    //                 setUser(res.data.rows)
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
        
    // });

    const [data, setData] = useState({
        answer:  ''
    })


    function submit(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/api/comment', {
            id_user: id_usr,
            gameid: id,
            answer: data.answer,
        }).then(res => {
            console.log(res.data)
            window.location.reload()
        })

    }
    function handle(e) {
        const newdata={...data}
        newdata[e.target.name] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    useEffect(() => {
        if ( id ) {
            axios.get(`http://localhost:8080/api/game/${id}`)
                .then(res => {
                    // console.log(res.data.rows)
                    setGame(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    });

    useEffect(() => {
        if ( id) {
            axios.get(`http://localhost:8080/api/gamePics/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setGamePics(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id]);

    useEffect(() => {
        if ( id ) {
            axios.get(`http://localhost:8080/api/comment_game/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setCommeents(res.data.rows)
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

    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const openModal = () => {
      setShowModal(true);
    }

    const SetupImage = (img) => {
        setModalImage(img);
      }
  
    const closeModal = () => {
      setShowModal(false);
    }

    return (
        <div className="game-info">
            <ModalWindow show={showModal} linkImg={modalImage} onCloseButtonClick={closeModal} />

            {game.map((e) => {
                return (
                    <div className="game-info_wrapper" key={e.id}>

                                    <div className="game-info_main">
                <div className="game-info_main__left">
                    <h2>{e.name}</h2>
                    <img src={e.image} alt={e.name} width='400'/>
                    <div className="rus_avail">
                        <p><b>STEAM</b>: Недоступно в РФ</p>
                        <p><b>EGS</b>: Недоступно в РФ</p>
                        <p><b>VK Play</b>: Нет в наличии</p>
                        <p><b>Собственный лаунчер</b>: нет</p>
                    </div>
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
                        <button className="main__reviews_search_block_btns_item" onClick={() => alert('игра совместима с минимальными требованиями пк')}>Свертить совместимость</button>
                    </div>
                    <div className="game_pictures">
                    {gamePics.map((e) => {
                    return(
                        <img key={e.id} src={e.img_data} onClick={()=> {
                            SetupImage(e.img_data);
                            openModal()
                        }}  width={128} className="game_picture" alt="aaa"/>
                    )
                    })}
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
<div className="game-Info_awards">
    <h2>Награды</h2>
    <div className="game-Info_awards__items">
        <div className="game-Info_awards__item">
            <h3>The Best game of GameExpo</h3>
            <h4>2002</h4>
            <div className="button" onClick={openModal}>Open Modal</div>
        </div>
        <div className="game-Info_awards__item">
            <h3>The Best quest-game of QuestFest Paris</h3>
            <h4>2003</h4>
        </div>
        <div className="game-Info_awards__item">
            <h3>The Best quest-game of QuestEnter NY</h3>
            <h4>2003</h4>
        </div>
    </div>
</div>
            <div className="game-Info_comments">
                <div className="game-Info_comments">
                    <h3>Комментарии</h3>
                    <form className="form_helper_line" onSubmit={(e) => submit(e)}>
                        <input className="form_input_comment" type="text" name="answer" onChange={(e)=>handle(e)} value={data.answer} placeholder="Оставить комментарий"></input>
                        <input className="form_input_submit" type="submit" placeholder="отправить"></input>
                    </form>
                    <div className="game-Info_comments_list">
                    {comments.map((e) => {
                        return(
                        <div className="game-Info_comments_list_item" key={e.id}>
                            <div className="game-Info_comments_list_item_userdata">
                                <img className="game-Info_comments_list_item_userdata_img" src={e.image} width="96" alt="Jack"/>
                                <span className="game-Info_comments_list_item_userdata_name">{e.username}</span>
                            </div>
                            <div className="game-Info_comments_list_item_text">
                                <p className="game-Info_comments_list_item_text_p">
                                    {e.comment}
                                </p>
                            </div>
                        </div>
                        )})}
                    </div>
                </div>
            </div>
        </div>
    )
}