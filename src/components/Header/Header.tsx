import React from 'react';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => (
  <header className="flex items-center bg-white shadow px-6 py-3">
    <img src={logo} alt="Shell Logo" className="h-16 w-16 mr-4" />
    <h1 className="text-2xl font-bold text-gray-800">Shell AI</h1>
  </header>
);

export default Header; 