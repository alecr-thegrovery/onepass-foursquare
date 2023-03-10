import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import Link from 'next/link'
import data from "@data/data.json"
import $ from 'jquery'

import DesktopNav from '@components/DesktopNav'
import NavMenu from '@components/NavMenu'
import Footer from '@components/Footer'
import Container from '@components/Container'

export const siteTitle = 'Next.js Sample Website'
export const siteData = data

export default function Layout({ children, home }) {
  
  useEffect(() => {
    $(document).ready(function() {
      smoothLoad();

      function smoothLoad(){
        let bufferTime = 250;
        setTimeout(function() { 
            $("#LayoutOuter").attr("data-hidden", "false");
        }, bufferTime);
      }
    });
  });

  return (
    <div id="LayoutOuter" className={styles.outer} data-hidden="true">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Simple blog-style template for Planet Caravan Studios"
        />
        <meta property="og:image"
          content={`/images/planet-caravan-studios-logo.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
      </Head>

      {/* MAIN SECTION */}
      <main className={styles.main}>
          
          <div>
            {children}
          </div>

      </main>

    </div>
  )
}
