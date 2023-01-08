import React, { useRef} from 'react'
import { useStateContext } from '../context/StateContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { RiCloseFill, RiShoppingBagFill } from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import { MdCategory, MdArticle, MdContacts, MdSupportAgent, MdLogout } from 'react-icons/md'
import { motion} from 'framer-motion'
import {HiHome, HiChartBar, HiCalendar,HiBolt} from 'react-icons/hi2'
import {IoSettingsSharp} from 'react-icons/io5'

/**framer motion variants */
 
const sectionVariant = {
  hidden : { opacity: 0, x: 10},
  show: { opacity: 1, x:0,
  transition: { duration: 0.5, delay: 0.1}
  }
} 
  


const MobileMenu = () => {

  const { user, setUser, setOpenMenu, openMenu } = useStateContext();
  const profileRef = useRef<HTMLDivElement | null>(null);

 
  const router = useRouter()


  //logout

  const logOut = () => {
     setUser(false)
     router.push('/login')
  }



  return (
    <>
    <div className='fixed bg-[var(--bg-wrapper)] z-40 w-full h-screen top-0 ' onClick={()=> setOpenMenu(false)}/> 

    
        <motion.div 
        variants={sectionVariant}
       initial="hidden"
       animate='show'
        className=' bg-white scrollLock right-0 z-50 h-[100%] top-0 w-60 fixed' ref={profileRef}>
          <div className='w-full pb-10'>
          <div className='p-3' onClick={() => setOpenMenu(false)}>
            <RiCloseFill className='text-black  h-7 w-7 absolute right-4' />
          </div>
    
      
            <div className='flex flex-col mx-4 mt-7 items-center'>
            <Image
            width={50}
            height={50}
            src={"https://cdn-icons-png.flaticon.com/512/6073/6073873.png"} alt="profile pic"
             className='h-20 w-20 mb-5'
             />
            <div className='flex flex-col'>
               <h2 className='mx-auto font-bold text-black text-md'>Demo User</h2>
              <p className='mx-3 text-gray-500 text-xs cursor-pointer'>demouser@hotmail.com</p>
            </div>
      
         </div>
       
       
       </div>
        
        {/**menu  */}
       <div className='flex flex-col ml-14 gap-5 mt-5'>
       <Link href={`/`} onClick={() => setOpenMenu(false)}>
         <div className='flex items-center space-x-2'>
          <HiHome className='text-xl text-black'/>
         <button className='text-xl  font-semibold text-black'>Home</button>
         </div>
       </Link>

       {/**categories */}
       <Link href={{ pathname: `/`}} onClick={() => setOpenMenu(false)} className='flex items-center space-x-2'>
         <HiChartBar className='text-xl text-black'/>
         <button className='text-xl  font-semibold text-black'>Progress</button> 
       </Link>

       {/**blog */}

       <Link href={'/'} onClick={() => setOpenMenu(false)}>
         <div className='flex  items-center space-x-2'>
           <HiCalendar className='text-xl text-black'/>
           <button className='text-xl  font-semibold text-black'>Events</button>
         </div>
       </Link>

       {/**shop */}
       <Link href={'/'} onClick={() => setOpenMenu(false)}>
         <div className='flex items-center space-x-2'>
           <HiBolt className='text-xl text-black'/>
           <button className='text-xl   font-semibold text-black'>Courses</button>
         </div>
       </Link>

       {/**contact us */}
       <Link href={'/'} onClick={() => setOpenMenu(false)} className='flex  items-center space-x-2'> 
        <IoSettingsSharp className='text-xl text-black'/>
        <button className='text-xl font-semibold text-black'>Settings</button>
       </Link>

       {/**log out */} 
       
        <div className='flex mt-56  items-center space-x-2'> 
        <MdLogout className='text-xl text-black'/>
        <button type='button' onClick={logOut} className='text-xl  font-semibold text-black'>Log out</button>
        </div>

       </div>

       {/**footer */}

       <div className='absolute bottom-0 w-full bg-black p-5'>
         <h2 className='flex justify-center text-white'>Zeal | v1.0.0</h2>
       </div>
      

        </motion.div>
    
    </>
  )
}

export default MobileMenu