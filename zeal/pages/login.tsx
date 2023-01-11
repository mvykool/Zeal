import { useRouter } from 'next/router'
import React from 'react'
import { useStateContext } from '../context/StateContext'
import Image from 'next/image'
import { motion} from 'framer-motion'

/**framer motion variants */

const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.5}
  }
}



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
    <div className='w-screen pb-[95vh] bg-app  '>

       <main className='flex justify-center py-20  absolute z-30 w-screen'>
         {/**title & images */}

       <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
        className='bg-app-glass shadow-2xl mt-16 py-20 px-16 rounded-lg'>
    
      
       <div className='flex items-center justify-center space-x-1 mx-4 mt-8'>
          <h1 className='rounded-lg bg-black text-5xl text-white w-10 md:px-5 py-1 flex justify-center'>Z</h1>
          <p className='text-2xl'>EAL</p>
        </div>

      
         {/**text */}
         <div className='mt-20 flex justify-center'>
          
            <button onClick={handleLogin} type='button' className='text-white bg-gray-900 p-3 rounded-lg font-bold hover:scale-105 duration-200 cursor-pointer'>
                Login as Demo
            </button>
            
         </div>
      
         <div className='mt-5 text-gray-500'>
           &copy;Zeal v1.0.0 | 2023
           </div> 
         </motion.div>
       </main>

    </div>
    </>
  )
}

export default Login