import React, { useState } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setOpenChangePass,
  setOpenEmailSetting,
} from "../../../redux/reducers/modalSlice";
import { setImagePath } from "../../../redux/reducers/UserAvatar";
//
import { AiOutlineRight } from "react-icons/ai";
import "./MyAccount.scss";
export default function MyAccount() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredCloseBtn, setHoveredCloseBtn] = useState(false);
  const imagePath = useSelector((state) => state.image.imagePath);
  const dispatch = useDispatch();
  function User_Photo() {
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        dispatch(setImagePath(reader.result));
      };

      console.log(file);
    };
    return (
      <div>
        <div className="select-none transition duration-200 ease-in cursor-pointer relative p-0 border-0 bg-none rounded-full">
          <div className="bg-opacity-8 rounded-full border border-gray-200">
            <div className="rounded-full w-40 h-40 max-w-full max-h-full flex items-center justify-center select-none opacity-100">
              <div className="w-full h-full">
                {/* Ảnh avatar */}
                <img
                  className=" block object-cover rounded-full w-full h-full"
                  alt="Upload"
                  src={imagePath}
                />
                <input
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  type="file"
                  onChange={handleImageChange}
                  className="absolute top-1 w-full h-full opacity-0"
                />
                {isHovered && (
                  <div className="hover_img_avatar">Replace photo</div>
                )}
                {isHoveredCloseBtn && (
                  <div className="hover_img_avatar">
                    Delete photo
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="close_button"
            onClick={() => setAvatar("")}
            onMouseEnter={() => setHoveredCloseBtn(true)}
            onMouseLeave={() => setHoveredCloseBtn(false)}
          >
            <svg className="svg_close_button" viewBox="0 0 16 16">
              <path d="M3.732 11.052c-.303.308-.32.877.011 1.202.33.33.894.32 1.203.011L8 9.21l3.05 3.05c.32.325.872.32 1.197-.011a.857.857 0 00.01-1.197L9.21 8.002l3.05-3.056a.857.857 0 00-.01-1.197.857.857 0 00-1.198-.01L8 6.788 4.946 3.732c-.31-.303-.878-.32-1.203.01-.325.331-.314.895-.01 1.203l3.055 3.056-3.056 3.05z"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  const ChangeEmail = () => {
    const ChangeEmailButton = () => {
      dispatch(setOpenEmailSetting());
    };
    return (
      <div className="flex items-center justify-between cursor-default">
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
          onClick={ChangeEmailButton}
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
          Change Email
        </div>
      </div>
    );
  };
  function ChangePassword() {
    return (
      <div>
        <div className="flex items-center justify-center pointer-events-none w-full h-7 flex-shrink-0">
          <div className="w-full h-1 invisible border-b border-gray-400"></div>
        </div>

        <div className="flex items-center justify-between cursor-default">
          <div className="flex flex-col">
            <div className="border-b-0 mb-2 mt-0 pb-0 text-sm font-normal w-auto text-gray-700">
              <div className="flex flex-row text-xl">Password</div>
            </div>
            <div
              role="button"
              onClick={() => dispatch(setOpenChangePass())}
              className="text-xl leading-4"
              style={{ color: "rgba(55, 53, 47, 0.65)" }}
            >
              Set a new password here to login to your account
            </div>
          </div>
        </div>
      </div>
    );
  }
  function DeleteAccount() {
    return (
      <div className="flex items-center justify-between cursor-default">
        <div className="flex flex-col mr-10" role="button">
          <div className="border-b-0 mb-2 mt-5 pb-0 text-base font-normal text-red-500">
            <div className="flex flex-row text-xl">Delete my account</div>
          </div>
          <div
            className="text-xl leading-4 "
            style={{ color: "rgba(55, 53, 47, 0.65)" }}
          >
            Permanently delete the account and remove access from all
            workspaces.
          </div>
        </div>
        <div className="cursor-pointer border rounded-full">
          {/* <ChevronRightIcon className="w-5 h-5 block fill-current text-gray-400 flex-shrink-0" /> */}
          <AiOutlineRight className="w-7 h-7 block fill-current text-gray-400 flex-shrink-0" />
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
        <User_Photo />
        <div style={{ marginLeft: "20px", width: "250px" }}>
          <label className="preferredname">Preferred Name</label>
          <div className="textarea">
            <input type="text" className="inputname" value="Le Minh" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pointer-events-none w-full h-18 flex-shrink-0">
        <div
          role="separator"
          className="w-full h-1 invisible border-b border-gray-400"
        />
      </div>
      <div className="div2">Account Setting</div>
      <ChangeEmail />
      <ChangePassword />

      <div className="flex items-center justify-center pointer-events-none w-full h-18 flex-shrink-0">
        <div
          role="separator"
          className="w-full h-1 invisible border-b border-gray-400"
        />
      </div>
      <div className="div2">Support</div>
      <div className="flex flex-col mr-10">
        <div
          role="button"
          className="border-b-0 mb-2 mt-0 pb-0 text-base font-medium text-gray-700"
        >
          <div className="flex flex-row text-xl">Log out of all devices</div>
        </div>
        <div
          className="text-xl leading-4"
          style={{ color: "rgba(55, 53, 47, 0.65)" }}
        >
          Log out of all other active sessions on other devices besides this
          one.
        </div>
      </div>
      <DeleteAccount />
    </div>
  );
}
