import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

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
    <div className="flex items-center justify-center h-screen bg-slate-800">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md p-8">
        <div className="text-center font-bold text-blue-700 text-3xl mb-6">
          Edil<span className="text-4xl">Project</span>
        </div>
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Accedi se sei un admin</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center bg-gray-100 rounded-full mb-4">
            <FaRegEnvelope className="text-gray-400 mx-3" />
            <input
              type="email"
              name="email"
              placeholder="esempio@mail.com"
              className="bg-gray-100 outline-none text-lg flex-1 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center bg-gray-100 rounded-full mb-4">
            <MdLockOutline className="text-gray-400 mx-3" />
            <input
              type="password"
              name="password"
              placeholder="********"
              className="bg-gray-100 outline-none text-lg flex-1 py-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white rounded-full py-3 px-8 font-semibold hover:bg-blue-600"
          >
            Accedi
          </button>
        </form>
        <p className="text-base text-center mt-4">
          Non hai un account? <a href="#">Crea uno!</a>
        </p>
      </div>
    </div>
  );


}