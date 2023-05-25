import React, { useState } from 'react'
import { useGet, useGetToken } from '../../_Utils/Hooks'
import NewProject from './ProjectForm/NewProject'
import Navbar from './AdminNav/Navbar'
import ProjectCard from './ProjectForm/ProjectCard'
import Alert from '../Alert/Alert'
const Project = ({token}) => {
  const { data, error, isLoading, mutate } = useGetToken('http://localhost:8080/admin/projects', token)
  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage]=  useState('')
  
  
  const alertDismiss = () => {
    setAlertShow(false)
    mutate()
}
  const deleteSuccess = () =>{
    setAlertMessage('Eliminazione completata!');
    setAlertShow(true);
  }

if(data){

  return (
    <>
      <Navbar />
      <main className='bg-white flex '>
      <section className='shadow-lg mx-auto h-screen py-36 flex flex-col mb-80 gap-5 '>
          {data.map(project => (
            <ProjectCard key={project.id} deleteSuccess={deleteSuccess} data={project}/>
          ))}
      </section>

         

      </main>
          <Alert show={alertShow} onHide={alertDismiss} message={alertMessage}/>
    </>
  )
}
}

export default Project

{/* 00:25:15	Alexandru:	const base64prefix = "data:image/jpeg;base64,"
00:35:35	Alexandru:	const getBase64 = async (file, container) => {
        var reader = new FileReader();
        const base64prefix = "data:image/jpeg;base64,"
        await reader.readAsDataURL(file);
        reader.onload = function () {
            setSong((prevValues) => {
                return {
                    ...prevValues,
                    "cover":  reader.result.replace(base64prefix, "")
                }
            });
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
     }
00:47:34	Alexandru:	https://www.sitepoint.com/mime-types-complete-list/ */}