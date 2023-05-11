import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DoubleLeftOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import useAuth from "../../hooks/useAuth";
import styles from "./style.module.scss";
import Bold from "../../assets/icons/Bold";
import Search from "../../assets/icons/Search";
import Notification from "../../assets/icons/Notification";
import Setting from "../../assets/icons/Setting";
import clsx from "clsx";
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
      getItem("Search", "13", <Search />),
      getItem("Notification", "14", <Notification />),
      getItem("Setting", "15", <Setting />),
    ],
    "group"
  ),
  getItem("Family", "item 1rwerqw", <MailOutlined />, [
    getItem("Cong viec", "cv"),
    getItem("Lichj trinh", "lichj trinh"),
    getItem("Bua an, bua an"),
  ]),
  getItem("Ca nhan", "", null, [getItem("danh ba"), getItem("ghi chu")]),
  getItem("Thanh vien", "", null, []),
];

const UserInfo = ({ isOpen, setIsOpen }) => {
  const auth = useAuth();
  const handleCollapsed = () => {
    if (isOpen === false) setIsOpen(true);
    else setIsOpen(false);
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
        <button className={styles.arrowLeftBtn} onClick={handleCollapsed}>
          <DoubleLeftOutlined />
        </button>
      </div>
    </div>
  );
};

const MenuAppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = (e) => {
    console.log("click ", e);
  };
  const menuListClasses = clsx(styles.menu__list, {
    [styles["menu__list--open"]]: isOpen,
  });

  return (
    <div>
      <UserInfo isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        inlineCollapsed={false}
        className={menuListClasses}
      />
    </div>
  );
};

export default MenuAppBar;
