import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "../TaskList";

const lists = ["todo", "inProgress", "done"];
const getItems = (count, prefix) =>
  Array.from({ length: 2 }, (v, k) => k).map((k) => {
    const randomId = Math.floor(Math.random() * 1000);
    return {
      id: `item-${randomId}`,
      prefix,
      content: `item ${randomId}`,
    };
  });
const generateLists = () =>
  lists.reduce(
    (acc, listKey) => ({ ...acc, [listKey]: getItems(10, listKey) }),
    {}
  );
const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const BodyTask = () => {
  const [elements, setElements] = React.useState(generateLists());
  useEffect(() => {
    setElements(generateLists());
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];

    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };
  return (
    <div className={style.container}>
      {elements.length === 0 ? (
        <></>
      ) : (
        <DragDropContext onDragEnd={onDragEnd} disableStrictModeCompat={true}>
          <div className={style.item}>
            {lists.map((listKey) => (
              <TaskList
                allElement={elements}
                elements={elements[listKey]}
                key={listKey}
                prefix={listKey}
                setElements={setElements}
              />
            ))}
          </div>
        </DragDropContext>
      )}
    </div>
  );
};

export default BodyTask;
