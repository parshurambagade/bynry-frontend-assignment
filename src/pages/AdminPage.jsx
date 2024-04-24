import React from 'react';
import { Outlet } from 'react-router-dom'; // Ensure to import Outlet
import { getAllUsers } from '../api/firestore-apis';
import { insertMultipleUsers } from '../api/insertMultipleData';

const AdminPage = () => {
  
  return (
    <div className='min-h-[35rem] 2xl:min-h-[49rem]'>
        <Outlet /> {/* This component renders the matched child route component */}
    </div>
  );
};

export default AdminPage;
