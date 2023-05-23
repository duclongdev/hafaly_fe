import React, { useState } from "react";
import style from "./style.module.scss";
import clsx from "clsx";
import MealPlan from "../mealPlan";
import MealDish from "../dish";
import Ingredient from "../ingredient";
const Item = ({ active, handleNav, name }) => {
  const choose = name === active ? true : false;
  const handleActive = () => {
    handleNav(name);
  };
  return (
    <div
      className={clsx(style.header__item, {
        [style.active]: choose,
      })}
      onClick={handleActive}
    >
      <span>{name}</span>
    </div>
  );
};

const Nav = ({ active, setActive }) => {
  return (
    <div className={style.nav__container}>
      <Item name={"Plan"} handleNav={setActive} active={active} />
      <Item name={"Dish"} handleNav={setActive} active={active} />
      <Item name={"Ingredient"} handleNav={setActive} active={active} />
    </div>
  );
};

const MealPage = () => {
  const [choose, setChoose] = useState("Plan");
  return (
    <div className={style.container}>
      <Nav active={choose} setActive={setChoose} />
      {choose === "Plan" ? (
        <MealPlan />
      ) : choose === "Dish" ? (
        <MealDish />
      ) : (
        <Ingredient />
      )}
    </div>
  );
};

export default MealPage;
