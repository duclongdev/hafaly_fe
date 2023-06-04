import React, { useState } from "react";
import Setting from "./components/Setting";
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import "./index.scss";
export default function index() {
  let buttons;
  const [display, setDisplay] = useState("none");
  const [status, setStatus] = useState({
    hideDialog: true,
  });
  const animationSettings = { effect: "Zoom" };
  buttons = [
    {
      click: dlgButtonClick,
      buttonModel: {
        content: "Save changes",
        isPrimary: true,
      },
    },
  ];
  function buttonClick() {
    setStatus({ hideDialog: true });
  }
  function dlgButtonClick() {}
  function dialogClose() {
    setStatus({ hideDialog: false });
    setDisplay("inline-block");
  }
  function dialogOpen() {
    setStatus({ hideDialog: true });
    setDisplay("none");
  }
  return (
    <div className="setting-control-pane">
      
        
        <DialogComponent
          id="defaultdialog"
          showCloseIcon={true}
          animationSettings={animationSettings}
          width="80%"
          height="100%"
          // target={"#targetElement"}
          header="Setting"
          visible={status.hideDialog}
          buttons={buttons}
          open={dialogOpen}
          close={dialogClose}
        >
          <Setting />
        </DialogComponent>
      
    </div>
  );
}
