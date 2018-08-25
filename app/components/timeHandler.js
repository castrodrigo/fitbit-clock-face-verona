import document from "document";
import { preferences } from "user-settings";
import { zeroPad, weekDay } from "../../common/utils";

const TWELVE_HOUR = "12h";

export function hourHandler(evt) {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === TWELVE_HOUR) {
    hours = hours % 12 || 12;
  } else {
    hours = zeroPad(hours);
  }
  let mins = zeroPad(today.getMinutes());
  let seconds = zeroPad(today.getSeconds());

  document.getElementById("hours").text = `${hours}`;
  document.getElementById("minutes").text = `${mins}`;
  document.getElementById("seconds").text = `${seconds}`;
}

export function dateHandler(settings = null) {
  const now = new Date();

  document.getElementById("weekDay").text = `${weekDay(now.getDay())}`;
  document.getElementById("dateDay").text = `${now.getDate()}`;
}

export function setHoursColor(color) {
  document.getElementById("hours").style.fill = color;
}

export function setMinutesColor(color) {
  document.getElementById("minutes").style.fill = color;
}

export function setAdditionalColor(color) {
  document.getElementById("seconds").style.fill = color;
  document.getElementById("weekDay").style.fill = color;
  document.getElementById("dateDay").style.fill = color;
}
