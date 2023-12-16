var sourceData158 = {"FileName":"C:\\local\\github-issacito12\\fork-bev\\DetailedModelApplications\\MotorDrivePmsmFem\\MotorDrivePmsmFemParams.m","RawFileContents":["%% Model Parameters for Motor Drive Model\r","\r","% Copyright 2020 The MathWorks, Inc.\r","\r","PmsmFemParams\r","\r","%% PMSM Controller Subsystem\r","\r","clear foc\r","foc.initialHighV_V = 500;\r","\r","%% Model Parameters for PMSM Field-Oriented Controller\r","\r","clear tmp\r","\r","% Control parameters\r","tmp.Ts = 2e-6;  % Fundamental sample time \r","tmp.fsw = 2e3;  % Switching frequency (Hz) \r","tmp.fc = tmp.fsw*10;  % Control loop frequency (Hz)  \r","tmp.Tsc = 1/tmp.fc;  % Control loop sample time\r","\r","% PMSM parameters \r","tmp.PM = 0.1447;  % Permanent magnet flux linkage \r","tmp.Ld =0.0012975;  % H d-axis inductance  -\r","tmp.Lq = 0.00393;  % H q-axis inductance\r","tmp.N = 4;  % Number of pole pairs\r","\r","% Operating and derived limits\r","tmp.iq_max = 249.8477;  % current component on the Q-axis\r","tmp.id_max = 8.7249;  % current component on the D-axis\r","\r","tmp.Tmax = 1.5*(tmp.N*tmp.PM*tmp.iq_max+(tmp.Ld - tmp.Lq)*tmp.id_max*tmp.iq_max);\r","  % Max electromagnetic torque\r","\r","% General\r","\r","  % Control mode: Velocity control\r","\r","  % Nominal dc-link voltage (V)\r","  foc.nominalDC_V = foc.initialHighV_V;\r","  \r","  % Maximum power (W)\r","  foc.maxPower_W = 60000;\r","  \r","  % Maximum torque (N*m)\r","  foc.maxTrq_Nm = tmp.Tmax;\r","  \r","  % Number of rotor pole pairs\r","  foc.numPolePairs = tmp.N;\r","  \r","  % Inverter dc-link voltage threshold (V)\r","  foc.DCthresh_V = 10;\r","  \r","  % Fundamental sample time (s)\r","  foc.sampleTime_s = tmp.Ts;\r","  \r","  % Control sample time (s)\r","  foc.controlSampleTime_s = tmp.Tsc;\r","\r","% Outer Loop\r","  \r","  % Permanent magnet flux linkage (Wb)\r","  foc.PM_Wb = tmp.PM;\r","\r","% Inner Loop\r","  \r","  % D-axis inductance for feed-forward pre-control (H)\r","  foc.Ld_H = tmp.Ld;\r","  \r","  % Q-axis inductance for feed-forward pre-control (H)\r","  foc.Lq_H = tmp.Lq;\r","  \r","  % Permanent magnet flux linkage for feed-forward pre-control (Wb)\r","  foc.PM_Wb = tmp.PM;\r","\r","% PWM\r","  \r","  % Switching frequency (Hz)\r","  foc.fsw_Hz = tmp.fsw;\r","\r","clear tmp\r",""],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":5,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":9,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":11,"ContinuedLine":false},{"LineNumber":10,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":14,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":11,"ContinuedLine":false},{"LineNumber":17,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":14,"ContinuedLine":false},{"LineNumber":18,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":14,"ContinuedLine":false},{"LineNumber":19,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":20,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":23,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":24,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":25,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":17,"ContinuedLine":false},{"LineNumber":26,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":29,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":30,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":32,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":81,"ContinuedLine":false},{"LineNumber":40,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":43,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":46,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":49,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":52,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":55,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":58,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":63,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":68,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":71,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":74,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":79,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":81,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":11,"ContinuedLine":false}]}}