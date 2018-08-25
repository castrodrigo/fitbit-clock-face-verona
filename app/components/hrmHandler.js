import document from "document";

const element = document.getElementById("hrm");

export function setHrm(hrm) {
  element.text = hrm.heartRate ? hrm.heartRate : 0;
}

export function setHrmColor(color) {
  element.style.fill = color;
}

export function setHrmIconColor(color) {
  document.getElementById("hrmIcon").style.fill = color;
}
