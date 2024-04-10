import { Route, Routes } from 'react-router-dom';
import './App.css';
import Games from './Pages/Games';
import Main from './Pages/Main';
import Footer from './Components/Footer';
import GameInfo from './Pages/GameInfo';
import Review from './Pages/Review';
import Reviews from './Pages/Reviews';
import Header from './Components/Header';
import About from './Pages/About';
import HelperLine from './Pages/HelperLine';
import HelperLinePage from './Pages/HelperLinePage';
function App() {

  let style_wrapper = {
    minHeight: "calc(100vh - 164px)"
  }

  return (
    <div className="App">
    <Header/>
    <div className='wrapper' style={style_wrapper}>
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/games/:id' element={<GameInfo/>}/>
        <Route path='/rewiew' element={<Reviews/>}/>
        <Route path='/helper-line' element={<HelperLine/>}/>
        <Route path='/helper-line/:id' element={<HelperLinePage/>}/>
        <Route path='/review/:id' element={<Review/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/lr-rewiew/' element={<Games/>}/> */}
        {/* <Route path='/lr-rewiew/:id' element={<Games/>}/> */}
        <Route path='*' element={<h2>Страница не найдена</h2>}/>
    </Routes>
    </div>
     <Footer/>
    </div>
  );
}

export default App;
