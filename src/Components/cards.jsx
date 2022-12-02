import React from 'react'

export default function Cards({name,img,p}) {
  return (
    <center>
    <div className='movie_card'>
     <img src={img} alt=''/> 
    <h1>{name}</h1>
    <p>{p}</p>
    <button className="btn btn-warning" style={{width:"90px"}}>Play 🎬</button>
    </div>
    </center>
  )
}
