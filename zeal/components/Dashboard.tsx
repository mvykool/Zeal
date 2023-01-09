import React from 'react'
import Banner from './Banner'
import Chart from './Chart'
import Events from './Events'
import Progress from './Progress'

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