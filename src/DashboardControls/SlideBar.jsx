import React, { useContext } from 'react'
import { DashboardContext } from '../Context/DashboardContext'

const SlideBar = () => {
const {setActiveDash} =  useContext(DashboardContext);


  return (
    <aside className="w-64  bg-black/30 backdrop-blur-lg p-5 flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <nav className="flex flex-col gap-3 text-lg">
          <a  onClick={()=> setActiveDash('Dashboard')} className="hover:text-yellow-400 transition">🏠 Dashboard</a>
          <a onClick={()=> setActiveDash('Product')} className="hover:text-yellow-400 transition">📦 Products</a>
          <a onClick={()=> setActiveDash('Order')} className="hover:text-yellow-400 transition">🛒 Orders</a>
          <a onClick={()=> setActiveDash('Users')} className="hover:text-yellow-400 transition">👤 Users</a>
          <a onClick={()=> setActiveDash('Setting')} className="hover:text-yellow-400 transition">⚙️ Settings</a>
        </nav>
      </aside>
  )
}

export default SlideBar