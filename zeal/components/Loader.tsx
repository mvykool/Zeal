import React from 'react'
import Image from 'next/image';

const Loader = () => {
  return (
    <div className='h-[100%] flex justify-center bg-[var(--bg-loader)] w-screen fixed z-50'>
        <div className='flex justify-center items-center'>
        <Image className='md:h-20'  alt='loader' width={100} height={100} src='/loader.svg' />
        </div>
    </div>
  )
}

export default Loader