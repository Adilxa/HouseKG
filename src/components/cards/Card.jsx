import React from 'react'
import { Link} from 'react-router-dom';
import css from './Card.module.css'


const Card = (props) => {
    return (
        <div className={css.card}>
            <div className={css.card_img}>
                <img src={props.image} alt="#" />
            </div>
            <div className={css.description}>
                <h4>{props.name}</h4>
                <h4>{props.price}$</h4>
                <Link to={'/card/' + props.id}>Подробнее</Link>
            </div>
        </div>
    )
}



export default Card;