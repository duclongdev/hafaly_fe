import React, { useState } from "react";
import styles from "./AddDish.module.scss"
import store from "../../redux/store";
import { useSelector, useDispatch, Provider } from "react-redux";
import { setCloseAddDish } from "../../redux/reducers/modalSlice";
import { Button, Input, Select, Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
export default function AddDish() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpenAddDish);
  const WhatMeals = [
    {
      values: "Breakfast",
      label: "Breakfast",
    },
    {
      values: "Luch",
      label: "Luch",
    },
    {
      values: "Dinner",
      label: "Dinner",
    },
  ];
  function HandleDishImagine() {
    // DishImagineHandle
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const [fileList, setFileList] = useState([
      {
        uid: "-1",
        name: "Demo.png",
        status: "done",
        url: "srcassetsAvartar.jpg",
      },
    ]);
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
      setPreviewTitle(
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
      );
    };
    const handleChange = ({ fileList: newFileList }) =>
      setFileList(newFileList);
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div
          style={{
            marginTop: 8,
          }}
        >
          Upload
        </div>
      </div>
    );
    const getBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    return (
      <>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img
            alt="example"
            style={{
              width: "100%",
            }}
            src={previewImage}
          />
        </Modal>
      </>
    );
  }

  function HandleCloseAddDish() {
    dispatch(setCloseAddDish());
  }
  //Notifications
  const [showDiv, setShowDiv] = useState(false);
  const handleSave = () => {
    setShowDiv(true);
    setTimeout(() => {
      setShowDiv(false);
    }, 2000);
  };
  return (
    <Provider store={store}>
      {isOpen && (
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
            {/* Content */}
            <div style={{ margin: "5vh" }}>
              <div className="flex flex-col space-y-3">
                <div>
                  <IconButton
                    aria-label="Close"
                    style={{ position: "absolute", right: "5px", top: "5px" }}
                    size="large"
                    onClick={() => dispatch(setCloseAddDish())}
                  >
                    <CloseIcon sx={{ fontSize: "large" }} />
                  </IconButton>
                </div>
                <span className="font-bold">Dish's Name</span>
                <Input placeholder="Add dish's name here" />
                <span className="font-bold">What meal of the day</span>
                <Select options={WhatMeals} defaultValue="Breakfast" />
                <span className="font-bold">Cooking time</span>
                <Input placeholder="Add dish's name here" />

                <span className="font-bold">Description</span>
                <Input placeholder="Description for Meal" />

                <span className="font-bold">Ingredient</span>
                <Input placeholder="Ingredient for Meal" />
                <HandleDishImagine />
                <div>
                  <Button onClick={handleSave} variant="contained" color="success" endIcon={<BookmarkIcon />} style={{position: "absolute", right: "30px", bottom: "20px"}}>
                    Save
                  </Button>
                </div>
              </div>
            </div>
            
          </div>
          {showDiv && <MessageComponent className={styles.AddDish_notification} id="msg_success" content="Your Dish's information has been save successfully" severity="Success"></MessageComponent>}
          
        </div>
      )}
    </Provider>
  );
}
