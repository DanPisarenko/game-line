import axios from "axios"
import React, { useState } from "react"
import { useParams } from "react-router";
import './pages.css'


export default function UserPage(){
    let {id} = useParams()
    const [data, setData] = useState([]);
    React.useEffect(() => {
        if ( id ) {
            axios.get(`http://localhost:8080/api/user/1`)
                .then(res => {
                    console.log(res.data.rows)
                    setData(res.data.rows)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ id ]);
    return(
        <div className="userpage">
            {data.map((e)=>{
                return(
                    <div className="userpage_wrapper">
                        <div className="userpage_wrapper_usercard">
                            <img className="userpage_wrapper_usercard_img" src={e.image} alt={e.username} width='300'/>
                            <h2>{e.username}</h2>
                            <a href={`mailto:${e.email}`}>{e.email}</a>
                        </div>
                        <div className="userpage_wrapper_info">
                            <div className="userpage_wrapper_info_pc">
                                <h2>Информация об ПК:</h2>
                                <p>CPU: {e.cpu_user}</p>
                                <p>ОЗУ: {e.ram_user /  1024} ГБ</p>
                                <p>Видеокарта: {e.videocard_user}</p>
                                <p>ОС: {e.windows_user} {e.macos_user}</p>
                            </div>
                            <div className="userpage_wrapper_info_favorite">
                                <h2>Избранное</h2>
                                <div className="userpage_wrapper_info_favorite_list">
                                    <p>Atomic Heart</p>
                                    <p>Hugo Retro Mania</p>
                                </div>
                            </div>
                        </div>
            
                    </div>
                )
            })}
        </div>
    )
}