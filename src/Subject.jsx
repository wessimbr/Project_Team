import React from 'react'
import'./Subject.css'

const Subject = () => {
  return (
    <div>
      <div className='IntroMsg'>
        <h1> Stunning food, Amazing Quaility  </h1>
    <br/>
        <span>
           Let us host your next special occassion
        </span>
        <h2>
        <a href="tel:111-111-111" style={{ textDecoration: 'none', color: 'white' }}>
         <i className='bi bi-telephone-forward-fill'></i>
           <span> Contact US today </span>
           </a>
        </h2>
	</div>
    
    </div>
  )
}

export default Subject
