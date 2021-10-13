import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Admingetdelete from "./Studentgetdelete";
import { useHistory } from "react-router";

export default function EditStudent(props) {
  // const history=useHistory();
  // const handleClick =()=> {
   
  //   history.push("/")
    
  //       };
  const [stateAdm, setstateAdm] = useState({});
  useEffect(() => {
    let id = props.match.params.id;
    getAdminById(id);
  }, []);
  const getAdminById = id => {
    axios
      .get(`http://localhost:8084/api/student/fetchingStudentby/${id}`)
      .then(d => {
        let admin = d.data;
        console.log(d);
        setstateAdm({
          id: admin.sid,
          username: admin.username,
          email: admin.email,
          address: admin.address,
          mobileno: admin.mobileno,
          dateofbirth: admin.dateofbirth,
        });
      })
      .catch(err => alert(err));
  };
  const [user_data, setUserData] = useState([]);
  const putadmin = e => {
    console.log(stateAdm);
    axios
      .put(`http://localhost:8084/api/student/updatingStudent/${stateAdm.id}`,stateAdm)
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
                id: stateAdm.sid,
                email: stateAdm.email,
                address: stateAdm.address,
                mobileno: stateAdm.mobileno,
                dataofbirth: stateAdm.dataofbirth,

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
                id: stateAdm.sid,
                username: stateAdm.username,
                address: stateAdm.address,
                mobileno: stateAdm.mobileno,
                dataofbirth: stateAdm.dataofbirth,
                
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
                id: stateAdm.sid,
                email: stateAdm.email,
                username: stateAdm.username,
                mobileno: stateAdm.mobileno,
                dataofbirth: stateAdm.dataofbirth,
              });
            }}
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label>Mobileno</label>
          <input
            type="text"
            value={stateAdm.mobileno}
            onChange={e => {
              let value = e.target.value;
              setstateAdm({
                mobileno: value,
                id: stateAdm.id,
                email: stateAdm.email,
                address: stateAdm.address,
                username: stateAdm.username,
                dataofbirth: stateAdm.dataofbirth,
              });
            }}
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label>DateOfBirth</label>
          <input
            type="text"
            value={stateAdm.dataofbirth}
            onChange={e => {
              let value = e.target.value;
              setstateAdm({
                dateofbirth: value,
                id: stateAdm.id,
                email: stateAdm.email,
                address: stateAdm.address,
                mobileno: stateAdm.mobileno,
                username: stateAdm.username,
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
