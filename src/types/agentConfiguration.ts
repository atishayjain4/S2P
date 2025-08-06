export interface AgentConfiguration {
  active: 'Yes' | 'No';
  levelOfAutonomy: string[];
  reportingComm: string[];
  frequencyComm: string[];
}

export interface FunctionOption {
  value: string;
  label: string;
} 