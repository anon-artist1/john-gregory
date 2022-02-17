import React from 'react'
import './Footer.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    </div>
                    <div>
                        <p>Cross Plains, TN</p>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> 415-715-4676 </h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> gregory2500@gmail.com </h4>
                    </div>
                </div>

                <div className='right'>
                    <h4>About Me</h4>
                    <p>The subject matter of my paintings and drawings are often represented by middle class objects from my past, fragmented vertigo images, skewed diagonals and agitated environments and objects.   I find industrial environments and deteriorating automobiles to have a disguised beauty and I continue to find great interest in uncovering their details.  I often use inviting, vibrant colors to represent images and  then place them in imagined pseudo-industrial landscapes and environments.  By marrying the automobiles with my created spaces, I seek to have viewers re-evaluate what they define as beautiful.  My jewelry design incorporates these same concepts to create three-dimensional objects through all available metalsmithing techniques.</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                        <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                        <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Footer