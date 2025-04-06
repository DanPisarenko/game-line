import "../App.css"
import React from "react";
import axios from "axios";
export default function ReviewsLR(){

    const [ArrReview, setArrReview] = React.useState([])

    React.useEffect(() => {
        axios.get(`http://localhost:8080/api/lnread/`)
            .then(res => {
                console.log(res.data.rows)
                setArrReview(res.data.rows)
            })
            .catch(err => {
                console.log(err)
            })
    
}, []);

    return(
        <div className="review_lr">
            <h2 className="helper_line__h2">Рецензии</h2>
            <p className="helper_line__descr">На данной странице можно посмотреть рецензии, написанные пользователями данного портала.</p>
            <h3>Последние рецензии</h3>
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
            {ArrReview.map((e) => {
                return(
                <div className="review_item" key={e.id} onClick={() => window.location.href=`/lr-rewiew/${e.id}`}>
                    <div className="helper_line__best_qa_item_descr">
                        <h4 className="helper_line__best_qa_item_theme"><i>Автор: {e.username}</i></h4>
                        <h3 className="helper_line__best_qa_item_title">{e.title}</h3>
                    </div>
                    <img src={e.image} alt="Long Read Image" className="img_review_lr"/>
                    {/* <div style={{borderBottom: "solid 1px #d71212"}}></div> */}
                </div>
                )
            })}
                {/* <div className="review_item" onClick={() => window.location.href=`/helper-line/1`}>
                    <div className="helper_line__best_qa_item_descr">
                        <h4 className="helper_line__best_qa_item_theme"><i>Автор: Alex2000</i></h4>
                        <h3 className="helper_line__best_qa_item_title">My Winter Car - будет ли сиквел от создателей игры My Summer Car</h3>
                    </div>
                    <img src="https://avatars.mds.yandex.net/i?id=44a619cb7d9947ee026f1d20e513c4c1_l-10246062-images-thumbs&n=13" alt="My Winter Car" className="img_review_lr"/>
                </div> */}
            </div>
        </div>
    )
}

//helper_line__best_qa_item