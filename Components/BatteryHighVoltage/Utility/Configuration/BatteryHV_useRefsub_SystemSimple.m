function BatteryHV_useRefsub_SystemSimple
%% Sets a specified referenced subsystem to the model
% Model must be loaded before calling this function.

% Copyright 2023 The MathWorks, Inc.

BatteryHV_useRefsub( ...
  ModelName = "BatteryHV_harness_model", ...
  BlockPath = "/High Voltage Battery", ...
  RefsubName    = "BatteryHV_refsub_SystemSimple", ...
  ParamFileName = "BatteryHV_refsub_SystemSimple_params" )

end  % function
