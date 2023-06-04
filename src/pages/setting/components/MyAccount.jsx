import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./MyAccount.scss";
export default function MyAccount() {
  function Avataracc() {
    return (
      <Stack direction="row" spacing={2}>
        <Avatar>LM</Avatar>
      </Stack>
    );
  }
 
  function ChangeEmail() {
    
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "default",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "10%",
            }}
          >
            <div
              style={{
                borderBottom: "0px",
                marginBottom: "2px",
                marginTop: "0px",
                paddingBottom: "0px",
                fontSize: "14px",
                fontWeight: 400,
                width: "auto",
                color: "rgb(55, 53, 47)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>Email</div>
            </div>
            <div
              style={{
                fontSize: "12px",
                lineHeight: "16px",
                color: "rgba(55, 53, 47, 0.65)",
              }}
            >
              lengocminh27042002@gmail.com
            </div>
          </div>
          <div
            role="button"
            tabIndex={0}
            style={{
              userSelect: "none",
              transition: "background 20ms ease-in 0s",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
              borderRadius: "3px",
              height: "32px",
              paddingLeft: "12px",
              paddingRight: "12px",
              fontSize: "14px",
              lineHeight: "1.2",
              border: "1px solid rgba(55, 53, 47, 0.16)",
            }}
          >
            Change email
          </div>
        </div>
      );
    
  }
  
  return (
    <div className="MyAccount_setting">
      <div className="My_profile">My profile</div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Avataracc />
        <div style={{ marginLeft: "20px", width: "250px" }}>
          <label className="preferredname">Preferred Name</label>
          <div className="textarea">
            <input type="text" className="inputname" value="Le Minh" />
          </div>
        </div>
      </div>
      <div className="div2">Account Setting</div>
      <ChangeEmail/>
    </div>
  );
}
