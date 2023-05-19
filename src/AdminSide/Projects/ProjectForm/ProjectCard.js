import React, { useDebugValue, useState } from 'react'
import { useDelete } from '../../../_Utils/Hooks'
import Alert from '../../Alert/Alert'
import { Link } from 'react-router-dom'
import { BsThreeDots } from 'react-icons/bs'
const ProjectCard = ({ data = {}, deleteSuccess }) => {

  const [open, setOpen] = useState(false)
  const token = localStorage.getItem('access_token')
  const deleteData = useDelete('http://localhost:8080/admin/delete/project', data.id, token)
  const [alertMessage, setAlertMessage] = useState('')
  const [show, setShow] = useState(false);
  const performDelete = () => {
    deleteData(deleteSuccess)
  }
  const handleCLick = () => {
    setOpen(!open)
  }

  return (
    <section className="flex flex-col  bg-slate-800 text-black bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30">
      <div className="flex flex-col w-min gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row ">
        <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse">
          immagine
        </div>
        <div className="flex flex-col flex-1 gap-5 sm:p-2">
          <div className="flex flex-col flex-1 gap-3">
            <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl">
              {data.name}
            </div>
            <div className="w-full h-max bg-gray-200 animate-pulse rounded-2xl">
              {data.description}
            </div>
          </div>
          <div className="flex gap-3 mt-auto">
            <Link to={'/admin/edit/project/' + data.id} className='button-primary' >
              Modifica
            </Link>
            <button className='danger-button' onClick={performDelete}>
              Elimina
            </button>
            <Link id='dropdownButton' className="w-20 h-8 ml-auto bg-gray-200 rounded-full " onClick={handleCLick}>
              <BsThreeDots />
              {open ? <div id="dropdown" className="z-10  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <Link to={'/admin/create/products/' + data.id} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Aggiungi immagini</Link>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Aggiungi prodotti</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Elimina immagini</a>
                  </li>
                  <li>
                    <Link to={'/admin/edit/products/' + data.id} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Modifica prodotti</Link>
                  </li>
                </ul>
              </div> : ''}
            </Link>
          </div>
        </div>
      </div>
    </section>
    //   <main classNameName='shadow-lg  mx-auto py-36 flex items-center justify-center bg-slate-800'>


    //     <div className='card  '>
    //       <img src='https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-36703721.jpg' className='w-full h-full object-cover' />
    //       <div className='p-5 flex flex-col gap-3'>
    //         <div className='flex items-center gap-2'>
    //         </div>
    //         <h2 className='product-title' title='Best Headphone Ever'>
    //           {data.name}
    //         </h2>

    //         <div>
    //           <p className='whitespace-nowrap text-center '>{data.description}</p>
    //         </div>
    //       </div>
    //       <span className='flex items-center mt-1'>
    //         {/* area rating in caso vogliamo inserirla */}
    //         <span className='text-xs ml-2 text-gray-500'>20k reviews</span>
    //       </span>

    //       <div className="mt-5 flex gap-2">
    //         <Link to={'/admin/edit/project/' + data.id} className='button-primary' >
    //           Modifica
    //         </Link>
    //         <button className='danger-button' onClick={performDelete}>
    //           Elimina
    //         </button>


    //       </div>

    //     </div>

    // </main>

  );
}



export default ProjectCard