import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  Input,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

const APIGenerator = () => {
  const [models, setModels] = useState([
    {
      name: "User",
      collectionName: "users",
      fields: [
        {
          name: "name",
          type: "String",
        },
      ],
    },
  ]);

  const displayModels = () => {
    return models.map(({ name, collectionName }, index) => (
      <List key={index} sx={{ mb: 2 }}>
        <ListItem>
          <ListItemText primary="Model Name" />
          <TextField
            value={name}
            className="form-control"
            onChange={(e) => updateModelData(index, "name", e.target.value)}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Collection Name" />
          <TextField
            value={collectionName}
            className="form-control"
            onChange={(e) =>
              updateModelData(index, "collectionName", e.target.value)
            }
          />
        </ListItem>
      </List>
    ));
  };

  const addNewModel = () => {
    setModels([
      ...models,
      {
        name: "Unititled Model",
        collectionName: "unititled",
        fields: [
          {
            name: "field1",
            type: "String",
          },
        ],
      },
    ]);
  };

  const updateModelData = (index, field, value) => {
    let newModels = [...models];
    newModels[index][field] = value;
    setModels(newModels);
  };

  function downloadFile(url) {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const dbOperations = [
    "Add",
    "Update",
    "Delete",
    "Get All",
    "Get By Id",
    "Get By Field",
  ];

  const [selOperations, setSelOperations] = useState([]);

  const generateAPI = async () => {
    console.log(models);
    const res = await fetch("http://localhost:5000/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ models, routers: selOperations }),
    });

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if(data){
      downloadFile(data.url);   
    }
  };

  const showOperations = () => {
    return dbOperations.map((op) => (
      <FormControlLabel
        key={op}
        control={
          <Checkbox
            checked={selOperations.includes(op)}
            onChange={(e) => handleOperationChange(e.target.checked, op)}
          />
        }
        label={op}
      />
    ));
  };

  const handleOperationChange = (checked, operation) => {
    if (checked) {
      setSelOperations((prevOperations) => [...prevOperations, operation]);
    } else {
      setSelOperations((prevOperations) =>
        prevOperations.filter((op) => op !== operation)
      );
    }
  };

  return (
    <Container>
      <Card sx={{ my: 4 }}>
        <CardHeader
          title="Select Models"
        />
        <CardContent>{displayModels()}</CardContent>
        <Button onClick={addNewModel}>Add New Model</Button>
      </Card>
      <Card>
        <CardHeader
          title="Configure Database Operations"
          action={
            <Button variant="contained" onClick={generateAPI}>
              Generate API
            </Button>
          }
        />
        <CardContent>{showOperations()}</CardContent>
      </Card>
    </Container>
  );
};

export default APIGenerator;
