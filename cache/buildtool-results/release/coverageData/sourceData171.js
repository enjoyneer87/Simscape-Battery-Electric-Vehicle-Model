var sourceData171 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Interface\\defineBus_HighVoltage.m","RawFileContents":["%% Connection Bus Interface Definition for Simscape Bus","","% Copyright 2022 The Mathworks, Inc.","","Bus_HighVoltage = Simulink.ConnectionBus;","Bus_HighVoltage.Description = \"Electrical plus and minus nodes\";","","Bus_HighVoltage.Elements(1) = Simulink.ConnectionElement;","Bus_HighVoltage.Elements(1).Name = \"Plus\";","Bus_HighVoltage.Elements(1).Type = \"Connection: foundation.electrical.electrical\";","Bus_HighVoltage.Elements(1).Description = \"Electrical Port\";","","Bus_HighVoltage.Elements(2) = Simulink.ConnectionElement;","Bus_HighVoltage.Elements(2).Name = \"Minus\";","Bus_HighVoltage.Elements(2).Type = \"Connection: foundation.electrical.electrical\";","Bus_HighVoltage.Elements(2).Description = \"Electrical Port\";"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":5,"Hits":211,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false},{"LineNumber":6,"Hits":211,"StartColumnNumbers":0,"EndColumnNumbers":64,"ContinuedLine":false},{"LineNumber":8,"Hits":211,"StartColumnNumbers":0,"EndColumnNumbers":57,"ContinuedLine":false},{"LineNumber":9,"Hits":211,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":10,"Hits":211,"StartColumnNumbers":0,"EndColumnNumbers":82,"ContinuedLine":false},{"LineNumber":11,"Hits":211,"StartColumnNumbers":0,"EndColumnNumbers":60,"ContinuedLine":false},{"LineNumber":13,"Hits":211,"StartColumnNumbers":0,"EndColumnNumbers":57,"ContinuedLine":false},{"LineNumber":14,"Hits":211,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":15,"Hits":211,"StartColumnNumbers":0,"EndColumnNumbers":82,"ContinuedLine":false},{"LineNumber":16,"Hits":211,"StartColumnNumbers":0,"EndColumnNumbers":60,"ContinuedLine":false}]}}