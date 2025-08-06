export interface Agent {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'maintenance';
  lastActivity: string;
  performance: number;
  description: string;
}

export interface MenuItem {
  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number }>;
  active?: boolean;
} 