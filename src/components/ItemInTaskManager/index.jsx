import React from "react";
import style from "./style.module.scss";
import clsx from "clsx";
import { Avatar } from "antd";

const ItemInTaskManager = ({ state, assigned }) => {
  const State = () => {
    const stateClasses = clsx(style.state, {
      [style.todo]: state === "todo",
      [style.inProgress]: state === "in-progress",
      [style.completed]: state === "completed",
    });
    return (
      <div className={stateClasses}>
        <span>{state}</span>
      </div>
    );
  };

  return (
    <div className={style.container}>
      <div className={style.left}>
        {assigned ? (
          <div>
            <Avatar
              style={{
                backgroundColor: "red",
                verticalAlign: "middle",
                marginRight: "20px",
              }}
            >
              {"L"}
            </Avatar>
          </div>
        ) : (
          <></>
        )}
        <div>
          <h2 className={style.name}>Ten cong viec</h2>
          <div>
            <span>Time: </span>
            <span>10:00 - 22:00</span>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <State />
      </div>
    </div>
  );
};

export default ItemInTaskManager;
