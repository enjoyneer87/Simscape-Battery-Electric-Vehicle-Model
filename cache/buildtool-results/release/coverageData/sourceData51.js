var sourceData51 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\BatteryHighVoltage\\Utility\\Configuration\\BatteryHV_loadSimulationCase_Constant.m","RawFileContents":["function BatteryHV_loadSimulationCase_Constant","%% Sets up simulation","% This function sets up the followings:","% - Simulation stop time","% - Input signals","% - Initial conditions","%","% Model must be loaded for this function to work.","","% Copyright 2023 The MathWorks, Inc.","","BatteryHV_loadSimulationCase( ...","  CaseName = \"Constant inputs\", ...","  ModelName = \"BatteryHV_harness_model\", ...","  StopTime = 1000, ...","  InputSystemPath = \"/Inputs\", ...","  LoadCurrentBlockName = \"Load current\", ...","  LoadCurrentDataPoints = [0 1 0], ...","  LoadCurrentDeltaT = 0.1, ...","  HeatFlowBlockName = \"Heat flow\", ...","  HeatFlowDataPoints = [0 1 0], ...","  HeatFlowDeltaT = 0.1, ...","  TerminalVoltage_V = evalin(\"base\", \"batteryHV.nominalVoltage_V\"), ...","  NominalCapacity_kWh = evalin(\"base\", \"batteryHV.nominalCapacity_kWh\"), ...","  InitialSOC_pct = 50, ...","  InitialBatteryTemperature_K = 273.15 + 20, ...","  InitialAmbientTemperature_K = 273.15 + 20, ...","  DisplayMessage = true );","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":5,"StartColumnNumbers":0,"EndColumnNumbers":46,"ContinuedLine":false},"Statement":[{"LineNumber":12,"Hits":5,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":13,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":30,"ContinuedLine":true},{"LineNumber":14,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":39,"ContinuedLine":true},{"LineNumber":15,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":17,"ContinuedLine":true},{"LineNumber":16,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":true},{"LineNumber":17,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":39,"ContinuedLine":true},{"LineNumber":18,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":true},{"LineNumber":19,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":25,"ContinuedLine":true},{"LineNumber":20,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":true},{"LineNumber":21,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":30,"ContinuedLine":true},{"LineNumber":22,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":true},{"LineNumber":23,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":66,"ContinuedLine":true},{"LineNumber":24,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":71,"ContinuedLine":true},{"LineNumber":25,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":true},{"LineNumber":26,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":43,"ContinuedLine":true},{"LineNumber":27,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":43,"ContinuedLine":true},{"LineNumber":28,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":26,"ContinuedLine":true}]}}