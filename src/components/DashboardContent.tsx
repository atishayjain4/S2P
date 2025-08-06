import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AIFactoryPage from './AIFactoryPage';

const contentMap: Record<string, { title: string; description: string; content: string }> = {
  'agent-configurations': {
    title: 'Agent Configurations',
    description: 'Manage your Agent Configurations here.',
    content: 'Configure and customize AI agents for different use cases and requirements.'
  },
  'agent-communications': {
    title: 'Agent Communications',
    description: 'View and manage Agent communications.',
    content: 'Monitor and manage communication channels between AI agents and systems.'
  },
  'ai-integrations': {
    title: 'AI Integrations',
    description: 'Integrate with various AI services.',
    content: 'Connect and integrate with external AI services, APIs, and platforms.'
  },
  'agent-observability': {
    title: 'Agent Observability',
    description: 'Monitor Agent Observability metrics.',
    content: 'Track performance, health, and behavior metrics of your AI agents.'
  },
  'analytics': {
    title: 'Analytics',
    description: 'Access Analytics and reports.',
    content: 'View comprehensive analytics, reports, and insights about your AI operations.'
  },
};

const DashboardContent: React.FC = () => (
  <Routes>
    <Route path="ai-factory" element={<AIFactoryPage />} />
    {Object.entries(contentMap).map(([key, data]) => (
      <Route
        key={key}
        path={key}
        element={
          <div className="flex-1 bg-[#F5F5F5] p-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <h2 className="text-heading text-gray-800 mb-2">{data.title}</h2>
                <p className="text-subheading text-[#005DAA] mb-6">{data.description}</p>
                <div className="bg-[#F5F5F5] rounded-lg p-6 border border-gray-100 shadow-sm">
                  <p className="text-regular text-gray-700 leading-relaxed">{data.content}</p>
                </div>
              </div>
            </div>
          </div>
        }
      />
    ))}
    <Route path="" element={<Navigate to="ai-factory" replace />} />
  </Routes>
);

export default DashboardContent; 