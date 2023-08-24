import React, { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Buy from './BuyInterphase/Buy'
import Seller from './SellerInterphase/Seller'
import Footer from './footer/Footer'
import ShoppingCart from './ShoppingBag/ShoppingCart'

const Shopp = ({}) => {
  const [navigation, setnavigation] = useState(0)
  return (
    <div>
      <Navbar setnavigation={setnavigation} navigation={navigation}/>
      {navigation===0?<Home setnavigation={setnavigation}/>:navigation===1?<Buy/>:navigation===2?<Seller/>:<ShoppingCart setnavigation={setnavigation}/>}
      <Footer/>
    </div>
  )
}

export default Shopp
