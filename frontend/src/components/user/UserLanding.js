import React from 'react'
import { NavLink } from 'react-router-dom'


const UserLanding = () => {
  return (
      <div>
        <div className='container-fluid my-5 py-5'>
    <div className='card shadow-lg'>
        <h5 className='card-title display-2 p-5'>BackMD </h5>
<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title display-4">Get API </h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <NavLink className="nav-link btn btn-primary text-light" to="/user/databaseConverter">
                  Migrate data
        </NavLink>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title display-4">Migrate Data </h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <NavLink className="nav-link btn btn-primary text-light" to="/user/databaseConverter">
                  Migrate data
        </NavLink>
      </div>
    </div>
  </div>
  </div>
</div>

</div>

    </div>
  )
}

export default UserLanding