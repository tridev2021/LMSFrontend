
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminRow from "./AdminRow";
import { Link } from "react-router-dom";

function Studentgetdelete() {
  const [stateAdmin, setAdminState] = useState([]);

  useEffect(() => {
    getAdmin();
  }, []);

  const getAdmin = () => {
    axios
    .get("http://localhost:8084/api/student/getAllStudent")
      .then(data => {
        let admin = data.data;
        setAdminState(
          admin.map(d => {
            return {
              select: false,
              id: d.sid,
              username: d.username,
              email: d.email,
              mobileno: d.mobileno,
              address: d.address,
              dateofbirth: d.dateofbirth,
            };
          })
        );
      })
      .catch(err => alert(err));
  };

  const deleteAdminByIds = () => {
    let arrayids = [];
    stateAdmin.forEach(d => {
      if (d.select) {
        arrayids.push(d.id);
      }
    });
    console.log(arrayids);
    axios
      .delete(`http://localhost:8084/api/student/delete/${arrayids}`)
      
      .then(data => {
        console.log(data);
        getAdmin();
      })
      .catch(err => alert(err));
  };

  return (
    <div>
      <Link to="/add">
        <button className="btn btn-primary btn-sm m-2">Add Student</button>
      </Link>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          deleteAdminByIds();
        }}
      >
        Delete Admin
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;
                  setAdminState(
                    stateAdmin.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th>
            <th scope="col">id</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Mobileno</th>
            <th scope="col">Address</th>
            <th scope="col">DateOfBirth</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <AdminRow
            stateAdmin={stateAdmin}
            setAdminState={setAdminState}
          />
        </tbody>
      </table>
    </div>
  );
}

export default Studentgetdelete;

