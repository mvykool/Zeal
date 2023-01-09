import React from 'react'
import Link from 'next/link';
import {HiHome, HiChartBar} from 'react-icons/hi2'
import {IoSettingsSharp} from 'react-icons/io5'
import { MdLogout } from 'react-icons/md';
import { useStateContext } from '../context/StateContext';
import { useRouter } from 'next/router';

const Desktopmenu = () => {

  const { setUser, setOpenMenu } = useStateContext();

  const router = useRouter()


  //logout

  const logOut = () => {
     setUser(false)
     setOpenMenu(false)
     router.push('/login')
  }


  return (
    <div>
      {/**logo */}
        
        <div className='flex items-center space-x-1 mx-4 mt-8'>
          <h1 className='rounded-lg bg-black text-white w-8 py-1 flex justify-center'>Z</h1>
          <p className='text-lg'>eal</p>
        </div>

      {/**menu */}

             {/**menu  */}
       <div className='flex flex-col gap-3 mt-28'>
       <Link href={`/`} className='hover:bg-gray-100 hover:scale-105 rounded-l-2xl duration-150 py-2  pl-5' >
         <div className='flex items-center space-x-2'>
          <HiHome className='text-base text-black'/>
         <button className='text-base  font-semibold text-black'>Home</button>
         </div>
       </Link>

       {/**progress */}
       <Link href={{ pathname: `/`}}  className='flex items-center space-x-2 hover:bg-gray-100 rounded-l-2xl duration-150 py-2 hover:scale-105  pl-5'>
         <HiChartBar className='text-base text-black'/>
         <button className='text-base font-semibold text-black'>Progress</button> 
       </Link>


       {/**csettings*/}
       <Link href={'/'}  className='flex  items-center space-x-2 hover:bg-gray-100 rounded-l-2xl duration-150 py-2  hover:scale-105 pl-5'> 
        <IoSettingsSharp className='text-base text-black'/>
        <button className='text-base font-semibold text-black'>Settings</button>
       </Link>
       
       <div className='flex cursor-pointer  items-center space-x-2 hover:bg-gray-100 rounded-l-2xl duration-150 py-2  pl-5 hover:scale-105'> 
        <MdLogout className='text-lg text-black'/>
        <button type='button' onClick={logOut} className='text-base font-semibold text-black'>Log out</button>
        </div>
      
       </div>

      {/**logout */}
    </div>
  )
}

export default Desktopmenu