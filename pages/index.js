/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Date from '@components/date'
import Layout, { siteData } from '@components/Layout'
import BlogPreview from '@components/BlogPreview'
import Container from '@components/Container'
import FourSquare from '@components/FourSquare'

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'

/*===== Posts Data =====*/
import { getSortedPostsData } from '@lib/posts'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

/*===== Page Content =====*/
export default function Home({ allPostsData }) {

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

  return (
    <Layout home>
      
      <Head>
        <title>Home | {siteData.siteTitleBase}</title>
      </Head>

      <Container>
        <FourSquare/>  
      </Container>

      <br/>
      <hr/>
      <br/>

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
      
    </Layout>
  )
}


