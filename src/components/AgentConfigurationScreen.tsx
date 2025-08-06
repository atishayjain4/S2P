import React, { useState } from 'react';
import { aiFactoryMenuItems, agentsByCategory } from '../constants/aiFactory';
import { AgentConfiguration } from '../types/agentConfiguration';
import { availableAgentTypes, defaultConfiguration, defaultSelections } from '../constants/agentConfiguration';
import { handleRadioChange, handleCheckboxChange, getAvailableFunctions } from '../utils/agentConfigurationUtils';

const AgentConfigurationScreen: React.FC = () => {
  const [config, setConfig] = useState<AgentConfiguration>(defaultConfiguration);
  const [selectedFunction, setSelectedFunction] = useState(defaultSelections.function);
  const [selectedAgentName, setSelectedAgentName] = useState(defaultSelections.agentName);
  const [selectedType, setSelectedType] = useState(defaultSelections.type);

  // Get available functions from AI Factory menu items
  const availableFunctions = getAvailableFunctions(aiFactoryMenuItems);

  // Get available agents for the selected function
  const availableAgents = agentsByCategory[selectedFunction] || [];

  // Set default agent name when function changes
  React.useEffect(() => {
    if (availableAgents.length > 0) {
      setSelectedAgentName(availableAgents[0].name);
    } else {
      setSelectedAgentName('');
    }
  }, [selectedFunction, availableAgents]);

  const handleFunctionChange = (functionPath: string) => {
    setSelectedFunction(functionPath);
  };

  const handleAgentNameChange = (agentName: string) => {
    setSelectedAgentName(agentName);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  return (
    <div className="flex-1 bg-[#F5F5F5] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <h2 className="text-heading text-gray-800 mb-2 font-bold">Agent Configuration</h2>
          <p className="text-regular text-gray-600">
            Configure and customize AI agents for different use cases and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Agent Details Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <h3 className="text-subheading text-gray-800 mb-4 font-bold">Agent Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Function:</label>
                  <select
                    value={selectedFunction}
                    onChange={(e) => handleFunctionChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#346fb7] focus:border-transparent text-regular text-gray-900"
                  >
                    {availableFunctions.map((func) => (
                      <option key={func.value} value={func.value}>
                        {func.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Type:</label>
                  <select
                    value={selectedType}
                    onChange={(e) => handleTypeChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#346fb7] focus:border-transparent text-regular text-gray-900"
                  >
                    {availableAgentTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name:</label>
                  <select
                    value={selectedAgentName}
                    onChange={(e) => handleAgentNameChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#346fb7] focus:border-transparent text-regular text-gray-900"
                    disabled={availableAgents.length === 0}
                  >
                    {availableAgents.map((agent) => (
                      <option key={agent.id} value={agent.name}>
                        {agent.name}
                      </option>
                    ))}
                  </select>
                  {availableAgents.length === 0 && (
                    <p className="text-xs text-gray-500 mt-1">No agents available for this function</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Configuration Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <h3 className="text-subheading text-gray-800 mb-6 font-bold">Configuration Options</h3>
              
              <div className="space-y-6">
                {/* Active Radio Buttons */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Active:</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="active"
                        value="Yes"
                        checked={config.active === 'Yes'}
                        onChange={(e) => handleRadioChange(config, setConfig, 'active', e.target.value)}
                        className="mr-2 text-[#346fb7] focus:ring-[#346fb7]"
                      />
                      <span className="text-regular text-gray-900">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="active"
                        value="No"
                        checked={config.active === 'No'}
                        onChange={(e) => handleRadioChange(config, setConfig, 'active', e.target.value)}
                        className="mr-2 text-[#346fb7] focus:ring-[#346fb7]"
                      />
                      <span className="text-regular text-gray-900">No</span>
                    </label>
                  </div>
                </div>

                {/* Level of Autonomy Checkboxes */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Level of Autonomy:</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="Decision"
                        checked={config.levelOfAutonomy.includes('Decision')}
                        onChange={(e) => handleCheckboxChange(config, setConfig, 'levelOfAutonomy', e.target.value)}
                        className="mr-2 text-[#346fb7] focus:ring-[#346fb7]"
                      />
                      <span className="text-regular text-gray-900">Decision</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="Action"
                        checked={config.levelOfAutonomy.includes('Action')}
                        onChange={(e) => handleCheckboxChange(config, setConfig, 'levelOfAutonomy', e.target.value)}
                        className="mr-2 text-[#346fb7] focus:ring-[#346fb7]"
                      />
                      <span className={`text-regular text-gray-900 ${config.levelOfAutonomy.includes('Action') ? 'border border-[#346fb7] px-2 py-1 rounded bg-[#346fb7] bg-opacity-10' : ''}`}>
                        Action
                      </span>
                    </label>
                  </div>
                </div>

                {/* Reporting & Comm Checkboxes */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Reporting & Comm:</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="Email"
                        checked={config.reportingComm.includes('Email')}
                        onChange={(e) => handleCheckboxChange(config, setConfig, 'reportingComm', e.target.value)}
                        className="mr-2 text-[#346fb7] focus:ring-[#346fb7]"
                      />
                      <span className="text-regular text-gray-900">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="Sharepoint"
                        checked={config.reportingComm.includes('Sharepoint')}
                        onChange={(e) => handleCheckboxChange(config, setConfig, 'reportingComm', e.target.value)}
                        className="mr-2 text-[#346fb7] focus:ring-[#346fb7]"
                      />
                      <span className="text-regular text-gray-900">Sharepoint</span>
                    </label>
                  </div>
                </div>

                {/* Frequency of Comm Checkboxes */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Frequency of comm:</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="On event"
                        checked={config.frequencyComm.includes('On event')}
                        onChange={(e) => handleCheckboxChange(config, setConfig, 'frequencyComm', e.target.value)}
                        className="mr-2 text-[#346fb7] focus:ring-[#346fb7]"
                      />
                      <span className="text-regular text-gray-900">On event</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="Daily"
                        checked={config.frequencyComm.includes('Daily')}
                        onChange={(e) => handleCheckboxChange(config, setConfig, 'frequencyComm', e.target.value)}
                        className="mr-2 text-[#346fb7] focus:ring-[#346fb7]"
                      />
                      <span className="text-regular text-gray-900">Daily</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="Weekly"
                        checked={config.frequencyComm.includes('Weekly')}
                        onChange={(e) => handleCheckboxChange(config, setConfig, 'frequencyComm', e.target.value)}
                        className="mr-2 text-[#346fb7] focus:ring-[#346fb7]"
                      />
                      <span className="text-regular text-gray-900">Weekly</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentConfigurationScreen; 