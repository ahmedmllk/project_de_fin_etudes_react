import React from 'react'
import {BsFillPersonFill,BsHandbag,BsArrowThroughHeartFill} from 'react-icons/bs'
import logo from './images/TicToc.png'
import { IconContext } from 'react-icons'
import { useNavigate } from 'react-router-dom'
const Navbar = ({setnavigation,navigation}) => {
  const navigate=useNavigate()
  return (
    <div className='Navbar'>
      <nav>
        <img onClick={()=>navigate('/')} src={logo} alt="" className={navigation===1||navigation===2||navigation===3?'black':''}/>
        <ul>
          <li onClick={()=>setnavigation(0)}  className={navigation===1||navigation===2||navigation===3?'black':''}>Home</li>
          <li onClick={()=>setnavigation(1)} className={navigation===1||navigation===2||navigation===3?'black':''}>Buy</li>
          <li  onClick={()=>setnavigation(2)} className={navigation===1||navigation===2||navigation===3?'black':''}>Sell</li>
        </ul>
        <div className='icons'>
          <IconContext.Provider value={navigation===1||navigation===2||navigation===3?{size:'2rem',color:'black'}:{size:'2rem',color:'white'}}>
            <BsArrowThroughHeartFill className='icono'/>
            <BsFillPersonFill/>
            <BsHandbag className='orange' onClick={()=>setnavigation(3)}/>
          </IconContext.Provider>
        </div>
        
      </nav>
      
    </div>
  )
}

export default Navbar
