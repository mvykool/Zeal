import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <>
     <div className='flex justify-center mx-6 relative banner my-10 pr-3 rounded-lg shadow-2xl'>
        {/**text and img */}

        <div className='flex justify-between items-center '>
          <Image
          src={'/books-banner.png'}
          height={200}
          width={200}
          alt='books banner'
          className='h-36 w-36'
          />

          <div>
          <h3 className='text-lg text-white'>Functional Education</h3>
          <p className='text-gray-300 text-sm '>Studying has not been easier! </p>
          </div>
        </div>
     </div>
    </>
  )
}

export default Banner