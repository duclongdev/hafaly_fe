import React, { useEffect, useState } from "react";
import ColumnHeader from "../ColumnHeader";
import { Droppable, Draggable } from "react-beautiful-dnd";
import TodoCard from "../card/todoCard";
import style from "./style.module.scss";

const TaskList = ({ prefix, elements, setElements, allElement }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
  return (
    <div className={style.container}>
      <ColumnHeader
        allElement={allElement}
        type={prefix}
        setElements={setElements}
        elements={elements}
      />
      <Droppable droppableId={prefix}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map((item, index) => (
              <div>
                <TodoCard key={item.id} item={item} index={index} />
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TaskList;
