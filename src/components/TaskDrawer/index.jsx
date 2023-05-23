import React, { useState } from "react";
import style from "./style.module.scss";
import { Segmented } from "antd";
import ItemInTaskManager from "../ItemInTaskManager";

const TaskDrawer = () => {
  const [selectedSegment, setSelectedSegment] = useState("Option 1");
  const handleSegmentChange = (value) => {
    setSelectedSegment(value);
  };
  return (
    <div className={style.container}>
      <Segmented
        options={["Job assignment", "Assigned work"]}
        value={selectedSegment}
        onChange={handleSegmentChange}
      />
      {selectedSegment === "Job assignment" ? (
        <div className="transactionDiv">
          <ItemInTaskManager state={"todo"} />
          <ItemInTaskManager state={"in-progress"} />
          <ItemInTaskManager state={"completed"} />
          <ItemInTaskManager state={"todo"} />
          <ItemInTaskManager state={"todo"} />
        </div>
      ) : (
        <div className="transactionDiv">
          <ItemInTaskManager state={"todo"} assigned />
          <ItemInTaskManager state={"in-progress"} assigned />
          <ItemInTaskManager state={"completed"} assigned />
          <ItemInTaskManager state={"todo"} assigned />
          <ItemInTaskManager state={"todo"} assigned />
        </div>
      )}
    </div>
  );
};

export default TaskDrawer;
