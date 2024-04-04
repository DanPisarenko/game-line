import { Link } from "react-router-dom"
import '../App.css'
export default function Header() {

    return(
        <div className='header'>
        <Link to="/"><h2>Game-Line</h2></Link>
          <div className='header_nav'>
            <Link className="header_nav_a" to="/games">игры</Link>
            <Link className="header_nav_a" to="/rewiew">обзоры и новости</Link>
            <Link className="header_nav_a" to="/helper-line">Helper-line</Link>
            <a className="header_nav_a" href="#" onClick={() => alert('Пока разрабатывается')}>рецензии</a>
            <a className="header_nav_a" href="#" onClick={() => alert('Пока разрабатывается')}>форум</a>
            <Link className="header_nav_a" to="/about">о нас</Link>
          </div>       
       </div>
    )
}