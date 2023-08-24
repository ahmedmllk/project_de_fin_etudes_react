import React from 'react'
import {BsFillPersonFill,BsHandbag,BsFillChatSquareTextFill} from 'react-icons/bs'
import logo from './images/TicToc.png'
import { IconContext } from 'react-icons'
import { useNavigate } from 'react-router-dom'
const Navbar = ({setnavigation,navigation}) => {
  const navigate=useNavigate()
  return (
    <div className='Navbar'>
      <nav>
        <img src={logo} alt="" className={navigation===1?'black':''}/>
        <ul>
          <li onClick={()=>setnavigation(0)}  className={navigation===1?'black':''}>Home</li>
          <li onClick={()=>setnavigation(1)} className={navigation===1?'black':''}>Buy</li>
          <li  onClick={()=>setnavigation(2)} className={navigation===1?'black':''}>Sell</li>
          <li  className={navigation===1?'black':''}>Custom</li>
        </ul>
        <div className='icons'>
          <IconContext.Provider value={navigation===1?{size:'2rem',color:'black'}:{size:'2rem',color:'white'}}>
            <BsFillChatSquareTextFill className='icon'/>
            <BsFillPersonFill className='icon'/>
            <BsHandbag className='icon'/>
          </IconContext.Provider>
        </div>
        
      </nav>
      
    </div>
  )
}

export default Navbar
