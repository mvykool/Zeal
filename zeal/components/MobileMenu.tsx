import React, { useRef} from 'react'
import { useStateContext } from '../context/StateContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { RiCloseFill } from 'react-icons/ri'
import {GoClock} from 'react-icons/go'
import { MdLogout } from 'react-icons/md'
import { motion} from 'framer-motion'
import {HiHome, HiChartBar, HiCalendar} from 'react-icons/hi2'
import {IoSettingsSharp} from 'react-icons/io5'
import { users } from '../utils/users';

/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0, x: 10},
  show: { opacity: 1, x:0,
  transition: { duration: 0.5, delay: 0.1}
  }
} 
  


const MobileMenu = () => {

  const { setUser, setOpenMenu } = useStateContext();
  const profileRef = useRef<HTMLDivElement | null>(null);

 
  const router = useRouter()


  //logout

  const logOut = () => {
     setUser(false)
     setOpenMenu(false)
     router.push('/login')
  }

 const eventUser = users[5];

  return (
    <>
    <div className='fixed bg-[var(--bg-wrapper)] z-40 w-full h-screen top-0 ' onClick={()=> setOpenMenu(false)}/> 

     
        <motion.div 
        variants={sectionVariant}
       initial="hidden"
       animate='show'
        className=' bg-white right-0 z-50 h-[100%] top-0 w-72 fixed' ref={profileRef}>
          <div className='w-full pb-10'>
          <div className='p-3' onClick={() => setOpenMenu(false)}>
            <RiCloseFill className='text-black  h-7 w-7 absolute right-4' />
          </div>
    
      
            <div className='flex mt-3 pb-8 border-b-2 border-gray-300 w-full  items-center'>
            <Image
            width={50}
            height={50}
            src={"https://cdn-icons-png.flaticon.com/512/6073/6073873.png"} alt="profile pic"
             className='h-16 w-16 ml-5'
             />
            <div className='flex flex-col'>
               <h2 className='mx-auto font-bold text-black text-md'>Demo User</h2>
              <p className='mx-3 text-gray-500 text-xs cursor-pointer'>demouser@hotmail.com</p>
            </div>
      
         </div>
       
       </div>

       {/**event */}

       <div className='ml-5 mb-5 flex  items-center space-x-2 bg-gray-900 w-28 px-2 rounded-lg'>
           <HiCalendar className='text-xl text-white'/>
           <p className='text-xl  font-semibold text-white'>Events</p>
         </div>

 
         <div className='flex justify-center'>
         <div className='md:ml-5 hover:scale-105 duration-200 cursor-pointer w-[60vw] shadow-xl flex h-[16vh] md:shadow-lg rounded-lg'>
          <Image width={500} height={500} alt='event' src={'/event.jpg'} className=' h-[16vh] w-20 rounded-l-lg object-cover' />
             <div className='bg-white w-full h-full shadow-xl rounded-lg'>
                <div className='flex items-center justify-between pt-3'>
                    <h1 className='text-black md:text-sm font-semibold pl-2'>18/01/2023</h1>
                   
                </div>
               <div className='flex items-center'>
               <GoClock className='ml-3 mt-1 h-2 text-gray-900'/>
               <p className='text-gray-900 mt-1 md:text-[10px]'>17:00</p>
               </div>

               <h1 className='text-black mt-5 md:mt-2 mb-4 ml-3 font-bold text-base md:text-xs'>Business Lecture</h1>
             </div>
         </div>
         </div>
       
        
        {/**menu  */}
       <div className='flex flex-col ml-8 gap-5 mt-12'>
       <Link href={`/`} onClick={() => setOpenMenu(false)}>
         <div className='flex items-center space-x-5'>
          <HiHome className='text-xl text-black'/>
         <button className='text-xl  font-semibold text-black'>Home</button>
         </div>
       </Link>

       {/**progress */}
       <Link href={{ pathname: `/`}} onClick={() => setOpenMenu(false)} className='flex items-center space-x-5'>
         <HiChartBar className='text-xl text-black'/>
         <button className='text-xl  font-semibold text-black'>Progress</button> 
       </Link>


       {/**csettings*/}
       <Link href={'/'} onClick={() => setOpenMenu(false)} className='flex  items-center space-x-5'> 
        <IoSettingsSharp className='text-xl text-black'/>
        <button className='text-xl font-semibold text-black'>Settings</button>
       </Link>

       {/**log out */} 
       
        <div className='flex  items-center space-x-5'> 
        <MdLogout className='text-xl text-black'/>
        <button type='button' onClick={logOut} className='text-xl  font-semibold text-black'>Log out</button>
        </div>

       </div>

       {/**footer */}

       <div className='absolute bottom-0 w-full bg-black p-3'>
         <h2 className='flex justify-center text-white'>Zeal | v1.0.0</h2>
       </div>
      

        </motion.div>
    
    </>
  )
}

export default MobileMenu