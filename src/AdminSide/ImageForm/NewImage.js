import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Projects/AdminNav/Navbar'
import ImageForm from './ImageForm'

const NewImage = () => {

  const { id } = useParams()
  return (
    <>
      <section className=''>
        <Navbar />
        <h5 className='text-black text-4xl'>Nuovo progetto</h5>
        <ImageForm id={id} />
      </section>
    </>
  )
}

export default NewImage