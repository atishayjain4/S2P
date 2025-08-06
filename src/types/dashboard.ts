import React from 'react';

export interface DashboardMenuItem {
  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export interface ContentPageData {
  title: string;
  description: string;
  content: string;
} 