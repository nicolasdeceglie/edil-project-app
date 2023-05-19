
import React, { useState } from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import Navbar from '../navbar/Navbar'
import Hero from '../HeroSection/Hero'
const Home = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
        <section className="flex flex-col min-h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30">
        <Navbar />
        <Hero />


        </section>
    </>
  )
}

export default Home