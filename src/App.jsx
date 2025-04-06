import { Route, Routes } from 'react-router-dom';
import './App.css';
import Games from './Pages/Games';
import Main from './Pages/Main';
import Footer from './Components/Footer';
import GameInfo from './Pages/GameInfo';
import Review, { CreateReview } from './Pages/Review';
import Reviews from './Pages/Reviews';
import Header from './Components/Header';
import About from './Pages/About';
import HelperLine from './Pages/HelperLine';
import HelperLinePage from './Pages/HelperLinePage';
import NotFound from './Pages/NotFound';
import UserPage from './Pages/UserPage';
import Auth, { AuthRegister } from './Pages/Auth';
import ReviewsLR from './Pages/ReviewsLR';
import ReviewLR from './Pages/ReviewLR';
import Memes from './Pages/Memes';
import { SearchByGame } from './Pages/Search';
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
        <Route path='/user/:email' element={<UserPage/>}/>
        <Route path='/games/:id' element={<GameInfo/>}/>
        <Route path='/rewiew' element={<Reviews/>}/>
        <Route path='/helper-line' element={<HelperLine/>}/>
        <Route path='/helper-line/:id' element={<HelperLinePage/>}/>
        <Route path='/review/:id' element={<Review/>}/>
        <Route path='/review-create/' element={<CreateReview/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/meme' element={<Memes/>}/>
        <Route path='/lr-rewiew/' element={<ReviewsLR/>}/>
        <Route path='/lr-rewiew/:id' element={<ReviewLR/>}/>
        <Route path='/auth/register' element={<AuthRegister/>}/>
        <Route path='/search/game/:search_text' element={<SearchByGame/>}/>
        <Route path='/search/game/' element={<SearchByGame/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
     <Footer/>
    </div>
  );
}

export default App;
