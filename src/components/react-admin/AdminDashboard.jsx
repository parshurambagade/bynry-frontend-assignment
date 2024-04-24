// Admin.js
import React, { useEffect, useState } from 'react';
import UserTable from './UserTable.jsx';
import { Link } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';

const AdminDashboard = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    // This will setup real-time updates from Firestore
    const unsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      console.log(snapshot.docs)
        const usersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(usersData);

    });
    console.log(users);
    // Clean up the listener when the component unmounts
    return () => unsubscribe();
}, []);


  return (
  <div className="max-w-4xl mx-auto p-8">
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
    <Link to={'/admin/add-user'} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600  hover:bg-green-600/90 text-white h-10 px-4 py-2">
      Add User
    </Link>
  </div>
  <UserTable users={users} />
</div>

);

}

export default AdminDashboard;
