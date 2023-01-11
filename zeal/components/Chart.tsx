import React from 'react'
import { motion} from 'framer-motion'

/**framer motion variants */

const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.5}
  }
}

const Chart = () => {
  return (
    <div className='mx-6 md:mx-5 mt-10 md:mt-6 mb-10 md:mb-1'>
       <h1 className='text-xl md:text-sm md:font-normal font-extrabold flex justify-end'>More</h1>

      <motion.div 
        variants={sectionVariant}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }} 
      className='bg-white md:h-[20vh] md:w-[23vw] h-[30vh] px-4 flex flex-col  shadow-2xl md:mt-2 md:shadow-lg rounded-lg hover:scale-105 duration-200 cursor-pointer'>

         {/**chart 1 */}
         
         <div className='flex items-center space-x-3 mt-5'>
           <p className='text-xs pr-10'>UX/UI</p>
           <div className='h-1.5 rounded-lg w-40 mx-auto bg-gray-200 flex'>
             <span className='w-24 bg-red-400 rounded-lg'></span>
            </div>
            <p className='text-sm md:text-xs text-gray-800'>55%</p>
         </div>

              {/**chart 2 */}
         
              <div className='flex items-center mt-5 space-x-3'>
           <p className='text-xs pr-6'>Business</p>
           <div className='h-1.5 rounded-lg w-40 mx-auto bg-gray-200 flex'>
             <span className='w-16 bg-blue-400 rounded-lg'></span>
            </div>
            <p className='text-sm md:text-xs text-gray-800'>39%</p>
         </div>

              {/**chart 3 */}
         
              <div className='flex items-center mt-5 space-x-3'>
           <p className='text-xs pr-8'>Science</p>
           <div className='h-1.5 rounded-lg w-40 mx-auto bg-gray-200 flex'>
             <span className=' bg-green-400 rounded-lg w-20'></span>
            </div>
            <p className='text-sm md:text-xs text-gray-800'>42%</p>
         </div>

      </motion.div>
    </div>
  )
}

export default Chart