import React, { useState } from "react";
import styles from "./Login.module.scss";
import { useTranslation } from "react-i18next";
import useAuth from "../../hooks/useAuth";
import { Select, DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import i18n from "../../i18n";
import ModalLogin from "../../components/Modal/ModalLogin";

const items = [
  {
    key: "0",
    label: "Parrent",
  },
  {
    key: "1",
    label: "Sibling",
  },
];

function Login() {
  const { t } = useTranslation("Login");
  const [containerClass, setContainerClass] = useState(styles.container);
  //Kiem tra ngon ngu
  const [isLanguage, setLanguage] = useState("vi");
  //Kiểm tra nhớ thông tin account
  const [isRemember, setRemember] = useState(false);

  // const { setUser, setLoading } = useAuth();
  const navigate = useNavigate();
  const auth = useAuth();

  const dateFormatList = ["DD/MM/YYYY"];

  const setDateOfBirth = (value) => {
    const birthday = new Date(value);
    const formattedBirthDateStr = birthday.toLocaleDateString("en-GB");
    console.log(formattedBirthDateStr);
    setCredentials({ ...credentials, dateOfBirth: formattedBirthDateStr });
  };

  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: 1,
    dateOfBirth: "",
  });
  const setFirstName = (value) =>
    setCredentials({ ...credentials, firstName: value });

  const setLastName = (value) =>
    setCredentials({ ...credentials, lastName: value });

  const setEmail = (value) => setCredentials({ ...credentials, email: value });
  const setPassword = (value) =>
    setCredentials({ ...credentials, password: value });
  const setPhoneNumber = (value) =>
    setCredentials({ ...credentials, phone: value });
  const setAddress = (value) =>
    setCredentials({ ...credentials, address: value });
  const setGender = (value) => {
    setCredentials({
      ...credentials,
      gender: value === "Male" ? 1 : value === "Female" ? 0 : 2,
    });
  };

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
  const handleLogin = (event) => {
    event.preventDefault();
    auth.login(credentials, () => navigate("/"));
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    auth.signUp(credentials, () => navigate("/"));
  };

  return (
    <>
      <ModalLogin />
      <div className={styles.login_body}>
        <div className={containerClass} id="container">
          <div
            className={`${styles.form_container} ${styles.register_container}`}
          >
            <form onSubmit={handleSignUp}>
              <h1>{t("SignUp")}</h1>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  className={styles.form_input}
                  type="text"
                  placeholder={t("FirstName")}
                  style={{ marginRight: "10px" }}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className={styles.form_input}
                  type="text"
                  placeholder={t("LastName")}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  className={styles.form_input}
                  type="text"
                  placeholder={t("Phonenumber")}
                  style={{ marginRight: "10px" }}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
                  onChange={(e) => setDateOfBirth(e)}
                />
              </div>
              <input
                className={styles.form_input}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={styles.form_input}
                type="password"
                placeholder={t("Password")}
                onChange={(e) => setPassword(e.target.value)}
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
                onChange={(e) => setAddress(e.target.value)}
              />

              <Select
                defaultValue="Male"
                options={Genders}
                style={{
                  width: 284,
                  borderRadius: "10px",
                  textAlign: "left",
                }}
                onChange={(value) => setGender(value)}
              ></Select>
              <button>{t("SignUp")}</button>
            </form>
          </div>

          <div className={`${styles.form_container} ${styles.login_container}`}>
            <form onSubmit={handleLogin}>
              {/* <h1>Đăng Nhập</h1> */}
              <h1>{t("Login")}</h1>
              <input
                className={styles.form_input}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={styles.form_input}
                type="password"
                placeholder={t("Password")}
                onChange={(e) => setPassword(e.target.value)}
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
              <button type="submit">{t("Login")}</button>
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
              <div
                className={`${styles.overlay_panel} ${styles.overlay_right}`}
              >
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
    </>
  );
}

export default Login;
