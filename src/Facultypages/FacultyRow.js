import React from "react";
import { Link } from "react-router-dom";

import { Button } from 'react-bootstrap';

function AdminRow(props) {
  
  return props.stateAdmin.map(d => (
    <tr key={d.id}>
      <td>
        <input
          type="checkbox"
          checked={d.select}
          onChange={e => {
            let value = e.target.checked;
            props.setAdminState(
              props.stateAdmin.map(sd => {
                if (sd.id === d.id) {
                  sd.select = value;
                }
                return sd;
              })
            );
          }}
        />
      </td>
      <th scope="row">{d.id}</th>
      <td>{d.username}</td>
      <td>{d.email}</td>
      <td>{d.address}</td>
      <td>{d.mobile}</td>
      
      <td>
        <Link to={`facultyedit/${d.id}`}>
          <button className="btn btn-primary btn-sm" >Edit</button>
        </Link>
      </td>
    </tr>
  ));
}

export default AdminRow;
