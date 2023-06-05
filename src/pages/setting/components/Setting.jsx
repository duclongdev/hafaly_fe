import React, { useState } from "react";
import { DialogComponent, fit } from "@syncfusion/ej2-react-popups";
//Icon
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./Setting.scss";
import { MdAccountCircle, MdLanguage } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { RiContactsBookUploadLine } from "react-icons/ri";
//Page
import MyAccount from "./MyAccount.jsx";
import { FitScreen } from "@mui/icons-material";
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
  function Acc_infor() {
    return (
      <div className="flex items-center h-20 pr-6 pl-4">
        
        <div className="flex row-auto">
          <Stack>
          <Avatar sx={{width:25, height:25}}/>
        </Stack>
        </div>
        

        <div className="pl-3">
          <div class="text-xl leading-5 text-gray-800 whitespace-nowrap overflow-hidden overflow-ellipsis font-bold">
            Le Minh
          </div>
          <div className="text-xl leading-4 text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis pt-2 pb-1">
            lengocminh27042002@gmail.com
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="Setting">
      <div className="Left_Container">
        <div className="Left_item_container">
          <div className="ItemsList">
            <div className="Header">Account</div>
            <Acc_infor />
            <Button label={"My account"} icon={MdAccountCircle} index={1}/>
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
          <div className="Right_ItemsList">
            <MyAccount />
          </div>
        </div>
      </div>
    </div>
  );
}
