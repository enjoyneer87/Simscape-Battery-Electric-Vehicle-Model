var sourceData61 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\BatteryHighVoltage\\Utility\\LocalTasks\\BatteryHV_openREADME.m","RawFileContents":["function BatteryHV_openREADME(nvpairs)","","% Copyright 2023 The MathWorks, Inc.","","arguments","  nvpairs.TestRun (1,1) logical = false","end","","topFolder = currentProject().RootFolder;","","targetFilePath = fullfile(topFolder, ...","  \"Components\", \"BatteryHighVoltage\", \"README.md\");","","urlString = \"file:///\" + targetFilePath;","","if nvpairs.TestRun","  disp(\"Checking file exists: \" + targetFilePath)","  assert(isfile(targetFilePath), ...","    \"File not found: \" + targetFilePath)","else","  % With -browser option, use the system web browser.","  web(urlString, \"-browser\")","end","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false},"Statement":[{"LineNumber":6,"Hits":0,"StartColumnNumbers":34,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":9,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":11,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":12,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":51,"ContinuedLine":true},{"LineNumber":14,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":16,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":17,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":18,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":19,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":40,"ContinuedLine":true},{"LineNumber":22,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":28,"ContinuedLine":false}]}}