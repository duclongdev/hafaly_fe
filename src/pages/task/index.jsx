import React, { useState } from "react";
import style from "./style.module.scss";
import { Divider, Space, Tag, Drawer } from "antd";
import TodoCard from "../../components/card/todoCard";
import { AddIcon, ThreeBarIcon, ThreeDotVerIcon } from "../../assets/icons";
import ThreeDotHoz from "../../assets/icons/ThreeDotHoz";
import BodyTask from "../../components/BodyTask";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectAddTaskModal } from "../../redux/addTask";
import { closeAddTaskModal } from "../../redux/addTask";
import AddTask from "../../components/Modal/AddTask";
import ItemInTaskManager from "../../components/ItemInTaskManager";
import TaskDrawer from "../../components/TaskDrawer";

const StateOfTask = () => {
  return (
    <div className={style.sotContainer}>
      <div className={style.sotTitle}>
        <span>Name</span>
        <span>Priority level</span>
        <span>Expired</span>
        <span>Tags</span>
        <span>Job assignor</span>
      </div>
      <div className={style.sotContent}>
        <span>Name</span>
        <Space size={[0, "small"]} wrap>
          <Tag bordered={false} color="purple">
            Medium
          </Tag>
        </Space>
        <span>Expired</span>
        <Space size={[0, 8]} wrap>
          <Tag color="#f50">#f50</Tag>
          <Tag color="#2db7f5">#2db7f5</Tag>
          <Tag color="#87d068">#87d068</Tag>
          <Tag color="#108ee9">#108ee9</Tag>
        </Space>
        <span>Job assignor</span>
      </div>
    </div>
  );
};

const PreTaskItem = ({ name }) => {
  return (
    <div style={{ display: "flex", marginRight: "10px" }}>
      <div style={{ marginRight: "4px" }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.39697 14.4634H13.5964C15.0532 14.4634 15.8311 13.6921 15.8311 12.2485V4.24609C15.8311 2.80249 15.0532 2.03125 13.5964 2.03125H2.39697C0.940186 2.03125 0.162354 2.7959 0.162354 4.24609V12.2485C0.162354 13.6987 0.940186 14.4634 2.39697 14.4634ZM1.63232 4.39771C1.63232 3.79126 1.94214 3.50122 2.52222 3.50122H7.28809V5.74243H1.63232V4.39771ZM13.4712 3.50122C14.0447 3.50122 14.3611 3.79126 14.3611 4.39771V5.74243H8.70532V3.50122H13.4712ZM1.63232 9.3811V7.10693H7.28809V9.3811H1.63232ZM8.70532 9.3811V7.10693H14.3611V9.3811H8.70532ZM2.52222 12.9934C1.94214 12.9934 1.63232 12.7034 1.63232 12.0969V10.7522H7.28809V12.9934H2.52222ZM14.3611 12.0969C14.3611 12.7034 14.0447 12.9934 13.4712 12.9934H8.70532V10.7522H14.3611V12.0969Z"
            fill="#37352F"
            fillOpacity="0.65"
          />
        </svg>
      </div>
      <div>{name}</div>
    </div>
  );
};

const PreTask = () => {
  return (
    <div className={style.preTaskContainer}>
      <div className={style.preLeft}>
        <PreTaskItem name={"Table"} />
        <PreTaskItem name={"List"} />
      </div>
      <div className={style.preRight}>
        <span>Filter</span>
        <span>Sort</span>
        <span>
          <ThreeDotVerIcon />
        </span>
      </div>
    </div>
  );
};
const FooterTask = () => {
  return (
    <div className={style.footerTaskContainer}>
      <div>
        <AddIcon />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <span>{"Add"}</span>
      </div>
    </div>
  );
};

const TaskPage = () => {
  const open = useSelector(selectAddTaskModal);
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch(closeAddTaskModal());
  };

  const onClose = () => {
    setOpenDrawer(false);
  };
  const showDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <div className={style.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className={style.heading}>Task need to be done</div>
          <Button type="primary" onClick={showDrawer}>
            Task Manage
          </Button>
        </div>

        <StateOfTask />
        <PreTask />
        <BodyTask />
        <FooterTask />
      </div>
      <Modal title="add task" open={open} onOk={hideModal} onCancel={hideModal}>
        <AddTask />
      </Modal>
      <Drawer
        title="Task management"
        placement={"right"}
        width={500}
        onClose={onClose}
        open={openDrawer}
      >
        <TaskDrawer />
      </Drawer>
    </>
  );
};

export default TaskPage;
