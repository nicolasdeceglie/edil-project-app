import Login from './Login/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';

import Home from './component/Home/Home';
import OurServicePage from './component/OurService/OurServicePage';
import PortfolioPage from './component/PortfolioPage/PortfolioPage';
import SinglePortfolio from './component/SinglePortfolio/SinglePortfolio';
import AboutPage from './component/About/aboutPage';
import ContactPage from './component/Contact/ContactPage';
import Admin from './AdminSide/Admin';


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
          <Route path='/home' index element={<Home/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/projects' element={<PortfolioPage/>} />
          <Route path='/services' element={<OurServicePage/>} />
          <Route path='/project/:id' element={<SinglePortfolio />} />
          <Route path='/admin'  element={<Admin token={accessToken}/>} />
          <Route path='/login' element={<Login setToken={handleAccessToken} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;