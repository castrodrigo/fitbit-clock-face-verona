import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import { battery } from "power";
import { HeartRateSensor } from "heart-rate";
import * as util from "../common/utils";

const now = new Date();
const nowDay = util.weekDay(now.getDay());
const nowDate = now.getDate();

// Update the clock every minute
clock.granularity = "seconds";

// Get a handle on the <text> element
const hoursText = document.getElementById("hoursText");
const minutesText = document.getElementById("minutesText");
const secondsText = document.getElementById("secondsText");
const weekDayText = document.getElementById("weekDayText");
const dateDayText = document.getElementById("dateDayText");
const batteryText = document.getElementById("batteryText");
const hrmData = document.getElementById("hrmText");

let hrm = new HeartRateSensor();
hrm.start();

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  let seconds = util.zeroPad(today.getSeconds());
  hoursText.text = `${hours}`;
  minutesText.text = `${mins}`;
  secondsText.text = `${seconds}`;
  
  batteryText.text = `${Math.floor(battery.chargeLevel)} %`;
  hrmData.text = `${hrm.heartRate ? hrm.heartRate : 0} BPM`;
}

weekDayText.text = `${nowDay}`;
dateDayText.text = `${nowDate}`;



