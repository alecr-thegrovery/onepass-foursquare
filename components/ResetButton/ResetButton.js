/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ResetButton({ 
  //Props
  children, id, image, title, 
  previewText, author, date
}) {

  //JS Goes Here
  //console.log(author);
   useEffect(() => {});
   const handleClick = () => {
     localStorage.clear();
     location.reload();
   };

  return (
    <div className={componentStyles.ResetButton}>
      <button onClick={handleClick}>
            Clear Local Storage
          </button>
    </div>
  )
}
