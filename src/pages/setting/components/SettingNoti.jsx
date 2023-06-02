import * as React from "react";
import { MessageComponent } from "@syncfusion/ej2-react-notifications";
import "./SettingNoti.scss"
export default function SettingNoti() {
  return (
    <div className="setting-noti-control-pane">
      <div className="col-lg-12 control-section msg-default-section">
        <div className="content-section">
          <MessageComponent
            id="msg_default"
            content="Editing is restricted"
          ></MessageComponent>
          <MessageComponent
            id="msg_info"
            content="Please read the comments carefully"
            severity="Info"
          ></MessageComponent>
          <MessageComponent
            id="msg_success"
            content="Your message has been sent successfully"
            severity="Success"
          ></MessageComponent>
          <MessageComponent
            id="msg_warning"
            content="There was a problem with your network connection"
            severity="Warning"
          ></MessageComponent>
          <MessageComponent
            id="msg_error"
            content="A problem occurred while submitting your data"
            severity="Error"
          ></MessageComponent>
        </div>
      </div>
    </div>
  );
}
