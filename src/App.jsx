import React, { useContext, useEffect, useState } from 'react'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
  import { motion } from 'motion/react'
import CardDetails from './Components/CardDetails'
import { ContextProvider } from './Context/ProductContext'
import BackgroundText from './Components/BackgroundText'
import MainDashboard from './DashboardControls/MainDashboard'
import ManageProduct from './DashboardControls/ManageProduct'
import { DashboardData } from './Context/DashboardContext'
import { ToastContainer } from 'react-toastify'
import AddTocartSlideBar from './Components/AddTocartSlideBar'

const App = () => {
  const {colors,index} = useContext(ContextProvider)
    

  return (
    <>
    
    <motion.div
    className="BigMain w-full relative   "
    animate={{
      background: `linear-gradient(135deg, ${colors[index][0]}, ${colors[index][1]})`,
    }}
    transition={{
      duration: 1,
      ease: 'anticipate',
    }}
    >
      
<BackgroundText/>

      <Routes>
        <Route path="/shoppingApp" element={<Home  />} />
        <Route path="/shoppingApp/CardDetails" element={<CardDetails />} />
        <Route path="/shoppingApp/Dashboard" element={<DashboardData>  <MainDashboard /> </DashboardData>} />
        <Route path="/shoppingApp/ManageProduct" element={<ManageProduct />} />
      </Routes>
    </motion.div>
     <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
<AddTocartSlideBar/>
  </>
  )
}

export default App
