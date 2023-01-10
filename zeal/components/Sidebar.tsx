import React from 'react'
import { RiNotification2Line } from 'react-icons/ri'
import Image from 'next/image'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {BiPaint} from 'react-icons/bi'
import {TbBusinessplan} from 'react-icons/tb'
import {TbMath} from 'react-icons/tb'
import Prime from './Prime'

const Sidebar = () => {
  return (
    <div className='bg-white rounded-r-lg h-full shadow-md'>

       {/**bell & profile*/}
         
      <div className='flex items-center pt-10 justify-between mx-6'>
        <div className='cursor-pointer hover:scale-105 duration-200'>
         <RiNotification2Line className='text-xl'/>
         <span className='h-4 w-4 flex justify-center text-xs pt-[1px] absolute -mt-7 ml-2 bg-red-500 text-white rounded-full'>4</span>
        </div>

        <div className='flex  items-center'>
            <Image
            width={50}
            height={50}
            src={"https://cdn-icons-png.flaticon.com/512/6073/6073873.png"} alt="profile pic"
             className='h-7 w-7 ml-5'
             />
            <div className='flex flex-col'>
               <h2 className=' mx-3 font-bold text-black text-xs'>Demo User</h2>
              <p className='mx-3 text-gray-500 text-[8px] cursor-pointer'>demouser@hotmail.com</p>
            </div>
      
         </div>
      </div>

      {/**courses */}

      <div>
          <div className='mt-16 flex justify-between mx-6 items-center'>
            <h1 className='font-semibold'>Courses</h1>

            <p className='text-xs'>More</p>
          </div>
          

          {/**cards  */}

          <div className='ml-10 mt-5'>

            <div className='w-[20vw] h-[10vh] mb-5 ux-card rounded-lg shadow-lg flex items-center hover:scale-105 duration-200 cursor-pointer'>
            <BiPaint className='h-9 w-9 text-white bg-[var(--bg-dark)] p-2 rounded-full my-auto ml-5'/>
                <div className='flex space-x-9 ml-8 items-center'>
                     <div>
                     <h1 className='font-bold'>UX/UI Design</h1>
                     <p className='text-gray-600 text-sm'>48 hours</p>
                     </div>
                    <MdKeyboardArrowRight className='h-7 w-7 '/>
                </div>
            </div>

            <div className='w-[20vw] h-[10vh] mb-5 business-card rounded-lg shadow-lg flex justify-between items-center hover:scale-105 duration-200 cursor-pointer'>
            <TbBusinessplan className='h-9 w-9 text-white bg-[var(--bg-dark)] p-2 rounded-full my-auto ml-5'/>
                <div className='flex mr-12 items-center'>
                     <div>
                     <h1 className='font-bold'>Business</h1>
                     <p className='text-gray-600 text-sm'>60 hours</p>
                     </div>
                </div>
                <MdKeyboardArrowRight className='h-7 w-7 '/>
            </div>

            <div className='w-[20vw] h-[10vh] mb-5 math-card rounded-lg shadow-lg flex justify-between items-center hover:scale-105 duration-200 cursor-pointer'>
            <TbMath className='h-9 w-9 text-white bg-[var(--bg-dark)] p-2 rounded-full my-auto ml-5'/>
                <div className='flex mr-6 items-center'>
                     <div>
                     <h1 className='font-bold'>Mathematics</h1>
                     <p className='text-gray-600 text-sm'>120 hours</p>
                     </div>
                </div>
                <MdKeyboardArrowRight className='h-7 w-7 '/>

            </div>

          </div>
          
          
      </div>

      {/**premium */}
         

         <Prime/>
        
    </div>
  )
}

export default Sidebar