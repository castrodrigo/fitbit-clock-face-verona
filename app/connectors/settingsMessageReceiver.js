import * as messaging from "messaging";

import { setBackgroundColor } from "../components/backgroundHandler";
import { setBatteryColor } from "../components/batteryHandler";
import {
  setHoursColor,
  setMinutesColor,
  setAdditionalColor
} from "../components/timeHandler";
import { setHrmColor, setHrmIconColor } from "../components/hrmHandler";
import {
  setUserActivityColor,
  setUserActivityIconColor
} from "../components/userActivityHandler";

export default function settingsMessageReceiver() {
  messaging.peerSocket.onmessage = evt => {
    if (evt.data.newValue) {
      let value = JSON.parse(evt.data.newValue);
      switch (evt.data.key) {
        case "statsColor":
          setHrmColor(value);
          setUserActivityColor(value);
          break;
        case "iconsColor":
          setHrmIconColor(value);
          setUserActivityIconColor(value);
          break;
        case "bgColor":
          setBackgroundColor(value);
          break;
        case "hoursColor":
          setHoursColor(value);
          break;
        case "minutesColor":
          setMinutesColor(value);
          break;
        case "additionalColor":
          setAdditionalColor(value);
          break;
        case "batteryColor":
          setBatteryColor(value);
          break;
      }
    }
  };
}
