import '../styles/globals.css'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { StateContext } from '../context/StateContext'
import Loader from '../components/Loader'
import Router from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

 //Router event loading
 const [loading, setLoading] = useState(false)

 Router.events.on('routeChangeStart', (url) => {
   setLoading(true)
 })

 Router.events.on('routeChangeComplete', (url) => {
   setLoading(false)
 })


  return (
    <StateContext>
      <Layout>
      { loading &&  (
        <Loader/>
      )}
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
