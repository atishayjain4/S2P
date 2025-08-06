import React from 'react';

const DashboardHome: React.FC = () => {
  return (
    <div className="flex-1 bg-[#F5F5F5] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Welcome Card */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <h2 className="text-heading text-gray-800 mb-4">Welcome to AI Dashboard</h2>
            <p className="text-regular text-gray-700 mb-4">
              Manage your AI operations, monitor agent performance, and configure your intelligent systems from this central dashboard.
            </p>
            <div className="flex space-x-4">
              <div className="bg-[#346fb7] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Active Agents: 12
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                System Status: Online
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <h3 className="text-subheading text-gray-800 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-regular text-gray-600">Total Requests</span>
                <span className="text-regular font-medium text-[#346fb7]">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-regular text-gray-600">Success Rate</span>
                <span className="text-regular font-medium text-green-600">98.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-regular text-gray-600">Avg Response</span>
                <span className="text-regular font-medium text-[#346fb7]">2.3s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
          <h3 className="text-subheading text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-[#F5F5F5] rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-regular text-gray-700">Agent "DataProcessor" completed task successfully</span>
              <span className="text-regular text-gray-500 ml-auto">2 min ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-[#F5F5F5] rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-regular text-gray-700">New integration "API Gateway" configured</span>
              <span className="text-regular text-gray-500 ml-auto">15 min ago</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-[#F5F5F5] rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-regular text-gray-700">System maintenance scheduled for tonight</span>
              <span className="text-regular text-gray-500 ml-auto">1 hour ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome; 