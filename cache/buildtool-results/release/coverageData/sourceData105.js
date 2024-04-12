var sourceData105 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\MotorDriveUnit\\Utility\\Configuration\\MotorDriveUnit_loadCase.m","RawFileContents":["function MotorDriveUnit_loadCase(nvpairs)","%% Sets up simulation","% This function sets up the followings:","% - Simulation stop time","% - Input signals","% - Initial conditions","%","% Model must be loaded for this function to work.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  nvpairs.CaseName {mustBeTextScalar} = \"Default\"","","  nvpairs.ModelName {mustBeTextScalar} = \"MotorDriveUnit_harness_model\"","","  nvpairs.StopTime (1,1) {mustBePositive} = 10","","  nvpairs.InputSystemPath {mustBeTextScalar} = \"/Inputs\"","","  nvpairs.AxleClutchSwitch_BlockName {mustBeTextScalar} = \"Axle clutch switch\"","  nvpairs.AxleClutchSwitch_DataPoints (:,2) double = [0 0; 1 0]","","  nvpairs.AxleSpeed_BlockName {mustBeTextScalar} = \"Axle speed\"","  nvpairs.AxleSpeed_DataPoints (:,3) double = [0 1 0]","  nvpairs.AxleSpeed_DeltaT (1,1) {mustBePositive} = 0.1","","  nvpairs.AxleTorque_BlockName {mustBeTextScalar} = \"Axle torque\"","  nvpairs.AxleTorque_DataPoints (:,3) double = [0 1 0]","  nvpairs.AxleTorque_DeltaT (1,1) {mustBePositive} = 0.1","","  nvpairs.MotorTorqueCommand_BlockName {mustBeTextScalar} = \"Motor torque command\"","  nvpairs.MotorTorqueCommand_DataPoints (:,3) double = [0 1 0]","  nvpairs.MotorTorqueCommand_DeltaT (1,1) {mustBePositive} = 0.1","","  nvpairs.HeatFlowCommand_BlockName {mustBeTextScalar} = \"Heat flow command\"","  nvpairs.HeatFlowCommand_DataPoints (:,3) double = [0 1 0]","  nvpairs.HeatFlowCommand_DeltaT (1,1) {mustBePositive} = 0.1","","  nvpairs.LoadInertia_kg_m2 (1,1) {mustBePositive} = 100*0.3^2","  nvpairs.LoadDamping_Nm_per_rpm (1,1) {mustBePositive} = 0.03","","  nvpairs.GeartrainInertia_kg_m2 (1,1) {mustBePositive} = 15*0.3^2","  nvpairs.GeartrainDamping_Nm_per_rpm (1,1) {mustBePositive} = 0.001","","  nvpairs.HVBattery_Voltage_V (1,1) {mustBePositive} = 340","  nvpairs.HVBattery_TerminalResistance_Ohm (1,1) {mustBePositive} = 0.01","","  nvpairs.Initial_LoadInertiaSpd_rpm (1,1) double = 0;","  nvpairs.Initial_MotorDriveUnit_RotorSpd_rpm (1,1) double = 0;","  nvpairs.Initial_MotorDriveUnit_Temperature_K (1,1) {mustBePositive} = 273.15 + 20","  nvpairs.Initial_AmbientTemperature_K (1,1) {mustBePositive} = 273.15 + 20","","  nvpairs.DisplayMessage (1,1) logical = true","end","","dispMsg = nvpairs.DisplayMessage;","","if dispMsg","  disp(\"Setting up simulation...\")","  disp(\"Simulation case: \" + nvpairs.CaseName)","end","","mdl = nvpairs.ModelName;","","t_end = nvpairs.StopTime;","","if dispMsg","  disp(\"Setting simulation stop time to \" + t_end + \" sec.\")","end","","set_param(mdl, StopTime = num2str(t_end));","","if dispMsg","  disp(\"Setting block parameters...\")","end","","inpSysPath = mdl + nvpairs.InputSystemPath;","","AxleClutchSwitch_block_path = inpSysPath + \"/\" + nvpairs.AxleClutchSwitch_BlockName;","set_param(AxleClutchSwitch_block_path, dataPoints = mat2str(nvpairs.AxleClutchSwitch_DataPoints))","","AxleSpeed_block_path = inpSysPath + \"/\" + nvpairs.AxleSpeed_BlockName;","set_param(AxleSpeed_block_path, dataPoints = mat2str(nvpairs.AxleSpeed_DataPoints))","set_param(AxleSpeed_block_path, deltaT = num2str(nvpairs.AxleSpeed_DeltaT))","","AxleTorque_block_path = inpSysPath + \"/\" + nvpairs.AxleTorque_BlockName;","set_param(AxleTorque_block_path, dataPoints = mat2str(nvpairs.AxleTorque_DataPoints))","set_param(AxleTorque_block_path, deltaT = num2str(nvpairs.AxleTorque_DeltaT))","","MotorTorqueCommand_block_path = inpSysPath + \"/\" + nvpairs.MotorTorqueCommand_BlockName;","set_param(MotorTorqueCommand_block_path, dataPoints = mat2str(nvpairs.MotorTorqueCommand_DataPoints))","set_param(MotorTorqueCommand_block_path, deltaT = num2str(nvpairs.MotorTorqueCommand_DeltaT))","","HeatFlowCommand_block_path = inpSysPath + \"/\" + nvpairs.HeatFlowCommand_BlockName;","set_param(HeatFlowCommand_block_path, dataPoints = mat2str(nvpairs.HeatFlowCommand_DataPoints))","set_param(HeatFlowCommand_block_path, deltaT = num2str(nvpairs.HeatFlowCommand_DeltaT))","","set_param(mdl + \"/Mechanical Load/Load Inertia\", inertia = num2str(nvpairs.LoadInertia_kg_m2))","set_param(mdl + \"/Mechanical Load/Load Damper\", D = num2str(nvpairs.LoadDamping_Nm_per_rpm))","","set_param(mdl + \"/Mechanical Load/Geartrain Inertia\", inertia = num2str(nvpairs.GeartrainInertia_kg_m2))","set_param(mdl + \"/Mechanical Load/Geartrain Damper\", D = num2str(nvpairs.GeartrainDamping_Nm_per_rpm))","","setValue(\"batteryHV.nominalVoltage_V\", nvpairs.HVBattery_Voltage_V, nvpairs.DisplayMessage)","","setValue(\"batteryHV.internalResistance_Ohm\", nvpairs.HVBattery_TerminalResistance_Ohm, nvpairs.DisplayMessage)","","MotorDriveUnit_setInitialConditions( ...","  Initial_LoadInertiaSpd_rpm = nvpairs.Initial_LoadInertiaSpd_rpm, ...","  Initial_MotorDriveUnit_RotorSpd_rpm = nvpairs.Initial_MotorDriveUnit_RotorSpd_rpm, ...","  Initial_MotorDriveUnit_Temperature_K = nvpairs.Initial_MotorDriveUnit_Temperature_K, ...","  Initial_AmbientTemperature_K = nvpairs.Initial_AmbientTemperature_K, ...","  DisplayMessage = nvpairs.DisplayMessage );","","end  % function","","function setValue(workspaceVarName, value, displayMessage)","arguments","  workspaceVarName {mustBeTextScalar}","  value (1,1) double","  displayMessage (1,1) logical","end","if displayMessage","  disp(workspaceVarName + \" = \" + value)","end","evalin(\"base\", workspaceVarName + \" = \" + value + \";\");","end  % function",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":1,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false},{"LineNumber":118,"Hits":50,"StartColumnNumbers":0,"EndColumnNumbers":58,"ContinuedLine":false}],"Statement":[{"LineNumber":13,"Hits":[25,1],"StartColumnNumbers":[20,40],"EndColumnNumbers":[36,49],"ContinuedLine":false},{"LineNumber":15,"Hits":[25,1],"StartColumnNumbers":[21,41],"EndColumnNumbers":[37,71],"ContinuedLine":false},{"LineNumber":17,"Hits":[25,1],"StartColumnNumbers":[26,44],"EndColumnNumbers":[40,46],"ContinuedLine":false},{"LineNumber":19,"Hits":[25,1],"StartColumnNumbers":[27,47],"EndColumnNumbers":[43,56],"ContinuedLine":false},{"LineNumber":21,"Hits":[25,1],"StartColumnNumbers":[38,58],"EndColumnNumbers":[54,78],"ContinuedLine":false},{"LineNumber":22,"Hits":1,"StartColumnNumbers":53,"EndColumnNumbers":63,"ContinuedLine":false},{"LineNumber":24,"Hits":[25,1],"StartColumnNumbers":[31,51],"EndColumnNumbers":[47,63],"ContinuedLine":false},{"LineNumber":25,"Hits":1,"StartColumnNumbers":46,"EndColumnNumbers":53,"ContinuedLine":false},{"LineNumber":26,"Hits":[25,1],"StartColumnNumbers":[34,52],"EndColumnNumbers":[48,55],"ContinuedLine":false},{"LineNumber":28,"Hits":[25,1],"StartColumnNumbers":[32,52],"EndColumnNumbers":[48,65],"ContinuedLine":false},{"LineNumber":29,"Hits":1,"StartColumnNumbers":47,"EndColumnNumbers":54,"ContinuedLine":false},{"LineNumber":30,"Hits":[25,1],"StartColumnNumbers":[35,53],"EndColumnNumbers":[49,56],"ContinuedLine":false},{"LineNumber":32,"Hits":[25,1],"StartColumnNumbers":[40,60],"EndColumnNumbers":[56,82],"ContinuedLine":false},{"LineNumber":33,"Hits":1,"StartColumnNumbers":55,"EndColumnNumbers":62,"ContinuedLine":false},{"LineNumber":34,"Hits":[25,1],"StartColumnNumbers":[43,61],"EndColumnNumbers":[57,64],"ContinuedLine":false},{"LineNumber":36,"Hits":[25,1],"StartColumnNumbers":[37,57],"EndColumnNumbers":[53,76],"ContinuedLine":false},{"LineNumber":37,"Hits":1,"StartColumnNumbers":52,"EndColumnNumbers":59,"ContinuedLine":false},{"LineNumber":38,"Hits":[25,1],"StartColumnNumbers":[40,58],"EndColumnNumbers":[54,61],"ContinuedLine":false},{"LineNumber":40,"Hits":[25,1],"StartColumnNumbers":[35,53],"EndColumnNumbers":[49,62],"ContinuedLine":false},{"LineNumber":41,"Hits":[25,1],"StartColumnNumbers":[40,58],"EndColumnNumbers":[54,62],"ContinuedLine":false},{"LineNumber":43,"Hits":[25,1],"StartColumnNumbers":[40,58],"EndColumnNumbers":[54,66],"ContinuedLine":false},{"LineNumber":44,"Hits":[25,1],"StartColumnNumbers":[45,63],"EndColumnNumbers":[59,68],"ContinuedLine":false},{"LineNumber":46,"Hits":[25,1],"StartColumnNumbers":[37,55],"EndColumnNumbers":[51,58],"ContinuedLine":false},{"LineNumber":47,"Hits":[25,1],"StartColumnNumbers":[50,68],"EndColumnNumbers":[64,72],"ContinuedLine":false},{"LineNumber":49,"Hits":1,"StartColumnNumbers":52,"EndColumnNumbers":53,"ContinuedLine":false},{"LineNumber":50,"Hits":1,"StartColumnNumbers":61,"EndColumnNumbers":62,"ContinuedLine":false},{"LineNumber":51,"Hits":[25,1],"StartColumnNumbers":[54,72],"EndColumnNumbers":[68,83],"ContinuedLine":false},{"LineNumber":52,"Hits":[25,1],"StartColumnNumbers":[46,64],"EndColumnNumbers":[60,75],"ContinuedLine":false},{"LineNumber":54,"Hits":1,"StartColumnNumbers":41,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":57,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false},{"LineNumber":59,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":60,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":61,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":46,"ContinuedLine":false},{"LineNumber":64,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false},{"LineNumber":66,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":68,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":69,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":60,"ContinuedLine":false},{"LineNumber":72,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":74,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":75,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":78,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":80,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":84,"ContinuedLine":false},{"LineNumber":81,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":97,"ContinuedLine":false},{"LineNumber":83,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":70,"ContinuedLine":false},{"LineNumber":84,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":83,"ContinuedLine":false},{"LineNumber":85,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":75,"ContinuedLine":false},{"LineNumber":87,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":72,"ContinuedLine":false},{"LineNumber":88,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":85,"ContinuedLine":false},{"LineNumber":89,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":77,"ContinuedLine":false},{"LineNumber":91,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":88,"ContinuedLine":false},{"LineNumber":92,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":101,"ContinuedLine":false},{"LineNumber":93,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":93,"ContinuedLine":false},{"LineNumber":95,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":82,"ContinuedLine":false},{"LineNumber":96,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":95,"ContinuedLine":false},{"LineNumber":97,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":87,"ContinuedLine":false},{"LineNumber":99,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":94,"ContinuedLine":false},{"LineNumber":100,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":92,"ContinuedLine":false},{"LineNumber":102,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":104,"ContinuedLine":false},{"LineNumber":103,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":102,"ContinuedLine":false},{"LineNumber":105,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":91,"ContinuedLine":false},{"LineNumber":107,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":110,"ContinuedLine":false},{"LineNumber":109,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":110,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":65,"ContinuedLine":true},{"LineNumber":111,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":83,"ContinuedLine":true},{"LineNumber":112,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":85,"ContinuedLine":true},{"LineNumber":113,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":69,"ContinuedLine":true},{"LineNumber":114,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":44,"ContinuedLine":true},{"LineNumber":120,"Hits":50,"StartColumnNumbers":20,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":124,"Hits":50,"StartColumnNumbers":0,"EndColumnNumbers":17,"ContinuedLine":false},{"LineNumber":125,"Hits":50,"StartColumnNumbers":2,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":127,"Hits":50,"StartColumnNumbers":0,"EndColumnNumbers":55,"ContinuedLine":false}]}}