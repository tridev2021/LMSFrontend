import React, { useState, useEffect } from "react";
import axios from "axios";
import FacultyRow from "./FacultyRow";
import Sidebar from "../components/Sidebar";

function Courseget() {
  const [stateAdmin, setAdminState] = useState([]);

  useEffect(() => {
    getAdmin();
  }, []);

  const getAdmin = () => {
    axios.get("http://localhost:8084/api/course")
      .then(data => {
        let admin = data.data;
        console.log(admin.coursename);
        setAdminState(
          admin.map(d => {
            return {
              select: false,
              id: d.cid,
              courseName: d.coursename,
              duration: d.duration,
              price: d.price,
            };
          })
        );
      })
      .catch(err => alert(err));
  };

  return (
    <div>
      <Sidebar/>
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
            <th scope="col">CourseName</th>
            <th scope="col">Duration</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <FacultyRow
            stateAdmin={stateAdmin}
            setAdminState={setAdminState}
          />
        </tbody>
      </table>
    </div>
  );
}

export default Courseget;
