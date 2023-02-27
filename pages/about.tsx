
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';
import React from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>

        <h1 className={'title'}>
          {/* Ir al <a href="/">Home</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>
      
      
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/about.js</code>
          </p>
        </div>

    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element){
  return (
    <MainLayout>
        <DarkLayout>
          {page}
        </DarkLayout>
    </MainLayout>
  )
}