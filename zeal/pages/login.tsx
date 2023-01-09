import { useRouter } from 'next/router'
import React from 'react'
import { useStateContext } from '../context/StateContext'
import Image from 'next/image'

const Login = () => {


    const {setUser, user} = useStateContext()

    //login

    const handleLogin = () => {
        setUser(true)
    }


   
  const router = useRouter()
  if(user) router.push({ pathname: '/' })  
    

  return (
    <>
    <div className='w-screen pb-[95vh] '>

    {/** bgs for desktop and mobile */}
    <Image src={'/blob-scene-haikei.svg'} width={1000} height={1000} alt='bg' className='w-screen h-screen object-cover hidden md:block' />   

    <Image src={'/bg-mobile.svg'} priority width={900} height={500} alt='bg' className=' w-screen h-[95vh] object-cover absolute z-10 md:hidden' />   

       <main className='flex justify-center py-20 absolute z-30 w-screen'>
         {/**title & images */}

       <div className='bg-white shadow-2xl mt-16 py-20 px-16 rounded-lg'>
    
      <div className='flex justify-center '>
      <h1 className='text-6xl font-semibold text-black'>Zeal</h1>
      </div>

         {/**text */}
         <div className='mt-28 flex justify-center'>
          
            <button onClick={handleLogin} type='button' className='text-white bg-cyan-700 p-3 rounded-lg font-bold'>
                Login as Demo
            </button>
            
         </div>
      
         <div className='mt-5 text-gray-300'>
           &copy;Zeal v1.0.0 | 2023
           </div> 
    </div>
       </main>
    </div>
    </>
  )
}

export default Login