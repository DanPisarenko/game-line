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
            <div className="helper_line__best_qa">
            {quests.map((e) => {
                return(
                <div className="helper_line__best_qa_item" key={e.id} onClick={() => window.location.href=`/helper-line/${e.id}`}>
                    <h4 className="helper_line__best_qa_item_theme">{e.theme}</h4>
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