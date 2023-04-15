import React, { useState } from 'react';
import Dashboard from '../components/Dashboard/Dashboard.Component';

function DashboardPage() {
    return (
        <>
          <div className='container mx-auto px-4 md:px-12 mt-8 mb-12'>
            <Dashboard />
          </div>
        </>
      );
}

export default DashboardPage;