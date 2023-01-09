import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <>
     <div className='flex justify-center mx-6 md:mx-4 relative banner my-5 pr-3 rounded-lg shadow-2xl hover:scale-105 duration-200 cursor-pointer'>
        {/**text and img */}

        <div className='flex justify-between items-center md:h-[15vh]'>
          <Image
          src={'/books-banner.png'}
          height={200}
          width={200}
          alt='books banner'
          className='h-36 w-36 md:mr-28'
          priority
          />

          <div className='md:ml-20'>
          <h3 className='text-lg md:text-xl text-white'>Functional Education</h3>
          <p className='text-gray-300 text-sm '>Studying has not been easier! </p>
          </div>
        </div>
     </div>
    </>
  )
}

export default Banner