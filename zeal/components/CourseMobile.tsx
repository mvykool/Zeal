import React from 'react'
import BusinessCard from './courseCards/BusinessCard'
import MathCard from './courseCards/MathCard'
import ScienceCard from './courseCards/ScienceCard'
import UxCard from './courseCards/UxCard'

const CourseMobile = () => {
  return (
   <>
        {/**cards of the courses */}
        
      <div className='cards space-x-3 px-5 pb-8'>
      <UxCard/>
      <BusinessCard/>
      <MathCard/>
      <ScienceCard/>
      </div>

    
   </>
  )
}

export default CourseMobile