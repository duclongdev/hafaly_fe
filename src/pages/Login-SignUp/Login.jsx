import React from "react";
import styles from "./Login.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Select, Space, DatePicker } from "antd";
import dayjs from "dayjs";

import i18n from "../../i18n";

function Login() {
  const { t } = useTranslation("Login");
  const [containerClass, setContainerClass] = useState(styles.container);
  //Kiem tra ngon ngu
  const [isLanguage, setLanguage] = useState("vi");
  //Kiểm tra nhớ thông tin account
  const [isRemember, setRemember] = useState(false);

  const handleCheckboxChange = (event) => {
    setRemember(event.target.checked);
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const handleButtonClick = () => {
    const newClass = `${styles.container} ${styles.right_panel_active}`;
    setContainerClass(newClass);
  };

  //Chọn giới tính
  const [gender, Setgender] = useState("Male");
  const Genders = [
    {
      key: 1,
      value: "Male",
      label: "Male",
    },
    {
      key: 2,
      value: "Female",
      label: "Female",
    },
    {
      key: 3,
      value: "Unknow",
      label: "Unknow",
    },
  ];
  const handleGender = (value) => {
    Setgender(value);
  };
  //Chọn ngày
  const [dateOfBirth, setDateOfBirth] = useState();
  const dateFormatList = ["DD/MM/YYYY"];
  const handleDate = (value) => {
    const birthday = new Date(value);
    const formattedBirthDateStr = birthday.toLocaleDateString("en-GB");
    setDateOfBirth(formattedBirthDateStr);
    console.log(dateOfBirth);
  };
  //Xử lí đăng nhập, đăng ký
  const handleLogin = () => {};
  const handleSignUp = () => {};

  return (
    <div className={styles.login_body}>
      <div className={containerClass} id="container">
        <div
          className={`${styles.form_container} ${styles.register_container}`}
        >
          <form action="#">
            <h1>{t("SignUp")}</h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className={styles.form_input}
                type="text"
                placeholder={t("FirstName")}
                style={{ marginRight: "10px" }}
              />
              <input
                className={styles.form_input}
                type="text"
                placeholder={t("LastName")}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                className={styles.form_input}
                type="text"
                placeholder={t("Phonenumber")}
                style={{ marginRight: "10px" }}
              />

              <DatePicker
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "8px",
                  width: "100%",
                }}
                defaultValue={dayjs("01/01/2023", dateFormatList[0])}
                format={dateFormatList}
                onChange={handleDate}
              />
            </div>
            <input
              className={styles.form_input}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.form_input}
              type="password"
              placeholder={t("Password")}
            />
            <input
              className={styles.form_input}
              type="password"
              placeholder={t("Re-Enter Password")}
            />

            <input
              className={styles.form_input}
              type="text"
              placeholder={t("Address")}
            />

            <Select
              defaultValue="Male"
              options={Genders}
              style={{
                width: 284,
                borderRadius: "10px",
                textAlign: "left",
              }}
              onChange={handleGender}
            ></Select>
            <button>{t("SignUp")}</button>
          </form>
        </div>

        <div className={`${styles.form_container} ${styles.login_container}`}>
          <form action="#">
            {/* <h1>Đăng Nhập</h1> */}
            <h1>{t("Login")}</h1>
            <input
              className={styles.form_input}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.form_input}
              type="password"
              placeholder={t("Password")}
            />

            <div className={styles.content}>
              <div className={styles.checkbox}>
                <input
                  className={styles.form_input}
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  checked={isRemember}
                  onChange={handleCheckboxChange}
                />
                <label>{t("Remember me")}</label>
              </div>
              <div className={styles.pass_link}>
                <a href="#">{t("ForgotPass")}</a>
              </div>
            </div>
            <button>{t("Login")}</button>
            <span>{t("Span")}</span>
          </form>
        </div>

        <div className={styles.overlay_container}>
          <div className={styles.overlay}>
            <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
              <h1 className={styles.title}>
                {t("Login_title1")}
                <br /> {t("Login_title2")}
              </h1>
              <p>{t("Login_text")}</p>
              <button
                className={styles.ghost}
                id="login"
                onClick={() => setContainerClass(styles.container)}
              >
                Login
                <i
                  className={`${styles.lni} ${styles.lni_arrow_left} ${styles.login}`}
                ></i>
              </button>
            </div>
            <div className={`${styles.overlay_panel} ${styles.overlay_right}`}>
              <h1 className={styles.title}>
                {t("SignUp_title1")}
                <br /> {t("SignUp_title2")}
              </h1>
              <p>{t("Sign_Up")}</p>
              <button
                className={styles.ghost}
                id="register"
                onClick={handleButtonClick}
              >
                Register
                <i
                  className={`${styles.lni} ${styles.lni_arrow_right} ${styles.register}`}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
