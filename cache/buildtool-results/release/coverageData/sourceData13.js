var sourceData13 = {"FileName":"C:\\local\\github-issacito12\\fork-bev\\BEV\\Utility\\BEV_plotResultsCompact.m","RawFileContents":["function fig = BEV_plotResultsCompact(nvpairs)\r","%% Creates plots of simulation results\r","\r","% Copyright 2022 The MathWorks, Inc.\r","\r","arguments\r","  nvpairs.SimData timetable\r","  nvpairs.PlotTemperature logical = true\r","end\r","\r","simData = nvpairs.SimData;\r","plotTemp = nvpairs.PlotTemperature;\r","\r","fig = figure;\r","fig.Position(3:4) = [700 500];  % width height\r","\r","if plotTemp\r","  % Make 4-by-2 plots\r","  tl = tiledlayout(fig, 4, 2);\r","else\r","  % Make 3-by-2 plots\r","  tl = tiledlayout(fig, 3, 2);\r","end\r","\r","tl.TileSpacing = 'tight';\r","tl.Padding = 'tight';\r","tl.TileIndexing = 'columnmajor';\r","\r","ax = nexttile(tl);\r","\r","plot(simData, \"Time\", \"Vehicle Speed (km/hr)\", LineWidth=2)\r","hold on;  grid on\r","plot(simData, \"Time\", \"Reference Vehicle Speed (km/hr)\", LineWidth=2)\r","setMinimumYRange(ax, simData.(\"Reference Vehicle Speed (km/hr)\"), dy_threshold=2);\r","xlabel(ax, \"Time (s)\")\r","legend(ax, [\"Actual\", \"Reference\"], Location=\"best\")\r","title(ax, \"Vehicle Speeds (km/hr)\")\r","hold off\r","\r","ax = nexttile(tl);\r","\r","plot(simData, \"Time\", \"G-Force\", LineWidth=2)\r","hold on;  grid on\r","setMinimumYRange(ax, simData.(\"G-Force\"), dy_threshold=0.02);\r","xlabel(\"Time (s)\")\r","title(\"G-Force (-)\")\r","hold off\r","\r","ax = nexttile(tl);\r","\r","plot(simData, \"Time\", \"Motor Torque Command\", LineWidth=2)\r","hold on;  grid on\r","setMinimumYRange(ax, simData.(\"Motor Torque Command\"), dy_threshold=2);\r","xlabel(\"Time (s)\")\r","title(\"Motor Torque Command (N*m)\")\r","hold off\r","\r","if plotTemp\r","  ax = nexttile(tl);\r","\r","  plot(simData, \"Time\", \"Motor Temperature\", LineWidth=2)\r","  hold on;  grid on\r","  setMinimumYRange(ax, simData.(\"Motor Temperature\"), dy_threshold=2);\r","  xlabel(\"Time (s)\")\r","  title(\"Motor Temperature (K)\")\r","  hold off\r","end\r","\r","% Next column\r","\r","ax = nexttile(tl);\r","\r","plot(simData, \"Time\", \"HV Battery SOC\", LineWidth=2)\r","hold on;  grid on\r","setMinimumYRange(ax, simData.(\"HV Battery SOC\"), dy_threshold=0.2);\r","xlabel(ax, \"Time (s)\")\r","title(ax, \"Battery SOC (%)\")\r","hold off\r","\r","ax = nexttile(tl);\r","\r","plot(simData, \"Time\", \"HV Battery Current\", LineWidth=2)\r","hold on;  grid on\r","setMinimumYRange(ax, simData.(\"HV Battery Current\"), dy_threshold=2);\r","xlabel(ax, \"Time (s)\")\r","title(ax, \"Battery Current (A)\")\r","hold off\r","\r","ax = nexttile(tl);\r","\r","plot(simData, \"Time\", \"HV Battery Power\", LineWidth=2)\r","hold on;  grid on\r","setMinimumYRange(ax, simData.(\"HV Battery Power\"), dy_threshold=2);\r","xlabel(ax, \"Time (s)\")\r","title(ax, \"Battery Power (kW)\")\r","hold off\r","\r","if plotTemp\r","  ax = nexttile(tl);\r","\r","  plot(simData, \"Time\", \"HV Battery Temperature\", LineWidth=2)\r","  hold on;  grid on\r","  setMinimumYRange(ax, simData.(\"HV Battery Temperature\"), dy_threshold=2);\r","  xlabel(ax, \"Time (s)\")\r","  title(ax, \"Battery Temperature (K)\")\r","  hold off\r","end\r","\r","end  % function\r",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":46,"ContinuedLine":false},"Statement":[{"LineNumber":8,"Hits":3,"StartColumnNumbers":36,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":11,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":26,"ContinuedLine":false},{"LineNumber":12,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":14,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":15,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":17,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":11,"ContinuedLine":false},{"LineNumber":19,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":22,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":25,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":26,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":27,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":29,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":31,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":59,"ContinuedLine":false},{"LineNumber":32,"Hits":[9,9],"StartColumnNumbers":[0,10],"EndColumnNumbers":[8,19],"ContinuedLine":false},{"LineNumber":33,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":69,"ContinuedLine":false},{"LineNumber":34,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":82,"ContinuedLine":false},{"LineNumber":35,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":36,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":52,"ContinuedLine":false},{"LineNumber":37,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":38,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":40,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":42,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":43,"Hits":[9,9],"StartColumnNumbers":[0,10],"EndColumnNumbers":[8,19],"ContinuedLine":false},{"LineNumber":44,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":61,"ContinuedLine":false},{"LineNumber":45,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":46,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":47,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":49,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":51,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":58,"ContinuedLine":false},{"LineNumber":52,"Hits":[9,9],"StartColumnNumbers":[0,10],"EndColumnNumbers":[8,19],"ContinuedLine":false},{"LineNumber":53,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":71,"ContinuedLine":false},{"LineNumber":54,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":55,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":56,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":58,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":11,"ContinuedLine":false},{"LineNumber":59,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":61,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":57,"ContinuedLine":false},{"LineNumber":62,"Hits":[3,3],"StartColumnNumbers":[2,12],"EndColumnNumbers":[10,21],"ContinuedLine":false},{"LineNumber":63,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":70,"ContinuedLine":false},{"LineNumber":64,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":65,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":66,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":12,"ContinuedLine":false},{"LineNumber":71,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":73,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":52,"ContinuedLine":false},{"LineNumber":74,"Hits":[9,9],"StartColumnNumbers":[0,10],"EndColumnNumbers":[8,19],"ContinuedLine":false},{"LineNumber":75,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":67,"ContinuedLine":false},{"LineNumber":76,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":77,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":78,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":80,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":82,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":56,"ContinuedLine":false},{"LineNumber":83,"Hits":[9,9],"StartColumnNumbers":[0,10],"EndColumnNumbers":[8,19],"ContinuedLine":false},{"LineNumber":84,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":69,"ContinuedLine":false},{"LineNumber":85,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":86,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":87,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":89,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":91,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":54,"ContinuedLine":false},{"LineNumber":92,"Hits":[9,9],"StartColumnNumbers":[0,10],"EndColumnNumbers":[8,19],"ContinuedLine":false},{"LineNumber":93,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":67,"ContinuedLine":false},{"LineNumber":94,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":95,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":96,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":98,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":11,"ContinuedLine":false},{"LineNumber":99,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":101,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":62,"ContinuedLine":false},{"LineNumber":102,"Hits":[3,3],"StartColumnNumbers":[2,12],"EndColumnNumbers":[10,21],"ContinuedLine":false},{"LineNumber":103,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":75,"ContinuedLine":false},{"LineNumber":104,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":false},{"LineNumber":105,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":106,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":12,"ContinuedLine":false}]}}