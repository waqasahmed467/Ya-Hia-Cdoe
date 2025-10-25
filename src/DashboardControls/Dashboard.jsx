import React from 'react'

const Dashboard = () => {
  return (
    <>
    
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-5">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder:text-gray-300"
            />
            <i className="ri-notification-3-line text-2xl cursor-pointer hover:text-yellow-400"></i>
            <i className="ri-user-3-fill text-2xl cursor-pointer hover:text-yellow-400"></i>
          </div>
        </header>

        {/* Cards */}
        <section className="grid grid-cols-4 gap-6 mb-8">
          {["Sales", "Orders", "Users", "Revenue"].map((title, i) => (
            <div key={i} className="bg-black/40 backdrop-blur-lg p-6 rounded-xl text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-3xl font-bold text-yellow-400">$12,300</p>
            </div>
          ))}
        </section>

        {/* Table */}
        <section className="bg-black/40 p-6 rounded-xl backdrop-blur-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="py-2">Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3].map((id)=>(
                <tr key={id} className="border-b border-gray-700 hover:bg-white/10">
                  <td className="py-2">#00{id}</td>
                  <td>John Doe</td>
                  <td>21 Oct 2025</td>
                  <td><span className="text-green-400">Completed</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

    </>
  )
}

export default Dashboard