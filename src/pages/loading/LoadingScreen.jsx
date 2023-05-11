import React from "react";
import Lottie from "react-lottie";
import loadingAnimation from "../../animation/loading.json";
import styles from "./styles.module.scss";

const LoadingScreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.overlay}>
      <Lottie options={defaultOptions} height={300} width={1000} />
    </div>
  );
};

export default LoadingScreen;
