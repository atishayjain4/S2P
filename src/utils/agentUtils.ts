export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'active': return 'bg-green-500';
    case 'inactive': return 'bg-gray-400';
    case 'maintenance': return 'bg-yellow-500';
    default: return 'bg-gray-400';
  }
};

export const getStatusText = (status: string): string => {
  switch (status) {
    case 'active': return 'Active';
    case 'inactive': return 'Inactive';
    case 'maintenance': return 'Maintenance';
    default: return 'Unknown';
  }
}; 