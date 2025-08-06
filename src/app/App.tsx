import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHome from '../components/DashboardHome';
import DashboardContent from '../components/DashboardContent';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col bg-gray-100">
        <DashboardHeader />
        <div className="flex flex-1 overflow-hidden">
          <DashboardSidebar />
          <div className="flex-1">
            <Routes>
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/*" element={<DashboardContent />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
