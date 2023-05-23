import * as React from "react";
import { useEffect, useState } from "react";
import {
  ButtonComponent,
  CheckBoxComponent,
} from "@syncfusion/ej2-react-buttons";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import {
  DropDownListComponent,
  MultiSelectComponent,
  CheckBoxSelection,
} from "@syncfusion/ej2-react-dropdowns";
import { UploaderComponent } from "@syncfusion/ej2-react-inputs";
import {
  ToolbarComponent,
  ItemsDirective,
  ItemDirective,
  ContextMenuComponent,
  AppBarComponent,
} from "@syncfusion/ej2-react-navigations";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Year,
  TimelineViews,
  TimelineMonth,
  TimelineYear,
  ViewsDirective,
  ViewDirective,
  ResourcesDirective,
  ResourceDirective,
  Inject,
  Resize,
  DragAndDrop,
  Agenda,
  Print,
  ExcelExport,
  ICalendarImport,
  ICalendarExport,
  Timezone,
} from "@syncfusion/ej2-react-schedule";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import {
  addClass,
  Browser,
  closest,
  extend,
  Internationalization,
  isNullOrUndefined,
  removeClass,
  remove,
  compile,
} from "@syncfusion/ej2-base";
import { DataManager, Predicate, Query } from "@syncfusion/ej2-data";
import { tz } from "moment-timezone";
import "./Schedule.scss";
import {
  weekDays,
  exportItems,
  contextMenuItems,
  calendarCollections,
  timezoneData,
  majorSlotData,
  minorSlotData,
  weekNumberData,
  tooltipData,
  timeFormatData,
} from "./DataSource";

import CallAPI from "./CallAPI";

