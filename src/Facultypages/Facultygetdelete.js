import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminRow from "./FacultyRow";
import { Link } from "react-router-dom";

function Facultygetdelete() {
  const [stateAdmin, setAdminState] = useState([]);

  useEffect(() => {
    getAdmin();
  }, []);

  const getAdmin = () => {
    axios
      .get("http://localhost:8084/api/faculty")
      .then(data => {
        let admin = data.data;
        setAdminState(
          admin.map(d => {
            return {
              select: false,
              id: d.fid,
              username: d.username,
              email: d.email,
              address: d.address,
              mobile: d.mobile,
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
      .delete(`http://localhost:8084/api/admin/${arrayids}`)
      
      .then(data => {
        console.log(data);
        getAdmin();
      })
      .catch(err => alert(err));
  };

  return (
    <div>
      <Link to="/add">
        <button className="btn btn-primary btn-sm m-2">Admin Registration</button>
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
            <th scope="col">Address</th>
            <th scope="col">Mobile</th>
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

export default Facultygetdelete;
