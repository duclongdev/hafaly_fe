import React, { useMemo } from "react";
import style from "./style.module.scss";
import { Avatar, Divider, Tooltip } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Draggable } from "react-beautiful-dnd";
const Heading = () => {
  return (
    <div className={style.heading}>
      <div>Việc nhà</div>
      <div>
        <svg
          width="13"
          height="3"
          viewBox="0 0 13 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.9393 1.5C2.9393 1.79667 2.85311 2.08668 2.69162 2.33336C2.53014 2.58003 2.30061 2.77229 2.03206 2.88582C1.76352 2.99935 1.46802 3.02906 1.18294 2.97118C0.897853 2.9133 0.635986 2.77044 0.430452 2.56066C0.224917 2.35088 0.0849465 2.08361 0.0282396 1.79264C-0.0284672 1.50166 0.00063678 1.20006 0.111871 0.925975C0.223106 0.651886 0.411475 0.417618 0.653158 0.252796C0.894841 0.0879735 1.17898 0 1.46965 0C1.85943 0 2.23324 0.158035 2.50885 0.43934C2.78447 0.720644 2.9393 1.10218 2.9393 1.5Z"
            fill="#37352F"
            fillOpacity="0.45"
          />
          <path
            d="M7.83817 1.5C7.83817 1.79667 7.75198 2.08668 7.59049 2.33336C7.429 2.58003 7.19947 2.77229 6.93093 2.88582C6.66239 2.99935 6.36689 3.02906 6.0818 2.97118C5.79672 2.9133 5.53485 2.77044 5.32932 2.56066C5.12378 2.35088 4.98381 2.08361 4.9271 1.79264C4.8704 1.50166 4.8995 1.20006 5.01074 0.925975C5.12197 0.651886 5.31034 0.417618 5.55202 0.252796C5.79371 0.0879735 6.07785 0 6.36852 0C6.75829 0 7.13211 0.158035 7.40772 0.43934C7.68333 0.720644 7.83817 1.10218 7.83817 1.5Z"
            fill="#37352F"
            fillOpacity="0.45"
          />
          <path
            d="M12.737 1.5C12.737 1.79667 12.6508 2.08668 12.4893 2.33336C12.3278 2.58003 12.0983 2.77229 11.8297 2.88582C11.5612 2.99935 11.2657 3.02906 10.9806 2.97118C10.6955 2.9133 10.4337 2.77044 10.2281 2.56066C10.0226 2.35088 9.88261 2.08361 9.82591 1.79264C9.7692 1.50166 9.79831 1.20006 9.90954 0.925975C10.0208 0.651886 10.2091 0.417618 10.4508 0.252796C10.6925 0.0879735 10.9767 0 11.2673 0C11.6571 0 12.0309 0.158035 12.3065 0.43934C12.5821 0.720644 12.737 1.10218 12.737 1.5Z"
            fill="#37352F"
            fillOpacity="0.45"
          />
        </svg>
      </div>
    </div>
  );
};

const Message = () => {
  return (
    <div className={style.message}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 8C5.75 8.0663 5.72366 8.12989 5.67678 8.17678C5.62989 8.22366 5.5663 8.25 5.5 8.25C5.4337 8.25 5.37011 8.22366 5.32322 8.17678C5.27634 8.12989 5.25 8.0663 5.25 8C5.25 7.9337 5.27634 7.87011 5.32322 7.82322C5.37011 7.77634 5.4337 7.75 5.5 7.75C5.5663 7.75 5.62989 7.77634 5.67678 7.82322C5.72366 7.87011 5.75 7.9337 5.75 8ZM5.75 8H5.5M8.25 8C8.25 8.0663 8.22366 8.12989 8.17678 8.17678C8.12989 8.22366 8.0663 8.25 8 8.25C7.9337 8.25 7.87011 8.22366 7.82322 8.17678C7.77634 8.12989 7.75 8.0663 7.75 8C7.75 7.9337 7.77634 7.87011 7.82322 7.82322C7.87011 7.77634 7.9337 7.75 8 7.75C8.0663 7.75 8.12989 7.77634 8.17678 7.82322C8.22366 7.87011 8.25 7.9337 8.25 8ZM8.25 8H8M10.75 8C10.75 8.0663 10.7237 8.12989 10.6768 8.17678C10.6299 8.22366 10.5663 8.25 10.5 8.25C10.4337 8.25 10.3701 8.22366 10.3232 8.17678C10.2763 8.12989 10.25 8.0663 10.25 8C10.25 7.9337 10.2763 7.87011 10.3232 7.82322C10.3701 7.77634 10.4337 7.75 10.5 7.75C10.5663 7.75 10.6299 7.77634 10.6768 7.82322C10.7237 7.87011 10.75 7.9337 10.75 8ZM10.75 8H10.5M14 8C14 11.0373 11.3133 13.5 8 13.5C7.42479 13.5007 6.85202 13.4252 6.29667 13.2753C5.51384 13.8259 4.55888 14.0761 3.60667 13.98C3.5008 13.9698 3.39538 13.9553 3.29067 13.9367C3.61924 13.5494 3.84365 13.0848 3.94267 12.5867C4.00267 12.282 3.854 11.986 3.63133 11.7693C2.62 10.7853 2 9.45933 2 8C2 4.96267 4.68667 2.5 8 2.5C11.3133 2.5 14 4.96267 14 8Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div>3 messages</div>
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

const Time = () => {
  return (
    <div className={style.timeContainer}>
      <div className={style.timeItem}>10:10 AM - 11:11 AM</div>
      <div className={style.jobJoin}>
        <Avatar.Group
          maxCount={2}
          maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
          <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1890ff" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      </div>
    </div>
  );
};

const TodoCard = ({ item, index, lastIndex, last }) => {
  const handleOnclick = () => {
    return <div>hhiihih</div>;
  };
  return (
    <div onClick={() => console.log("hihi")} className={style.containerBig}>
      <Draggable
        draggableId={item.id}
        index={index}
        onClick={{ handleOnclick }}
      >
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              snapshot={snapshot}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div className={style.container}>
                <Heading />
                <div className={style.title}>
                  <h2> {"Prepare lunch"}</h2>
                </div>
                <Message />
                <div className={style.divider}></div>
                <Time />
              </div>
              {lastIndex}
            </div>
          );
        }}
      </Draggable>
    </div>
  );
};

export default TodoCard;
