import React from 'react'
import { RiNotification2Line, RiMenuFill, RiSearch2Line} from 'react-icons/ri'
import { useStateContext } from '../context/StateContext';
import MobileMenu from './MobileMenu';


const MobileNavbar = () => {


  //use context
 const { openMenu, setOpenMenu } = useStateContext();


if (typeof window !== "undefined") {
  let body = window.document.body;

 if(openMenu === true){
  body.style.position = 'fixed'
  body.style.overflow = 'hidden'
}else {
  body.style.position = 'relative'
  body.style.overflow = 'auto'
}
}


  return (
    <>
    <div className='flex items-center justify-between mx-4 pt-4'>
       {/**logo */}
    
        <div>
            <p className='text-white bg-[var(--bg-dark)] py-1 px-3 rounded-lg'>Z</p>
        </div>

      
       {/**icons */} 
       <div className='flex items-center justify-between space-x-4'>
        <div>
        <RiNotification2Line className='text-xl'/>
        <span className='h-4 w-4 flex justify-center text-xs pt-[1px] absolute -mt-7 ml-2 bg-red-500 text-white rounded-full'>2</span>
        </div>
        <RiMenuFill onClick={() => setOpenMenu(true)} className='text-2xl'/>
       </div>
    </div>

    <div>

    
    {/**seach bar */}

     <div className='mt-12 ml-6'>
        <h1 className='text-3xl font-extrabold'>Overview</h1>
     </div>

       <form className='flex justify-center items-center py-3 mt-5'>
         <input type="text" placeholder='Search..' className='bg-gray-100 py-2 px-2 w-[75vw] rounded-l-md' />
         <button className='bg-[var(--bg-dark)] py-3 px-3 rounded-r-md' type='button'><RiSearch2Line className='text-white text-base'/></button>
       </form>

    </div>


    {openMenu && <MobileMenu />}   

    </>
  )
}

export default MobileNavbar