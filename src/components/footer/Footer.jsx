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
            <img src="https://www.flaticon.com/ru/free-icon/instagram_1077042" alt="" />
            <img src="https://www.flaticon.com/premium-icon/telegram_3536705" alt="" />
            <img src="https://www.flaticon.com/free-icon/gmail-logo_60543" alt="" />
        </div>
        <h6>©CopyRight</h6>
    </footer>
  )
}
