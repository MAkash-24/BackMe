import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const EventHandling = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const enableDarkMode = () => {
    setTheme({ backgroundColor: "black", color: "white" });
  };

  const enableLightMode = () => {
    setTheme({ backgroundColor: "white", color: "black" });
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      console.log("Space key was pressed");
    }
  };

  return (
    <div style={theme} className="vh-100">
      <Box className="container">
        <Box my={3}>
          <Button
            variant="contained"
            sx={{ background: "#f6f6f6", color: "#000" }}
            onClick={enableDarkMode}
          >
            Dark Mode
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={enableLightMode}
            sx={{ marginLeft: "10px" }}
          >
            Light Mode
          </Button>
        </Box>
        <h1>Event Handling</h1>
        <hr />

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            alert("Button was clicked");
          }}
        >
          Click Event Handling
        </Button>

        <TextField
          className="form-control mt-4"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <Button variant="contained" color="primary" onClick={addCount}>
          <i className="fas fa-thumbs-up"></i>
        </Button>

        <h1>{count}</h1>
      </Box>
    </div>
  );
};

export default EventHandling;
