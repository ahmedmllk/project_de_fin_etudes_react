import React, { useState } from 'react'
import './Seller.css'
import AddModal from './AddModal'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
const Seller = () => {
    const [show, setshow] = useState(false)
    const [empty, setempty] = useState(true)
    let array=useSelector(state=>state.product.products)
  return (
    <div className='Seller'>
      <div className='nth'>
        {empty?<h1>Your Repository is empty</h1>:array.map(el=> <div className='listtt'><Card el={el}/> </div>)}
      </div>
      <button onClick={()=>setshow(true)} className='add'>ADD NEW PRODUCT</button>
      {show?<AddModal   setempty={setempty} setshow={setshow}/>:null}
    </div>
   
  )
}

export default Seller
