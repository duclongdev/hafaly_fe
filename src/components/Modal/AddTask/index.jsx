import React from "react";
import style from "./style.module.scss";
import { DatePicker, Space, Select, Divider } from "antd";
const Options = ({ taq, children }) => {
  return (
    <div className={style.optContainer}>
      <div className={style.taq}>{taq}</div>
      <div className={style.children}>{children}</div>
    </div>
  );
};
const AddTask = () => {
  const { RangePicker } = DatePicker;
  const [type, setType] = React.useState(false);
  const setTypeTask = (value) => {
    if (value === "personal") setType(false);
    else setType(true);
  };
  return (
    <div className={style.container}>
      <input className={style.input} type="text" placeholder="Name of task" />

      <textarea className={style.description} placeholder="Description" />

      <Options taq="Expired">
        <RangePicker showTime />
      </Options>
      <Options taq="Status">
        <Select
          defaultValue="in-process"
          style={{ width: 200 }}
          onChange={setTypeTask}
          options={[
            { label: "Not Started", value: "not-started" },
            { label: "In Process", value: "in-process" },
            { label: "Complete", value: "complete" },
          ]}
        />
      </Options>
      <Options taq="Type">
        <Select
          defaultValue="personal"
          style={{ width: 200 }}
          onChange={setTypeTask}
          options={[
            { label: "Personal", value: "personal" },
            { label: "Family", value: "family" },
          ]}
        />
      </Options>
      {type ? (
        <Options taq="Member">
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="select one country"
            defaultValue={["china"]}
            optionLabelProp="label"
          >
            <Option value="my-wife" label="My wife">
              <Space>
                <span role="img" aria-label="China">
                  👩
                </span>
                My wife
              </Space>
            </Option>
            <Option value="child-1" label="Child 1">
              <Space>
                <span role="imf" aria-label="Child 1">
                  👦
                </span>
                Child 1
              </Space>
            </Option>
            <Option value="child3" label="Child 3">
              <Space>
                <span role="img" aria-label="Child 3">
                  👧
                </span>
                Child 2
              </Space>
            </Option>
            <Option value="child3" label="Child 3">
              <Space>
                <span role="img" aria-label="Child 3">
                  👶
                </span>
                Child 3
              </Space>
            </Option>
          </Select>
        </Options>
      ) : (
        <></>
      )}
      <Divider />
      <div>
        <textarea className={style.description} placeholder="Note here" />
      </div>
    </div>
  );
};

export default AddTask;
