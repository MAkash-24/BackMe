import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button
} from "@mui/material";

const UserLanding = () => {
  return (
    <Container maxWidth="md" className="my-5 py-5">
      <Card className="shadow-lg">
        <Typography variant="h4" component="h1" align="center" className="p-5">
          BackME
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Get API
                </Typography>
                <Typography variant="body2" component="p">
                  With supporting text below as a natural lead-in to additional content.
                </Typography>
                <Button
                  component={NavLink}
                  to="/user/apiGenerator"
                  variant="contained"
                  color="primary"
                >
                  Generate Backend API
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Migrate Data
                </Typography>
                <Typography variant="body2" component="p">
                  With supporting text below as a natural lead-in to additional content.
                </Typography>
                <Button
                  component={NavLink}
                  to="/user/databaseConverter"
                  variant="contained"
                  color="primary"
                >
                  Migrate data
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default UserLanding;
