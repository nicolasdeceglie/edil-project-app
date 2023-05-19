import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { useGet, useGetToken } from '../../../_Utils/Hooks';
import ProjectForm from './ProjectForm';
const EditProject = ({token}) => {
    const {id} = useParams()
    const {data, error} = useGetToken('http://localhost:8080/admin/project', token, id)
  return (
    
    <div className='m-2 p-2 border'>
        <h5 className='text-4xl text-black'>Modifica progetto</h5>
        <ProjectForm data={data} id={id}/>
    </div>
  )
}

export default EditProject;