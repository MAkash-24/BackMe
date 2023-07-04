import React, { useState } from "react";

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

  const [dbConfig, setDbConfig] = useState({
    uri: "",
  });

  const displayModels = () => {
    return models.map(({ name, collectionName, fields }, index) => (
      <ul className="list-group">
        <li className="list-group-item">
          <label>Model Name</label>
          <input
            value={name}
            className="form-control"
            onChange={(e) => updateModelData(index, "name", e.target.value)}
          />
        </li>
        <li className="list-group-item">
          <label>Collection Name</label>
          <input
            value={collectionName}
            className="form-control"
            onChange={(e) =>
              updateModelData(index, "collectionName", e.target.value)
            }
          />
        </li>
      </ul>
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
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    link.style.display = 'none';
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
      body: JSON.stringify({ models, routers : selOperations, dbOptions : dbConfig }),
    })

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    if(data){
      // downloadFile(data.url);   
    }
  };

  const showOperations = () => {
    return dbOperations.map((op) => (
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          checked={selOperations.includes(op)}
          onChange={(e) => {
            if (e.target.checked) {
                setSelOperations([...selOperations, op]);
            } else {
                setSelOperations(selOperations.filter((sop) => sop !== op));
            }
          }}
        />
        <label class="form-check-label" htmlFor="flexCheckDefault">
          {op}
        </label>
      </div>
    ));
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between">
              <h3>Select Models</h3>
              <button className="btn btn-primary" onClick={generateAPI}>
                Generate API
              </button>
            </div>
          </div>
          <div className="card-body">
            {displayModels()}
            <button onClick={addNewModel} className="btn btn-primary">Add New Model</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between">
              <h3>Configure Database Operations</h3>
              <button className="btn btn-primary" onClick={generateAPI}>
                Generate API
              </button>
            </div>
          </div>
          <div className="card-body">
            {showOperations()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIGenerator;
