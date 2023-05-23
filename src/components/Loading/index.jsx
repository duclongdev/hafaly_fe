import React from "react";
import Lottie from "react-lottie";
import styles from "./styles.module.scss";

const Loading = () => {
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
      <Lottie options={defaultOptions} height={100} width={600} />
    </div>
  );
};

export default Loading;
