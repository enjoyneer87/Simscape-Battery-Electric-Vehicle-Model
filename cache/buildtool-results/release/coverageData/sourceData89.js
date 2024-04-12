var sourceData89 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\ControllerAndEnvironment\\Utility\\CtrlEnv_plotResults.m","RawFileContents":["function fig = CtrlEnv_plotResults(nvpairs)","% plots the simulation result.","","% Copyright 2022-2023 The MathWorks, Inc.","","arguments","  nvpairs.SimData timetable","  nvpairs.FigureWidth (1,1) {mustBePositive, mustBeInteger} = 600","  nvpairs.FigureHeight (1,1) {mustBePositive, mustBeInteger} = 400","end","","sigNames = [","  \"Motor torque command\"","  \"Brake force\"","  \"Vehicle speed reference kph\"","  \"Vehicle speed kph\"","  \"Motor speed reference\"","  \"Motor speed\"","  \"Motor heat flow command\"","  \"Motor temperature\"","  \"Battery heat flow command\"","  \"Battery temperature\"","  ];","","numSigs = numel(sigNames);","for i = 1 : numSigs","  fig = plotSimulationResultSignal( ...","    SimData = nvpairs.SimData, ...","    SignalName = sigNames(i) );","  fig.Position(3) = nvpairs.FigureWidth;","  fig.Position(4) = nvpairs.FigureHeight;","end","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false},"Statement":[{"LineNumber":8,"Hits":[6,6,6],"StartColumnNumbers":[29,45,62],"EndColumnNumbers":[43,58,65],"ContinuedLine":false},{"LineNumber":9,"Hits":[6,6,1],"StartColumnNumbers":[30,46,63],"EndColumnNumbers":[44,59,66],"ContinuedLine":false},{"LineNumber":12,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":12,"ContinuedLine":false},{"LineNumber":13,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":true},{"LineNumber":14,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":15,"ContinuedLine":true},{"LineNumber":15,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":true},{"LineNumber":16,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":true},{"LineNumber":17,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":25,"ContinuedLine":true},{"LineNumber":18,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":15,"ContinuedLine":true},{"LineNumber":19,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":27,"ContinuedLine":true},{"LineNumber":20,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":true},{"LineNumber":21,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":true},{"LineNumber":22,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":true},{"LineNumber":23,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":4,"ContinuedLine":true},{"LineNumber":25,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":26,"ContinuedLine":false},{"LineNumber":26,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":27,"Hits":60,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":28,"Hits":60,"StartColumnNumbers":4,"EndColumnNumbers":29,"ContinuedLine":true},{"LineNumber":29,"Hits":60,"StartColumnNumbers":4,"EndColumnNumbers":31,"ContinuedLine":true},{"LineNumber":30,"Hits":60,"StartColumnNumbers":2,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":31,"Hits":60,"StartColumnNumbers":2,"EndColumnNumbers":41,"ContinuedLine":false}]}}