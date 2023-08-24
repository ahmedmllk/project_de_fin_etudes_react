import React, { useState } from 'react'
import Cardest from './Card'
import Nautilus from '../images/watches/nautilus.png'
import aquaterra from '../images/watches/aqua terra.png'
import PRX from '../images/watches/tissot.png'
import Gent_XL from '../images/ShopWatches/tissot Gent XL quartz.png'
import swissmatic from '../images/ShopWatches/tissot swissmatic.png'
import speedmaster from '../images/ShopWatches/speedmaster.png'
import purpleheart from '../images/ShopWatches/purple heart.png'
import Lady_Datejust from '../images/ShopWatches/LAdy-Datejust.png'
import pinkruby from '../images/ShopWatches/pink ruby.png'
import blackhood from '../images/ShopWatches/Blackhood.png'
import zeitwerk from '../images/ShopWatches/Zeitwerk.png'
import lange1 from '../images/ShopWatches/Lange1.png'
import pisa from '../images/ShopWatches/pisa.png'
import aLange from '../images/logos/a.lange.png'
import Omega from '../images/logos/omegaLogo.png'
import tissot from '../images/logos/tissotLogo.png'
import Rolex from '../images/logos/Rolex.png'
const CardList = () => {
    const watchesList=[
      {
        name:'PRX 40 205',
        brand:'TISSOT',
        image:PRX,
        logo:tissot,
        price:335,
        sexe:'Male',
      },
      {
        name:'Gent XL',
        brand:'TISSOT',
        image:Gent_XL,
        logo:tissot,
        price:653,
        sexe:'Men'
      },
      {
        name:'swissmatic',
        brand:'TISSOT',
        image:swissmatic,
        logo:tissot,
        price:720,
        sexe:'Female'
      },
      {
        name:'Speed Master',
        brand:'OMEGA',
        image:speedmaster,
        logo:Omega,
        price:1200,
        sexe:'Male'
      },
      {
        name:'Purple Heart',
        brand:'OMEGA',
        image:purpleheart,
        logo:Omega,
        price:1500,
        sexe:'Female'
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
        name:'Lady Datejust',
        brand:'ROLEX',
        image:Lady_Datejust,
        logo:Rolex,
        price:979,
        sexe:'Female',
      },
      {
        name:'Pink Ruby',
        brand:'ROLEX',
        image:pinkruby,
        logo:Rolex,
        price:750,
        sexe:'Female',
      },
      {
        name:'Black Hood',
        brand:'ROLEX',
        image:blackhood,
        logo:Rolex,
        price:815,
        sexe:'Men',
      },
      {
        name:'Lange 1',
        brand:'A.Lange & sohne',
        image:lange1,
        logo:aLange,
        price:900,
        sexe:'Men',
      },
      {
        name:'Zeitwerk',
        brand:'A.Lange & sohne',
        image:zeitwerk,
        logo:aLange,
        price:500,
        sexe:'Men',
      },
      {
        name:'Pisa',
        brand:'A.Lange & sohne',
        image:pisa,
        logo:aLange,
        price:300,
        sexe:'Female',
      },
      ]
  return (
    <div className='cardestlist'>
      {watchesList.map(el=><Cardest el={el}/>)}
    </div>
  )
}

export default CardList
