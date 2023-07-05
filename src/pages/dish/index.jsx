import React, { useState } from "react";
import styles from "./index.module.scss";
import AddDish from "./AddDish";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setOpenAddDish } from "../../redux/reducers/modalSlice";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import { Padding } from "@mui/icons-material";
function DishCard() {
  return (
    <div className={styles.DishCard}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          rowGap: "10px",
        }}
      >
        <img src="src\pages\dish\Imagine\Heart.png" />
        <img src="src\pages\dish\Imagine\Dish.png" />
        <img src="src\pages\dish\Imagine\Frame.png" />
      </div>
      <div>
        <span className="text-2xl font-bold">Pork Carrot Stew</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "1.2rem",
          color: "gray",
        }}
      >
        <span>Need 4 ingredients</span>
        <span>Include 9000 Calories</span>
        <span>Time 15 minutes</span>
      </div>
    </div>
  );
}
function FoodSugg_Card() {
  return (
    <div
      className="flex"
      style={{ backgroundColor: "rgba(50, 50, 71, 0.08)", borderRadius: "10px" ,position:"relative",borderWidth:"2px",borderStyle:"solid",borderColor:"rgba(25,23,15,0.06"}}
    >
      <div style={{ minWidth: "150px", minHeight: "150px" }}>
        <img
          src="src\pages\dish\Imagine\Dish.png"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10%",
            padding: "10px",
          }}
        />
      </div>
      <div
        className="flex flex-col flex-wrap "
        style={{ flexGrow: "1", padding: "10px" }}
      >
        <div className="flex flex-wrap">
          <p className="text-3xl font-bold overflow-hidden">Pork Carrot Stew </p>
          <div className="absolute flex flex-row" style={{right:"30px",top:"8px"}}>
            <AccessTimeFilledOutlinedIcon
              className="mr-1 "
              sx={{ fontSize: "large" }}
            />
            <p style={{ color: "gray" }}>20 Minutes</p>
          </div>

          
          <div>
            <img src="src\pages\dish\Imagine\3DOT.png" className="mt-1 absolute right-1 top-2" />
          </div>
        </div>
        <div>
          <p>Pork Carrot Stew is a hearty and comforting dish that combines succulent pork with tender carrots in a rich and flavorful sauce. This dish is perfect for colder days when you crave a warm and satisfying meal. </p>
        </div>
      </div>
    </div>
  );
}
function MealDish() {
  const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <div>
        <div>
          <span className="text-4xl font-bold">Dish</span>
          <div>
            <span className="text-2xl font-bold">On Cooking</span>

            <Button
              variant="primary"
              onClick={() => dispatch(setOpenAddDish())}
            >
              Add Dish
            </Button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6,1fr)",
              gridGap: "10px",
              overflowX: "auto",
            }}
          >
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
          </div>
          <div className={styles.Food_suggestion}>
            <span className="text-4xl font-bold">Food suggestions</span>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,550px)",

                gridGap: "10px",
              }}
            >
              <FoodSugg_Card />
              <FoodSugg_Card />
              <FoodSugg_Card />
              <FoodSugg_Card />
              <FoodSugg_Card />
            </div>
          </div>
        </div>
        <div>
          <AddDish />
        </div>
      </div>
    </Provider>
  );
}

export default MealDish;
