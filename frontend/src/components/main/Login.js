import React from "react";
import { useFormik } from "formik";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/lab";

const Login = () => {
  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch("http://localhost:5000/user/authenticate", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);

      if (res.status === 200) {
        const data = await res.json();
        sessionStorage.setItem("user", JSON.stringify(data));

        navigate("/user/userLanding");
      } else if (res.status === 401) {
        // Show error message
      }
    },
  });

  return (
    <div className="homeBack">
      <Container maxWidth="sm" py={5}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <Box className="card bg-dark text-white" mt={4} style={{ borderRadius: "1rem", minWidth:"400px" }}>
              <div className="card-body p-5 text-center">
                <form onSubmit={loginForm.handleSubmit}>
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <Typography variant="h4" className="fw-bold mb-2 text-uppercase">
                      Login
                    </Typography>
                    <Typography variant="body1" className="text-white-50 mb-5">
                      Please enter your login and password!
                    </Typography>
                    <div className="form-white mb-4">
                      <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        size="large"
                        value={loginForm.values.email}
                        onChange={loginForm.handleChange}
                      />
                    </div>
                    <div className="form-white mb-4">
                      <TextField
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        size="large"
                        value={loginForm.values.password}
                        onChange={loginForm.handleChange}
                      />
                    </div>
                    <Typography variant="body2" className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="large"
                      fullWidth
                      type="submit"
                    >
                      Login
                    </Button>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg" />
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2" />
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <Typography variant="body2" className="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </Typography>
                  </div>
                </form>
              </div>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
