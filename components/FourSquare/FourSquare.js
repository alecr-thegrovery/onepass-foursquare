/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import Button1 from '@components/Button1'

/*===== Sub-Components =====*/
import Cell from './Cell.js'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function FourSquare({ 
  //Props
  children, id, image, title, 
  previewText, author, date
}) {

  //JS Goes Here
  //console.log(author);
   useEffect(() => {
       const elements = document.querySelectorAll('[data-cell]');
       let currentIndex = 0;

       function selectionAnimationInitial() {
         // Remove active class from current element
         elements[currentIndex].setAttribute("data-cell", "inactive");

         // Increment current index, wrapping around to 0 if necessary
         currentIndex = (currentIndex + 1) % elements.length;

         // Add active class to next element
         elements[currentIndex].setAttribute("data-cell", "active");
       }
       
       function selectionAnimationConfirm() {
         // Remove active class from current element
         elements[currentIndex].setAttribute("data-cell", "inactive");

         // Increment current index, wrapping around to 0 if necessary
         currentIndex = (currentIndex + 1) % elements.length;

         // Add active class to next element
         elements[currentIndex].setAttribute("data-cell", "active");
       }

       // Call rotateActiveClass() every 2 seconds
       setInterval(selectionAnimationInitial, 100);
      });

  return (
    <div className={componentStyles.FourSquare}>

      <div data-row="row">
        <Cell
          cellNumber="1"
        />
        <Cell
          cellNumber="2"
        />
      </div>
      <div data-row="row-reverse">
        <Cell
          cellNumber="3"
        />
        <Cell
          cellNumber="4"
        />
      </div>
      
        
    </div>
  )
}
