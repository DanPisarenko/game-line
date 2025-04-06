import React, {useEffect, useState} from "react"
import '../gamesList.css'
import axios from "axios"
import "../main.css"


export default function Games(){

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

const [formSearchGame, setFormSearchGame] = useState({
    gline_search: '',
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormSearchGame(prev => ({
        ...prev,
        [name]: value,
      }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formSearchGame.gline_search);
      window.location.href=`/search/game/${formSearchGame.gline_search}`;   
    };


    return(
        <div className="games">
            <div className="games__list-block">
            <div className="main__reviews_search_block">
            <form className="main__reviews_search_block_input" onSubmit={handleSubmit} >
                <input className="main__reviews_search_block_input_item" type="text" name="gline_search"  value={formSearchGame.gline_search} onChange={handleChange} placeholder="Найти что-то..."/>
                <button className="main__reviews_search_block_btns_item">Поиск</button>
            </form>
        </div>
        <h2 style={{marginLeft: "12px"}}>Каталог игр</h2>
        <div className="main__reviews_list">
                    {games.map((e) =>{
                        return(
                            <div className="games__list-block_list_item" key={e.id} onClick={() => window.location.href=`/games/${e.id}`}>
                            <div className="games__list-block_list_itme_image" style={{backgroundImage: `url(${e.image})`}}>
                         </div>
                            <div className="games__list-block_list_item_info">
                                <h3 className="games__list-block_list_item_info_name">{e.name}</h3>
                                <p className="games__list-block_list_item_info_txt">Жанр: </p>
                                <p className="games__list-block_list_item_info_txt">Год выхода: {(e.year_of_pub).slice(0,4)} год</p>
                                {/* <p className="games__list-block_list_item_info_txt">Год выхода: 2023 год</p> */}
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