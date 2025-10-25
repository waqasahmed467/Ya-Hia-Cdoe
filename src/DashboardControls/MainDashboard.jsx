import React, { useContext } from 'react';
import SlideBar from './SlideBar';
import { DashboardContext, DashboardData } from '../Context/DashboardContext';
import Dashboard from './Dashboard';
import ManageProduct from './ManageProduct';

const MainDashboard = () =>  {

 const { ActiveDash } = useContext(DashboardContext);



 

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
