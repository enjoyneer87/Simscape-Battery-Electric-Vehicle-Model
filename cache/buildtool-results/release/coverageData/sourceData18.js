var sourceData18 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\BEVController\\BEVController_refsub_Basic_params.m","RawFileContents":["%% Parameters for BEV Controller component","% If you edit this file, make sure to run this to update variables","% in the base workspace before running simulation.","","% Copyright 2023 The MathWorks, Inc.","","%% BEV controller parameters","","% Parameters for converting vehicle speed to motor speed","bevControl.MotorSpdRef_tireRollingRadius_m = 0.34;","bevControl.MotorSpdRef_reductionGearRaio = 9.1;","","% ====================","% Motor torque control","","% PI controller gains for motor torque control","bevControl.MotorSpdRef_Ki = 15;","bevControl.MotorSpdRef_Kp = 15;","","% Bounds for torque command","bevControl.MotorDriveUnit_trqMax_Nm = 420;",""],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":10,"Hits":15,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":11,"Hits":15,"StartColumnNumbers":0,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":17,"Hits":15,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":18,"Hits":15,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":21,"Hits":15,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false}]}}