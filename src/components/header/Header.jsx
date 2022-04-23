import React from 'react'
import css from './Header.module.css'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        
        <header className={css.header}>
            <div className="container">
                <div className={css.header_position}>
                    <div className="logo">
                        <img style={{width:'80px'}} src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/home-128.png" alt="" />
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
