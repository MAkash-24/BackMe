import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import app_config from "../../config";

const DatabaseConvertor = () => {
  const [dbFirst, setDbFirst] = useState(null);
  const [dbSecond, setDbSecond] = useState(null);

  const { dbOptions } = app_config;

  const [dbOneType, setDbOneType] = useState("sql");
  const [dbTwoType, setDbTwoType] = useState("nosql");

  const [db1ConnStatus, setDb1ConnStatus] = useState(false);
  const [db2ConnStatus, setDb2ConnStatus] = useState(false);

  const initDbs = () => {
    setDbFirst(dbOptions[dbOneType][0]);
    setDbSecond(dbOptions[dbTwoType][0]);
  };

  const dbOneForm = useFormik({
    initialValues: {
      host: "",
      port: "",
      username: "",
      password: "",
      database: "",
      table: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const dbTwoForm = useFormik({
    initialValues: {
      uri: "",
      host: "",
      port: "",
      username: "",
      password: "",
      database: "",
      collectionName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    initDbs();
  }, []);

  const DatabaseConfigOne = () => {
    if (dbFirst !== null) {
      return (
        <div>
          <Typography variant="h5">
            Selected Database: {dbFirst.name}
          </Typography>
          <FormControl component="div">
            <form onSubmit={dbOneForm.handleSubmit}>
              <TextField
                name="host"
                value={dbOneForm.values.host}
                onChange={dbOneForm.handleChange}
                label="Host"
                fullWidth
                margin="normal"
              />
              <TextField
                name="port"
                value={dbOneForm.values.port}
                onChange={dbOneForm.handleChange}
                label="Port"
                fullWidth
                margin="normal"
              />
              <TextField
                name="username"
                value={dbOneForm.values.username}
                onChange={dbOneForm.handleChange}
                label="Username"
                fullWidth
                margin="normal"
              />
              <TextField
                name="password"
                value={dbOneForm.values.password}
                onChange={dbOneForm.handleChange}
                label="Password"
                fullWidth
                margin="normal"
              />
              <TextField
                name="database"
                value={dbOneForm.values.database}
                onChange={dbOneForm.handleChange}
                label="Database"
                fullWidth
                margin="normal"
              />
              <TextField
                name="table"
                value={dbOneForm.values.table}
                onChange={dbOneForm.handleChange}
                label="Table"
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
            <Box mt={2}>
              <Typography variant="h5">
                Connection Status:{" "}
                {db1ConnStatus ? "Connected" : "Not Connected"}
              </Typography>
            </Box>
          </FormControl>
        </div>
      );
    }
  };

  const DatabaseConfigTwo = () => {
    if (dbSecond !== null) {
      return (
        <div>
          <Typography variant="h5">
            Selected Database: {dbSecond.name}
          </Typography>
          <FormControl component="div">
            <form onSubmit={dbTwoForm.handleSubmit}>
              <TextField
                name="uri"
                value={dbTwoForm.values.uri}
                onChange={dbTwoForm.handleChange}
                label="URI"
                fullWidth
                margin="normal"
              />
              <TextField
                name="host"
                value={dbTwoForm.values.host}
                onChange={dbTwoForm.handleChange}
                label="Host"
                fullWidth
                margin="normal"
              />
              <TextField
                name="port"
                value={dbTwoForm.values.port}
                onChange={dbTwoForm.handleChange}
                label="Port"
                fullWidth
                margin="normal"
              />
              <TextField
                name="username"
                value={dbTwoForm.values.username}
                onChange={dbTwoForm.handleChange}
                label="Username"
                fullWidth
                margin="normal"
              />
              <TextField
                name="password"
                value={dbTwoForm.values.password}
                onChange={dbTwoForm.handleChange}
                label="Password"
                fullWidth
                margin="normal"
              />
              <TextField
                name="database"
                value={dbTwoForm.values.database}
                onChange={dbTwoForm.handleChange}
                label="Database"
                fullWidth
                margin="normal"
              />
              <TextField
                name="collectionName"
                value={dbTwoForm.values.collectionName}
                onChange={dbTwoForm.handleChange}
                label="Collection Name"
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
            <Box mt={2}>
              <Typography variant="h5">
                Connection Status:{" "}
                {db2ConnStatus ? "Connected" : "Not Connected"}
              </Typography>
            </Box>
          </FormControl>
        </div>
      );
    }
  };

  const selectDatabaseOne = (e) => {
    let db = dbOptions[dbOneType][parseInt(e.target.value)];
    console.log(db);
    setDbFirst(db);
  };

  const selectDatabaseTwo = (e) => {
    let db = dbOptions[dbTwoType][parseInt(e.target.value)];
    console.log(db);
    setDbSecond(db);
  };

  const startConversion = async () => {
    console.log(dbTwoForm.values);
    const res = await fetch("http://localhost:5000/dbutil/transfer", {
      method: "POST",
      body: JSON.stringify({
        options: {
          from: "MySQL",
          to: "NoSQL",
          type: "SQLtoNoSQL",
        },
        SQLDetails: dbOneForm.values,
        NoSQLDetails: dbTwoForm.values,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
  };

  return (
    <Container>
      <section className="container-fluid my-5 p-5">
        <div className="row">
          <div className="col-md-6">
            <Typography variant="h4">Select First Database</Typography>
            <Box mt={1}>
              <FormControl component="fieldset" sx={{ my: 2 }}>
                <FormLabel component="legend">Database Type</FormLabel>
                <RadioGroup
                  row
                  name="dbtype"
                  value={dbOneType}
                  onChange={(e) => setDbOneType(e.target.value)}
                >
                  <FormControlLabel
                    value="sql"
                    control={<Radio />}
                    label="SQL"
                  />
                  <FormControlLabel
                    value="nosql"
                    control={<Radio />}
                    label="NoSQL"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <FormControl sx={{ my: 2 }}>
              <Select
                value={dbFirst ? dbFirst.name : ""}
                onChange={selectDatabaseOne}
                sx={{ width: "200px" }}
              >
                {dbOptions[dbOneType].map(({ name }, index) => (
                  <MenuItem key={index} value={index}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {dbFirst && <DatabaseConfigOne />}
          </div>
          <div className="col-md-6">
            <Typography variant="h4">Select Second Database</Typography>
            <Box mt={1}>
              <FormControl component="fieldset" sx={{ my: 2 }}>
                <FormLabel component="legend">Database Type</FormLabel>
                <RadioGroup
                  row
                  name="dbtype2"
                  value={dbTwoType}
                  onChange={(e) => setDbTwoType(e.target.value)}
                >
                  <FormControlLabel
                    value="sql"
                    control={<Radio />}
                    label="SQL"
                  />
                  <FormControlLabel
                    value="nosql"
                    control={<Radio />}
                    label="NoSQL"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <FormControl sx={{ my: 2 }}>
              <Select
                value={dbSecond ? dbSecond.name : ""}
                onChange={selectDatabaseTwo}
                sx={{ width: "200px" }}
              >
                {dbOptions[dbTwoType].map((db, index) => (
                  <MenuItem key={index} value={index}>
                    {db.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {dbSecond && <DatabaseConfigTwo />}
          </div>
        </div>
        <Button variant="contained" color="primary" onClick={startConversion}>
          Convert
        </Button>
      </section>
    </Container>
  );
};

export default DatabaseConvertor;
