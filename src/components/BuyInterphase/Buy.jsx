import React, { useState } from 'react'
import CardList from './CardestList'
const Shop = () => {
  const [price, setprice] = useState(50)
  const [valeur, setvaleur] = useState(1500)
  return (
    <div className='Buyer'>
      <div className='Filter'>
        <h1>Filter</h1>
        <h2>Brand:</h2>
          <select name="" id="">
            <option>All</option>
            <option>Tissot</option>
            <option>Omega</option>
            <option>Rolex</option>
            <option>A.Lange & Sohne</option>
          </select>
        <h2>Sexe</h2>
          <select name="" id="">
            <option>Mixed</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        <h2>Price:</h2>
        <div className='scale'>
          <h1>300$</h1>
          <input type="range" defaultValue={1500} onChange={(e)=>setvaleur(e.target.value)} min={50} step={50} max={1500} name="" id="" />
          <h1>{valeur}$</h1>
        </div>
        <h2>Order:</h2>
        <div className='triiie'>
          <div><input type="radio" name="a" id="" /><label htmlFor="">increasing</label></div>
          <div><input type="radio" name="a" id="" /><label htmlFor="">decreasing</label></div>
        </div>
        <div className='9ar6a'>
          
        </div>
      
      </div>
      <div className='cardt'>
        <CardList/>
      </div>
      
    </div>
  )
}

export default Shop
