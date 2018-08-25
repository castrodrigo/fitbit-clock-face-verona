import clock from "clock";
import { HeartRateSensor } from "heart-rate";

import settingsMessageReceiver from "./connectors/settingsMessageReceiver";

import { hourHandler, dateHandler } from "./components/timeHandler";
import batteryHandler from "./components/batteryHandler";
import { setHrm } from "./components/hrmHandler";
import { setSteps, setFloors, setKcal } from "./components/userActivityHandler";

settingsMessageReceiver();

const hrm = new HeartRateSensor();
hrm.start();

clock.granularity = "seconds";
clock.ontick = evt => {
  hourHandler(evt);
  dateHandler();
  batteryHandler();
  setHrm(hrm);
  setSteps();
  setFloors();
  setKcal();
};
