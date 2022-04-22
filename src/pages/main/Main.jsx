import Card from '../../components/cards/Card'
import AboutUs from '../../components/aboutUs/AboutUs'
import Footer from '../..//components/footer/Footer'
import { useState, useEffect } from 'react'


export const Main = () => {
  const [houses, setHouses] = useState([])
  useEffect(() => {
    fetch('https://625eaacd873d6798e2abb689.mockapi.io/house')
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setHouses(data)
    })
  }, []);

  return (
    <>
      <h1 className='hhh'>Последние объявления</h1>
      <div className='container'>
        <div className='flex-container'>
          {
            houses.map((item) => <Card 
            id={item.id}
            description={item.description}
            image={item.image}
            price={item.price}
            name={item.name}
            />)
          }
        </div>
        <h1 className='hhh'>О Нас</h1>
        <AboutUs id='aboutus' />
      </div>
      <Footer />
    </>

  )
}