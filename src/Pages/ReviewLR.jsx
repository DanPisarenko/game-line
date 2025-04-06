import { useParams } from "react-router";
import "../gameInfo.css"


import React from "react";


import axios from "axios";
export default function ReviewLR(){

    let [longRead, setLongRead] = React.useState([])
    let [isLoaded, setIsLoaded] = React.useState(false)

    let {id} = useParams()

    React.useEffect(() => {
        axios.get(`http://localhost:8080/api/lnread/${id}`)
            .then(res => {
                console.log(res.data.rows)
                setLongRead(res.data.rows)
                setIsLoaded(true)
            })
            .catch(err => {
                console.log(err)
            })
    
}, []);

    return(
        <div className="ln_read">
       {longRead.map((e) => {
        return(
            <div className="ln_read_wrapper">
                <div className="title_block">
                    <img src={e.image} alt={`Header Image of ${e.title}`} className="img_review_lr"/>
                    <div className="title_lnread">
                        <h2 className="title_lnread_h2">{e.title}</h2>
                        <h2 className="title_lnread_h3">Автор: {e.username}</h2>
                    </div>
                </div>
                <p className="ln_read_text">{e.text}</p>

                <div className="ln_read_rating">
                    <p>Рейтинг: {e.rating}/5</p>
                </div>
            </div>
        )
       })

       }
        </div>
    )
}