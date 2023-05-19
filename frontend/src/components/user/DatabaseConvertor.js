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
      host: "",
      port: "",
      username: "",
      password: "",
      database: "",
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const dbTwoForm = useFormik({
    initialValues: {
      host: "",
      port: "",
      username: "",
      password: "",
      database: "",
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
                <input className="form-control mb-3" name="host" value={dbOneForm.values.host} onChange={dbOneForm.handleChange} placeholder="host" />
                <input className="form-control mb-3" name="port" value={dbOneForm.values.port} onChange={dbOneForm.handleChange} placeholder="port" />
                <input className="form-control mb-3" name="username" value={dbOneForm.values.username} onChange={dbOneForm.handleChange} placeholder="username" />
                <input className="form-control mb-3" name="password" value={dbOneForm.values.password} onChange={dbOneForm.handleChange} placeholder="password" />
                <input className="form-control mb-3" name="database" value={dbOneForm.values.database} onChange={dbOneForm.handleChange} placeholder="database" />
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
                <input className="form-control mb-3" name="host" value={dbTwoForm.values.host} onChange={dbTwoForm.handleChange} placeholder="host" />
                <input className="form-control mb-3" name="port" value={dbTwoForm.values.port} onChange={dbTwoForm.handleChange} placeholder="port" />
                <input className="form-control mb-3" name="username" value={dbTwoForm.values.username} onChange={dbTwoForm.handleChange} placeholder="username" />
                <input className="form-control mb-3" name="password" value={dbTwoForm.values.password} onChange={dbTwoForm.handleChange} placeholder="password" />
                <input className="form-control mb-3" name="database" value={dbTwoForm.values.database} onChange={dbTwoForm.handleChange} placeholder="database" />
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

  return (
    <div>
      <section className="container">
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
              {dbOptions[dbOneType].map(({name}, index) => (
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
      </section>
    </div>
  );
};

export default DatabaseConvertor;
