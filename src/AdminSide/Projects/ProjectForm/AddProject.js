import React from 'react'
import Navbar from '../AdminNav/Navbar'
import ProjectForm from './ProjectForm'
const AddProject = () => {
  return (
    <>
        <section className=''>
        <Navbar/>
            <h5 className='text-black text-4xl'>Nuovo progetto</h5>
            <ProjectForm />
        </section>
    </>
  )
}

export default AddProject