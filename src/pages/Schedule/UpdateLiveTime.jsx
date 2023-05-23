export default function updateLiveTime() {
    let scheduleTimezone = scheduleObj ? scheduleObj.timezone : "Etc/GMT";
    let timeBtn = document.querySelector(".schedule-overview #timeBtn");
    if (timeBtn) {
      let liveTime;
      if (scheduleObj.isAdaptive) {
        liveTime = new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: scheduleTimezone,
        });
      } else {
        liveTime = new Date().toLocaleTimeString("en-US", {
          timeZone: scheduleTimezone,
        });
      }
      timeBtn.innerHTML = liveTime;
    }
  }