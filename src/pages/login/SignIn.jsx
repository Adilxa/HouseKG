import React from 'react'
import { Link} from 'react-router-dom'
import css from '../login/SignIn.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Sign() {
    
    const[state,setState] = useState('')
    const[statePassword,setPassword] = useState('')
    const[error,setError] = useState(false)
    const navigate = useNavigate()

    const submit = (e) =>{
        e.preventDefault();
        if(state&&statePassword==='admin'){
            navigate('/SignIn')
        }else{
            setError(true)
        }
    }
    const handleEmail = (e) =>{
        setState(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

  return (
    

      <div className="container">
          <form onSubmit={submit}
          action="">
    <div className="wrapper">
        
        <h1 style={{textAlign:'center'}}>Sign in</h1>
        <div className={css.login}>
            <h4>Login</h4>
        <input 
        value={state}
        onChange={handleEmail}
        type="text" 
        className={css.inputs}
        />
        </div>
        <div className="password">
            <h4>Password</h4>
        <input 
        type="password"
        value={statePassword}
        onChange={handlePassword}


         className={css.inputs}
         />
             {
                error?<div style={{color:'red'}}>error</div>:''
            }
        <div className={css.btns}>    
            <Link to='/'>Закрыть</Link> 
            <button>Войти</button>
        
        </div>
        </div>
    </div>
    </form>
    </div>

  )
}
