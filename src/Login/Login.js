import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

import AdminGet from "../AdminSide/Projects/Admin/AdminGet";
import { FaRegEnvelope } from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
export default function LoginForm({ setToken, darkMode }) {

  
  const URL = 'http://localhost:8080/auth/authenticate';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit =  (event) => {
    event.preventDefault();
     axios.post(URL, {
        email: email,
        password: password 
    })
    .then(response => {
        const { access_token} = response.data;
        setToken(access_token);
        navigate("/admin")
        window.location.reload()
    })
    .catch(error => {
        console.error('Login error', error);
    })
    
  };
  

  return (
    <div className="flex flex-col items-center justify-center h-screen py-2 bg-slate-800">
    <div className="flex items-center justify-center h-screen  px-20 text-center">
      <div className="bg-white items-center content-center rounded-2xl shadow-2xl flex w-full max-w-4xl ">
        <div className="w-full p-5 ">
          <div className="text-left font-bold">
            <span className="text-blue-700">Edil</span>Project 
          </div>
          <div className="py-10 items-center justify-center ">
            <h2 className="text-3xl font-bold text-blue-700 mb-2">Accedi se sei un admin</h2>
            <div className="border-2 w-10 border-blue-700 inline-block mb-2" />
             <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className='text-gray-400 mr-2'/>
                <input type="email" name="email" placeholder="esempio@mail.com" className="bg-gray-100 outline-none text-sm flex-1" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className='text-gray-400 mr-2'/>
                <input type="password" name="password" placeholder="********" className="bg-gray-100 outline-none text-sm flex-1"  value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <button  className="border-2 border-blue-700 text-blue-700 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-700 hover:text-white" onClick={handleSubmit}>Accedi</button>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* 
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-5 py-5">
      <form onSubmit={handleSubmit}>
        <div className="w-full px-3 mb-5">
            <label htmlFor="email" className="text-xs font-semibold px-1">email:</label>
          <div>
            <div><i className="mdi mdi-email-outline"></i></div>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div> */}
    </div>
    
  )
}