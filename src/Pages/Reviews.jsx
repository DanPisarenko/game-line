import "../main.css"
import { useState, useEffect } from "react";
import axios from "axios";
export default function Reviews(){

    let [news, setNews] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/news`)
            .then(res => {
                console.log(res.data.rows)
                setNews(res.data.rows)
            })
            .catch(err => {
                console.log(err)
            })
    
}, []);


    return (
        <div className="main__reviews">
        <h2>Недавние обзоры</h2>
        <div className="main__reviews_search_block">
            {/* <div className="main__reviews_search_block_btns">
                <button className="main__reviews_search_block_btns_item">За сегодня</button>
                <button className="main__reviews_search_block_btns_item">За неделю</button>
                <button className="main__reviews_search_block_btns_item">За месяц</button>
            </div> */}
            <form className="main__reviews_search_block_input">
                <input className="main__reviews_search_block_input_item" type="text" name="gline_search" placeholder="Найти что-то..."/>
                <button className="main__reviews_search_block_btns_item">Поиск</button>
            </form>
        </div>
        <div className="main__reviews_list">
            {news.map((e) => {
                return(
                    <div className="main__reviews_list_item" key={e.id}  onClick={() => window.location.href = `/review/${e.id}`}>
                        <img className="main__reviews_list_item-img" src={e.image} alt={e.title} width="320"/>
                        <div className="main__reviews_list_item-div">
                            <h3>{e.title}</h3>
                            <p>{(e.text).slice(0, 120)}...</p>
                        </div>
                    </div>
                )
            })}
            
        </div>
</div>
    )

}


    //   let base = [
    //     {
    //         'id': 1,
    //         'title': 'Ивестна дата Выхода GTA 6',
    //         'img': "https://img.championat.com/s/1350x900/news/big/k/w/vinovnyj-v-slive-gta-6-podrostok-vernyotsya-k-prestupnoj-deyatelnosti-posle-tyurmy_17021145301803332017.jpg",
    //         'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    //     },
    //     {
    //         'id': 1,
    //         'title': 'Ивестна дата Выхода GTA 6',
    //         'img': "https://img.championat.com/s/1350x900/news/big/k/w/vinovnyj-v-slive-gta-6-podrostok-vernyotsya-k-prestupnoj-deyatelnosti-posle-tyurmy_17021145301803332017.jpg",
    //         'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    //     },
    //     {
    //         'id': 1,
    //         'title': 'Ивестна дата Выхода GTA 6',
    //         'img': "https://img.championat.com/s/1350x900/news/big/k/w/vinovnyj-v-slive-gta-6-podrostok-vernyotsya-k-prestupnoj-deyatelnosti-posle-tyurmy_17021145301803332017.jpg",
    //         'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    //     },
    //     {
    //         'id': 1,
    //         'title': 'Ивестна дата Выхода GTA 6',
    //         'img': "https://img.championat.com/s/1350x900/news/big/k/w/vinovnyj-v-slive-gta-6-podrostok-vernyotsya-k-prestupnoj-deyatelnosti-posle-tyurmy_17021145301803332017.jpg",
    //         'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    //     },
    //     {
    //         'id': 1,
    //         'title': 'Ивестна дата Выхода GTA 6',
    //         'img': "https://img.championat.com/s/1350x900/news/big/k/w/vinovnyj-v-slive-gta-6-podrostok-vernyotsya-k-prestupnoj-deyatelnosti-posle-tyurmy_17021145301803332017.jpg",
    //         'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    //     },
    //     {
    //         'id': 1,
    //         'title': 'Ивестна дата Выхода GTA 6',
    //         'img': "https://img.championat.com/s/1350x900/news/big/k/w/vinovnyj-v-slive-gta-6-podrostok-vernyotsya-k-prestupnoj-deyatelnosti-posle-tyurmy_17021145301803332017.jpg",
    //         'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    //     },
    //     {
    //         'id': 1,
    //         'title': 'Ивестна дата Выхода GTA 6',
    //         'img': "https://img.championat.com/s/1350x900/news/big/k/w/vinovnyj-v-slive-gta-6-podrostok-vernyotsya-k-prestupnoj-deyatelnosti-posle-tyurmy_17021145301803332017.jpg",
    //         'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    //     },
    //     {
    //         'id': 1,
    //         'title': 'Ивестна дата Выхода GTA 6',
    //         'img': "https://img.championat.com/s/1350x900/news/big/k/w/vinovnyj-v-slive-gta-6-podrostok-vernyotsya-k-prestupnoj-deyatelnosti-posle-tyurmy_17021145301803332017.jpg",
    //         'short_descr': 'Rockstar Games выпустил трейлер долгождающей игры GTA 6, в данном трейлере была написана дата выхода...',
    //     },
    
    // ]