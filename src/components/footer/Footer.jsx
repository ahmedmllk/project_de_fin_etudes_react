import React from 'react'
import './Footer.css'
import tissot from '../images/logos/tissotLogo.png'
import omega from '../images/logos/omegaLogo.png'
import rolex from '../images/logos/Rolex.png'
import alange from '../images/logos/a.lange.png'
import logo from '../images/TicToc.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Footer = () => {
  return (
    <div>
       <div className='footer'>
            <div className='sth'>
                 <div className='pic_container'>
                    <img src={tissot} alt="" className='pic'/>
                    <img src={omega} alt="" className='pic'/>
                    <img src={rolex} alt="" className='pic'/>
                    <img src={alange} alt="" className='pic'/>
                </div>
            </div>
           <div className='actfooter'>
                <div>
                    <img src={logo} alt="" />
                    <p>Discover the assortment of <br /> exquisite, high-quality <br /> timepieces.</p>
                </div>
                <div>
                    <h1>Quick Link</h1>
                    <ul>
                        <li>ABOUT US</li>
                        <li>COLLECTION</li>
                        <li>OUR TEAM</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
                <div>
                    <h1>Support</h1>
                    <ul>
                        <li>TERM & CONDITIONS</li>
                        <li>PRIVACY POLICY</li>
                        <li>Q&A's</li>
                        <li>SHOPPING DETIALS</li>
                    </ul>
                </div>
                <div>
                    <h1>FOR MORE INFORMATION</h1>
                    <div className='search'>
                        <input type="search" placeholder='search'/>
                        <div className='border'><AiOutlineArrowRight className='arrow'/></div>
                        
                    </div>
                    
                </div>
           </div>

        </div>
    </div>
  )
}

export default Footer
