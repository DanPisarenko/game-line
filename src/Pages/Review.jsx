import { useParams } from "react-router";
import "../gameInfo.css"
import React, { useState } from "react";
import axios from "axios";
export default function Review(){

    let [news, setNews] = React.useState([])

    let {id} = useParams()

    React.useEffect(() => {
        axios.get(`http://localhost:8080/api/news/${id}`)
            .then(res => {
                console.log(res.data.rows)
                setNews(res.data.rows)
            })
            .catch(err => {
                console.log(err)
            })
    
}, []);

    return(
        <div className="review">
            {news.map((e) => {
                        return(
            <div className="review__main-img" style={{backgroundImage: `url('${e.image}')`}}>
                <h2 className="review__main-img_h2">{e.title}</h2>
                {/* <img className="main__reviews_list_item-img" src="https://files.vgtimes.ru/gallery/main/153185/cybere1042f1ec68.jpg" alt="Gta6" width="512"/> */}

            </div>
                    )})}

{news.map((e) => {
return(
            <div className="review__main_wrapper">
                <div className="review__main_txtm">
                <div className="review__main_txtm_sets">
                    <h4 className="review__main_txtm_date">Дата: 02/02/2024</h4>
                    <h4 className="review__main_txtm_category">Новость ДНЯ</h4>
                </div>
                <div className="review__main_txtm_descr" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <p className="review__main_txtm_descr_p" style={{width: "800px"}}>
                    {e.text}
                    </p>
                    <a href="#">Ссылка на сайт</a>
                    <a href="#">Ссылка на сайт</a>
                    <h3>Рейтинг: 4.2 из 5</h3>
                    <div className="game-Info_comments">
                    <h3>Комментарии</h3>
                    <form className="game-Info_comments_form">
                        <input className="form_input_comment" type="text" placeholder="Оставить комментарий"></input>
                        <input className="form_input_submit" type="submit" placeholder="отправить"></input>
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
                        {/*  <div className="game-Info_comments_list_item">
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
                        </div> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
)})}
            
        </div>
    )
}

export function CreateReview(){


    const [nameReview, setNameReview] = useState('')
    const [img1, SetImg1] = useState('')
    const [textReview, setTextReview] = useState('')


    function loadFile1(a){
        const file = a;
        let reader = new FileReader();
        const read = reader.readAsDataURL(file)
        reader.onload = function() {
            console.log(reader.result);
            SetImg1(reader.result)
          };
        
        }
        function submit(e) {
            try{
            e.preventDefault();
            alert("STOP")
            axios.post('http://localhost:8080/api/news', {
                namereview: nameReview,
                text: textReview,
                image: img1,
                userid: localStorage.getItem('id_user')
            }).then(res => {
                console.log(res.data)
                    //   console.log('reboot is compl')   

            })
          }catch(err){
                console.log('ошибка загрузки в базу\n', err)
                alert('ошибка загрузки данных')
            }
          
          }

    return(
        <div className="create_rewiew">
            <div className="create_rewiew_info">
                <h3>Создать Обзор</h3>
            </div>
            <form className="create_rewiew_form_item" onSubmit={submit}>
                <input className="input_on" type="text" placeholder="Название Обзора" onChange={(e) => setNameReview(e.target.value)} name="name_review" required="required"/>
                <input className="input_on" type="file" name="name_review" required="required" accept=".jpg,.jpeg,.png,.webp" onChange={(e)=>loadFile1(e.target.files[0])}/>
                <input className="input_on" type="text" placeholder="Текст Обзора" onChange={(e) => setTextReview(e.target.value)} name="text_review" required="required"/>
                <button className="btn_on">Войти</button>

            </form>
        </div>
    )
}