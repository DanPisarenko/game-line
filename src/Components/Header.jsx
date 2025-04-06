import { Link } from "react-router-dom"
import '../App.css'
export default function Header() {

  let auth = localStorage.getItem('isAuthClient')
  let email = localStorage.getItem('email_client')
  console.log(auth)

    return(
        <div className='header'>
        <Link to="/"><h2>Game-Line</h2></Link>
          <div className='header_nav'>
            <Link className="header_nav_a" to="/games">игры</Link>
            <Link className="header_nav_a" to="/rewiew">обзоры и новости</Link>
            <Link className="header_nav_a" to="/helper-line">Helper-line</Link>
            <Link className="header_nav_a" to="/lr-rewiew">рецензии</Link>
            <Link className="header_nav_a" to="/about">о нас</Link>
            {!auth && <Link className="header-nav_a" to="/auth/">Войти</Link>}
            {auth && <Link  to={`/user/${email}`} className="header-nav_a" >Профиль</Link>}
          </div>       
       </div>
    )
}