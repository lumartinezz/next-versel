import { FC } from 'react'

import Head from 'next/head'

import { NavBar } from '../NavBar'
import styles from './MainLayout.module.css' 


export const MainLayout = ({children}) => {
    return (
        <>
          <Head>
            <title>Home - Lucia</title>
            <meta name="description" content="Home page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <NavBar/>
    
          <main className={styles.main}>

            {children}
    
          </main>
        </>
      )
}
