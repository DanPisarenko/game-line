import { Link } from "react-router-dom";
import "../App.css"
import React from "react";
import axios from "axios";
import userIcon from "../assets/unk_user.png"

import { useState } from "react";


export default function Auth(){

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  function submit(e) {
    try{
    e.preventDefault();
    axios.post('http://localhost:8080/api/user', {
        login: email,
        password: password
    }).then(res => {
      if(res.data === 'AUTH'){
              localStorage.setItem('email_client', email);
              localStorage.setItem('isAuthClient', true)
              window.location.href=`/user/${email}`;
              console.log('reboot is compl')   
      }else{
        alert('Неверный логин или пароль')
      }
    })
  }catch(err){
        console.log('ошибка загрузки в базу\n', err)
        alert('ошибка загрузки данных')
    }
  
  }

    return(
        <div className="auth">
            <div className="auth_wrapper">
                <form className="auth_form" onSubmit={submit}>
                <h2>Войти в Game-Line</h2>

                    <input className="input_on" type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Эл. почта"></input>
                    <input className="input_on" type="password" onChange={(e) => setPassword(e.target.value)}  name="password" placeholder="Пароль"></input>
                    <button className="btn_on">Войти</button>
                </form>
                <div className="auth_links">
                    <p style={{marginRight: "12px"}}>Нет аккаунта? </p><Link to='/auth/register'>Создай аккаунт!</Link>
                </div>
                <div className="auth_links">
                    <p style={{marginRight: "12px"}}>Я не помню пароль? </p><Link to='/auth'>Попробуй восстановить!</Link>
                </div>
            </div>

        </div>
    )
}


export function AuthRegister(){

    const [img1, SetImg1] = useState(`${userIcon}`)

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    axios.post('http://localhost:8080/api/user-reg', {
        username: userName,
        email: email,
        image: img1,
        password: password
    }).then(res => {
              localStorage.setItem('email_client', email);
              localStorage.setItem('isAuthClient', true)
              window.location.href=`/user/${email}`;
              console.log('reboot is compl')   
        // alert('Неверный логин или пароль')
      
    })
  }catch(err){
        console.log('ошибка загрузки в базу\n', err)
        alert('ошибка загрузки данных')
    }
}

    return(
        <div className="auth">
            <div className="auth_wrapper">
                <form className="auth_form" onSubmit={submit}>
                <h2>Регистрация в Game-Line</h2>

                    <input className="input_on" type="text" onChange={(e) => setUserName(e.target.value)} name="nickname_gameline" placeholder="Придумайте ник" required="required"></input>
                    <input className="input_on" type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Эл. почта" required="required"></input>
                    <input className="input_on" type="password" onChange={(e) => setPassword(e.target.value)}  name="password" placeholder="Пароль" required="required"></input>
                    <div className="choose_img">
                    <input className="input_on" type="file" name="name_review" required="required" accept=".jpg,.jpeg,.png,.webp" onChange={(e)=>loadFile1(e.target.files[0])}/>
                        <img src={img1} className="user_icon_reg" alt="user icon" width={64}/>
                    </div>
                    <button className="btn_on">Зарегистрироваться</button>
                </form>
                <div className="auth_links">
                    <p style={{marginRight: "12px"}}>Есть аккаунт? </p><Link to='/auth'>Войти в аккаунт!</Link>
                </div>
                <div className="auth_links">
                    <p style={{marginRight: "12px"}}>Я не помню пароль? </p><Link to='/auth'>Попробуй восстановить!</Link>
                </div>
            </div>

        </div>
    )
}



