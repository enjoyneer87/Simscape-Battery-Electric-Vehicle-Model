var sourceData73 = {"FileName":"C:\\local\\github-issacito12\\fork-bev\\Components\\ControllerAndEnvironment\\SimulationCases\\CtrlEnv_simulationCase_FTP75.mlx","RawFileContents":["mdl = \"CtrlEnv_harness_model\";","if not(bdIsLoaded(mdl)) ","  load_system(mdl)","end","CtrlEnv_harness_setup","CtrlEnv_loadSimulationCase_FTP75","simOut = sim(mdl);","simData = extractTimetable(simOut.logsout);","CtrlEnv_plotResults( SimData = simData, ...","  FigureHeight = 200 );"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":2,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":3,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":5,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":6,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":7,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":8,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":9,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":10,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":true}]}}