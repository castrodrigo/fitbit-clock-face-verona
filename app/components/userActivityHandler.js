import document from "document";
import { today } from "user-activity";

export function stepsHandler() {
  document.getElementById("steps").text = today.local.steps || 0;
}

export function floorsHandler() {
  document.getElementById("floors").text = today.local.elevationGain || 0;
}

export function kcalHandler() {
  document.getElementById("kcal").text = today.local.calories || 0;
}
