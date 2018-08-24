import document from "document";
import { battery } from "power";

export default function batteryHandler(element) {
  document.getElementById("battery").text = `${Math.floor(
    battery.chargeLevel
  )} %`;
}
