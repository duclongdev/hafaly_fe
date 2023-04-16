
import React, { useState } from 'react'
import clsx from 'clsx';
import styles from './CreateFamily.module.scss';
//Import styles
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Input, Button, Checkbox, Form, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function BasicAlerts() {
    return (
        <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
        </Alert>
    );
}


function CreateFamily() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [showAlert, setShowAlert] = useState(false);
    const handleLogin = () => {
        // Xử lý đăng nhập ở đây
        setShowAlert(true); // Hiển thị Alert khi đăng nhập thành công
      };
    return (

        <div className={styles.create_family}>

            <h2>Create Your Family</h2>
            <div className={styles.input_ct}>
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
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Family's Name"
                        name="familyName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your family name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Family's Code"
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your family code!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>




                    <Form.Item label="Family's Imagine" valuePropName="fileList">
                        <Upload action="/upload.do" listType="picture-card">
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
                        <Button type="primary" htmlType="submit" onClick={handleLogin}>
                            Save
                        </Button>
                    </Form.Item>

                </Form>
                

            </div>


        </div>

    );
}

export default CreateFamily;