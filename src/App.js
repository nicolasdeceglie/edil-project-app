import Login from './Login/Login';
import AdminGet from './AdminSide/Projects/Admin/AdminGet';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import {axios} from 'axios';
import Home from './UsersSIde/UserHome/Home'
import Project from './AdminSide/Projects/Project';

import AddProject from './AdminSide/Projects/ProjectForm/AddProject';
import EditProject from './AdminSide/Projects/ProjectForm/EditProject';
import EditProduct from './AdminSide/ProductForm/Editproducts';
import NewProduct from './AdminSide/ProductForm/NewProduct';

function App() {

  
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token') || null);

  const handleAccessToken = (token) => {
    setAccessToken(token);
    localStorage.setItem('access_token', token);
  }

  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route path='/home' index element={<Home />}/>
          <Route path='/admin/projects' element={<Project token={accessToken}/>} />
          <Route path='/admin/create/products/:id' element={<NewProduct token={accessToken}/>} /> 
          <Route path='/admin/edit/products/:id' element={<EditProduct token={accessToken}/>} /> 
          <Route path='/admin/edit/project/:id' element={<EditProject token={accessToken} />} />
          <Route path='/login' element={<Login setToken={handleAccessToken}/>}/>
          <Route path='/admin' element={<AdminGet token={accessToken} />}/>
          <Route path='/admin/create/project' element={<AddProject token={accessToken} />}/> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;