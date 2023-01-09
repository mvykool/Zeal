import React from 'react'
import {BiPaint} from 'react-icons/bi'
import { users } from '../../utils/users'

const UxCard = () => {



  return (
    <div className='pb-8 ux-card w-full my-5 rounded-lg shadow-xl relative overflow-hidden px-6'>

      {/**title and icon*/}
       <div  className='flex item-center justify-between  pt-4'>
          <h1 className='text-xl font-bold'>UX/UI Design</h1>

          <BiPaint className='h-8 w-8'/>
       </div>

       {/**progress bar */}

       <div className='flex justify-between pt-5'>
          <p className='text-sm text-gray-800'>Progress:</p>
          <p className='text-sm text-gray-800'>55%</p>
       </div>

       <div className='h-1.5 rounded-lg w-[78vw] mx-auto bg-gray-200 flex mt-3'>
         <span className='w-[39vw] bg-black rounded-lg'></span>
       </div>

       {/**hours and users*/}

        <div className='flex justify-between mt-5'>

             {/**hours */}

             <div className=' mt-2'>
                <h3 className='text-gray-800'>48 Hours</h3>
             </div>

             {/**users */}


          <div className='flex mr-20'>
          <div>
            <div className='ml-16 h-8 w-8 flex justify-center text-sm items-center p-5 z-10 absolute rounded-full bg-white'>+10</div>
          </div>

          {/**users */}
           <div className='flex space-x-4'>
            {users.slice(0,3).map((user:any) => {
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

export default UxCard