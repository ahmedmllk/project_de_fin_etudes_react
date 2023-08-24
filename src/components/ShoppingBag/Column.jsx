import React, { useEffect, useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import './shoppingcart.css'
import { IconContext } from 'react-icons'
const Column = ({subtotal,setsubtotal,el}) => {
    const [quantity, setquantity] = useState(1)
    useEffect(() => {
      setsubtotal(subtotal+el.price)
    }, [quantity])
    const [deletee, setdeletee] = useState(false)
  return (
    <div className={deletee?'none':'column'}>
      <img src={el.image} alt="" />
      <h2>{el.name}</h2>
      <h2>{el.price}$</h2>
      <div className='quantity'>
        <button onClick={()=>quantity!==1?setquantity(quantity-1):null}>-</button>
        <input type="text" value={quantity}/>
        <button onClick={()=>setquantity(quantity+1)}>+</button>
      </div>
      <h2>{el.price*quantity}$</h2>
      <AiFillDelete onClick={()=>setdeletee(true)}/>
    </div>
  )
}

export default Column
