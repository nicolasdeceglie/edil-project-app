import { useEffect, useRef, useState } from "react";
import { useGet, useGetToken, usePost, usePut } from "../../../_Utils/Hooks";
import Navbar from "../AdminNav/Navbar";
import "./ProjectForm.css"

export default function ProjectForm({ data = {} }) {
    const token = localStorage.getItem('access_token')
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [alertShow, setAlertShow] = useState(false); // Variabile di stato per gestire la visualizzazione dell'alert
    const [alertMessage, setAlertMessage] = useState("");
   
    //const [preview, setPreview] = useState({data.image ? base64prefix + data.image : ''})
    const [project, setProject] = useState({
        name: '',
        description: '',
        address: '',
        city: '',
        cap: ''
    });
    // const [image, setImage] = useState({
    //     name: '',
    //     image: '',
    //     idProject: project.id
    // });
    // const [product, setProduct] = useState({
    //     product: [],
    //     idProject: project.id
    // })
    useEffect(() => {
        if (data.id > 0) {
            setProject({
                name: data.name,
                description: data.description,
                address: data.address,
                city: data.city,
                cap: data.cap
            });
        }
    }, [data])


    const projectPostData = usePost('http://localhost:8080/admin/create/project', token)
    const projectPutData = usePut('http://localhost:8080/admin/update/project', token, data.id)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.id > 0) {
            projectPutData(project, submitSuccess);
            setIsLoading(true)
        } else {
            projectPostData(project, submitSuccess)
            setIsLoading(true)
            
            
        }
        // Codice per Salvataggio

    }
    const submitSuccess = () => {
        setAlertMessage("Salvataggio completato")
        setAlertShow(true);
        setSuccess(true)
    }
    const handleChange = (e) => {
        setProject((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        });


    };
    // const getBase64 = async (file) => {
    //     const base64prefix = "data:image/jpeg;base64,"
    //     let reader = new FileReader();
    //     await reader.readAsDataURL(file);
    //     reader.onload = function () {
    //         //setPreview(render.result)
    //         setImage((prevValues) => {
    //             return {
    //                 ...prevValues,
    //                 "image": reader.result.replace(base64prefix, "")
    //             }
    //         });
    //     };
    //     reader.onerror = function (error) {
    //         console.log('Error: ', error);
    //     };
    // }


    return (
        <>

            <form action="" onSubmit={handleSubmit}>

                <div className="bg-blue-800 h-screen gap-3 overflow-hidden flex flex-col items-center justify-center">
                    <label className="text-black">Nome
                        <input type="text" name="name" value={project.name} onChange={handleChange} />
                    </label>
                    <label className="text-black">Descrizione
                        <input type="text" name="description" value={project.description} onChange={handleChange} />
                    </label>
                    <label className="text-black">city
                        <input type="text" name="city" value={project.city} onChange={handleChange} />
                    </label>
                    <label className="text-black">cap
                        <input type="text" name="cap" value={project.cap} onChange={handleChange} />
                    </label>
                    <label className="text-black">address
                        <input type="text" name="address" value={project.address} onChange={handleChange} />
                    </label>
                    
                    <input type="file" className="file:bg-gradient-to-b file:from-blue-600 file:to-blue-700 file:px-6 file:py-3 file:m-5 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-blue-700/50 bg-gradient-to-br from-gray-600 to-gray-700 text-white/80 rounded-full  cursor-pointer shadow-xl shadow-gray-700/60" onChange={handleChange} />
                    
                    <button type="submit" disabled={isLoading} className={`${isLoading ? "loading": "" } 
                    ${success ? "success": ""} ${error} ? "error" : "" } `}>{isLoading ? ("") : success ? (<i className="fas fa-check"></i>) : error ? (<i className="fas fa-exclamation-circle"></i>) : ("Salva")}
                    </button>
                </div>
            </form>
        </>
    )
};