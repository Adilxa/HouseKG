import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import css from '../cardsCreate/CardsCreate.module.css'
export default function CardsCreate() {
    const [state, setState] = useState('')
    const [desc, setdescription] = useState('')
    const [price, setPrice] = useState('')
    const submit = (e) => {
        e.preventDefault();
        fetch('https://625eaacd873d6798e2abb689.mockapi.io/house',{
            method:'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name:state,
                description:desc,
                price:price
            }),
        })
        }
        
    
    const handleEmail = (e) => {
        setState(e.target.value)
    }
    const desciption = (e) => {
        setdescription(e.target.value)
    }
    const $price = (e) => {
        setPrice(e.target.value)
    }

    return (
        <div className="container" onSubmit={submit}>
            <form className={css.wrapper}>
                <h1 className={css.center}>Создать Объявления</h1>
                <div className={css.name}>
                    <h4>Name</h4>
                    <input

                        value={state}
                        onChange={handleEmail}
                        type="text"

                    />
                </div>
                <div className={css.description}>
                    <div className={css.count}>
                        <h4>Description</h4>
                    </div>

                    <p>The description will be included on the item's detail page underneath its image.</p>
                    <input
                        value={desc}
                        onChange={desciption}
                        type="text"

                    />
                </div>
                <div className={css.price}>
                    <h4>Цена</h4>
                    <p>This link will be hidden from public.</p>
                    <input
                        value={price}
                        onChange={$price}
                        type="text"
                    />
                </div>
                <div className={css.btns}>
                    <Link to='/'>Закрыть</Link>
                    <button type='submit' className='btn'>Сохранить</button>
                </div>
            </form>
        </div>

    )
}
