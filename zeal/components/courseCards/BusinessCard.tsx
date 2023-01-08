import React from 'react'
import {TbBusinessplan} from 'react-icons/tb'
import { users } from '../../utils/users'

const BusinessCard = () => {
  return (
    <div className='pb-8 business-card w-full my-5 rounded-lg shadow-2xl relative overflow-hidden'>

    {/**title and icon*/}
     <div  className='flex item-center justify-between px-6 pt-4'>
        <h1 className='text-xl font-bold'>Business</h1>

        <TbBusinessplan className='h-8 w-8'/>
     </div>

     {/**progress bar */}

     <div className='flex justify-between px-6 pt-5'>
        <p className='text-sm text-gray-800'>Progress:</p>
        <p className='text-sm text-gray-800'>39%</p>
     </div>

     <div className='h-1.5 rounded-lg w-[78vw] mx-auto bg-gray-200 flex mt-3'>
       <span className='w-[27vw] bg-black rounded-lg'></span>
     </div>

     {/**hours and users*/}

      <div className='flex justify-between mt-5'>

           {/**hours */}

           <div className='ml-6 mt-2'>
              <h3 className='text-gray-800'>60 Hours</h3>
           </div>

           {/**users */}


        <div className='flex mr-24'>
        <div>
          <div className='ml-16 h-8 w-8 flex justify-center text-sm items-center p-5 z-10 absolute rounded-full bg-gray-200'>+10</div>
        </div>

        {/**users */}
         <div className='flex space-x-4'>
          {users.slice(2,5).map((user:any) => {
            return(
              <div key={user.name}>
                <img 
                className='ml-4 absolute h-9 w-9 flex justify-center text-sm rounded-full'
                src={user.image} 
                alt="users" />
              </div>
            )
          })}
         </div>
        </div>

      

      </div>

  </div>
  )
}

export default BusinessCard