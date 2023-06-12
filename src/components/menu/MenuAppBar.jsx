import React, { useState, startTransition } from "react";
import { MailOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import useAuth from "../../hooks/useAuth";
import styles from "./style.module.scss";
import Search from "../../assets/icons/Search";
import Notification from "../../assets/icons/Notification";
import Setting from "../../assets/icons/Setting";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/menuSlice";
import { useSelector } from "react-redux";
import { selectMenuState, selectMenuPeekingState } from "../../redux/menuSlice";
import { useNavigate } from "react-router-dom";
import {
  MeatIcon,
  ScheduleIcon,
  NoteIcon,
  TaskIcon,
  ContactIcon,
} from "../../assets/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "",
    "grp",
    null,
    [
      getItem("Search", "search", <Search />),
      getItem("Notification", "notification", <Notification />),
      getItem("Setting", "setting", <Setting />),
      getItem("Homepage", "homepage", <Setting />),
    ],
    "group"
  ),
  getItem("Family", "family", null, [
    getItem("Task", "task", <TaskIcon />),
    getItem("Schedule", "schedule", <ScheduleIcon />),
    getItem("Meal", "meal", <MeatIcon />),
  ]),
  getItem("Personal", "", null, [
    getItem("Contact", "contact", <ContactIcon />),
    getItem("Note", "note", <NoteIcon />),
  ]),
  getItem("Thanh vien", "member", null, [
    getItem("Members", "members", <ContactIcon />)
  ]),
];

const UserInfo = ({ isOpen }) => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const handleCollapsed = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={styles.userInfoContainer}>
      <div
        style={{
          marginRight: "10px",
          display: "flex",
        }}
      >
        <img
          src="https://res.cloudinary.com/dzvxrqimt/image/upload/v1683215279/user_djdrzr.png"
          style={{ width: "30px", height: "30px" }}
        />
        <div style={{ paddingLeft: "10px" }}>
          <div>{`${auth.user.firstName} ${auth.user.lastName}`}</div>
          <div style={{ fontSize: "12px" }}>{auth.user.email}</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isOpen ? (
          <button className={styles.arrowLeftBtn} onClick={handleCollapsed}>
            <DoubleLeftOutlined />
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const MenuAppBar = () => {
  const isOpen = useSelector(selectMenuState);
  const isPeeking = useSelector(selectMenuPeekingState);
  const navigate = useNavigate();
  const onClick = (e) => {
    startTransition(() => {
      navigate(e.key);
    });
  };
  const menu = clsx(styles.menu_container, {
    [styles.peeking]: isPeeking,
    [styles.menuOpen]: isOpen,
  });

  return (
    <div className={menu} id="menu-container">
      <UserInfo isOpen={isOpen} />
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        inlineCollapsed={false}
        // className={menuListClasses}
      />
    </div>
  );
};

export default MenuAppBar;
