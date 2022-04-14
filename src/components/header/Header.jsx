import React from 'react'
import css from './Header.module.css'

export default function Header() {
    return (

        <header className={css.header}>
            <div className="container">
                <div className={css.header_position}>
                    <div className="logo">
                        <img style={{width:'80px'}} src="https://cdn-icons.flaticon.com/png/128/48/premium/48781.png?token=exp=1649879807~hmac=d0df3b01ebee4401a3432e54543bec90" alt="" />
                    </div>
                    <div className={css.btns}>
                        <a href="">О нас</a>
                        <a href="">Контакты</a>
                        <a href="">Войти</a>
                    </div>
                </div>
            </div>
        </header>

    )
}
