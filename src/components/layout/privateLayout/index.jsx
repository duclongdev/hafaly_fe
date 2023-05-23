import React from "react";
import HeaderInPage from "../../Header/headerInApp";
import style from "./style.module.scss";

const PrivateLayout = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.headerWrapper}>
        <HeaderInPage />
      </div>
      <div className={style.contentWrapper}>{children}</div>
    </div>
  );
};

export default PrivateLayout;
