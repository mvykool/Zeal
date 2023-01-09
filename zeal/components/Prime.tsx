import React from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const Prime = () => {
  return (
    <div className='flex justify-center mx-6'>

      <div className='h-[25vh] w-full premium my-10 rounded-lg shadow-2xl flex justify-around px-4 relative overflow-hidden'>

         <div className='text-white mt-8'>

         <h2 className='mt-5 font-bold text-[#FFDE2E]'>Upgrade to premium</h2>

          <p className='text-gray-200 text-sm mt-2 w-[40vw] ' >Gain more knowledge quickly and efficiently</p>
         
     

         <HiOutlineArrowNarrowRight className='mt-2 h-10 w-10 text-[#FFDE2E]'/>

         </div>

         <div className='flex items-center'>
         
         <div>
           <h1 className='text-[#FFDE2E] border-2 text-5xl p-5 rounded-md border-[#FFDE2E]'>Z</h1>
         </div>

         </div>


      </div>
        
    </div>
  )
}

export default Prime