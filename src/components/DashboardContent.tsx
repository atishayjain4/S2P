import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AIFactoryPage from './AIFactoryPage';
import AgentConfigurationScreen from './AgentConfigurationScreen';
import { contentMap } from '../constants/dashboard';

const DashboardContent: React.FC = () => (
  <Routes>
    <Route path="ai-factory" element={<AIFactoryPage />} />
    <Route path="agent-configurations" element={<AgentConfigurationScreen />} />
    {Object.entries(contentMap).map(([key, data]) => {
      // Skip agent-configurations since we have a dedicated component for it
      if (key === 'agent-configurations') return null;
      
      return (
        <Route
          key={key}
          path={key}
          element={
            <div className="flex-1 bg-[#F5F5F5] p-8">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                  <h2 className="text-heading text-gray-800 mb-2 font-bold">{data.title}</h2>
                  <p className="text-subheading text-[#005DAA] mb-6">{data.description}</p>
                  <div className="bg-[#F5F5F5] rounded-lg p-6 border border-gray-100 shadow-sm">
                    <p className="text-regular text-gray-700 leading-relaxed">{data.content}</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      );
    })}
    <Route path="" element={<Navigate to="ai-factory" replace />} />
  </Routes>
);

export default DashboardContent; 