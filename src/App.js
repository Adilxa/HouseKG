
import './App.css';
import Header from './components/header/Header';
import Card from './components/cards/Card'
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
function App() {
  return (

    <div className="App">
    <Header/>
    <h1 className='hhh'>Последние объявления</h1>
    <div className='container'>
    <div className='flex-container'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
   
    </div>
    <h1 className='hhh'>О Нас</h1>
    <AboutUs/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
