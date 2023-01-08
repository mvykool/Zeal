import React from 'react'
import BusinessCard from './courseCards/BusinessCard'
import MathCard from './courseCards/MathCard'
import ScienceCard from './courseCards/ScienceCard'
import UxCard from './courseCards/UxCard'

const CourseMobile = () => {
  return (
   <>
    <div className='mt-3 mx-6 flex justify-between'>
        <h1 className='text-xl font-extrabold'>Courses</h1>

        <p>View all</p>
    </div>
        {/**cards of the courses */}
        
      <div className='mx-6'>
      <UxCard/>
      <BusinessCard/>
      <MathCard/>
      <ScienceCard/>
      </div>

    
   </>
  )
}

export default CourseMobile