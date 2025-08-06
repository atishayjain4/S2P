export const getActivityStatusColor = (type: 'success' | 'info' | 'warning'): string => {
  switch (type) {
    case 'success': return 'bg-green-500';
    case 'info': return 'bg-blue-500';
    case 'warning': return 'bg-yellow-500';
    default: return 'bg-gray-500';
  }
}; 