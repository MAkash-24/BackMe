import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  LinearProgress,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";

const UserProfile = () => {
  const [currentUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  return (
    <div>
      <Box style={{ backgroundColor: "#eee" }}>
        <Container className="container py-5">
          <div className="row">
            {/* <div className="col">
              <Breadcrumb
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4"
              >
                <Breadcrumb.Item>
                  <NavLink to="/home">Home</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <NavLink to="/profile">User</NavLink>
                </Breadcrumb.Item>
                <Breadcrumb.Item active aria-current="page">
                  User Profile
                </Breadcrumb.Item>
              </Breadcrumb>
            </div> */}
          </div>
          <Grid container spacing={4}>
            <Grid item lg={4}>
              <Card mb={4}>
                <CardContent>
                  <Avatar
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    sx={{ width: 150, height: 150, mx: "auto" }}
                  />
                  <Typography variant="h5" my={3} align="center">
                    {currentUser.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    mb={1}
                    align="center"
                  >
                    Full Stack Developer
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    mb={4}
                    align="center"
                  >
                    Bay Area, San Francisco, CA
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: 2,
                    }}
                  >
                    <Button variant="contained" color="primary">
                      Follow
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ marginLeft: 1 }}
                    >
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <ul className="list-group list-group-flush rounded-3">
                    <ListItem>
                      <ListItemIcon>
                        <i className="fas fa-globe fa-lg text-warning" />
                      </ListItemIcon>
                      <ListItemText primary="https://mdbootstrap.com" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <i
                          className="fab fa-github fa-lg"
                          style={{ color: "#333333" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="mdbootstrap" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <i
                          className="fab fa-twitter fa-lg"
                          style={{ color: "#55acee" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="@mdbootstrap" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <i
                          className="fab fa-instagram fa-lg"
                          style={{ color: "#ac2bac" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="mdbootstrap" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <i
                          className="fab fa-facebook-f fa-lg"
                          style={{ color: "#3b5998" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary="mdbootstrap" />
                    </ListItem>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={8}>
              <Card mb={4}>
                <CardContent>
                  <div className="row">
                    <div className="col-sm-3">
                      <Typography variant="body1" mb={0}>
                        Full Name
                      </Typography>
                    </div>
                    <div className="col-sm-9">
                      <Typography variant="body2" color="textSecondary" mb={0}>
                        {currentUser.name}
                      </Typography>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <Typography variant="body1" mb={0}>
                        Email
                      </Typography>
                    </div>
                    <div className="col-sm-9">
                      <Typography variant="body2" color="textSecondary" mb={0}>
                        {currentUser.email}
                      </Typography>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <Typography variant="body1" mb={0}>
                        Phone
                      </Typography>
                    </div>
                    <div className="col-sm-9">
                      <Typography variant="body2" color="textSecondary" mb={0}>
                        (097) 234-5678
                      </Typography>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <Typography variant="body1" mb={0}>
                        Mobile
                      </Typography>
                    </div>
                    <div className="col-sm-9">
                      <Typography variant="body2" color="textSecondary" mb={0}>
                        (098) 765-4321
                      </Typography>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <Typography variant="body1" mb={0}>
                        Address
                      </Typography>
                    </div>
                    <div className="col-sm-9">
                      <Typography variant="body2" color="textSecondary" mb={0}>
                        Bay Area, San Francisco, CA
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Grid container spacing={4}>
                <Grid item md={6}>
                  <Card mb={4}>
                    <CardContent>
                      <Typography variant="body1" mb={4}>
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </Typography>
                      <Typography variant="body2" color="textSecondary" mb={1}>
                        Web Design
                      </Typography>
                      <LinearProgress variant="determinate" value={80} />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        mt={4}
                        mb={1}
                      >
                        Website Markup
                      </Typography>
                      <LinearProgress variant="determinate" value={72} />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        mt={4}
                        mb={1}
                      >
                        One Page
                      </Typography>
                      <LinearProgress variant="determinate" value={89} />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        mt={4}
                        mb={1}
                      >
                        Mobile Template
                      </Typography>
                      <LinearProgress variant="determinate" value={55} />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        mt={4}
                        mb={1}
                      >
                        Backend API
                      </Typography>
                      <LinearProgress variant="determinate" value={66} />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={6}>
                  <Card mb={4}>
                    <CardContent>
                      <Typography variant="body1" mb={4}>
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </Typography>
                      <Typography variant="body2" color="textSecondary" mb={1}>
                        Web Design
                      </Typography>
                      <LinearProgress variant="determinate" value={80} />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        mt={4}
                        mb={1}
                      >
                        Website Markup
                      </Typography>
                      <LinearProgress variant="determinate" value={72} />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        mt={4}
                        mb={1}
                      >
                        One Page
                      </Typography>
                      <LinearProgress variant="determinate" value={89} />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        mt={4}
                        mb={1}
                      >
                        Mobile Template
                      </Typography>
                      <LinearProgress variant="determinate" value={55} />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        mt={4}
                        mb={1}
                      >
                        Backend API
                      </Typography>
                      <LinearProgress variant="determinate" value={66} />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default UserProfile;