function Schedule() {
  let scheduleObj;
  let eventTypeObj;
  let titleObj;
  let notesObj;
  let contextMenuObj;
  let isTimelineView = false;
  let selectedTarget;
  let intl = new Internationalization();
  let workWeekObj;
  let resourceObj;
  let liveTimeInterval;

  //Handles events Update

  let dataevents = [];
  let storedEventsDataString = localStorage.getItem("eventsData");
  if (storedEventsDataString) {
    let storedEventsData = JSON.parse(storedEventsDataString);
    dataevents = storedEventsData;
  }

  function handleUpdateEvent(args) {
    scheduleObj.eventsData = new DataManager(dataevents);
    console.log("Update oke");
    console.log(dataevents);
    CallAPI(dataevents);
  }
  function importTemplateFn(data) {
    const template =
      '<div class="e-template-btn"><span class="e-btn-icon e-icons e-upload-1 e-icon-left"></span>${text}</div>';
    return compile(template.trim())(data);
  }
  function updateLiveTime() {
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

  function onImportClick(args) {
    scheduleObj.importICalendar(args.event.target.files[0]);
  }
  function onPrint() {
    scheduleObj.print();
  }
  function onExportClick(args) {
    if (args.item.text === "Excel") {
      let exportDatas = [];
      let eventCollection = scheduleObj.getEvents();
      let resourceCollection = scheduleObj.getResourceCollections();
      let resourceData = resourceCollection[0].dataSource;
      for (let resource of resourceData) {
        let data = eventCollection.filter(
          (e) => e.CalendarId === resource.CalendarId
        );
        exportDatas = exportDatas.concat(data);
      }
      scheduleObj.exportToExcel({
        exportType: "xlsx",
        customData: exportDatas,
        fields: ["Id", "Subject", "StartTime", "EndTime", "CalendarId"],
      });
    } else {
      scheduleObj.exportToICalendar();
    }
  }
  function getEventData() {
    const date = scheduleObj.selectedDate;
    return {
      Id: scheduleObj.getEventMaxID(),
      Subject: "",
      StartTime: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        new Date().getHours(),
        0,
        0
      ),
      EndTime: new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        new Date().getHours() + 1,
        0,
        0
      ),
      Location: "",
      Description: "",
      IsAllDay: false,
      CalendarId: 1,
    };
  }
  function onToolbarItemClicked(args) {
    switch (args.item.text) {
      case "Day":
        scheduleObj.currentView = isTimelineView ? "TimelineDay" : "Day";
        break;
      case "Week":
        scheduleObj.currentView = isTimelineView ? "TimelineWeek" : "Week";
        break;
      case "WorkWeek":
        scheduleObj.currentView = isTimelineView
          ? "TimelineWorkWeek"
          : "WorkWeek";
        break;
      case "Month":
        scheduleObj.currentView = isTimelineView ? "TimelineMonth" : "Month";
        break;
      case "Year":
        scheduleObj.currentView = isTimelineView ? "TimelineYear" : "Year";
        break;
      case "Agenda":
        scheduleObj.currentView = "Agenda";
        break;
      case "New Event":
        const eventData = getEventData();
        scheduleObj.openEditor(eventData, "Add", true);
        break;
      case "New Recurring Event":
        const recEventData = getEventData();
        scheduleObj.openEditor(recEventData, "Add", true, 1);
        break;
    }
  }
  function timelineTemplate() {
    return (
      <div className="template">
        <div className="icon-child">
          <CheckBoxComponent
            id="timeline_views"
            checked={false}
            change={(args) => {
              isTimelineView = args.checked;
              switch (scheduleObj.currentView) {
                case "Day":
                case "TimelineDay":
                  scheduleObj.currentView = isTimelineView
                    ? "TimelineDay"
                    : "Day";
                  break;
                case "Week":
                case "TimelineWeek":
                  scheduleObj.currentView = isTimelineView
                    ? "TimelineWeek"
                    : "Week";
                  break;
                case "WorkWeek":
                case "TimelineWorkWeek":
                  scheduleObj.currentView = isTimelineView
                    ? "TimelineWorkWeek"
                    : "WorkWeek";
                  break;
                case "Month":
                case "TimelineMonth":
                  scheduleObj.currentView = isTimelineView
                    ? "TimelineMonth"
                    : "Month";
                  break;
                case "Year":
                case "TimelineYear":
                  scheduleObj.currentView = isTimelineView
                    ? "TimelineYear"
                    : "Year";
                  break;
                case "Agenda":
                  scheduleObj.currentView = "Agenda";
                  break;
              }
            }}
          />
        </div>
        <div className="text-child">Timeline Views</div>
      </div>
    );
  }
  function groupTemplate() {
    return (
      <div className="template">
        <div className="icon-child">
          <CheckBoxComponent
            id="grouping"
            checked={true}
            change={(args) => {
              scheduleObj.group.resources = args.checked ? ["Calendars"] : [];
            }}
          />
        </div>
        <div className="text-child">Grouping</div>
      </div>
    );
  }
  function gridlineTemplate() {
    return (
      <div className="template">
        <div className="icon-child">
          <CheckBoxComponent
            id="timeSlots"
            checked={true}
            change={(args) => {
              scheduleObj.timeScale.enable = args.checked;
            }}
          />
        </div>
        <div className="text-child">Gridlines</div>
      </div>
    );
  }
  function autoHeightTemplate() {
    return (
      <div className="template">
        <div className="icon-child">
          <CheckBoxComponent
            id="row_auto_height"
            checked={false}
            change={(args) => {
              scheduleObj.rowAutoHeight = args.checked;
            }}
          />
        </div>
        <div className="text-child">Row Auto Height</div>
      </div>
    );
  }
  function getDateHeaderDay(value) {
    return intl.formatDate(value, { skeleton: "E" });
  }
  function getDateHeaderDate(value) {
    return intl.formatDate(value, { skeleton: "d" });
  }

  function dateHeaderTemplate(props) {
    return (
      <div>
        <div>{getDateHeaderDay(props.date)}</div>
        <div>{getDateHeaderDate(props.date)}</div>
        <div className="date-text"></div>
      </div>
    );
  }
  function onResourceChange(args) {
    let resourcePredicate;
    for (let value of args.value) {
      if (resourcePredicate) {
        resourcePredicate = resourcePredicate.or(
          new Predicate("CalendarId", "equal", value)
        );
      } else {
        resourcePredicate = new Predicate("CalendarId", "equal", value);
      }
    }
    scheduleObj.resources[0].query = resourcePredicate
      ? new Query().where(resourcePredicate)
      : new Query().where("CalendarId", "equal", 1);
  }

  return (
    <div className="schedule-control-section">
      <div className="col-lg-12 control-section">
        <div className="content-wrapper">
          <div className="schedule-overview">
            <AppBarComponent colorMode="Primary">
              <span className="time e-icons e-time-zone"></span>
              <span id="timezoneBtn" className="time ">
                UTC
              </span>
              <span className="time e-icons e-clock"></span>
              <span id="timeBtn" className="time current-time">
                Time
              </span>
              <div className="e-appbar-spacer"></div>
              <div className="control-panel calendar-export">
                <ButtonComponent
                  id="printBtn"
                  cssClass="title-bar-btn e-inherit"
                  iconCss="e-icons e-print"
                  onClick={onPrint.bind(this)}
                  content="Print"
                />
              </div>
              <div className="control-panel import-button">
                <UploaderComponent
                  id="fileUpload"
                  type="file"
                  allowedExtensions=".ics"
                  cssClass="calendar-import"
                  buttons={{ browse: importTemplateFn({ text: "Import" })[0] }}
                  multiple={false}
                  showFileList={false}
                  selected={onImportClick.bind(this)}
                  created={() => {
                    const element = document.querySelector(
                      ".calendar-import .e-css.e-btn"
                    );
                    element.classList.add("e-inherit");
                  }}
                />
              </div>
              <div className="control-panel calendar-export">
                <DropDownButtonComponent
                  id="exportBtn"
                  content="Export"
                  cssClass="e-inherit"
                  items={exportItems}
                  select={onExportClick.bind(this)}
                />
              </div>
              <ButtonComponent
                id="settingsBtn"
                cssClass="overview-toolbar-settings e-inherit"
                iconCss="e-icons e-settings"
                iconPosition="Top"
                content=""
                onClick={() => {
                  let settingsPanel = document.querySelector(
                    ".overview-content .right-panel"
                  );
                  if (settingsPanel.classList.contains("hide")) {
                    removeClass([settingsPanel], "hide");
                    workWeekObj.refresh();
                    resourceObj.refresh();
                  } else {
                    addClass([settingsPanel], "hide");
                  }
                  scheduleObj.refreshEvents();
                }}
              />
            </AppBarComponent>
            <ToolbarComponent
              id="toolbarOptions"
              cssClass="overview-toolbar"
              width="100%"
              height={70}
              overflowMode="Scrollable"
              scrollStep={100}
              created={() =>
                (liveTimeInterval = setInterval(() => {
                  updateLiveTime();
                }, 1000))
              }
              clicked={onToolbarItemClicked.bind(this)}
            >
              <ItemsDirective>
                <ItemDirective
                  prefixIcon="e-icons e-plus"
                  tooltipText="New Event"
                  text="New Event"
                  tabIndex={0}
                />
                <ItemDirective
                  prefixIcon="e-icons e-repeat"
                  tooltipText="New Recurring Event"
                  text="New Recurring Event"
                  tabIndex={0}
                />
                <ItemDirective type="Separator" />
                <ItemDirective
                  prefixIcon="e-icons e-day"
                  tooltipText="Day"
                  text="Day"
                  tabIndex={0}
                />
                <ItemDirective
                  prefixIcon="e-icons e-week"
                  tooltipText="Week"
                  text="Week"
                  tabIndex={0}
                />
                <ItemDirective
                  prefixIcon="e-icons e-week"
                  tooltipText="WorkWeek"
                  text="WorkWeek"
                  tabIndex={0}
                />
                <ItemDirective
                  prefixIcon="e-icons e-month"
                  tooltipText="Month"
                  text="Month"
                  tabIndex={0}
                />
                <ItemDirective
                  prefixIcon="e-icons e-month"
                  tooltipText="Year"
                  text="Year"
                  tabIndex={0}
                />
                <ItemDirective
                  prefixIcon="e-icons e-agenda-date-range"
                  tooltipText="Agenda"
                  text="Agenda"
                  tabIndex={0}
                />
                <ItemDirective
                  tooltipText="Timeline Views"
                  text="Timeline Views"
                  template={timelineTemplate.bind(this)}
                />
                <ItemDirective type="Separator" />
                <ItemDirective
                  tooltipText="Grouping"
                  text="Grouping"
                  template={groupTemplate.bind(this)}
                />
                <ItemDirective
                  tooltipText="Timme Slots"
                  text="Timme Slots"
                  template={gridlineTemplate.bind(this)}
                />
                <ItemDirective
                  tooltipText="Auto Fit Rows"
                  text="Auto Fit Rows"
                  template={autoHeightTemplate.bind(this)}
                />
              </ItemsDirective>
            </ToolbarComponent>
            <div className="overview-content">
              <div className="left-panel">
                <div className="overview-scheduler">
                  <ScheduleComponent
                    id="scheduler"
                    cssClass="schedule-overview"
                    ref={(schedule) => (scheduleObj = schedule)}
                    width="100%"
                    height="100%"
                    group={{ resources: ["Calendars"] }}
                    timezone="UTC"
                    actionComplete={handleUpdateEvent}
                    dateHeaderTemplate={dateHeaderTemplate.bind(this)}
                    eventSettings={{ dataSource: dataevents }}
                  >
                    <ResourcesDirective>
                      <ResourceDirective
                        field="CalendarId"
                        title="Calendars"
                        name="Calendars"
                        dataSource={calendarCollections}
                        query={new Query().where("CalendarId", "equal", 1)}
                        textField="CalendarText"
                        idField="CalendarId"
                        colorField="CalendarColor"
                      ></ResourceDirective>
                    </ResourcesDirective>
                    <ViewsDirective>
                      <ViewDirective option="Day" />
                      <ViewDirective option="Week" />
                      <ViewDirective option="WorkWeek" />
                      <ViewDirective option="Month" />
                      <ViewDirective option="Year" />
                      <ViewDirective option="Agenda" />
                      <ViewDirective option="TimelineDay" />
                      <ViewDirective option="TimelineWeek" />
                      <ViewDirective option="TimelineWorkWeek" />
                      <ViewDirective option="TimelineMonth" />
                      <ViewDirective option="TimelineYear" />
                    </ViewsDirective>
                    <Inject
                      services={[
                        Day,
                        Week,
                        WorkWeek,
                        Month,
                        Year,
                        Agenda,
                        TimelineViews,
                        TimelineMonth,
                        TimelineYear,
                        DragAndDrop,
                        Resize,
                        Print,
                        ExcelExport,
                        ICalendarImport,
                        ICalendarExport,
                      ]}
                    />
                  </ScheduleComponent>
                  <ContextMenuComponent
                    id="overviewContextMenu"
                    cssClass="schedule-context-menu"
                    ref={(menu) => (contextMenuObj = menu)}
                    target=".e-schedule"
                    items={contextMenuItems}
                    beforeOpen={(args) => {
                      let newEventElement =
                        document.querySelector(".e-new-event");
                      if (newEventElement) {
                        remove(newEventElement);
                        removeClass(
                          [document.querySelector(".e-selected-cell")],
                          "e-selected-cell"
                        );
                      }
                      scheduleObj.closeQuickInfoPopup();
                      let targetElement = args.event.target;
                      if (closest(targetElement, ".e-contextmenu")) {
                        return;
                      }
                      selectedTarget = closest(
                        targetElement,
                        ".e-appointment,.e-work-cells,.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells"
                      );
                      if (isNullOrUndefined(selectedTarget)) {
                        args.cancel = true;
                        return;
                      }
                      if (selectedTarget.classList.contains("e-appointment")) {
                        let eventObj =
                          scheduleObj.getEventDetails(selectedTarget);
                        if (eventObj.RecurrenceRule) {
                          contextMenuObj.showItems(
                            ["EditRecurrenceEvent", "DeleteRecurrenceEvent"],
                            true
                          );
                          contextMenuObj.hideItems(
                            ["Add", "AddRecurrence", "Today", "Save", "Delete"],
                            true
                          );
                        } else {
                          contextMenuObj.showItems(["Save", "Delete"], true);
                          contextMenuObj.hideItems(
                            [
                              "Add",
                              "AddRecurrence",
                              "Today",
                              "EditRecurrenceEvent",
                              "DeleteRecurrenceEvent",
                            ],
                            true
                          );
                        }
                        return;
                      } else if (
                        (selectedTarget.classList.contains("e-work-cells") ||
                          selectedTarget.classList.contains(
                            "e-all-day-cells"
                          )) &&
                        !selectedTarget.classList.contains("e-selected-cell")
                      ) {
                        removeClass(
                          [].slice.call(
                            scheduleObj.element.querySelectorAll(
                              ".e-selected-cell"
                            )
                          ),
                          "e-selected-cell"
                        );
                        selectedTarget.setAttribute("aria-selected", "true");
                        selectedTarget.classList.add("e-selected-cell");
                      }
                      contextMenuObj.hideItems(
                        [
                          "Save",
                          "Delete",
                          "EditRecurrenceEvent",
                          "DeleteRecurrenceEvent",
                        ],
                        true
                      );
                      contextMenuObj.showItems(
                        ["Add", "AddRecurrence", "Today"],
                        true
                      );
                    }}
                    select={(args) => {
                      let selectedMenuItem = args.item.id;
                      let eventObj = {};
                      if (
                        selectedTarget &&
                        selectedTarget.classList.contains("e-appointment")
                      ) {
                        eventObj = scheduleObj.getEventDetails(selectedTarget);
                      }
                      switch (selectedMenuItem) {
                        case "Today":
                          scheduleObj.selectedDate = new Date();
                          break;
                        case "Add":
                        case "AddRecurrence":
                          let selectedCells = scheduleObj.getSelectedElements();
                          let activeCellsData = scheduleObj.getCellDetails(
                            selectedCells.length > 0
                              ? selectedCells
                              : selectedTarget
                          );
                          if (selectedMenuItem === "Add") {
                            scheduleObj.openEditor(activeCellsData, "Add");
                          } else {
                            scheduleObj.openEditor(
                              activeCellsData,
                              "Add",
                              false,
                              1
                            );
                          }
                          break;
                        case "Save":
                        case "EditOccurrence":
                        case "EditSeries":
                          if (selectedMenuItem === "EditSeries") {
                            let query = new Query().where(
                              scheduleObj.eventFields.id,
                              "equal",
                              eventObj.RecurrenceID
                            );
                            eventObj = new DataManager(
                              scheduleObj.eventsData
                            ).executeLocal(query)[0];
                          }
                          scheduleObj.openEditor(eventObj, selectedMenuItem);
                          break;
                        case "Delete":
                          scheduleObj.deleteEvent(eventObj);
                          break;
                        case "DeleteOccurrence":
                        case "DeleteSeries":
                          scheduleObj.deleteEvent(eventObj, selectedMenuItem);
                          break;
                      }
                    }}
                  ></ContextMenuComponent>
                </div>
              </div>
              <div className="right-panel hide">
                <div className="control-panel e-css">
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        Calendar
                      </label>
                    </div>
                    <div className="col-right">
                      <MultiSelectComponent
                        id="resources"
                        cssClass="schedule-resource"
                        ref={(resources) => (resourceObj = resources)}
                        dataSource={calendarCollections}
                        mode="CheckBox"
                        fields={{ text: "CalendarText", value: "CalendarId" }}
                        enableSelectionOrder={false}
                        showClearButton={false}
                        showDropDownIcon={true}
                        popupHeight={300}
                        value={[1]}
                        change={onResourceChange.bind(this)}
                      >
                        <Inject services={[CheckBoxSelection]} />
                      </MultiSelectComponent>
                    </div>
                  </div>
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        First Day of Week
                      </label>
                    </div>
                    <div className="col-right">
                      <DropDownListComponent
                        id="weekFirstDay"
                        dataSource={weekDays}
                        fields={{ text: "text", value: "value" }}
                        value={0}
                        popupHeight={400}
                        change={(args) => {
                          scheduleObj.firstDayOfWeek = args.value;
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        Work week
                      </label>
                    </div>
                    <div className="col-right">
                      <MultiSelectComponent
                        id="workWeekDays"
                        cssClass="schedule-workweek"
                        ref={(workWeek) => (workWeekObj = workWeek)}
                        dataSource={weekDays}
                        mode="CheckBox"
                        fields={{ text: "text", value: "value" }}
                        enableSelectionOrder={false}
                        showClearButton={false}
                        showDropDownIcon={true}
                        value={[1, 2, 3, 4, 5]}
                        change={(args) => (scheduleObj.workDays = args.value)}
                      >
                        <Inject services={[CheckBoxSelection]} />
                      </MultiSelectComponent>
                    </div>
                  </div>
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        Timezone
                      </label>
                    </div>
                    <div className="col-right">
                      <DropDownListComponent
                        id="timezone"
                        dataSource={timezoneData}
                        fields={{ text: "text", value: "value" }}
                        value="Etc/GMT"
                        popupHeight={150}
                        change={(args) => {
                          scheduleObj.timezone = args.value;
                          updateLiveTime();
                          document.querySelector(
                            ".schedule-overview #timezoneBtn"
                          ).innerHTML =
                            '<span class="e-btn-icon e-icons e-time-zone e-icon-left"></span>' +
                            args.itemData.text;
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        Day Start Hour
                      </label>
                    </div>
                    <div className="col-right">
                      <TimePickerComponent
                        id="dayStartHour"
                        showClearButton={false}
                        value={new Date(new Date().setHours(0, 0, 0))}
                        change={(args) =>
                          (scheduleObj.startHour = intl.formatDate(args.value, {
                            skeleton: "Hm",
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        Day End Hour
                      </label>
                    </div>
                    <div className="col-right">
                      <TimePickerComponent
                        id="dayEndHour"
                        showClearButton={false}
                        value={new Date(new Date().setHours(23, 59, 59))}
                        change={(args) =>
                          (scheduleObj.endHour = intl.formatDate(args.value, {
                            skeleton: "Hm",
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        Work Start Hour
                      </label>
                    </div>
                    <div className="col-right">
                      <TimePickerComponent
                        id="workHourStart"
                        showClearButton={false}
                        value={new Date(new Date().setHours(9, 0, 0))}
                        change={(args) =>
                          (scheduleObj.workHours.start = intl.formatDate(
                            args.value,
                            { skeleton: "Hm" }
                          ))
                        }
                      />
                    </div>
                  </div>
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        Work End Hour
                      </label>
                    </div>
                    <div className="col-right">
                      <TimePickerComponent
                        id="workHourEnd"
                        showClearButton={false}
                        value={new Date(new Date().setHours(18, 0, 0))}
                        change={(args) =>
                          (scheduleObj.workHours.end = intl.formatDate(
                            args.value,
                            { skeleton: "Hm" }
                          ))
                        }
                      />
                    </div>
                  </div>
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        Slot Duration
                      </label>
                    </div>
                    <div className="col-right">
                      <DropDownListComponent
                        id="slotDuration"
                        dataSource={majorSlotData}
                        fields={{ text: "Name", value: "Value" }}
                        value={60}
                        popupHeight={150}
                        change={(args) => {
                          scheduleObj.timeScale.interval = args.value;
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        Slot Interval
                      </label>
                    </div>
                    <div className="col-right">
                      <DropDownListComponent
                        id="slotInterval"
                        dataSource={minorSlotData}
                        value={2}
                        popupHeight={150}
                        change={(args) => {
                          scheduleObj.timeScale.slotCount = args.value;
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        Time Format
                      </label>
                    </div>
                    <div className="col-right">
                      <DropDownListComponent
                        id="timeFormat"
                        dataSource={timeFormatData}
                        fields={{ text: "Name", value: "Value" }}
                        value={"hh:mm a"}
                        popupHeight={150}
                        change={(args) => {
                          scheduleObj.timeFormat = args.value;
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        Week Numbers
                      </label>
                    </div>
                    <div className="col-right">
                      <DropDownListComponent
                        id="weekNumber"
                        dataSource={weekNumberData}
                        fields={{ text: "Name", value: "Value" }}
                        value={"Off"}
                        popupHeight={150}
                        change={(args) => {
                          if (args.value == "Off") {
                            scheduleObj.showWeekNumber = false;
                          } else {
                            scheduleObj.showWeekNumber = true;
                            scheduleObj.weekRule = args.value;
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-row">
                    <div className="col-left">
                      <label style={{ lineHeight: "34px", margin: "0" }}>
                        Tooltip
                      </label>
                    </div>
                    <div className="col-right">
                      <DropDownListComponent
                        id="tooltip"
                        dataSource={tooltipData}
                        fields={{ text: "Name", value: "Value" }}
                        value={"Off"}
                        popupHeight={150}
                        change={(args) => {
                          if (args.value === "Off") {
                            scheduleObj.eventSettings.enableTooltip = false;
                          } else {
                            scheduleObj.eventSettings.enableTooltip = true;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Schedule;
