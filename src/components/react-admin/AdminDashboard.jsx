// Admin.js
import React from 'react';
import UserTable from './UserTable.jsx';

const AdminDashboard = () => (
  <div className="max-w-4xl mx-auto p-8">
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600  hover:bg-green-600/90 text-white h-10 px-4 py-2">
      Add User
    </button>
  </div>
  <UserTable />
</div>

);

export default AdminDashboard;
