import React, { useEffect} from 'react'
import { FaBook, FaPaintBrush, FaAtom, FaPencilAlt, FaRulerCombined } from 'react-icons/fa'
import {HiComputerDesktop} from 'react-icons/hi2'
import { useStateContext } from '../context/StateContext'

const Login = () => {


    const {setUser} = useStateContext()

    //login

    const handleLogin = () => {
        setUser(true)
    }

    useEffect(() => {
      
        setUser(true)
    
    }, [ setUser()])
    

  return (
    <div className='login-container'>
       <main>
         {/**title & images */}

       <div className='title-container'>
       <div className='title-icons'>
            <FaBook className='icon-book'/>
            <FaPaintBrush className='icon-paint'/>
            <HiComputerDesktop className='icon-pc'/>
            <FaPencilAlt className='icon-pencil'/>
           <h1 className='login-title'>Zeal</h1>
           <FaRulerCombined className='icon-ruler' />
           <FaBook className='icon-book-alt'/>
           <FaAtom className='icon-atom'/>
           <FaAtom className='icon-atom-alt'/>

         </div>
       </div>

         <div>

   {/**text */}



         {/** login button */ }

         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L15,213.3C30,203,60,181,90,154.7C120,128,150,96,180,122.7C210,149,240,235,270,256C300,277,330,235,360,208C390,181,420,171,450,181.3C480,192,510,224,540,234.7C570,245,600,235,630,213.3C660,192,690,160,720,138.7C750,117,780,107,810,112C840,117,870,139,900,149.3C930,160,960,160,990,149.3C1020,139,1050,117,1080,128C1110,139,1140,181,1170,181.3C1200,181,1230,139,1260,138.7C1290,139,1320,181,1350,218.7C1380,256,1410,288,1425,304L1440,320L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"></path></svg>
         </div>

         <div className='login-btn-container'>
            <div className='container-login'>
            <button onClick={handleLogin} type='button' className='login-btn'>
                Login as Demo
            </button>
            </div>

            <div className='login-text'>
           &copy;Zeal v1.0.0 | 2023
           </div> 
         </div>
       </main>
    </div>
  )
}

export default Login