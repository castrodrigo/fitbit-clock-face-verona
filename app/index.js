import clock from "clock";
import { HeartRateSensor } from "heart-rate";

import { hourHandler, dateHandler } from "./components/timeHandler";
import batteryHandler from "./components/batteryHandler";
import hrmHandler from "./components/hrmHandler";
import {
  stepsHandler,
  floorsHandler,
  kcalHandler
} from "./components/userActivityHandler";

const hrm = new HeartRateSensor();
hrm.start();

clock.granularity = "seconds";
clock.ontick = evt => {
  hourHandler(evt);
  batteryHandler();
  hrmHandler(hrm);
  stepsHandler();
  floorsHandler();
  kcalHandler();
};

dateHandler();
