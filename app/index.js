import clock from "clock";
import document from "document";
import { HeartRateSensor } from "heart-rate";
import { preferences } from "user-settings";
import { battery } from "power";
import { today as userToday } from "user-activity";
import * as util from "../common/utils";

const now = new Date();
const nowDay = util.weekDay(now.getDay());
const nowDate = now.getDate();

const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");

const weekDayText = document.getElementById("weekDay");
const dateDayText = document.getElementById("dateDay");

const batteryText = document.getElementById("battery");
const hrmText = document.getElementById("hrm");
const stepsText = document.getElementById("steps");
const floorsText = document.getElementById("floors");
const kcalText = document.getElementById("kcal");

let hrm = new HeartRateSensor();
hrm.start();

clock.granularity = "seconds";
clock.ontick = evt => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    hours = hours % 12 || 12;
  } else {
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  let seconds = util.zeroPad(today.getSeconds());
  hoursText.text = `${hours}`;
  minutesText.text = `${mins}`;
  secondsText.text = `${seconds}`;

  batteryText.text = `${Math.floor(battery.chargeLevel)} %`;
  hrmText.text = `${hrm.heartRate ? hrm.heartRate : 0} BPM`;
  stepsText.text = `${userToday.local.steps || 0} STP`;
  floorsText.text = `${userToday.local.elevationGain || 0} FLS`;
  kcalText.text = `${userToday.local.calories || 0} CAL`;
};

weekDayText.text = `${nowDay}`;
dateDayText.text = `${nowDate}`;
