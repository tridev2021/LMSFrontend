import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Admingetdelete from "./Admingetdelete";
import { useHistory } from "react-router";

export default function EditAdmin(props) {
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
      .get(`http://localhost:8084/api/admin/${id}`)
      .then(d => {
        let admin = d.data;
        console.log(d);
        setstateAdm({
          id: admin.id,
          username: admin.username,
          email: admin.email
        });
      })
      .catch(err => alert(err));
  };
  const [user_data, setUserData] = useState([]);
  const putadmin = e => {
    console.log(stateAdm);
    axios
      .put(`http://localhost:8084/api/edit/${stateAdm.id}`,stateAdm)
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
                id: stateAdm.id,
                email: stateAdm.email
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
                username: stateAdm.username,
                id: stateAdm.id,
                
              });
            }}
            type="text"
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
