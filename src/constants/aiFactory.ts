import { MdBusiness, MdDescription, MdShoppingCart, MdPayment, MdLocalShipping, MdPeople, MdInventory, MdLocalShipping as MdLogistics, MdAnalytics } from 'react-icons/md';
import { MenuItem, Agent } from '../types/agent';

export const aiFactoryMenuItems: MenuItem[] = [
  { label: 'Sourcing', path: 'sourcing', icon: MdBusiness, active: true },
  { label: 'Supplier Contracts', path: 'supplier-contracts', icon: MdDescription },
  { label: 'Buying', path: 'buying', icon: MdShoppingCart },
  { label: 'Payments', path: 'payments', icon: MdPayment },
  { label: 'Supply Chain', path: 'supply-chain', icon: MdLocalShipping },
  { label: 'Suppliers', path: 'suppliers', icon: MdPeople },
  { label: 'Inventory', path: 'inventory', icon: MdInventory },
  { label: 'Logistics', path: 'logistics', icon: MdLogistics },
  { label: 'Analytics', path: 'analytics', icon: MdAnalytics },
];

// Agent data for all categories
export const agentsByCategory: Record<string, Agent[]> = {
  sourcing: [
    {
      id: 'sourcing-1',
      name: 'Sourcing Agent 1',
      status: 'active',
      lastActivity: '2 minutes ago',
      performance: 95,
      description: 'Specializes in raw material sourcing and supplier evaluation'
    },
    {
      id: 'sourcing-2',
      name: 'Sourcing Agent 2',
      status: 'active',
      lastActivity: '5 minutes ago',
      performance: 88,
      description: 'Handles strategic sourcing and cost optimization'
    },
    {
      id: 'sourcing-3',
      name: 'Sourcing Agent 3',
      status: 'maintenance',
      lastActivity: '1 hour ago',
      performance: 92,
      description: 'Manages supplier relationship and contract negotiations'
    },
    {
      id: 'sourcing-4',
      name: 'Sourcing Agent 4',
      status: 'active',
      lastActivity: '10 minutes ago',
      performance: 87,
      description: 'Focuses on sustainable sourcing and compliance'
    },
    {
      id: 'sourcing-5',
      name: 'Sourcing Agent 5',
      status: 'inactive',
      lastActivity: '2 hours ago',
      performance: 78,
      description: 'Handles emergency sourcing and rapid procurement'
    },
  ],
  'supplier-contracts': [
    {
      id: 'contract-1',
      name: 'Contract Manager Agent',
      status: 'active',
      lastActivity: '1 minute ago',
      performance: 96,
      description: 'Manages supplier contract lifecycle and compliance monitoring'
    },
    {
      id: 'contract-2',
      name: 'Negotiation Agent',
      status: 'active',
      lastActivity: '15 minutes ago',
      performance: 91,
      description: 'Handles contract negotiations and terms optimization'
    },
    {
      id: 'contract-3',
      name: 'Compliance Agent',
      status: 'active',
      lastActivity: '30 minutes ago',
      performance: 94,
      description: 'Monitors contract compliance and regulatory requirements'
    },
    {
      id: 'contract-4',
      name: 'Renewal Agent',
      status: 'maintenance',
      lastActivity: '2 hours ago',
      performance: 89,
      description: 'Manages contract renewals and extensions'
    },
  ],
  buying: [
    {
      id: 'buying-1',
      name: 'Purchase Agent',
      status: 'active',
      lastActivity: '3 minutes ago',
      performance: 93,
      description: 'Handles purchase order processing and approval workflows'
    },
    {
      id: 'buying-2',
      name: 'Vendor Selection Agent',
      status: 'active',
      lastActivity: '8 minutes ago',
      performance: 90,
      description: 'Evaluates and selects vendors based on criteria'
    },
    {
      id: 'buying-3',
      name: 'Budget Control Agent',
      status: 'active',
      lastActivity: '20 minutes ago',
      performance: 87,
      description: 'Monitors spending and budget compliance'
    },
    {
      id: 'buying-4',
      name: 'Approval Agent',
      status: 'inactive',
      lastActivity: '1 hour ago',
      performance: 85,
      description: 'Manages purchase approval workflows'
    },
  ],
  payments: [
    {
      id: 'payment-1',
      name: 'Invoice Processor',
      status: 'active',
      lastActivity: '1 minute ago',
      performance: 98,
      description: 'Processes invoices and payment approvals'
    },
    {
      id: 'payment-2',
      name: 'Payment Scheduler',
      status: 'active',
      lastActivity: '5 minutes ago',
      performance: 95,
      description: 'Schedules and manages payment timelines'
    },
    {
      id: 'payment-3',
      name: 'Reconciliation Agent',
      status: 'active',
      lastActivity: '12 minutes ago',
      performance: 92,
      description: 'Handles payment reconciliation and dispute resolution'
    },
    {
      id: 'payment-4',
      name: 'Tax Compliance Agent',
      status: 'maintenance',
      lastActivity: '45 minutes ago',
      performance: 88,
      description: 'Ensures tax compliance in payment processing'
    },
  ],
  'supply-chain': [
    {
      id: 'supply-chain-1',
      name: 'Demand Planner',
      status: 'active',
      lastActivity: '2 minutes ago',
      performance: 94,
      description: 'Forecasts demand and optimizes supply chain planning'
    },
    {
      id: 'supply-chain-2',
      name: 'Route Optimizer',
      status: 'active',
      lastActivity: '7 minutes ago',
      performance: 91,
      description: 'Optimizes transportation routes and delivery schedules'
    },
    {
      id: 'supply-chain-3',
      name: 'Risk Monitor',
      status: 'active',
      lastActivity: '15 minutes ago',
      performance: 89,
      description: 'Monitors supply chain risks and disruptions'
    },
    {
      id: 'supply-chain-4',
      name: 'Capacity Planner',
      status: 'inactive',
      lastActivity: '1 hour ago',
      performance: 86,
      description: 'Plans and optimizes warehouse and distribution capacity'
    },
  ],
  suppliers: [
    {
      id: 'supplier-1',
      name: 'Supplier Evaluator',
      status: 'active',
      lastActivity: '1 minute ago',
      performance: 96,
      description: 'Evaluates supplier performance and capabilities'
    },
    {
      id: 'supplier-2',
      name: 'Onboarding Agent',
      status: 'active',
      lastActivity: '10 minutes ago',
      performance: 92,
      description: 'Manages new supplier onboarding process'
    },
    {
      id: 'supplier-3',
      name: 'Performance Monitor',
      status: 'active',
      lastActivity: '25 minutes ago',
      performance: 90,
      description: 'Monitors supplier performance metrics and KPIs'
    },
    {
      id: 'supplier-4',
      name: 'Relationship Manager',
      status: 'maintenance',
      lastActivity: '2 hours ago',
      performance: 87,
      description: 'Manages supplier relationships and communications'
    },
  ],
  inventory: [
    {
      id: 'inventory-1',
      name: 'Stock Monitor',
      status: 'active',
      lastActivity: '30 seconds ago',
      performance: 97,
      description: 'Monitors inventory levels and stock movements'
    },
    {
      id: 'inventory-2',
      name: 'Reorder Agent',
      status: 'active',
      lastActivity: '3 minutes ago',
      performance: 94,
      description: 'Automatically triggers reorder points and quantities'
    },
    {
      id: 'inventory-3',
      name: 'Warehouse Optimizer',
      status: 'active',
      lastActivity: '12 minutes ago',
      performance: 91,
      description: 'Optimizes warehouse layout and storage efficiency'
    },
    {
      id: 'inventory-4',
      name: 'Cycle Counter',
      status: 'inactive',
      lastActivity: '1 hour ago',
      performance: 88,
      description: 'Manages inventory cycle counting and accuracy'
    },
  ],
  logistics: [
    {
      id: 'logistics-1',
      name: 'Fleet Manager',
      status: 'active',
      lastActivity: '1 minute ago',
      performance: 95,
      description: 'Manages fleet operations and vehicle tracking'
    },
    {
      id: 'logistics-2',
      name: 'Delivery Optimizer',
      status: 'active',
      lastActivity: '5 minutes ago',
      performance: 93,
      description: 'Optimizes delivery routes and schedules'
    },
    {
      id: 'logistics-3',
      name: 'Tracking Agent',
      status: 'active',
      lastActivity: '8 minutes ago',
      performance: 96,
      description: 'Tracks shipments and provides real-time updates'
    },
    {
      id: 'logistics-4',
      name: 'Cost Analyzer',
      status: 'maintenance',
      lastActivity: '30 minutes ago',
      performance: 89,
      description: 'Analyzes logistics costs and identifies savings'
    },
  ],
  analytics: [
    {
      id: 'analytics-1',
      name: 'Performance Analyzer',
      status: 'active',
      lastActivity: '1 minute ago',
      performance: 98,
      description: 'Analyzes overall system performance and metrics'
    },
    {
      id: 'analytics-2',
      name: 'Predictive Modeler',
      status: 'active',
      lastActivity: '5 minutes ago',
      performance: 94,
      description: 'Builds predictive models for demand and trends'
    },
    {
      id: 'analytics-3',
      name: 'Report Generator',
      status: 'active',
      lastActivity: '10 minutes ago',
      performance: 96,
      description: 'Generates automated reports and dashboards'
    },
    {
      id: 'analytics-4',
      name: 'Insight Miner',
      status: 'active',
      lastActivity: '15 minutes ago',
      performance: 92,
      description: 'Discovers insights and patterns in data'
    },
  ],
}; 