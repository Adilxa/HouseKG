import React from 'react'
import { Link } from 'react-router-dom';
import css from './Card.module.css'
class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={css.card}>
                <div className={css.card_img}>
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-174710840-1561055570.jpg" alt="" />
                </div>
                <div className={css.description}>
                    <h4>Продаю Дом в Бишкеке</h4>
                    <h4>55000$</h4>
                    <Link to={'/card/' + this.props.id}>Подробнее</Link>
                </div>
            </div>
        )
    }
}
export default Card;