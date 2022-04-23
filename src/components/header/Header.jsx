import React from 'react'
import css from './Header.module.css'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        
        <header className={css.header}>
            <div className="container">
                <div className={css.header_position}>
                    <div className="logo">
                        <img style={{width:'80px'}} src="https://cdn-icons.flaticon.com/png/128/48/premium/48781.png?token=exp=1649879807~hmac=d0df3b01ebee4401a3432e54543bec90" alt="" />
                    </div>
                    <div className={css.btns}>
                        <Link to='/'>Главная</Link>
                        <Link to='/#aboutus'>О нас</Link>
                        <Link to='/'>Контакты </Link>
                        <Link to='/login'>Войти</Link>
                    </div>
                </div>
            </div>
        </header>

    )
}
