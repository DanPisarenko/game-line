import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Games from './Pages/Games';
import Main from './Pages/Main';
import Footer from './Components/Footer';
import GameInfo from './Pages/GameInfo';
import Review from './Pages/Review';
import Reviews from './Pages/Reviews';
import Header from './Components/Header';
import About from './Pages/About';
function App() {
  return (
    <div className="App">
    <Header/>
     <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/games/1' element={<GameInfo/>}/>
        <Route path='/rewiew' element={<Reviews/>}/>
        <Route path='/review/1' element={<Review/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/lr-rewiew/' element={<Games/>}/> */}
        {/* <Route path='/lr-rewiew/:id' element={<Games/>}/> */}
        <Route path='*' element={<h2>Страница не найдена</h2>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
