import React from 'react'
import { HiCalendar } from 'react-icons/hi2'
import Image from 'next/image'
import { GoClock } from 'react-icons/go';


const Events = () => {



  return (
    <>
           <div className='ml-5 mb-5 flex  items-center space-x-2 bg-gray-900 w-28 md:w-20 px-2 rounded-lg'>
           <HiCalendar className='text-xl md:text-base text-white'/>
           <p className='text-xl md:text-sm font-semibold text-white'>Events</p>
         </div>

         {/**event 1 */}

 
      <div className='flex mr-4'>
         <div className='md:ml-5 hover:scale-105 duration-200 cursor-pointer w-[18vw] flex h-[16vh] shadow-2xl md:shadow-lg rounded-lg'>
          <Image width={500} height={500} alt='event' src={'/event.jpg'} className=' h-[16vh] w-20 rounded-l-lg object-cover' />
             <div className='bg-white w-full h-full rounded-lg'>
                <div className='flex items-center justify-between pt-3'>
                    <h1 className='text-black md:text-sm font-semibold pl-2'>18/01/2023</h1>
                   
                </div>
               <div className='flex items-center'>
               <GoClock className='ml-3 mt-1 h-2 text-gray-900'/>
               <p className='text-gray-900 mt-1 md:text-[10px]'>17:00</p>
               </div>

               <h1 className='text-black mt-5 md:mt-2 mb-4 md:ml-3 font-bold text-lg md:text-xs'>Business Lecture</h1>
             </div>
         </div>

           {/**event 2 */}

 
           <div className='md:ml-5 hover:scale-105 duration-200 cursor-pointer w-[18vw] flex h-[16vh] shadow-2xl md:shadow-lg rounded-lg'>
          <Image width={500} height={500} alt='event' src={'/event-2.jpg'} className=' h-[16vh] w-20 rounded-l-lg object-cover' />
             <div className='bg-white w-full h-full rounded-lg'>
                <div className='flex items-center justify-between pt-3'>
                    <h1 className='text-black md:text-sm font-semibold pl-2'>05/02/2023</h1>
                   
                </div>
               <div className='flex items-center'>
               <GoClock className='ml-3 mt-1 h-2 text-gray-900'/>
               <p className='text-gray-900 mt-1 md:text-[10px]'>21:30</p>
               </div>

               <h1 className='text-black mt-5 md:mt-2 w-10 mb-4 md:ml-2 font-bold text-lg md:text-xs'>UI/UX Workshop</h1>
             </div>
         </div>

           {/**event 3 */}

 
           <div className='md:ml-5 hover:scale-105 duration-200 cursor-pointer w-[18vw] flex h-[16vh] shadow-2xl md:shadow-lg rounded-lg'>
          <Image width={500} height={500} alt='event' src={'/event-3.jpg'} className=' h-[16vh] w-20 rounded-l-lg object-cover' />
             <div className='bg-white w-full h-full rounded-lg'>
                <div className='flex items-center justify-between pt-3'>
                    <h1 className='text-black md:text-sm font-semibold pl-2'>23/01/2023</h1>
                   
                </div>
               <div className='flex items-center'>
               <GoClock className='ml-3 mt-1 h-2 text-gray-900'/>
               <p className='text-gray-900 mt-1 md:text-[10px]'>09:00</p>
               </div>

               <h1 className='text-black mt-5 mb-4 md:ml-2 font-bold text-lg md:text-xs'>Python course</h1>
             </div>
         </div>
         </div>
       
    </>
  )
}

export default Events