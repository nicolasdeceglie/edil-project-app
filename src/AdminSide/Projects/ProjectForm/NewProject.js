import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const NewProject = () => {
  const navigate = useNavigate()

  const handleCLick = () => {
    navigate('/admin/create/project')
  }
  return (
    <div className='card h-min flex items-center justify-center '>
      <div className='rounded-full h-52 w-52 bg-blue-700  cursor-pointer  bg-opacity-50 hover:bg-opacity-100 duration-300 flex items-center justify-center' onClick={handleCLick}>
        <div className='text-7xl text-white' >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  )
}

export default NewProject