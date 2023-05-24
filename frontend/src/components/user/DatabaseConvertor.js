import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { useFormik } from "formik";

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
      uri:"",
      host: "",
      port: "",
      username: "",
      password: "",
      database: "",
      collectionName: ""
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const dbTwoForm = useFormik({
    initialValues: {
      // uri: "",
      host: "",
      port: "",
      username: "",
      password: "",
      database: "",
      table: ""
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });


  useEffect(() => {
    initDbs();
  }, [])


  const DatabaseConfigOne = () => {
    if (dbFirst !== null) {
      return (
        <div>
          <h3>Selected Database : {dbFirst.name}</h3>
          <div className="card">
            <div className="card-body">
              <form onSubmit={dbOneForm.handleSubmit}>
                <input className="form-control mb-3" name="uri" value={dbOneForm.values.uri} onChange={dbOneForm.handleChange} placeholder="uri" />
                <input className="form-control mb-3" name="host" value={dbOneForm.values.host} onChange={dbOneForm.handleChange} placeholder="host" />
                <input className="form-control mb-3" name="port" value={dbOneForm.values.port} onChange={dbOneForm.handleChange} placeholder="port" />
                <input className="form-control mb-3" name="username" value={dbOneForm.values.username} onChange={dbOneForm.handleChange} placeholder="username" />
                <input className="form-control mb-3" name="password" value={dbOneForm.values.password} onChange={dbOneForm.handleChange} placeholder="password" />
                <input className="form-control mb-3" name="database" value={dbOneForm.values.database} onChange={dbOneForm.handleChange} placeholder="database" />
                <input className="form-control mb-3" name="collectionName" value={dbOneForm.values.collectionName} onChange={dbOneForm.handleChange} placeholder="table" />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              <div>
                <p className="h4">Connection Status : {db1ConnStatus ? 'Connected' : 'Not Connected'}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const DatabaseConfigTwo = () => {
    if (dbSecond !== null) {
      return (
        <div>
          <h3>Selected Database : {dbSecond.name}</h3>
          <div className="card">
            <div className="card-body">
              <form onSubmit={dbTwoForm.handleSubmit}>
                {/* <input className="form-control mb-3" name="uri" value={dbTwoForm.values.uri} onChange={dbTwoForm.handleChange} placeholder="uri" /> */}
                <input className="form-control mb-3" name="host" value={dbTwoForm.values.host} onChange={dbTwoForm.handleChange} placeholder="host" />
                <input className="form-control mb-3" name="port" value={dbTwoForm.values.port} onChange={dbTwoForm.handleChange} placeholder="port" />
                <input className="form-control mb-3" name="username" value={dbTwoForm.values.username} onChange={dbTwoForm.handleChange} placeholder="username" />
                <input className="form-control mb-3" name="password" value={dbTwoForm.values.password} onChange={dbTwoForm.handleChange} placeholder="password" />
                <input className="form-control mb-3" name="database" value={dbTwoForm.values.database} onChange={dbTwoForm.handleChange} placeholder="database" />
                <input className="form-control mb-3" name="table" value={dbTwoForm.values.table} onChange={dbTwoForm.handleChange} placeholder="table" />
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="h4">Connection Status : {db2ConnStatus ? 'Connected' : 'Not Connected'}</p>
              </form>
            </div>
          </div>
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

  const startConvertion = async () => {
    console.log(dbTwoForm.values);
    const res = await fetch('http://localhost:5000/dbutil/transfer', {
      method: 'POST',
      body: JSON.stringify({
        options: {
          from: 'NoSQL',
          to: 'MySQL',
          type: 'NoSQLtoSQL'
        },
        NoSQLDetails: dbOneForm.values,
        SQLDetails: dbTwoForm.values
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    console.log(res.status);
  }

  return (
    <div>
      <section className="container-fluid my-5 p-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Select First Database</h2>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="dbtype"
                id="sql"
                checked={dbOneType === "sql"}
                onChange={(e) => setDbOneType("sql")}
              />
              <label className="form-check-label" htmlFor="sql">
                SQL
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="dbtype"
                id="nosql"
                checked={dbOneType === "nosql"}
                onChange={(e) => setDbOneType("nosql")}
              />
              <label className="form-check-label" htmlFor="nosql">
                NoSQL
              </label>
            </div>

            <hr />
            <select className="form-control" onChange={selectDatabaseOne}>
              {dbOptions[dbOneType].map(({ name }, index) => (
                <option key={index} value={index}>
                  {name}
                </option>
              ))}
            </select>
            <hr />

            {
              DatabaseConfigOne()
            }
          </div>
          <div className="col-md-6">
            <h2>Select Second Database</h2>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="dbtype2"
                id="sql2"
                checked={dbTwoType === "sql"}
                onChange={(e) => setDbTwoType("sql")}
              />
              <label className="form-check-label" htmlFor="sql">
                SQL
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="dbtype2"
                id="nosql2"
                checked={dbTwoType === "nosql"}
                onChange={(e) => setDbTwoType("nosql")}
              />
              <label className="form-check-label" htmlFor="nosql">
                NoSQL
              </label>
            </div>

            <hr />
            <select className="form-control" onChange={selectDatabaseTwo}>
              {dbOptions[dbTwoType].map((db, index) => (
                <option key={index} value={index}>
                  {db.name}
                </option>
              ))}
            </select>

            <hr />
            {DatabaseConfigTwo()}
          </div>
        </div>

        <button className="btn btn-primary" onClick={startConvertion}>Convert</button>
      </section>
    </div>
  );
};

export default DatabaseConvertor;
