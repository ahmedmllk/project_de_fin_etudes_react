import React, { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Buy from './BuyInterphase/Buy'
import Seller from './SellerInterphase/Seller'

const Shopp = ({}) => {
  const [navigation, setnavigation] = useState(1)
  return (
    <div>
      <Navbar setnavigation={setnavigation} navigation={navigation}/>
      {navigation===0?<Home setnavigation={setnavigation}/>:navigation===1?<Buy/>:<Seller/>}
      
    </div>
  )
}

export default Shopp
