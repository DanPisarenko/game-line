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
import NotFound from './Pages/NotFound';
import UserPage from './Pages/UserPage';
import Auth, { AuthRegister } from './Pages/Auth';
import ReviewsLR from './Pages/ReviewsLR';
import ReviewLR from './Pages/ReviewLR';
import Memes from './Pages/Memes';
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
        <Route path='/user/:id' element={<UserPage/>}/>
        <Route path='/games/:id' element={<GameInfo/>}/>
        <Route path='/rewiew' element={<Reviews/>}/>
        <Route path='/helper-line' element={<HelperLine/>}/>
        <Route path='/helper-line/:id' element={<HelperLinePage/>}/>
        <Route path='/review/:id' element={<Review/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/meme' element={<Memes/>}/>
        <Route path='/lr-rewiew/' element={<ReviewsLR/>}/>
        <Route path='/lr-rewiew/:id' element={<ReviewLR/>}/>
        <Route path='/auth/register' element={<AuthRegister/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
     <Footer/>
    </div>
  );
}

export default App;











// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
