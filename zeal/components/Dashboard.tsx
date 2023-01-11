import React from 'react'
import Banner from './Banner'
import Chart from './Chart'
import Events from './Events'
import Progress from './Progress'
import { motion} from 'framer-motion'

/**framer motion variants */

const sectionVariant = {
  hidden : { opacity: 0},
  show: { opacity: 1,
  transition: { duration: 1, delay: 0.5}
  }
}


const Dashboard = () => {
  return (
    <div className='mx-6'>
      {/**banner */}
      <Banner/>

      {/**events */}

      <Events/>

      {/**progress */}
      
      <div className='flex'>
        <Progress/>

        <Chart/>
      </div>

    </div>
  )
}

export default Dashboard