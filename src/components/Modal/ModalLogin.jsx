import React from "react";
import styles from "./style.module.scss";
import { Button, Modal } from "antd";
import useAuth from "../../hooks/useAuth";
import Lottie from "react-lottie";
import loadingAnimation from "../../animation/loading.json";

const ModalLogin = () => {
  const auth = useAuth();
  const isLoading = auth.isLoading;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Modal open={isLoading} centered width={600} footer={null} closable={false}>
      <Lottie options={defaultOptions} height={100} width={600} />
    </Modal>
  );
};

export default ModalLogin;
