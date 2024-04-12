var sourceData36 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\BatteryHighVoltage\\SimulationCases\\BatteryHV_Case_Discharge.mlx","RawFileContents":["mdl = \"BatteryHV_harness_model\";","load_system(mdl)","","% Load model parameters.","BatteryHV_harness_setup","","% Select battery model.","% BatteryHV_useRefsub_Basic","BatteryHV_useRefsub_SystemTable","% Setup simulation case.","BatteryHV_loadSimulationCase_Discharge( ...","  CRate = 0.1, ...  Positive value for discharge","  StateOfCharge_pct = 50 )","set_param(mdl, StopTime=\"3600\")","% Run simulation.","simOut = sim(mdl);","","% Collect logged signals and visualize.","% The basic version of the battery block does not simulate battery temperature.","logged_signals = extractTimetable(simOut.logsout);","BatteryHV_plotResults(logged_signals);"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":2,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":5,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":9,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":11,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":12,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":13,"ContinuedLine":true},{"LineNumber":13,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":26,"ContinuedLine":true},{"LineNumber":14,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":16,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":20,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":21,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false}]}}