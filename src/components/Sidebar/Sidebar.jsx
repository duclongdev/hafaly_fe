import styles from "./Sidebar.module.scss";
import { useState } from "react";
import { FaSearch, FaBell, FaCog, FaHome, FaWallet, FaStickyNote, FaTasks, FaAddressBook, FaShoppingCart, FaNewspaper, FaUtensils, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import {MdFamilyRestroom} from "react-icons/md";
import { useTranslation } from 'react-i18next'
import i18n from "../../i18n";
import {useNavigate} from "react-router-dom";

import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { Home } from "@mui/icons-material";




function SidebarButton({path, label, activeIndex, index, onClick, icon: Icon }) {
  return (
    <button
      className={`${styles.sidebar_button} ${activeIndex === index ? styles.active : ""
        }`}
      onClick={() => onClick(index, path)}
      id={path}
    >
      {Icon && <Icon className={styles.icon} />}
      <span>{label}</span>
      
    </button>
  );
}



function Sidebar() {
  const [activeIndex, setActiveIndex] = useState();
  const [activePath, SetPath] = useState();
  const { t } = useTranslation('Sidebar');
  const handleButtonClick = (index, path) => {
    setActiveIndex(index);
    navigate(path)
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.sidebar}>
        <SidebarButton
          label={t("Search")}
          activeIndex={activeIndex}
          index={0}
          onClick={handleButtonClick}
          icon={FaSearch}
          
        />
        <SidebarButton
          label={t("Notification")}
          activeIndex={activeIndex}
          index={1}
          onClick={handleButtonClick}
          icon={FaBell}
        />
        <SidebarButton
          label={t("Setting")}
          activeIndex={activeIndex}
          index={2}
          onClick={handleButtonClick}
          icon={FaCog}
        />
        <SidebarButton
          label={t("HomePage")}
          activeIndex={activeIndex}
          index={3}
          onClick={handleButtonClick}
          icon={FaHome}
          path={'/home'}
          
        />
        <h1 className={styles.title}>Gia Đình</h1>
        <SidebarButton
          label={t("ManageFamily")}
          activeIndex={activeIndex}
          index={4}
          onClick={handleButtonClick}
          icon={MdFamilyRestroom}
          path={'/createfamily'}
        />
        <SidebarButton
          label={t("Tasks")}
          activeIndex={activeIndex}
          index={5}
          onClick={handleButtonClick}
          icon={FaBriefcase}
        />
        <SidebarButton
          label={t("Schedule")}
          activeIndex={activeIndex}
          index={6}
          onClick={handleButtonClick}
          icon={FaCalendarAlt}
        />
        <SidebarButton
          label={t("Meal's Plan")}
          activeIndex={activeIndex}
          index={7}
          onClick={handleButtonClick}
          icon={FaUtensils}
        />
        <SidebarButton
          label={t("NewFeed")}
          activeIndex={activeIndex}
          index={8}
          onClick={handleButtonClick}
          icon={FaNewspaper}
        />
        <SidebarButton
          label={t("Shopping")}
          activeIndex={activeIndex}
          index={9}
          onClick={handleButtonClick}
          icon={FaShoppingCart}
        />
        <h1 className={styles.title}>Cá Nhân</h1>
        <SidebarButton
          label={t("Contacts")}
          activeIndex={activeIndex}
          index={10}
          onClick={handleButtonClick}
          icon={FaAddressBook}
        />
        <SidebarButton
          label={t("To do List")}
          activeIndex={activeIndex}
          index={11}
          onClick={handleButtonClick}
          icon={FaTasks}
        />
        <SidebarButton
          label={t("Notes")}
          activeIndex={activeIndex}
          index={12}
          onClick={handleButtonClick}
          icon={FaStickyNote}
        />
      </div>


    </div>

  );
}
export default Sidebar
