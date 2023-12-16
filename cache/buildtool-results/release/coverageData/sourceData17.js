var sourceData17 = {"FileName":"C:\\local\\github-issacito12\\fork-bev\\Components\\BEVController\\BEVController_refsub_Basic_params.m","RawFileContents":["%% Parameters for BEV Controller component\r","% If you edit this file, make sure to run this to update variables\r","% in the base workspace before running simulation.\r","\r","% Copyright 2023 The MathWorks, Inc.\r","\r","%% BEV controller parameters\r","\r","% Parameters for converting vehicle speed to motor speed\r","bevControl.MotorSpdRef_tireRollingRadius_m = 0.34;\r","bevControl.MotorSpdRef_reductionGearRaio = 9.1;\r","\r","% ====================\r","% Motor torque control\r","\r","% PI controller gains for motor torque control\r","bevControl.MotorSpdRef_Ki = 15;\r","bevControl.MotorSpdRef_Kp = 15;\r","\r","% Bounds for torque command\r","bevControl.MotorDriveUnit_trqMax_Nm = 420;\r",""],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":10,"Hits":12,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":11,"Hits":12,"StartColumnNumbers":0,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":17,"Hits":12,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":18,"Hits":12,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":21,"Hits":12,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false}]}}