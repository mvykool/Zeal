import React from 'react'
import {  RiSearch2Line} from 'react-icons/ri'
import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='flex justify-around pb-4'>
        
        {/**logo with text */}

        <div className='  mt-5'>
           <div className='w-10'>
           <h1 className='text-white border-2 text-lg p-1 flex justify-center rounded-md border-white'>Z
           </h1>
           </div>
          
          <p className='text-white text-xs my-3 w-20'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
           
            {/**social media */}

          <div className='flex items-center space-x-2'>
             <FaFacebookSquare className='text-gray-400'/>
             <FaTwitter className='text-gray-400'/>
             <FaInstagramSquare className='text-gray-400'/>
             <FaYoutube className='text-gray-400'/>
          </div>

         </div>
      

        {/**courses */}

        <div className='text-white mt-5 ml-4'>

           <h4 className='text-sm my-2'>Courses</h4>  

          <p className='border-l-2 border-orange-500 pl-1 text-sm my-1'>ux/ui</p>
          <p className='border-l-2 border-yellow-500 pl-1 text-sm my-1'>Business</p>
          <p className='border-l-2 border-cyan-500 pl-1 text-sm my-1'>Mathematics</p>
          <p className='border-l-2 border-green-500 pl-1 text-sm my-1'>Science</p>
          <p className='border-l-2 border-red-500 pl-1 text-sm my-1'>I T</p>
        </div>


        {/**newsletter */}

        <div>
          <p className='text-white text-sm mt-10'>Follow our newsletter!</p>

          <form className='flex justify-center items-center py-1 mt-2'>
         <input type="text" placeholder='Search..' className=' border-2 border-blue-800 bg-gray-100 py-1 px-2 w-[20vw] rounded-l-md' />
         <button className='bg-blue-800 py-2 px-3 rounded-r-md border-2 border-blue-800 ' type='button'><RiSearch2Line className='text-white text-base '/></button>
       </form>
        </div>

      </div>

      {/**links and stuff */}

      <hr />

      <div className='flex justify-center py-5'>
          <ul className='flex space-x-4 mx-4'>
            <li className='text-gray-400 text-xs'>Q/A</li>
            <li className='text-gray-400 text-xs'>Terms & conditions</li>
            <li className='text-gray-400 text-xs'>Privacy</li>
            <li className='text-gray-400 text-xs'>Premium</li>
          </ul>
      </div>
        
    
      <div className='py-1  flex justify-center'>
           <p className='text-gray-300 text-sm'>&copy;Zeal  | 2023</p>
      </div> 

    </div>
  )
}

export default Footer