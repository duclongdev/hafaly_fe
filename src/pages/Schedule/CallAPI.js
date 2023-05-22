import React, { useState, useEffect } from "react";
import { DataManager } from "@syncfusion/ej2-data";
import axios from "axios";

import fs from "fs";
export default function CallAPI(data) {
  console.log("CallAPI");
  console.log("CallAPI-DATA");
  console.log(data);

  let eventsString = JSON.stringify(data);
  localStorage.setItem("eventsData", eventsString);



  //Ông xử lí gọi tới server ở đây nhá.
  // Dữ liệu tui lưu ở dạng object array chứa nhiều sự kiện
  //Lưu ở localstorage
}
