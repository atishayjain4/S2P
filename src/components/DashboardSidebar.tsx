import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { dashboardMenuItems } from '../constants/dashboard';

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
              <img 
                src="data:image/svg+xml;utf-8,%3Csvg%20id%3D%22Shell_x5F_2012_x5F_PECTEN_x5F_RGB%22%20version%3D%221.1%22%20viewBox%3D%220%200%2024%2024%22%20xml%3Aspace%3D%22preserve%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Crect%20x%3D%22-12.1%22%20y%3D%22-103.7%22%20width%3D%22141.7%22%20height%3D%22141.7%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%3Cg%20transform%3D%22matrix(.22054%200%200%20.22054%20-.94555%20-.53756)%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22m54.6%2087.8h-18l-1.6-13.3-11-7.9c-0.5-2.3-0.7-4.7-0.7-7.1%200-19.6%2015.9-35.4%2035.4-35.4%2019.6%200%2035.4%2015.9%2035.4%2035.4%200%202.4-0.2%204.8-0.7%207.1l-10.9%207.9-1.7%2013.3h-18l-1%200.8c-0.9%200.7-2%201-3.1%201s-2.2-0.4-3.1-1z%22%20fill%3D%22%23fbce07%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22m54.6%2087.8h-18l-1.6-13.3-11-7.9c-0.5-2.3-0.7-4.7-0.7-7.1%200-19.6%2015.9-35.4%2035.4-35.4s35.4%2015.9%2035.4%2035.4c0%202.4-0.2%204.8-0.7%207.1l-10.9%207.9-1.7%2013.3h-18l-1%200.8c-0.9%200.7-2%201-3.1%201s-2.2-0.4-3.1-1zm0.6-6.2h-13.1l-1.3-10.6-10.8-7.8c-0.3-1.2-0.5-2.5-0.5-3.8%200-2.1%200.4-4.2%201.3-6.1l19.1%2019.3-18.5-22.9c0.7-3%202.3-5.6%204.6-7.7l16.6%2028.7-14.7-31.3c1.9-2.5%204.6-4.4%207.6-5.3l10.2%2035.6-7.4-37.1c2.3-1.3%204.8-1.9%207.4-1.9%200.5%200%201.1%200%201.6%200.1l1.5%2038.5%201.5-38.5c0.5-0.1%201.1-0.1%201.6-0.1%202.6%200%205.1%200.7%207.4%201.9l-7.4%2037.1%2010.2-35.7c3%200.9%205.7%202.8%207.6%205.3l-14.8%2031.4%2016.6-28.7c2.3%202%203.9%204.7%204.6%207.7l-18.5%2022.9%2019.1-19.3c0.9%201.9%201.3%204%201.3%206.1%200%201.3-0.2%202.5-0.5%203.8l-10.8%207.8-1.3%2010.6h-13l-2%201.4c-0.5%200.4-1.1%200.5-1.7%200.5s-1.2-0.2-1.7-0.5z%22%20fill%3D%22%23dd1d21%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E" 
                alt="Shell Logo" 
                className="h-8 w-8 object-contain"
              />
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