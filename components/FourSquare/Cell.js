/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/


/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Cell({ 
  //Props
  children, cellNumber, logo, playerName
}) {

  //JS Goes Here
  //console.log(author);
  
  return (
    <div 
      className={componentStyles.Cell} 
      data-cell-number={cellNumber}
      data-cell=""
    >

      <div className={componentStyles.cellInner}>
        <div className={componentStyles.logo}>
          {logo ?
            <img src={logo} alt=""/>
          :
            <img src="/images/planet-caravan-studios-logo.png" alt=""/>
          }
        </div>
        
        <div className={componentStyles.playerName}>
          <h2>{playerName ? playerName : "Player Name"}</h2>
        </div>
        
      </div>
        
    </div>
  )
}
