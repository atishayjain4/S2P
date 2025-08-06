import React from 'react';
import { dashboardStats, recentActivities, dashboardMetrics } from '../constants/dashboardHome';
import { getActivityStatusColor } from '../utils/activityUtils';

const DashboardHome: React.FC = () => {
  return (
    <div className="flex-1 bg-[#F5F5F5] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Welcome Card */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <h2 className="text-heading text-gray-800 mb-4 font-bold">Welcome to AI Dashboard</h2>
            <p className="text-regular text-gray-700 mb-4">
              Manage your AI operations, monitor agent performance, and configure your intelligent systems from this central dashboard.
            </p>
            <div className="flex space-x-4">
              <div className="bg-[#346fb7] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Active Agents: {dashboardMetrics.activeAgents}
              </div>
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                System Status: {dashboardMetrics.systemStatus}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <h3 className="text-subheading text-gray-800 mb-4 font-bold">Quick Stats</h3>
            <div className="space-y-3">
              {dashboardStats.map((stat) => (
                <div key={stat.label} className="flex justify-between">
                  <span className="text-regular text-gray-600">{stat.label}</span>
                  <span className={`text-regular font-medium ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
          <h3 className="text-subheading text-gray-800 mb-4 font-bold">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-[#F5F5F5] rounded-lg">
                <div className={`w-2 h-2 ${getActivityStatusColor(activity.type)} rounded-full`}></div>
                <span className="text-regular text-gray-700">{activity.message}</span>
                <span className="text-regular text-gray-500 ml-auto">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome; 