/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Date from '@components/date'
import Layout, { siteData } from '@components/layout.js'
import BlogPreview from '@components/BlogPreview'
import Container from '@components/Container'
import FourSquare from '@components/FourSquare'
import LeaderBoard from '@components/LeaderBoard'

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

  return (
    <Layout home>
      
      <Head>
        <title>Home | {siteData.siteTitleBase}</title>
      </Head>

      <Container>
        <LeaderBoard/>
      </Container>

      <br/>
      <hr/>
      <br/>

      
      
    </Layout>
  )
}


