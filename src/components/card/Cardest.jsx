

import { React, useState } from 'react'
import './Cardest.css'
import {TbShoppingBag} from 'react-icons/tb'
import {AiFillHeart} from 'react-icons/ai'
import { IconContext } from 'react-icons'
const Cardest = ({el}) => {
  const [colorr, setcolorr] = useState('')
  return (
    <div className='card'>
      <div className='card_top'>
        <div className='iconr'  onClick={()=>colorr===''?setcolorr('red'):setcolorr('')}>
        <IconContext.Provider value={{size:'2rem',color:colorr}}>
          <AiFillHeart />
        </IconContext.Provider> 
        </div>
        
        <img src={el.image} className='watch' />
      </div>
      <div className='card_bot'>
      <h1>{el.brand}</h1>
      <h4>{el.name}</h4>
      <div className='fin'>
        <h2>{el.price}$</h2>
       <IconContext.Provider value={{size:'2rem',color:'gray'}}>
        <TbShoppingBag className='iconito'/>
       </IconContext.Provider>
      </div>
      
      
      </div>
    </div>
  )
}

export default Cardest
