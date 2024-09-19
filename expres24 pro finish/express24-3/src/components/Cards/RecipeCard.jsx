import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

  return (
    <Box maxWidth={"1144px"} margin="0 auto" marginTop={6}>
      <NavLink style={{ textDecoration: "none" }} to={`/store/${idMeal}`}>
        <Box marginBottom={4}>
          <Box
            width={"360px"}
            height={"auto"}
            bgcolor={"#fff"}
            borderRadius={"20px"}
            border={"none"}
            boxShadow={1}
            overflow="hidden"
          >
            <img style={{ width: "100%", height: "205px", objectFit: "cover" }} src={strMealThumb} alt={strMeal} />

            <div style={{ padding: "10px", flexDirection: "column", display: "flex" }}>
              <h2 style={{ color: "black" }}>{strMeal}</h2>
              <span style={{ color: "gray" }} span>
                {strCategory}
              </span>
              <Button
                sx={{
                  backgroundColor: "#FFEC00",
                  borderRadius: "50px",
                  width: "5px",
                  height: "27px",
                  color: "black",
                  marginTop: "10px",
                }}
              >
                4.6
              </Button>
            </div>
          </Box>
        </Box>
      </NavLink>
    </Box>
  );
};

export default RecipeCard;
