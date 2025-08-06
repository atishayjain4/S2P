import { AgentConfiguration } from '../types/agentConfiguration';

export const handleRadioChange = (
  config: AgentConfiguration,
  setConfig: React.Dispatch<React.SetStateAction<AgentConfiguration>>,
  field: keyof AgentConfiguration,
  value: string
) => {
  setConfig(prev => ({
    ...prev,
    [field]: value
  }));
};

export const handleCheckboxChange = (
  config: AgentConfiguration,
  setConfig: React.Dispatch<React.SetStateAction<AgentConfiguration>>,
  field: keyof AgentConfiguration,
  value: string
) => {
  setConfig(prev => {
    const currentValues = prev[field] as string[];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    
    return {
      ...prev,
      [field]: newValues
    };
  });
};

export const getAvailableFunctions = (aiFactoryMenuItems: any[]) => {
  return aiFactoryMenuItems.map(item => ({
    value: item.path,
    label: item.label
  }));
}; 