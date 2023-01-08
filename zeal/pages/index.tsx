import Head from 'next/head'
import Image from 'next/image'
import { useStateContext } from '../context/StateContext'
import MobileNavbar from '../components/MobileNavbar'
import Banner from '../components/Banner'
import CourseMobile from '../components/CourseMobile'
import Progress from '../components/Progress'
import { useRouter } from 'next/router'


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

      {/**grid layout */}
      <main className='grid grid-cols-1 md:grid-cols-4'>
        
        {/**mobile navbar */}
        <div className='md:hidden'>
          <MobileNavbar/>
        </div>

        {/**banner */}

        <div>
          <Banner/>
        </div>
     

         {/** courses mobile */}
      <div className='mt-3 mx-6 flex justify-between'>
        <h1 className='text-xl font-extrabold'>Courses</h1>

        <p>View all</p>
    </div>

      <section className='flex overflow-x-auto'> 

      <div className='md:hidden'>
          <CourseMobile/>
        </div>
      </section>
      
      {/**progress */}

      <div>
        <Progress/>
      </div>

      </main>
    </>
  )
}
