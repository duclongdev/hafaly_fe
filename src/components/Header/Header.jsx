import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

//Component
import { motion, useScroll } from "framer-motion"
import { ParallaxProvider } from 'react-scroll-parallax';
//Router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from '../../routes/index';
//Styles
import classes from "./Header.module.scss";
import { lightBlue } from "@mui/material/colors";
import Button from '@mui/material/Button';
import TranslateIcon from '@mui/icons-material/Translate';

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

function Header() {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();


  const HandleLogin = () => {
    navigate('/login')


  }
  //Translation
  const langs = [
    {
      label: 'English',
      key: '1',
    },
    {
      label: 'Tiếng Việt',
      key: '2',
    },

  ];


  return (
    <header className={classes.header}>
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
            <a href="/">Home</a>
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
        <div className={classes.icon_ct}>
          <Dropdown
            menu={{
              langs,
            }}
            trigger={['click']}
            
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space style={{color:"white"}}>
                Language
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>

        <p>Contact</p>
        <Button onClick={HandleLogin}>Sign In</Button>
      </div>

    </header>


  );
};

export default Header;