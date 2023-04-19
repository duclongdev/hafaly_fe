import React, { useContext } from "react";
import styles from "./Login.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import UserContext from "../../utils/UserProvider";
import { login, signUp } from "../../api/auth";
import Cookies from "js-cookie";
import { test } from "../../api/test";

import i18n from "../../i18n";

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

  const { serUser, setLoading } = useContext(UserContext);
  const { userLogin, setUserLogin } = useState();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
  });
  const setEmail = (value) => setCredentials({ ...credentials, email: value });
  const setPassword = (value) =>
    setCredentials({ ...credentials, password: value });
  const setPhoneNumber = (value) =>
    setCredentials({ ...credentials, phone: value });
  const setAddress = (value) =>
    setCredentials({ ...credentials, address: value });
  const gender = (value) => setCredentials({ ...credentials, gender: value });

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

  const handleLogin = (event) => {
    event.preventDefault();
    Cookies.set("token", "hi");
    test(
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsb25nQGdtYWlsLmNjb20iLCJpYXQiOjE2ODE4NzE1ODAsImV4cCI6MTY4MTg3MTU5NSwicmVmcmVzaFRva2VuSWQiOiJlMTc0MzJhZS1lMmNhLTRiMDItOTgzMS03M2U3Njk0ODI2ZmUifQ.UCrW7YeSYrQZzwykG2Eaah2If3JUCJ0BZ98wnPnCjnk"
    )
      .then(() => {
        console.log("doit");
        console.log(Cookies.get("token"));
      })
      .catch(() => {});

    // login(credentials.email, credentials.password)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => console.log(error));
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(credentials);
    signUp(credentials)
      .then(() => {
        console.log("create account successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.login_body}>
      <div className={containerClass} id="container">
        <div
          className={`${styles.form_container} ${styles.register_container}`}
        >
          <form onSubmit={handleSignUp}>
            <h1>{t("SignUp")}</h1>
            <input type="text" placeholder={t("Username")} />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder={t("Password")}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder={t("Phonenumber")}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button type="submit">{t("SignUp")}</button>
            <span>{t("Span")}</span>
          </form>
        </div>

        <div className={`${styles.form_container} ${styles.login_container}`}>
          <form onSubmit={handleLogin}>
            {/* <h1>Đăng Nhập</h1> */}
            <h1>{t("Login")}</h1>
            <input
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder={t("Password")}
              value={credentials.password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className={styles.content}>
              <div className={styles.checkbox}>
                <input
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
