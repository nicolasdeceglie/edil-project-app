import { useEffect, useState } from "react";
import { usePost, usePutProject } from "../../../_Utils/Hooks";
import "./ProjectForm.css"
import { useNavigate } from "react-router-dom";
import Alert from '../../Alert/Alert'
export default function ProjectForm({ data = {} }) {
    const token = localStorage.getItem('access_token')
    const navigate = useNavigate()
    const [alertShow, setAlertShow] = useState(false); 
    const [alertMessage, setAlertMessage] = useState("");
   
    const [project, setProject] = useState({
        name: '',
        description: '',
        address: '',
        city: '',
        cap: ''
    });
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
    const projectPutData = usePutProject('http://localhost:8080/admin/update/project', token, data.id)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.id > 0) {
            projectPutData(project, submitSuccess);
            
            
        } else {
            projectPostData(project, submitSuccess)
            
        }
    }
    const submitSuccess = () => {
        setAlertMessage("Salvataggio completato")
        setAlertShow(true);
        console.log(alertShow)
    }
    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/admin/projects", {replace: true});
        
    }
    const handleChange = (e) => {
        setProject((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        });
    };

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
                    <button type="submit">
                    Salva
                    </button>
                </div>
            </form>
            
            <Alert show={alertShow} onHide={alertDismiss} message ={alertMessage} />
        </>
    )
};