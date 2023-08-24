import React, { useState } from 'react'
import './shoppingcart.css'
import { useSelector } from 'react-redux'
import Column from './Column'
const ShoppingCart = ({setnavigation}) => {
  let array=useSelector(state=>state.counter.value)
  const [subtotal, setsubtotal] = useState(0)
  
  return (
    <div className='shopping'>
      <h1>Shopping Cart</h1>
      <div className='busculator'>
        <div className='ColumnContainer'>
          {array.map(el=><Column el={el} subtotal={subtotal} setsubtotal={setsubtotal}/>)}
        </div>
        <div className='confirmation'>
          <h3>Order summery</h3>
          <div className='discount'>
            <input type="text" placeholder='Place Discount Code' />
            <button>Apply</button>
          </div>
          <div className='tra'>
            <h4>sub total:</h4>
            <h5>{subtotal}$</h5>
          </div>
          <div className='tra'>
            <h4>delivery fee:</h4>
            <h5>5.00$</h5>
          </div>
          <div className='tra'>
            <h3>Total</h3>
            <h6>{subtotal+5}$</h6>
          </div>
          <button className='checkout' onClick={()=>setnavigation(0)}>Checkout Now</button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
