
<a name="T_1FFD3858"></a>
# <span style="color:rgb(213,80,0)">Longitudinal Vehicle - Simulation Case</span>
<a name="H_1B376934"></a>
# Coastdown
```matlab
mdl = "Vehicle1D_harness_model";
if not(bdIsLoaded(mdl))
  load_system(mdl)
end
Vehicle1D_harness_setup
Vehicle1D_loadCase_Coastdown
```

```TextOutput
Setting up simulation...
Simulation case: Coastdown
Setting simulation stop time to 200 sec.
Setting block parameters...
Setting initial conditions...
initial.loadInertiaSpd_rpm = 0
initial.vehicle_speed_kph = 100
```

```matlab
simOut = sim(mdl);
simData = extractTimetable(simOut.logsout);
Vehicle1D_plotResults( SimData = simData );
```

<center><img src="Media/Vehicle1D_Case_Coastdown_media/figure_0.png" width="702" alt="figure_0.png"></center>


<center><img src="Media/Vehicle1D_Case_Coastdown_media/figure_1.png" width="702" alt="figure_1.png"></center>


<center><img src="Media/Vehicle1D_Case_Coastdown_media/figure_2.png" width="702" alt="figure_2.png"></center>


<center><img src="Media/Vehicle1D_Case_Coastdown_media/figure_3.png" width="702" alt="figure_3.png"></center>


<center><img src="Media/Vehicle1D_Case_Coastdown_media/figure_4.png" width="702" alt="figure_4.png"></center>


<center><img src="Media/Vehicle1D_Case_Coastdown_media/figure_5.png" width="702" alt="figure_5.png"></center>


<center><img src="Media/Vehicle1D_Case_Coastdown_media/figure_6.png" width="702" alt="figure_6.png"></center>


<center><img src="Media/Vehicle1D_Case_Coastdown_media/figure_7.png" width="702" alt="figure_7.png"></center>


 *Copyright 2020-2023 The Mathworks, Inc.* 

