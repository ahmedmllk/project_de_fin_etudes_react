import React from 'react'
import image from './images/big watch.jpeg'
import { useNavigate } from 'react-router-dom'
import tissot from './images/logos/tissotLogo.png'
import omega from './images/logos/omegaLogo.png'
import rolex from './images/logos/Rolex.png'
import alange from './images/logos/a.lange.png'
const Home = () => {
  const navigate=useNavigate()
  return (
    <div className='home'>
      <div className='starter'>
        <h1>Match Your Style</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button onClick={()=>navigate('/Shop')}>Enter Shop </button>
      </div>
      <img src={image} alt="" />
      <footer>
        <img src={tissot} alt="" className='pic'/>
        <img src={omega} alt="" className='pic'/>
        <img src={rolex} alt="" className='pic'/>
        <img src={alange} alt="" className='pic'/>
      </footer>
    </div>
  )
}

export default Home
