import document from "document";
import { today } from "user-activity";

const steps = document.getElementById("steps");
const floors = document.getElementById("floors");
const kcal = document.getElementById("kcal");

export function setSteps() {
  steps.text = today.local.steps || 0;
}

export function setFloors() {
  floors.text = today.local.elevationGain || 0;
}

export function setKcal() {
  kcal.text = today.local.calories || 0;
}

export function setUserActivityColor(color) {
  steps.style.fill = color;
  floors.style.fill = color;
  kcal.style.fill = color;
}

export function setUserActivityIconColor(color) {
  document.getElementById("stepsIcon").style.fill = color;
  document.getElementById("floorsIcon").style.fill = color;
  document.getElementById("kcalIcon").style.fill = color;
}
