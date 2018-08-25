import document from "document";
import { battery } from "power";

export default function batteryHandler(element, settings = null) {
  document.getElementById("battery").text = `${Math.floor(
    battery.chargeLevel
  )} %`;
}

export function setBatteryColor(color) {
  document.getElementById("battery").style.fill = color;
}
