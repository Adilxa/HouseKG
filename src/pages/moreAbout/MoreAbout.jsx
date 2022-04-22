import React from 'react'
import { Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import css from '../moreAbout/moreAbout.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
export default function MoreAbout() {
  //here
  const {id} = useParams();
  const [house,setHouse] = useState(null)
  useEffect(()=>{
    fetch('https://625eaacd873d6798e2abb689.mockapi.io/house/'+id)
    .then((res)=>res.json())
    .then((data)=>{
      setHouse(data)
      console.log(data)
    })
  },[id]);
  
  //
  if(house===null){
    return <div className={css.gif}><img style={{width:'150px'}} src='https://cignal.tv/load/Content/loading.gif' alt='#' / ></div> 
  }
  return (
    <div className="container">
      
    <div className={css.wrapper}>
      <div className={css.img}>
        <img src={house.image} alt="" />
      </div>
      <div className={css.description}>
          <h1>{house.name}</h1>
          <h1>{house.price}$</h1>
          <p>{house.description}</p>
      </div>
     
    </div>
    <div className={css.btn}>
    <Link to='/'>{house.phoneNumber}</Link>
    </div>
    </div>
  )
}
