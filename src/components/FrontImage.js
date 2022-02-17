import React from 'react'
import {Link} from 'react-router-dom'
import './FrontImage.css'

import frontImage from '../assets/images/Gazing Citroen, Painting.jpg'

const FrontImage = () => {
    return (
        <div className='hero'>
            <img src={frontImage} id='front-image' />
            <div className='content'>
                    <h1> John Gregory </h1>
                    <p>Urban scenes and working class automobiles</p>
                <div>
                    <Link to='/portfolio' className='btn'>Portfolio</Link>
                    <Link to='/contact' className='btn btn-link'>Contact</Link> 
                </div> 
            </div>
        </div>
    )
}

export default FrontImage