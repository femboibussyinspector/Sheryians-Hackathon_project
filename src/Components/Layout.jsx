// src/Components/Layout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs'; 


const Layout = () => {
  return (
    <>
      <Navbar />
      
      <main className='bg-black text-white pt-16'>
      <Breadcrumbs />
        <Outlet /> 
      </main>
 
    </>
  );
};

export default Layout;