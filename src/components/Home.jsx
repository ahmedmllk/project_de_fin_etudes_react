import React from 'react'
import watch from './images/watchHome.png'
import CardList from './card/CardList'
import back from './images/backhome.png'
import men from './images/musclitosss.png'
import Footer from './footer/Footer'

const Home = ({setnavigation}) => {
  return (
    <div>
        <div className='homeContainer'>
            <img src={watch} alt="" />
            <div className='homee'>
                <p>Discover the assortment of <br/> exquisite, high-quality <br/> timepieces.</p>
                <div className='buttonhome'> 
                    <button onClick={()=>setnavigation(1)}><span></span></button>
                    <h1>explore all collections</h1>
                </div>
            </div>
        </div>
        <div className='newarrival'>
            <h1>New Arrivals</h1>
            <CardList/>
            <div className='buttonhome2'> 
                <button onClick={()=>setnavigation(1)}><span></span></button>
                <h6>explore new arrivals</h6>
            </div>
            <h1>Our Collection</h1>
        </div>
        <img src={back} className='back' />
        <div className='look'>
            <img src={men}/>
            <div className='par'>
                <h1>Lookbook <br /> Collection 2022 </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='buttonhome'> 
                        <button onClick={()=>setnavigation(1)}><span></span></button>
                        <h6>explore all collections</h6>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
