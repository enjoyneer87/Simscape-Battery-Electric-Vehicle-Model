var sourceData21 = {"FileName":"C:\\local\\github-issacito12\\fork-bev\\Components\\BEVController\\Test\\BEVController_runtests.m","RawFileContents":["%% Run unit tests\r","% This script runs unit tests and generates a test result summary in XML\r","% and a MATLAB code coverage report in HTML.\r","\r","% Copyright 2023 The MathWorks, Inc.\r","\r","RelStr = matlabRelease().Release;\r","disp(\"This is MATLAB \" + RelStr + \".\")\r","\r","PrjRoot = currentProject().RootFolder;\r","\r","TopFolder = fullfile(PrjRoot, \"Components\", \"BEVController\");\r","assert(isfolder(TopFolder))\r","\r","%% Test Suite & Runner\r","\r","suite_MQC = matlab.unittest.TestSuite.fromFile( ...\r","  fullfile(TopFolder, \"Test\", \"BEVController_UnitTest_MQC.m\"));\r","\r","suite = suite_MQC;\r","\r","runner = matlab.unittest.TestRunner.withTextOutput( ...\r","  OutputDetail = matlab.unittest.Verbosity.Detailed );\r","\r","%% JUnit Style Test Result\r","\r","% Test result file is created. Don't check its existance.\r","TestResultFile = \"BEVController_TestResults_\" + RelStr + \".xml\";\r","\r","plugin = matlab.unittest.plugins.XMLPlugin.producingJUnitFormat( ...\r","  fullfile(TopFolder, \"Test\", TestResultFile));\r","\r","addPlugin(runner, plugin)\r","\r","%% MATLAB Code Coverage Report\r","\r","CoverageReportFolder = fullfile(TopFolder, \"coverage\" + RelStr);\r","if not(isfolder(CoverageReportFolder))\r","  mkdir(CoverageReportFolder)\r","end\r","\r","CoverageReportFile = \"BEVController_coverage_\" + RelStr + \".html\";\r","\r","coverageReport = matlab.unittest.plugins.codecoverage.CoverageReport( ...\r","  CoverageReportFolder, ...\r","  MainFile = CoverageReportFile );\r","\r","plugin = matlab.unittest.plugins.CodeCoveragePlugin.forFile( ...\r","  [ ...\r","  fullfile(TopFolder, \"Harness\", \"BEVController_harness_setup.m\")\r","  ...\r","  fullfile(TopFolder, \"SimulationCases\", \"BEVController_simulationCase.mlx\")\r","  ...\r","  fullfile(TopFolder, \"BEVController_refsub_Basic_params.m\")\r","  ], ...\r","  Producing = coverageReport );\r","\r","addPlugin(runner, plugin)\r","\r","%% Run tests\r","results = run(runner, suite);\r","assertSuccess(results)\r",""],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":7,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false},{"LineNumber":8,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":10,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":12,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":61,"ContinuedLine":false},{"LineNumber":13,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":17,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":18,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":63,"ContinuedLine":true},{"LineNumber":20,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":22,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false},{"LineNumber":23,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":54,"ContinuedLine":true},{"LineNumber":28,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":64,"ContinuedLine":false},{"LineNumber":30,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":64,"ContinuedLine":false},{"LineNumber":31,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":47,"ContinuedLine":true},{"LineNumber":33,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":37,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":64,"ContinuedLine":false},{"LineNumber":38,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":39,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":42,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":66,"ContinuedLine":false},{"LineNumber":44,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":69,"ContinuedLine":false},{"LineNumber":45,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":true},{"LineNumber":46,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":34,"ContinuedLine":true},{"LineNumber":48,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":60,"ContinuedLine":false},{"LineNumber":49,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":3,"ContinuedLine":true},{"LineNumber":50,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":65,"ContinuedLine":true},{"LineNumber":52,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":76,"ContinuedLine":true},{"LineNumber":54,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":60,"ContinuedLine":true},{"LineNumber":55,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":3,"ContinuedLine":true},{"LineNumber":56,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":true},{"LineNumber":58,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":61,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":62,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false}]}}