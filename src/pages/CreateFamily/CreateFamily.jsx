import React, { useState } from "react";
import clsx from "clsx";
import styles from "./CreateFamily.module.scss";
import { Input, Button, Space, Form, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import familyApi from "../../api/family";

import Alert from "@mui/material/Alert";
import useAuth from "../../hooks/useAuth";

function BasicAlerts() {
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
    </Alert>
  );
}

function CreateFamily() {
  const navigate = useNavigate();

  const auth = useAuth();
  //   if (auth.user === undefined) {
  //     navigate("/login");
  //   }
  //   if (auth.user.role === "PARENT" || auth.user.role === "CHILDREN") {
  //     navigate("/");
  //   }

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  const [showAlert, setShowAlert] = useState(false);
  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    setShowAlert(true); // Hiển thị Alert khi đăng nhập thành công
  };

  const options = ["create", "join"];
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        centered
        items={options.map((item, index) => {
          const id = String(index + 1);
          return {
            label: item,
            key: id,
            children: item === "create" ? <CreateTab /> : <JoinTab />,
          };
        })}
      />
    </div>
  );
}

function CreateTab() {
  const auth = useAuth();
  const [familyCode, setFamilyCode] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const getCode = () => {
    setIsLoading(true);
    familyApi.getCode().then((response) => {
      setFamilyCode(response.data.data);
      setIsLoading(false);
    });
  };
  const onFinish = (values) => {
    values.code = familyCode;
    values.hostEmail = auth.user.email;
    values.imageFile = imageFile;
    console.log(values);
    const formData = new FormData();
    formData.append("code", values.code);
    formData.append("hostEmail", values.hostEmail);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("address", values.address);
    formData.append("imageFile", values.imageFile);
    familyApi
      .create(values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
        name: `Family's ${auth.user.lastName}`,
        phoneNumber: "",
        address: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Family's Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your family name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Family's Code" name="code">
        <Space.Compact style={{ width: "100%" }}>
          <Input disabled value={familyCode} />
          <Button type="primary" onClick={() => getCode()} loading={isLoading}>
            Get Code
          </Button>
        </Space.Compact>
      </Form.Item>

      <Form.Item
        label="Phone number"
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please input your family phone number!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please input your family address!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Family's Imagine" valuePropName="fileList">
        <Upload
          listType="picture-card"
          beforeUpload={(file) => {
            setImageFile(file);
            return false;
          }}
        >
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
        </Upload>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}

// JoinTab component
function JoinTab() {
  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        label="Family's Code"
        name="familyCode"
        rules={[
          {
            required: true,
            message: "Please input your family code!",
          },
        ]}
      >
        <Space.Compact style={{ width: "100%" }}>
          <Input defaultValue="Combine input and button" />
          <Button type="primary">Submit</Button>
        </Space.Compact>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CreateFamily;
