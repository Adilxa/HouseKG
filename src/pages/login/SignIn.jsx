import React from 'react'
import { Link} from 'react-router-dom'
import css from '../login/SignIn.module.css'
export default function Sign() {
  return (
      <div className="container">
    <div className="wrapper">
        
        <h1 style={{textAlign:'center'}}>Sign in</h1>
        <div className={css.login}>
            <h4>Login</h4>
        <input type="text" className={css.inputs}/>
        </div>
        <div className="password">
            <h4>Password</h4>
        <input type="password" className={css.inputs}/>
        <div className={css.btns}>    
            <Link to='/'>Закрыть</Link> 
            <Link className={css.enter} to="/SignIn">Войти</Link>
        </div>
        </div>
    </div>
    </div>

  )
}
