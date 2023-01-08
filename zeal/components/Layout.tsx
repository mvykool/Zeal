import Head from 'next/head'
import React from 'react'
import Footer from './Footer'

interface Props{
    children: any
}


const Layout = ({children}: Props) => {
  return (
    <div className='layout overflow-x-hidden'>
    <Head>
    <title>Zeal</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="theme-color" content="#00708c" />
  </Head>

  <main>
    {children}
  </main>

  <footer>
    <Footer/>
  </footer>
</div>
  )
}

export default Layout