import React, { useState } from "react";
import styles from "./style.module.scss";
import Icons from "../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuState, toggleMenu } from "../../../redux/menuSlice";

const HeaderInPage = () => {
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();
  const isOpen = useSelector(selectMenuState);
  const handleOnClick = () => {
    dispatch(toggleMenu());
  };
  return (
    <div
      className={styles.container}
      style={isOpen === false ? { marginLeft: 0 } : { marginLeft: "200px" }}
    >
      <div className={styles.title}>
        {isOpen ? (
          <></>
        ) : (
          <div
            onClick={handleOnClick}
            className={styles.iconContainer}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {isHovering ? (
              <Icons.DoubleChevronRightIcon />
            ) : (
              <Icons.ThreeBarIcon />
            )}
          </div>
        )}
        <span className={styles.headerText}> Header</span>
      </div>
    </div>
  );
};

export default HeaderInPage;
