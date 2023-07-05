import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/main/login');
  };
  const handleContact = () => {
    navigate('/user/feedback');
  };
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
            <Box mt={5} sx={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>
            <Button variant="contained" color="primary" onClick={handleGetStarted}>
              Get Started
            </Button>
            <Button variant="outlined" sx={{marginLeft:"10px"}} onClick={handleContact}>Contact Us</Button>
            <i style={{ fontSize: 20, marginLeft:"10px" }} className="fas">
              &#xf061;
            </i>
            </Box>
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
