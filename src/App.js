import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Games from './Pages/Games';
import Main from './Pages/Main';
import Footer from './Components/Footer';
import GameInfo from './Pages/GameInfo';
import Review from './Pages/Review';
function App() {
  return (
    <div className="App">
     <div className='header'>
      <Link to="/game-line"><h2>Game-Line</h2></Link>
        <div className='nav'>
          <Link to="/game-line/games">игры</Link>
          <a href="#">рецензии</a>
          <a href="#">форум</a>
          <a href="#">о нас</a>
        </div>       
     </div>
     <Routes>
        <Route path='/game-line' element={<Main/>}/>
        <Route path='/game-line/games' element={<Games/>}/>
        <Route path='/game-line/games/:id' element={<GameInfo/>}/>
        {/* <Route path='/rewiew' element={<Review/>}/> */}
        <Route path='/game-line/review/:id' element={<Review/>}/>
        {/* <Route path='/lr-rewiew/' element={<Games/>}/> */}
        {/* <Route path='/lr-rewiew/:id' element={<Games/>}/> */}
        <Route path='*' element={<h2>Страница не найдена</h2>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
