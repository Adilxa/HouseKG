import Card from '../../components/cards/Card'
import AboutUs from '../../components/aboutUs/AboutUs'
import Footer from '../..//components/footer/Footer'
export const Main = () => {
    const arr =[0,1,2,3,4,5,6,7,8,9,10]
    return (
      <>
      <h1 className='hhh'>Последние объявления</h1>
      <div className='container'>
      <div className='flex-container'>
      {
        arr.map((item)=><Card id={item}/>)
      }
      </div>
      <h1 className='hhh'>О Нас</h1>
      <AboutUs/>
      </div>
      <Footer/>
      </>
  
    )
  }