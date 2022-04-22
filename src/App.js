import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Main} from '../src/pages/main/Main'
import SignIn from '.././src/pages/login/SignIn'
import CardsCreate from '../src/pages/cardsCreate/CardsCreate'
import MoreAbout from './pages/moreAbout/MoreAbout';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/SignIn' element={<CardsCreate/>}/>
          <Route path='/card/:id' element={<MoreAbout/>}/>
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </div>
      
    </BrowserRouter>
  

  );
}

export default App;
