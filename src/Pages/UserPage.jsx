import axios from "axios"
import React, { useState } from "react"
import { useParams } from "react-router";
import './pages.css'
import userIcon from "../assets/unk_user.png"


export default function UserPage(){
    let {email} = useParams()
    // let {id} = useParams()

    

    const [data, setData] = useState([]);
    const [id, setId] = useState('');
    const [isVisible, setVisible] = useState('none');
    React.useEffect(() => {
        if ( email ) {
            axios.get(`http://localhost:8080/api/user_e/${email}`)
                .then(res => {
                    console.log(res.data.rows)
                    console.log(res.data.rows[0].id)
                    setId(res.data.rows[0].id)
                    SetImg1(res.data.rows[0].image)
                    setData(res.data.rows)
                    localStorage.setItem('id_user', (res.data.rows[0].id))
                    // setId(res.data.rows[0].id)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [ email ]);
    // console.log(id)
    console.log(localStorage.getItem('id_user'))

    const [image11, SetImg1] = useState(`${userIcon}`)

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.put(
            `http://127.0.0.1:8080/api/user-upd-pic/${localStorage.getItem('email_client')}`,
            {
              image: image11
            }
          );
          console.log(response)
          window.location.reload()
        } catch (error) {
          setMessage(`Error updating post: ${error.message}`);
        } finally {
        //   setIsUpdating(false);
        }
      };

      function loadFile1(a){
        const file = a;
        let reader = new FileReader();
        const read = reader.readAsDataURL(file)
        reader.onload = function() {
            console.log(reader.result);
            SetImg1(reader.result)
          };
        
        }

    return(
        <div className="userpage">
            {data.map((e)=>{
                return(
                    <div className="userpage_wrapper">
                        <div className="userpage_wrapper_usercard">
                            <img className="userpage_wrapper_usercard_img" src={e.image} alt={e.username} width='300'/>
                            <h2>{e.username}</h2>
                            <div className="userpage_wrapper_usercard_links">
                                <a href={`mailto:${e.email}`}>{e.email}</a>
                                <a href={`mailto:${e.email}`}>Уведомления 📩</a>
                                <a href="t.me">Telegram-Канал</a>
                                <button className="main__reviews_search_block_btns_item" onClick={(e) => {
                                    if(isVisible === "none"){
                                    setVisible("block")
                                    }else{
                                        setVisible("none")
                                    }
                                }}>сменить аватарку</button>
                                <div className="changer_pic" style={{display: isVisible}}>
                                   <form onSubmit={handleSubmit}>
                                   <div className="changer_pic_form">
                    <input className="input_on" type="file" name="name_review" required="required" accept=".jpg,.jpeg,.png,.webp" onChange={(e)=>loadFile1(e.target.files[0])}/>
                        <img src={image11} className="user_icon_reg" alt="user icon" width={64}/>
                        <button className="btn_on">Сменить</button>

                    </div>
                                   </form>
                                </div>
                                <button className="main__reviews_search_block_btns_item" onClick={(e) => {
                                    localStorage.removeItem("isAuthClient")
                                    window.location.href = "/"
                                }}>Выйти</button>
                                <button className="main__reviews_search_block_btns_item" onClick={(e) => {
                                    window.location.href = "/review-create/"
                                }}>Создать Обзор</button>
                            </div>
                            </div>
                        <div className="userpage_wrapper_info">
                            <div className="userpage_wrapper_info_pc">
                                <h2>Информация о ПК:</h2>
                                <p className="userpage_wrapper_info_pc_item"><b className="userpage_wrapper_info_pc_item_charname">CPU: </b> {e.cpu_user}</p>
                                <p className="userpage_wrapper_info_pc_item"><b className="userpage_wrapper_info_pc_item_charname">ОЗУ: </b> {e.ram_user /  1024} ГБ</p>
                                <p className="userpage_wrapper_info_pc_item"><b className="userpage_wrapper_info_pc_item_charname">Видеокарта: </b> {e.videocard_user}</p>
                                <p className="userpage_wrapper_info_pc_item"><b className="userpage_wrapper_info_pc_item_charname">ОС: </b> {e.windows_user} {e.macos_user}</p>
                            </div>
                            <button className="btn_on">
                                Изменить конфигурацию ПК
                            </button>
                            <div className="userpage_wrapper_info_pc">
                                <h2>Информация о Консолях:</h2>
                                <p className="userpage_wrapper_info_pc_item">PlayStation 4 Silm</p>
                                <p className="userpage_wrapper_info_pc_item">PlayStation 3 Silm</p>
                                <p className="userpage_wrapper_info_pc_item">Xbox 360 Silm</p>
                            </div>
                            <div className="userpage_wrapper_info_favorite">
                                <h2>Избранное</h2>
                                <div className="userpage_wrapper_info_favorite_list">
                                    <p className="userpage_wrapper_info_favorite_list_item">Atomic Heart</p>
                                    <p className="userpage_wrapper_info_favorite_list_item">Hugo Retro Mania</p>
                                </div>
                            </div>
                        </div>
            
                    </div>
                )
            })}
        </div>
    )
}