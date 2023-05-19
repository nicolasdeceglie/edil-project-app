import React, { useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Button from './Button.js/Button'


const Nav = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"PROGETTI",link:"/"},
      {name:"CONTATTACI",link:"/"}
    ];
    const [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-blue-700 py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-Lato  text-gray-800'>
        <span className='text-2xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        Designer
      </div>
     
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
      {open ? <AiOutlineClose /> : <HiBars3BottomRight /> }
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-700 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-19 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-white hover:text-blue-400 duration-500'>{link.name}</Link>
            </li>
          ))
        }
        <Button>
          Accedi
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Nav