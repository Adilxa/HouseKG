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
            <img src="https://cdn-icons.flaticon.com/png/128/717/premium/717392.png?token=exp=1649936265~hmac=b3bca96fc86a020dea3707c19868df62" alt="" />
            <img src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536705.png?token=exp=1649936365~hmac=18eaaeeddcd3843d980f96cb3d3015f2" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/128/2165/2165061.png" alt="" />
        </div>
        <h6>©CopyRight</h6>
    </footer>
  )
}
