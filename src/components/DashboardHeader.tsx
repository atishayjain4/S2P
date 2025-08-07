import React from 'react';
import shellLogo from '../assets/images/logo.svg';

const DashboardHeader: React.FC = () => (
  <header className="flex items-center justify-between bg-gradient-to-r from-[#346fb7] to-[#2d5a9e] border-b-2 border-[#346fb7] px-8 py-3 relative z-10 shadow-sm">
    <div className="flex items-center space-x-8">
      <img src={shellLogo} alt="Shell Logo" className="h-10 w-10" />
    </div>
    <h1 className="text-heading text-white font-bold">AI Dashboard</h1>
    <div className="w-24" />
  </header>
);

export default DashboardHeader; 