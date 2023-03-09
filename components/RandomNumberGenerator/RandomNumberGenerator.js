/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function RandomNumberGenerator({ 
  //Props
  children, id, image, title, 
  previewText, author, date
}) {

  //JS Goes Here
  //console.log(author);

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(4);
  const [result, setResult] = useState(null);

  const handleMinValueChange = (event) => {
    setMinValue(parseInt(event.target.value));
  };

  const handleMaxValueChange = (event) => {
    setMaxValue(parseInt(event.target.value));
  };

  const handlePickButtonClick = () => {
    const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    setResult(randomValue);
  };
  
   useEffect(() => {});

  return (
    <div className={componentStyles.RandomNumberGenerator}>

      <div>
        <label>
          Min value:
          <input 
            type="number" 
            value={minValue} 
            onChange={handleMinValueChange} 
          />
        </label>
        <br />
        <label>
          Max value:
          <input 
            type="number" 
            value={maxValue} 
            onChange={handleMaxValueChange} 
          />
        </label>
        <br />
        <button 
          onClick={handlePickButtonClick}
        >
          Pick a random number
        </button>
        <br />
        {result !== null && (
          <div>
            The random number between {minValue} and {maxValue} is: {result}
          </div>
        )}
      </div>
    </div>
  )
}
