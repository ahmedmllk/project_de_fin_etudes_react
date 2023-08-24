import React, { useState } from 'react'
import Cardest from './Cardest'
import Nautilus from '../images/watches/nautilus.png'
import aquaterra from '../images/watches/aqua terra.png'
import PRX from '../images/watches/tissot.png'
import Patek from '../images/logos/pateklogo.png'
import Omega from '../images/logos/omegaLogo.png'
import tissot from '../images/logos/tissotLogo.png'
const CardList = () => {
    
      
    const newest=[
        {
            name:'Nautilus',
            brand:'PATEK PHILIPPE',
            image:Nautilus,
            logo:Patek,
            price:181,
            sexe:'Men', 
        },
        {
            name:'aqua terra',
            brand:'OMEGA',
            image:aquaterra,
            logo:Omega,
            price:815,
            sexe:'Men',
            
        },
        {
            name:'PRX 40 205',
            brand:'TISSOT',
            image:PRX,
            logo:tissot,
            price:335,
            sexe:'Mixed',
        }
      ]
  return (
    <div className='cardlist'>
      {newest.map(el=><Cardest el={el}/>)}
    </div>
  )
}

export default CardList
