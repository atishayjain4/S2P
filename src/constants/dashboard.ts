import { 
  MdDashboard,
  MdFactory,
  MdSettings,
  MdChat,
  MdIntegrationInstructions,
  MdVisibility,
  MdAnalytics
} from 'react-icons/md';
import { DashboardMenuItem, ContentPageData } from '../types/dashboard';

export const dashboardMenuItems: DashboardMenuItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: MdDashboard },
  { label: 'AI Factory', path: '/dashboard/ai-factory', icon: MdFactory },
  { label: 'Agent Configurations', path: '/dashboard/agent-configurations', icon: MdSettings },
  { label: 'Agent communications', path: '/dashboard/agent-communications', icon: MdChat },
  { label: 'AI Integrations', path: '/dashboard/ai-integrations', icon: MdIntegrationInstructions },
  { label: 'Agent Observability', path: '/dashboard/agent-observability', icon: MdVisibility },
  { label: 'Analytics', path: '/dashboard/analytics', icon: MdAnalytics },
];

export const contentMap: Record<string, ContentPageData> = {
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