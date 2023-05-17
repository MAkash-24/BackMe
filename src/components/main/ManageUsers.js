import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const ManageUsers = () => {
    
    const [userlist, setUserlist] = useState([]);

    const fetchUserData = async () => {
      const res = await fetch('http://localhost:5000/user/getall');
        
      console.log(res.status);

      const data = await res.json();
      console.log(data);
      setUserlist(data);
    }

    

    useEffect(() => {
        fetchUserData();
    }, [])


    


  return (
    <div>
        <p className="display-4 text-center">Manage User data</p>
        <hr />

        <table className='table'>
            <thead>
                <tr>
                    <th>Id </th>
                    <th>Name  </th>
                    <th>Email </th>
                    <th>password </th>
                </tr>
            </thead>
            <tbody>
                {
                    userlist.map( (user) => ( 
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <button className='btn btn-danger'>DELETE</button>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </div>
  )
            }

export default ManageUsers