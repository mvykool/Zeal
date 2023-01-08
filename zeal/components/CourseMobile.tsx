import React from 'react'
import UxCard from './courseCards/UxCard'

const CourseMobile = () => {
  return (
   <>
    <div className='mt-2 ml-6'>
        <h1 className='text-3xl font-extrabold'>Courses</h1>
    </div>
        {/**cards of the courses */}
        
      <div className='mx-6'>
      <UxCard/>
      </div>

    
   </>
  )
}

export default CourseMobile