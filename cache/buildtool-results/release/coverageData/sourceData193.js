var sourceData193 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteApp23b-v1\\LiteApp23b-v1\\Demos\\LiteAppLayout_Basics\\LiteAppDemo_LiteAppLayout_Basics_UITest.m","RawFileContents":["classdef LiteAppDemo_LiteAppLayout_Basics_UITest < matlab.uitest.TestCase","  %% Class implementation of UI test","  % Overview of App Testing Framework","  % - https://www.mathworks.com/help/matlab/matlab_prog/overview-of-app-testing-framework.html","","  % Copyright 2024 The MathWorks, Inc.","","  properties (Constant)","    pause_seconds = 2","  end  % properties","","  methods (Test)","","    %% Minimum quality check (MQC)","    % MQC is to check that runnables (scripts, functions, classes, and models)","    % run right out of the box.","","    function MQC_1(testcase)","      close all","","      app = LiteAppDemo_LiteAppLayout_Basics;","      addTeardown(testcase, @delete, app.Window.MainFigure)","","      pause(testcase.pause_seconds)","      close all","    end  % function","","  end  % methods","end  % classdef",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":18,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":28,"ContinuedLine":false},"Statement":[{"LineNumber":19,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":21,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":22,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":59,"ContinuedLine":false},{"LineNumber":24,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":25,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":16,"ContinuedLine":false}]}}