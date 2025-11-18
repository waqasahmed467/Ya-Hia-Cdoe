import React, { useContext, useEffect } from 'react';
import SlideBar from './SlideBar';
import { DashboardContext, DashboardData } from '../Context/DashboardContext';
import Dashboard from './Dashboard';
import ManageProduct from './ManageProduct';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const MainDashboard = () =>  {
  const { ActiveDash } = useContext(DashboardContext);
  const navigate = useNavigate()

  async function checkUser() {

  const cookies = document.cookie;

  if (!cookies.includes("user=")) {
    navigate("/shoppingApp/loginScreen");
    return;
  }

  console.log("User cookie mil gai:", cookies);
}


  useEffect(()=>{
    
checkUser();
  },[])
    


// navigate('/shoppingApp/loginScreen')

 

  return (

    <div className="flex   text-white">

      <SlideBar/>
     {ActiveDash === 'Dashboard' && <Dashboard />}
{ActiveDash === 'Product' && <ManageProduct />}
{ActiveDash === 'Orders' && <Orders />}
{ActiveDash === 'Users' && <Users />}
{ActiveDash === 'Settings' && <Settings />}

      
    </div>
  );
};

export default MainDashboard;
