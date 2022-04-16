import React from 'react'
import { Link } from 'react-router-dom'
import css from '../moreAbout/moreAbout.module.css'
export default function moreAbout() {
  return (
    <div className="container">
    <div className={css.wrapper}>
      <div className={css.img}>
        <img src="https://www.thoughtco.com/thmb/aH8Dp8tXYaevj8LPZ0XxTMi2xQ4=/2124x1412/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1280744491-2fc441d7de104e90ad4ba9fcc876951a.jpg " alt="" />
      </div>
      <div className={css.description}>
          <h1>Продаю Дом 5км в Нарыне</h1>
          <h1>Цена 5000$</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae amet vel unde sunt omnis pariatur corporis dignissimos eius aut fugiat?</p>
      </div>
      
    </div>
    <div className={css.btn}>
    <Link to='/'>Позвонить</Link>
    </div>
    </div>
  )
}
