import '../App.css'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router'
import axios from 'axios';
export default function HelperLinePage(){

    
    const {id} = useParams()
    const [game, setGame] = useState([])
    const [answer, setAnswer] = useState([])
    const [idAnswer, setIdAnswer] = useState('')
    const [Answer_done, setAnswer_done] = useState(0)

    const [data, setData] = useState({
        id_user:  '',
        id_quest:  '',
        answer:  ''
    })


    function submit(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/api/qa_answer', {
            id_user: 2,
            id_quest: id,
            answer: data.answer,
        }).then(res => {
            console.log(res.data)
        })

    }
    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    useEffect(() => {
        if ( id ) {
            axios.get(`http://localhost:8080/api/qa/${id}`)
                .then(res => {
                    console.log(res.data.rows)
                    setGame(res.data.rows)
                    setIdAnswer(res.data.rows[0].id)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);
    useEffect(() => {
        if ( idAnswer ) {
            axios.get(`http://localhost:8080/api/qa/answer/${idAnswer}`)
                .then(res => {
                    console.log(res.data.rows)
                    setAnswer_done(res.data.rows[0].id)
                    setAnswer(res.data.rows)
                    setAnswer_done(true)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ idAnswer ]);

    return(
        <div className="helper_line_page">
            {game.map((e) => {
                return(
                <div className='helper_line_page_quest'>
                    <h4 className="helper_line__best_qa_item_theme">Автор: John1337</h4>
                    <h4 className="helper_line__best_qa_item_theme">{e.theme}</h4>
                    <h3 className="helper_line__best_qa_item_title">{e.question}</h3>
                </div>                  
                )
            })}
            <div className='helper_line_page_quest_answers'>
                <h2 className='helper_line_page_quest_answers_title'>Ответы</h2>
                <div className='helper_line_page_quest_answers_list'>
                    {answer.map((e) => {

                        return(
                            <div className='helper_line_page_quest_answers_item'>
                            <h4 className="helper_line__best_qa_item_theme">Автор: Alex98</h4>
                            <p className="helper_line__best_qa_item_title">{e.answer}</p>
                        </div>
                        )
                    
                    })}
                    <div className='helper_line_page_quest_giveanswer'>
                        <h3>Оставить ответ</h3>
                        <form className='form_helper_line' onSubmit={(e) => submit(e)}>
                            <input className='form_input_comment' type='text' name="answer" placeholder='Оставить ответ на вопрос' onChange={(e)=>handle(e)} value={data.answer} id='answer'></input>
                            <button className='form_input_submit'>Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}