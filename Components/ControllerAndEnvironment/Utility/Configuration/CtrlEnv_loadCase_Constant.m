function CtrlEnv_loadCase_Constant(nvpairs)
%% Sets up simulation
% Model must be loaded for this function to work.

% Copyright 2023 The MathWorks, Inc.

arguments
  nvpairs.ModelName {mustBeTextScalar} = "CtrlEnv_harness_model"
  nvpairs.TargetSubsystemPath {mustBeTextScalar} = "/Controller and Environment/Vehicle speed reference"
  nvpairs.DisplayMessage (1,1) logical = true
end

CtrlEnv_loadCase( ...
  CaseName = "Constant", ...
  CaseNumber = 5, ...
  StopTime = 1000, ...
  ...
  ModelName = nvpairs.ModelName, ...
  TargetSubsystemPath = nvpairs.TargetSubsystemPath, ...
  DisplayMessage = nvpairs.DisplayMessage )

end  % function
