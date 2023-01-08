import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useStateContext } from '../context/StateContext'


export default function Home() {

  //bring the user to check if it's true, otherwise redirect to the login screen

  const {user, setUser} = useStateContext()


  // set the router for the redirect

  return (
    <>
      <Head>
        <title>Zeal | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        
    
      </main>
    </>
  )
}
