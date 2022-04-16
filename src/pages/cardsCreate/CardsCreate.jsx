import React from 'react'
import { Link } from 'react-router-dom'
import css from '../cardsCreate/CardsCreate.module.css'
export default function cardsCreate() {
    return (
        <div className="container">
            <div className={css.wrapper}>
                <h1 className={css.center}>Создать Объявления</h1>
                <div className={css.name}>
                    <h4>Название</h4>
                    <input type="text" />
                </div>
                <div className={css.description}>
                    <div className={css.count}>
                        <h4>Description</h4>
                        <span>4/200</span>
                    </div>

                    <p>The description will be included on the item's detail page underneath its image.</p>
                    <input type="text" />
                </div>
                <div className={css.price}>
                    <h4>Цена</h4>
                    <p>This link will be hidden from public.</p>
                    <input type="text" />
                </div>
                <div className={css.btns}>
                    <Link to='/'>Закрыть</Link>
                    <Link to="/">Сохранить</Link>
                </div>
            </div>
        </div>

    )
}
