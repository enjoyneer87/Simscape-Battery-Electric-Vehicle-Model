function VehSpdRef_loadSimulationCase_SimpleDrivePattern(nvpairs)
%% Sets up simulation
% Model must be loaded for this function to work.

% Copyright 2023 The MathWorks, Inc.

arguments
  nvpairs.ModelName {mustBeTextScalar} = "VehSpdRef_harness_model"
  nvpairs.TargetSubsystemPath {mustBeTextScalar} = "/Vehicle speed reference"
  nvpairs.DisplayMessage (1,1) logical = true
end

VehSpdRef_loadSimulationCase( ...
  CaseName = "Simple drive pattern", ...
  CaseNumber = 1, ...
  StopTime = 100, ...
  ...
  ModelName = nvpairs.ModelName, ...
  TargetSubsystemPath = nvpairs.TargetSubsystemPath, ...
  DisplayMessage = nvpairs.DisplayMessage )

end  % function
