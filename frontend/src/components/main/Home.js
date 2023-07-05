import React from "react";
import { Button, Typography } from "@mui/material";
import "./style.css";

const Home = () => {
  return (
    <div>
      <div className="homeBack">
        <div className="container-fluid row mt-5">
          <div className="col-sm-6 center-block text-left px-3 display-3">
            <Typography variant="h2">
              Migrate Your Data <br /> Easily <br />
            </Typography>

            <Typography variant="h6" sx={{fontWeight: "400", fontSize: "24px", lineHeight:"1.2"}}>
              The developer data platform that provides the services and tools
              necessary to migrate your data from different databases.
            </Typography>

            <Button variant="contained" color="primary">
              Get Started
            </Button>
            <Button variant="outlined" sx={{marginLeft:"10px"}}>Contact Us</Button>
            <i style={{ fontSize: 20 }} className="fas">
              &#xf061;
            </i>
          </div>

          <div className="col-sm-5" id="image">
            {/* <img src="/public/images/server-concept-illustration_114360-287.svg" alt="image" />
            Ethan Hunt */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
