import document from "document";

export default function hrmHandler(hrm) {
  document.getElementById("hrm").text = hrm.heartRate ? hrm.heartRate : 0;
}
