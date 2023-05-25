import Login from './Login/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Homes from './UsersSIde/UserHome/Home'
import Project from './AdminSide/Projects/Project';
import AddProject from './AdminSide/Projects/ProjectForm/AddProject';
import EditProject from './AdminSide/Projects/ProjectForm/EditProject';
import EditProduct from './AdminSide/ProductForm/Editproducts';
import NewProduct from './AdminSide/ProductForm/NewProduct';
import EditImage from './AdminSide/ImageForm/EditImage';
import NewImage from './AdminSide/ImageForm/NewImage';
import Home from './component/Home/Home';
import OurServicePage from './component/OurService/OurServicePage';
import PortfolioPage from './component/PortfolioPage/PortfolioPage';
import ServiceDetailsPage from './component/SerciceDetails/serviceDetailsPage';
import SinglePortfolio from './component/SinglePortfolio/SinglePortfolio';
import AboutPage from './component/About/aboutPage';
import ContactPage from './component/Contact/ContactPage';
import AdminGet from './AdminSide/Projects/Admin/AdminGet';
import Admin from './AdminSide/DMINHOME/Admin';
import NewwImage from './AdminSide/components/AddImagesModal/NewImage/NewwImage';


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
          <Route path='/home-three' element={<Home/>} />
          <Route path='/about'exact element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/portfolio' element={<PortfolioPage/>} />
          <Route path='/services' element={<OurServicePage/>} />
          <Route path='/servicesdetails' element={<ServiceDetailsPage/>} />
          <Route path='/project/:id' element={<SinglePortfolio />} />
          <Route path='/singleportfolio' element={<SinglePortfolio />} />

          <Route path='/home' index element={<Admin token={accessToken}/>} />
          <Route path='/admin/projects' element={<Project token={accessToken} />} />
          <Route path='/admin/create/products/:id' element={<NewProduct />} />
          <Route path='/admin/edit/products/:id' element={<EditProduct token={accessToken} />} />
          <Route path='/admin/create/images/:id' element={<NewwImage />} />
          <Route path='/admin/edit/images/:id' element={<EditImage token={accessToken} />} />
          <Route path='/admin/edit/project/:id' element={<EditProject token={accessToken} />} />
          <Route path='/login' element={<Login setToken={handleAccessToken} />} />
          <Route path='/admin' element={<AdminGet token={accessToken} />}/>
          <Route path='/admin/create/project' element={<AddProject token={accessToken} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;