import React from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { motion} from 'framer-motion'

/**framer motion variants */

const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.5}
  }
}


const Prime = () => {
  return (
    <motion.div 
    variants={sectionVariant}
   initial="hidden"
   whileInView="show"
   viewport={{ once: true }} 
    
    className='flex justify-center mx-6'>

      <div className='h-[25vh] md:h-[20vh] md:mx-2 w-full premium md:my-3 my-10 rounded-lg shadow-2xl flex justify-around px-4 relative overflow-hidden hover:scale-105 duration-200  cur'>

         <div className='text-white mt-8 md:mt-2'>

         <h2 className='mt-5 md:mt-1 font-bold text-[#FFDE2E]'>Upgrade to premium</h2>

          <p className='text-gray-200 text-sm md:text-xs mt-2 w-[40vw] md:w-[10vw] ' >Gain more knowledge quickly and efficiently</p>
         
     

         <HiOutlineArrowNarrowRight className='mt-2 md:mt-1 md:h-5 md:w-5 h-10 w-10 text-[#FFDE2E]'/>

         </div>

         <div className='flex items-center'>
         
         <div>
           <h1 className='text-[#FFDE2E] border-2 text-5xl p-5 md:text-lg md:p-3 rounded-md border-[#FFDE2E]'>Z</h1>
         </div>

         </div>


      </div>
        
    </motion.div>
  )
}

export default Prime