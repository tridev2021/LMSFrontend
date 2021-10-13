import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Admingetdelete from "./Facultygetdelete";
import { useHistory } from "react-router";

export default function EditFaculty(props) {
 
  const [stateAdm, setstateAdm] = useState({});
  useEffect(() => {
    let id = props.match.params.id;
    getAdminById(id);
  }, []);
  const getAdminById = id => {
    axios
      .get(`http://localhost:8084/api/faculty/get/${id}`)
      .then(d => {
        let admin = d.data;
        setstateAdm({
          id: admin.fid,
          username: admin.username,
          email: admin.email,
          address: admin.address,
          mobile: admin.mobile
        });
        // console.log("FDATA", stateAdm);

      })
      .catch(err => alert(err));
  };
  const [user_data, setUserData] = useState([]);
  const putadmin = e => {
    console.log(stateAdm);
    axios
      .put(`http://localhost:8084/api/faculty/update/${stateAdm.id}`,stateAdm)
      .then(d => {
        setUserData(d);
        console.log("USER DATA", user_data);
        props.history.push("/getdelete");
      })
      .catch(err => alert(err));
  };

  return (
    <div className="container my-3">
      <form
        onSubmit={e => {
          e.preventDefault();
          putadmin(e);
        }}
      >
        <div className="form-group">
          <label>UserName</label>
          <input
            type="text"
            value={stateAdm.username}
            onChange={e => {
              let value = e.target.value;
              setstateAdm({
                username: value,
                id: stateAdm.fid,
                email: stateAdm.email,
                address: stateAdm.address,
                mobile: stateAdm.mobile
              });
            }}
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            value={stateAdm.email}
            onChange={e => {
              let value = e.target.value;
              setstateAdm({
                email: value,
              
                id: stateAdm.id,
                email: stateAdm.email,
                address: stateAdm.address,
                mobile: stateAdm.mobile
                
              });
            }}
            type="text"
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={stateAdm.address}
            onChange={e => {
              let value = e.target.value;
              setstateAdm({
                address: value,
                
                id: stateAdm.id,
                email: stateAdm.email,
                address: stateAdm.address,
                mobile: stateAdm.mobile
              });
            }}
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            value={stateAdm.mobile}
            onChange={e => {
              let value = e.target.value;
              setstateAdm({
                mobile: value,
                
                id: stateAdm.id,
                email: stateAdm.email,
                address: stateAdm.address,
                mobile: stateAdm.mobile
              });
            }}
            className="form-control form-control-sm"
          />
        </div>
       
        {/* <Link to={'getdelete'}> */}
        <button type="submit" className="btn btn-primary btn-sm" >
          Submit
        </button>
        {/* </Link > */}
      </form>
    </div>
  );
}

// export default withRouter(EditAdmin);
