export const availableAgentTypes = [
  'Agent',
  'Generative',
  'ML'
];

export const defaultConfiguration = {
  active: 'Yes' as const,
  levelOfAutonomy: ['Action'],
  reportingComm: [],
  frequencyComm: []
};

export const defaultSelections = {
  function: 'sourcing',
  type: 'Agent',
  agentName: ''
}; 