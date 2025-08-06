import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { dashboardMenuItems } from '../constants/dashboard';
import shellLogo from '../assets/images/logo.svg';

const DashboardSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative h-full">
      <nav className={`bg-white border-r border-gray-200 shadow-xl transition-all duration-300 relative z-5 h-full ${collapsed ? 'w-20' : 'w-80'}`}>
        <div className="p-4 h-full flex flex-col">
          {/* Logo Section - Clickable */}
          <div className="mb-6 pb-4 border-b border-gray-100">
            <div 
              className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate('/dashboard')}
            >
              <img src={shellLogo} alt="Shell Logo" className="h-8 w-8" />
              {!collapsed && (
                <span className="text-subheading text-[#346fb7] font-semibold">Shell AI</span>
              )}
            </div>
          </div>

          <ul className="space-y-2 flex-1">
            {dashboardMenuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition-all duration-200 group ${
                        isActive 
                          ? 'bg-gradient-to-r from-red-50 to-red-100 text-red-700 shadow-md' 
                          : 'text-gray-700 hover:bg-[#F5F5F5] hover:text-red-600'
                      }`
                    }
                    end={item.path === '/dashboard'}
                  >
                    <IconComponent 
                      size={20} 
                      className={`transition-colors duration-200 ${
                        collapsed ? 'text-gray-500' : 'text-gray-500 group-hover:text-red-600'
                      }`}
                    />
                    {!collapsed && <span className="truncate text-subheading">{item.label}</span>}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      
      {/* Collapse button positioned on the border */}
      <button
        className="absolute -right-4 top-8 flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-500 hover:text-[#ED1C24] hover:bg-[#F5F5F5] transition-all duration-200 shadow-lg border border-gray-300 z-10"
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <MdChevronRight size={16} /> : <MdChevronLeft size={16} />}
      </button>
    </div>
  );
};

export default DashboardSidebar; 