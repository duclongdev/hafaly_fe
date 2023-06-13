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
import ChangePasswordModal from "./ChangePasswordModal";
//redux
import { useSelector, useDispatch } from "react-redux";
import { setImagePath } from "../../../redux/reducers/UserAvatar";
function Button({ label, icon: Icon }) {
  return (
    <div
      role="button"
      tabIndex="0"
      style={{
        userSelect: "none",
        transition: "background 20ms ease-in 0s",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "10px",
        paddingRight: "8px",
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
            fontSize: "15px",
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
  const dispatch = useDispatch();
  const imagePath = useSelector((state) => state.image.imagePath);
  
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center pointer-events-auto opacity-100 transform translate-z-0">
      <div
        style={{
          position: "absolute",
          inset: "0px",
          background: "rgba(15, 15, 15, 0.6)",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: "999999",
          boxShadow:
            "rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 5px 10px, rgba(15, 15, 15, 0.2) 0px 15px 40px",
          borderRadius: "5px",
          background: "white",
          marginBottom: "0px",
          width: "1150px",
          maxWidth: "calc(100vw - 100px)",
          height: "calc(100vh - 100px)",
          overflow: "hidden",
          maxHeight: "715px",
        }}
      >
        <div className="flex h-full flex-row">
          <div className="h-full bg-[rgb(251, 251, 250)] flex-grow-0 flex-shrink-0 w-240 overflow-y-auto">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
                paddingTop: "10px",
                paddingLeft: "4px",
                paddingRight: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                  paddingLeft: "4px",
                  paddingRight: "4px",
                  overflow: "auto",
                  paddingBottom: "12px",
                }}
              >
                <div className="overflow-auto pb-3">
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: 1,
                      marginBottom: "1px",
                      color: "rgba(55, 53, 47, 0.65)",
                      fontWeight: 600,
                      alignItems: "center",
                      display: "flex",
                      height: "24px",
                      paddingLeft: "12px",
                      paddingRight: "11px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    Account
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "44px",
                      paddingLeft: "12px",
                      paddingRight: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                        color: "rgba(55, 53, 47, 0.85)",
                        fill: "rgba(55, 53, 47, 0.85)",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            background: "white",
                            borderRadius: "100%",
                            boxShadow: "rgba(15, 15, 15, 0.1) 0px 2px 4px",
                          }}
                        >
                          <div
                            style={{
                              borderRadius: "100%",
                              width: "20px",
                              height: "20px",
                              maxWidth: "100%",
                              maxHeight: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              userSelect: "none",
                              opacity: 1,
                            }}
                          >
                            <div style={{ width: "100%", height: "100%" }}>
                              <img
                                src={imagePath}
                                referrerPolicy="same-origin"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  borderRadius: "100%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "rgb(55, 53, 47)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          fontWeight: 600,
                        }}
                      >
                        Minh Le
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          lineHeight: "16px",
                          color: "rgba(55, 53, 47, 0.65)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        minh123nzd@gmail.com
                      </div>
                    </div>
                  </div>
                  <Button label={"My account"} icon={MdAccountCircle} />
                  <Button
                    label={"My notifications & settings"}
                    icon={GoSettings}
                  />
                  <Button
                    label={"My connections"}
                    icon={RiContactsBookUploadLine}
                  />
                  <Button label={"Language & region"} icon={MdLanguage} />
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: 1,
                      marginBottom: "1px",
                      color: "rgba(55, 53, 47, 0.65)",
                      fontWeight: 600,
                      alignItems: "center",
                      display: "flex",
                      height: "24px",
                      paddingLeft: "12px",
                      paddingRight: "11px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    Work Space
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //Right_Panel */}
          <div className="flex-grow relative z-10 h-full">
            <div className="flex flex-col w-full h-full bg-white ">
              <div className="flex-grow transform translate-z-0 px-36 py-10 z-10 overflow-auto mr-0 mb-0">
                <MyAccount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
