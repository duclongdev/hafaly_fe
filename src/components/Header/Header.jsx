import React, { useEffect, useState, startTransition } from "react";
import { useNavigate } from "react-router-dom";

//Component
import { motion, useScroll } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
//Router
//Styles
import classes from "./Header.module.scss";
import { lightBlue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import TranslateIcon from "@mui/icons-material/Translate";
import { GrLanguage } from "react-icons/gr";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { floatButtonPrefixCls } from "antd/es/float-button/FloatButton";
import i18next from "i18next";

function Header() {
  const { scrollYProgress } = useScroll();

  //Router
  const navigate = useNavigate();
  const HandleLogin = () => {
    startTransition(() => {
      navigate("login");
    });
  };
  //Translation
  const { i18n } = useTranslation();
  const [isVietnamese, setIsVietnamese] = useState(false);
  const { t } = useTranslation("Header");

  const changeLanguage = () => {
    if (!isVietnamese) {
      i18n.changeLanguage("Vi");
      setIsVietnamese(true);
    } else {
      i18n.changeLanguage("En");
      setIsVietnamese(false);
    }
  };
  useEffect(() => {
    localStorage.setItem("lang", isVietnamese ? "Vi" : "En");
    console.log(localStorage.getItem("lang"));
  }, [isVietnamese]);

  const handleLogout = () => {};

  return (
    <header className={classes.header_component}>
      <div className={classes.logo}>
        <div className={classes.img_ct}>
          <img src="src\assets\logo.svg" id="banner-logo" alt="Landing Page" />
        </div>
        <div>
          <h1>Hafaly</h1>
        </div>
      </div>
      <nav className={classes.nav_main}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
      </nav>
      <div className={classes.Login_ct}>
        <div className={classes.lang_ct}>
          <Button className={classes.lang_bt} onClick={changeLanguage}>
            {<GrLanguage className={classes.icon} />}
            {isVietnamese ? "Vi" : "En"}
          </Button>
        </div>

        <Button onClick={handleLogout}>Contact</Button>
        <Button className={classes.login_bt} onClick={HandleLogin}>
          Sign In
        </Button>
      </div>
    </header>
  );
}

export default Header;
