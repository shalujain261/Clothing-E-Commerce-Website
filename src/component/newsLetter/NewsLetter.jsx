import './NewsLetter.css'

import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscribe to our newLetter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter