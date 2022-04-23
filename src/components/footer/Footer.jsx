import React from 'react'
import css from './Footer.module.css'
export default function Footer() {
  return (
    <footer className={css.footer}>
        <div className="contactUs">
            <h2>Contacts</h2>
            <h3>Want To know more or just chat? <br />
            You Are Welcome!</h3>
        </div>
        <div className={css.socialMedia}>
            <img src="https://cdn2.iconfinder.com/data/icons/free-social-media-16/24/Telegram-128.png" alt="" />
            <img src="https://cdn4.iconfinder.com/data/icons/socialcones/508/Instagram-128.png" alt="" />
            <img src="https://cdn1.iconfinder.com/data/icons/100-basic-for-user-interface/32/37-mail-128.png" alt="" />
        </div>
        <h6>©CopyRight</h6>
    </footer>
  )
}
