import React, { useState } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
//Icon

import "./Setting.scss";
import { MdAccountCircle, MdLanguage } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { RiContactsBookUploadLine } from "react-icons/ri";
function Button({ path, label, activeIndex, index, onClick, icon: Icon }) {
  return (
    <div
      role="button"
      tabindex="0"
      style={{
        userSelect: "none",
        transition: "background 20ms ease-in 0s",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "12px",
        paddingRight: "12px",
        borderRadius: "3px",
        marginTop: "1px",
        marginBottom: "1px",
        minHeight: "27px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {Icon && <Icon className="icon" />}
        <div
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            color: "rgb(55, 53, 47)",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export default function Setting() {
  const [activeIndex, setActiveIndex] = useState();
  const handleButtonClick = (index, path) => {
    setActiveIndex(index);
  };
  return (
    <div className="Setting">
      <div className="Left_Container">
        <div className="Left_item_container">
          <div className="ItemsList">
            <div className="Header">Account</div>
            <Button label={"My account"} icon={MdAccountCircle} index={1} />
            <Button
              label={"My notifications & settings"}
              icon={GoSettings}
              index={2}
            />
            <Button
              label={"My connections"}
              icon={RiContactsBookUploadLine}
              index={3}
            />
            <Button label={"Language & region"} icon={MdLanguage} index={4} />
            <div className="Header">WorkSpace</div>
          </div>
        </div>
      </div>
      <div className="Right_container">
        <div className="Right_item_container">
        <div className="Header">WorkSpace</div>
        </div>
      </div>
    </div>
  );
}
