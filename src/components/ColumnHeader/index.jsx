import React from "react";
import style from "./style.module.scss";
import { ThreeDotHozIcon } from "../../assets/icons";
import Add from "../../assets/icons/Add";
import { useDispatch } from "react-redux";
import { openAddTaskModal } from "../../redux/addTask";
const ColumnHeader = ({ type, setElements, elements, allElement }) => {
  const dispatch = useDispatch();

  const handle = () => {
    const listCopy = { ...allElement };
    const array = Array.from(elements);
    array.splice(elements.length - 1, 0, {
      id: "item-71234",
      prefix: "inProgress",
      content: "hi",
    });
    elements = array;
    listCopy["inProgress"] = array;
    setElements(listCopy);
  };

  const addTask = () => {
    dispatch(openAddTaskModal());
  };
  return (
    <div className={style.container} onClick={() => handle()}>
      <div className={style.state}>
        <span>{type}</span>
        <span className={style.dot}>&nbsp;</span>
      </div>
      <div onClick={addTask}>
        <Add />
      </div>
    </div>
  );
};

export default ColumnHeader;
