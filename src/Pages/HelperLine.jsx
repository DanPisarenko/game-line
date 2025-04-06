import '../App.css'
import { useState, useEffect } from 'react'
import axios  from 'axios';
export default function HelperLine(){

    let [quests, setQuests] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/qa`)
            .then(res => {
                console.log(res.data.rows)
                setQuests(res.data.rows)
            })
            .catch(err => {
                console.log(err)
            })
    
}, []);

    return(
        <div className="helper_line">
            <h2 className="helper_line__h2">Helper-Line - помощь в играх, и не только</h2>
            <p className='helper_line__descr'>
                На этой странице ты можешь посмотреть вопросы и ответы, касающихся тематике игр, либо можешь создать сам вопрос, если не нашелся подходящий вопрос.
            </p>

            <button className="main__reviews_search_block_btns_item">Задать вопрос</button>


            <h3>Последние вопросы</h3>
            <div className="main__reviews_search_block">
            <div className="main__reviews_search_block_btns">
                <button className="main__reviews_search_block_btns_item">За сегодня</button>
                <button className="main__reviews_search_block_btns_item">За неделю</button>
                <button className="main__reviews_search_block_btns_item">За месяц</button>
            </div>
            <form className="main__reviews_search_block_input">
                <input className="main__reviews_search_block_input_item" type="text" name="gline_search" placeholder="Найти что-то..."/>
                <button className="main__reviews_search_block_btns_item">Поиск</button>
            </form>
        </div>
            <div className="helper_line__best_qa">
            {quests.map((e) => {
                return(
                <div className="helper_line__best_qa_item" key={e.id} onClick={() => window.location.href=`/helper-line/${e.id}`}>
                    <h4 className="helper_line__best_qa_item_theme"><i>Категория: {e.theme}</i></h4>
                    <h3 className="helper_line__best_qa_item_title">{e.question}</h3>
                </div>
                )
            })}


                {/* <div className="helper_line__best_qa_item" onClick={() => window.location.href=`/helper-line/1`}>
                    <h4 className="helper_line__best_qa_item_theme">Старые игры</h4>
                    <h3 className="helper_line__best_qa_item_title">Что лучше эмулятор старого ПК или реальный ретро-ПК</h3>
                </div> */}

            </div>
        </div>
    )
}