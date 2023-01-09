import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'

const Header = () => {
  return (
   <>
     <div className='mt-3 ml-10'>
        <h1 className='text-base font-extrabold'>Dashboard</h1>
     </div>

       <form className='flex justify-center mx-10 items-center py-2 mt-3'>
         <input type="text" placeholder='Search..' className='bg-white py-1 px-2 w-[75vw] rounded-l-md outline-none' />
         <button className='bg-[var(--bg-dark)] py-2 px-3 rounded-r-md hover:bg-gray-700' type='button'><RiSearch2Line className='text-white text-base'/></button>
       </form>
   </>
  )
}

export default Header