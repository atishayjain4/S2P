import React, { useState } from 'react';
import { Agent } from '../types/agent';
import { aiFactoryMenuItems, agentsByCategory } from '../constants/aiFactory';
import { getStatusColor, getStatusText } from '../utils/agentUtils';

const AIFactoryPage: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [activeMenu, setActiveMenu] = useState('sourcing');

  // Get the current category label and agents
  const currentCategory = aiFactoryMenuItems.find(item => item.path === activeMenu);
  const currentAgents = agentsByCategory[activeMenu] || [];

  return (
    <div className="flex-1 bg-[#F5F5F5] flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <h3 className="text-subheading text-gray-800 mb-4 font-bold">AI Factory</h3>
        <ul className="space-y-2">
          {aiFactoryMenuItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => setActiveMenu(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 text-left ${
                  activeMenu === item.path
                    ? 'bg-gradient-to-r from-red-50 to-red-100 text-red-700 shadow-md'
                    : 'text-gray-700 hover:bg-[#F5F5F5] hover:text-red-600'
                }`}
              >
                <item.icon size={20} />
                <span className="text-subheading">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-heading text-gray-800 mb-2 font-bold">{currentCategory?.label} Agents</h2>
            <p className="text-regular text-gray-600">
              Manage and monitor your {currentCategory?.label.toLowerCase()} AI agents. Click on any agent to view detailed information.
            </p>
          </div>

          {/* Agent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentAgents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 cursor-pointer hover:shadow-xl transition-all duration-200"
                onClick={() => setSelectedAgent(agent)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-subheading text-gray-800 font-bold">{agent.name}</h3>
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(agent.status)}`}></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-regular text-gray-600">Status</span>
                    <span className={`text-regular font-medium ${
                      agent.status === 'active' ? 'text-green-600' : 
                      agent.status === 'maintenance' ? 'text-yellow-600' : 'text-gray-500'
                    }`}>
                      {getStatusText(agent.status)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-regular text-gray-600">Performance</span>
                    <span className="text-regular font-medium text-[#346fb7]">{agent.performance}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-regular text-gray-600">Last Activity</span>
                    <span className="text-regular text-gray-500">{agent.lastActivity}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-regular text-gray-600 line-clamp-2">{agent.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agent Info Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-heading text-gray-800 font-bold">{selectedAgent.name}</h2>
                <button
                  onClick={() => setSelectedAgent(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-subheading text-gray-600 font-bold">Status</label>
                    <p className={`text-regular font-medium ${
                      selectedAgent.status === 'active' ? 'text-green-600' : 
                      selectedAgent.status === 'maintenance' ? 'text-yellow-600' : 'text-gray-500'
                    }`}>
                      {getStatusText(selectedAgent.status)}
                    </p>
                  </div>
                  <div>
                    <label className="text-subheading text-gray-600 font-bold">Performance</label>
                    <p className="text-regular font-medium text-[#346fb7]">{selectedAgent.performance}%</p>
                  </div>
                  <div>
                    <label className="text-subheading text-gray-600 font-bold">Last Activity</label>
                    <p className="text-regular text-gray-500">{selectedAgent.lastActivity}</p>
                  </div>
                  <div>
                    <label className="text-subheading text-gray-600 font-bold">Agent ID</label>
                    <p className="text-regular text-gray-500">{selectedAgent.id}</p>
                  </div>
                </div>

                <div>
                  <label className="text-subheading text-gray-600 font-bold">Description</label>
                  <p className="text-regular text-gray-700 mt-2">{selectedAgent.description}</p>
                </div>

                <div className="flex space-x-4 pt-4 border-t border-gray-200">
                  <button className="btn-primary">Configure Agent</button>
                  <button className="btn-secondary">View Logs</button>
                  <button 
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    onClick={() => setSelectedAgent(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIFactoryPage; 