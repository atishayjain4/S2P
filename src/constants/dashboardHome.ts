export interface QuickStat {
  label: string;
  value: string;
  color: string;
}

export interface ActivityItem {
  type: 'success' | 'info' | 'warning';
  message: string;
  time: string;
}

export const dashboardStats: QuickStat[] = [
  { label: 'Total Requests', value: '1,247', color: 'text-[#346fb7]' },
  { label: 'Success Rate', value: '98.5%', color: 'text-green-600' },
  { label: 'Avg Response', value: '2.3s', color: 'text-[#346fb7]' },
];

export const recentActivities: ActivityItem[] = [
  {
    type: 'success',
    message: 'Agent "DataProcessor" completed task successfully',
    time: '2 min ago'
  },
  {
    type: 'info',
    message: 'New integration "API Gateway" configured',
    time: '15 min ago'
  },
  {
    type: 'warning',
    message: 'System maintenance scheduled for tonight',
    time: '1 hour ago'
  },
];

export const dashboardMetrics = {
  activeAgents: 12,
  systemStatus: 'Online',
}; 