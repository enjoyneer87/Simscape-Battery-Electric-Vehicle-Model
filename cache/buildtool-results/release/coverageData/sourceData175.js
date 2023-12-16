var sourceData175 = {"FileName":"C:\\local\\github-issacito12\\fork-bev\\Utility\\LocalTasks\\saveModels.m","RawFileContents":["function saveModels\r","%% Saves model files in the current MATLAB release.\r","% This function finds model files (*.mdl and *.slx) in the current project,\r","% then one by one, opens the model, set dirty mark, and saves it. \r","% Use this function to save old model files in the current MATLAB release.\r","% This function has been confirmd to work with\r","% system models, referenced subsystems, and libraries.\r","% If the model is already saved in the current MATLAB release, it is skipped.\r","\r","% Copyright 2023 The MathWorks, Inc.\r","\r","thisMatlabRelease = matlabRelease().Release;\r","disp(\"This is MATLAB \" + thisMatlabRelease + \".\")\r","\r","prj = currentProject;\r","\r","prjRoot = prj.RootFolder;\r","\r","allFilesFullPath = prj.Files;\r","allFilesFullPath = [allFilesFullPath(:).Path]';\r","\r","allFilesRelPath = extractAfter(allFilesFullPath, prjRoot + (\"/\"|\"\\\"));\r","\r","lix = endsWith(allFilesFullPath, (\".mdl\"|\".slx\"));\r","\r","modelFilesRelPath = allFilesRelPath(lix);\r","modelFilesFullPath = allFilesFullPath(lix);\r","\r","numModelFiles = numel(modelFilesRelPath);\r","disp(\"Number of model files found: \" + numModelFiles)\r","\r","for idx = 1 : numModelFiles\r","  disp(\"[\" + idx + \"/\" + numModelFiles + \"] \" + modelFilesRelPath(idx))\r","  targetModelFile = modelFilesFullPath(idx);\r","  modelInfo = Simulink.MDLInfo(targetModelFile);\r","  modelSavedInRelease = string(modelInfo.ReleaseName);\r","  [~, baseFilename, ~] = fileparts(targetModelFile);\r","  if modelSavedInRelease ~= thisMatlabRelease\r","    load_system(targetModelFile)\r","    if bdIsLibrary(baseFilename)\r","      set_param(baseFilename, Lock=\"off\")\r","    end\r","    set_param(baseFilename, Dirty=\"on\")\r","    save_system(baseFilename)\r","    disp(\"saved.\")\r","  else\r","    disp(\"skipped. Model file is up to date with this MATLAB release.\")\r","  end\r","  bdclose(baseFilename)\r","end\r","\r","end  % function\r",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false},"Statement":[{"LineNumber":12,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":13,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":15,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":17,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":19,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":20,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":22,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":70,"ContinuedLine":false},{"LineNumber":24,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":26,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false},{"LineNumber":27,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":29,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false},{"LineNumber":30,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":53,"ContinuedLine":false},{"LineNumber":32,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":33,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":71,"ContinuedLine":false},{"LineNumber":34,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":35,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":36,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":54,"ContinuedLine":false},{"LineNumber":37,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":52,"ContinuedLine":false},{"LineNumber":38,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":39,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":40,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":41,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":41,"ContinuedLine":false},{"LineNumber":43,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":44,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":45,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":47,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":71,"ContinuedLine":false},{"LineNumber":49,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":false}]}}