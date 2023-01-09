import React from 'react'
import { faker } from "@faker-js/faker";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      }
    },
  };
  
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Studied hours last week',
        data: labels.map(() => faker.datatype.number({ min: 1 , max: 10 })),
        borderColor: '#00C2FF',
        backgroundColor: 'rgba(0, 194, 255, 0.4)',
      }
    ],
  };
  

const Progress = () => {
  return (
    <div className='mx-6 md:mx-5 mt-10 md:mt-5 mb-10 md:mb-1'>
       <h1 className='text-xl md:text-base font-extrabold'>Progress</h1>

      <div className='bg-white md:h-[20vh] md:w-[20vw] h-[30vh] px-4 flex items-center shadow-2xl md:mt-2 md:shadow-lg rounded-lg hover:scale-105 duration-200 cursor-pointer'>
      <Line options={options} data={data} />
      </div>
    </div>
  )
}

export default Progress


